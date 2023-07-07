import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckCircleOutline,
  Visibility,
  VisibilityOff
} from '@mui/icons-material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab';
import {
  Alert,
  Avatar,
  Box,
  Container,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SignUpErrors } from 'src/infrastructure/common/constants/singup-errors.constant';
import { useResetPasswordAdapter } from 'src/main/adapters/auth/reset-password.adapter';
import { useSignInAdapter } from 'src/main/adapters/auth/signin.adapter';
import { Copyright } from 'src/presentation/components/copyrigth';
import { z } from 'zod';

interface ResetPasswordPageProps {
  email: string;
  token: string;
}

const resetPasswordFormSchema = z.object({
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

type ResetPasswordFormData = z.infer<typeof resetPasswordFormSchema>;

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

export default function ResetPasswordPage({
  email,
  token
}: ResetPasswordPageProps) {
  const [showMessage, setShowMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [pass, setPass] = useState('');

  const { resetPassword, resetPasswordError, resetPasswordLoading } =
    useResetPasswordAdapter();
  const { signin, signinLoading } = useSignInAdapter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordFormSchema)
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const watchedPassword = watch('password', '');
  const isCriterionMet = (criterion: RegExp) => {
    return criterion.test(watchedPassword);
  };

  const handleResetPassword = async ({ password }: ResetPasswordFormData) => {
    await resetPassword(
      {
        password,
        email,
        token
      },
      {
        onSuccess: async () => {
          setPass(password);
          setShowMessage(true);
          reset();
        }
      }
    );
  };

  const handleSignIn = async () => {
    const decodeEmail = decodeURIComponent(email);
    await signin(
      {
        email: decodeEmail,
        password: pass
      },
      {
        onSuccess: () => {
          window.location.href = '/home';
        }
      }
    );
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
        {!showMessage && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '3rem 1rem',
              width: '100%'
            }}
          >
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Digite sua nova senha
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(handleResetPassword)}
              noValidate
              sx={{ mt: 2, width: '100%' }}
            >
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
                <Typography
                  sx={{ fontSize: '0.875rem' }}
                  color="text.secondary"
                >
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
              {resetPasswordError && (
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
                  {resetPasswordError}
                </Alert>
              )}
              <LoadingButton
                loading={resetPasswordLoading || signinLoading}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
                size="large"
              >
                Redefinir senha
              </LoadingButton>
            </Box>
          </Box>
        )}

        {showMessage && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '3rem 1rem'
            }}
          >
            <Typography component="h1" variant="h5">
              Parabéns! Sua senha foi alterada com sucesso!
            </Typography>
            <LoadingButton
              loading={resetPasswordLoading || signinLoading}
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              size="large"
              onClick={handleSignIn}
            >
              Continuar para o dashboard
            </LoadingButton>
          </Box>
        )}
      </Container>
      <Copyright />
    </Box>
  );
}
