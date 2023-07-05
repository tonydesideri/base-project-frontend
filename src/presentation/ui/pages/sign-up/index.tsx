import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckCircleOutline,
  Visibility,
  VisibilityOff
} from '@mui/icons-material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Alert,
  Avatar,
  Box,
  Container,
  IconButton,
  InputAdornment,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { SignUpErrors } from 'src/infrastructure/common/constants/singup-errors.constant';
import { useSignInAdapter } from 'src/main/adapters/auth/signin.adapter';
import { useSignUpAdapter } from 'src/main/adapters/auth/signup.adapter';
import { Copyright } from 'src/presentation/components/copyrigth';
import { z } from 'zod';

const signUpFormSchema = z.object({
  name: z
    .string()
    .nonempty(SignUpErrors.NAME_REQUIRED)
    .transform((name) => {
      const words = name.split(' ');
      const capitalizedWords = words.map(
        (word: string) => word.charAt(0).toUpperCase() + word.slice(1)
      );
      return capitalizedWords.join(' ');
    }),
  email: z
    .string()
    .nonempty(SignUpErrors.EMAIL_REQUIRED)
    .email(SignUpErrors.EMAIL_INVALID)
    .toLowerCase(),
  password: z
    .string()
    .nonempty(SignUpErrors.PASSWORD_REQUIRED)
    .min(8, SignUpErrors.PASSWORD_MIN)
    .min(1, SignUpErrors.PASSWORD_MIN_LOWERCASE)
    .min(1, SignUpErrors.PASSWORD_MIN_NUMBER)
    .min(1, SignUpErrors.PASSWORD_MIN_SYMBOL)
    .min(1, SignUpErrors.PASSWORD_MIN_UPPERCASE)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      SignUpErrors.PASSWORD_NOT_SECURITY_CRITERIA
    )
});

type SignUpFormData = z.infer<typeof signUpFormSchema>;

const passwordRequirements = [
  {
    text: 'Pelo menos 1 letra minúscula',
    regexp: /[a-z]/
  },
  {
    text: 'Pelo menos 1 letra maiúscula',
    regexp: /[A-Z]/
  },
  {
    text: 'Pelo menos 1 número',
    regexp: /\d/
  },
  {
    text: 'Pelo menos 1 caractere especial',
    regexp: /[@$!%*?&]/
  }
];

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { signup, signupError, signupLoading } = useSignUpAdapter();
  const { signin, signinSuccess } = useSignInAdapter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema)
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async ({ name, email, password }: any) => {
    await signup(
      {
        name,
        email,
        password
      },
      {
        onSuccess: async () => {
          await signin(
            {
              email,
              password
            },
            {
              onSuccess: () => {
                window.location.href = '/verify-email';
              }
            }
          );
        }
      }
    );
  };

  const watchedPassword = watch('password', '');
  const isCriterionMet = (criterion: RegExp) => {
    return criterion.test(watchedPassword);
  };

  const handleNavigateToSignIn = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          bgcolor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '4px',
          boxShadow: '0 1px 4px rgba(0,0,0,.1), 0 2px 4px rgba(0,0,0,.04)',
          mb: '2rem'
        }}
      >
        <Box
          maxWidth="xs"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '3rem 1rem'
          }}
        >
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(handleSignUp)}
            noValidate
            sx={{ mt: 2 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Nome"
              autoComplete="name"
              autoFocus
              {...register('name')}
              helperText={errors.name ? errors.name.message : null}
              error={!!errors.name}
            />
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="E-mail"
              autoComplete="email"
              {...register('email')}
              helperText={errors.email ? errors.email.message : null}
              error={!!errors.email}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Senha"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePasswordVisibility}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              {...register('password')}
              helperText={errors.password ? errors.password.message : null}
              error={!!errors.password}
            />
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontSize: '0.875rem' }} color="text.secondary">
                Requisitos da senha:
              </Typography>
              <List>
                {passwordRequirements.map((item) => (
                  <ListItem
                    key={item.text}
                    sx={{ margin: '0 0 0 15px', padding: 0 }}
                  >
                    <ListItemIcon>
                      <CheckCircleOutline
                        fontSize="small"
                        sx={{
                          color: (theme) =>
                            isCriterionMet(item.regexp)
                              ? theme.palette.success.main
                              : theme.palette.text.secondary
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        margin: 0,
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: (theme) =>
                          isCriterionMet(item.regexp)
                            ? theme.palette.success.main
                            : theme.palette.text.secondary
                      }}
                      disableTypography
                      secondary={item.text}
                    />
                  </ListItem>
                ))}
                <ListItem sx={{ margin: '0 0 0 15px', padding: 0 }}>
                  <ListItemIcon>
                    <CheckCircleOutline
                      fontSize="small"
                      sx={{
                        color: (theme) =>
                          watchedPassword.length >= 8
                            ? theme.palette.success.main
                            : theme.palette.text.secondary
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      margin: 0,
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: (theme) =>
                        watchedPassword.length >= 8
                          ? theme.palette.success.main
                          : theme.palette.text.secondary
                    }}
                    disableTypography
                    secondary="Pelo menos 8 caracteres"
                  />
                </ListItem>
              </List>
            </Box>
            {signupError && (
              <Alert
                sx={{
                  mt: 1,
                  display: 'flex',
                  alignItems: 'center',
                  textJustify: 'inter-word',
                  textAlign: 'justify'
                }}
                severity="error"
              >
                {signupError}
              </Alert>
            )}
            <LoadingButton
              loading={signupLoading || signinSuccess}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              size="large"
            >
              Cadastrar-se
            </LoadingButton>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: '2rem' }}>
          Já possui uma conta?
          <Link
            variant="body2"
            sx={{
              textDecoration: 'none',
              ml: 1,
              fontWeight: '500',
              cursor: 'pointer'
            }}
            onClick={handleNavigateToSignIn}
          >
            Entrar
          </Link>
        </Typography>
      </Container>
      <Copyright />
    </Box>
  );
}
