import { zodResolver } from '@hookform/resolvers/zod';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Alert,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { SignInErrors } from 'src/infrastructure/common/constants/singin-errors.constant';
import { useSignInAdapter } from 'src/main/adapters/auth/signin.adapter';
import { Copyright } from 'src/presentation/components/copyrigth';
import { z } from 'zod';

const signInFormSchema = z.object({
  email: z
    .string()
    .nonempty(SignInErrors.EMAIL_REQUIRED)
    .email(SignInErrors.EMAIL_INVALID)
    .toLowerCase(),
  password: z
    .string()
    .nonempty(SignInErrors.PASSWORD_REQUIRED)
    .min(8, SignInErrors.PASSWORD_MIN)
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { signin, mutateError } = useSignInAdapter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema)
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async ({ email, password }: any) => {
    await signin(
      {
        email,
        password
      },
      {
        onSuccess: () => {
          window.location.href = '/home';
        }
      }
    );
  };

  const handleNavigateToForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleNavigateToSignUp = () => {
    navigate('/sign-up');
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(handleSignIn)}
            noValidate
            sx={{ mt: 2 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="E-mail"
              autoComplete="email"
              autoFocus
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
            {mutateError && (
              <Alert
                sx={{ mt: 2, display: 'flex', alignItems: 'center' }}
                severity="error"
              >
                {mutateError}
              </Alert>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              size="large"
            >
              Entrar
            </Button>
          </Box>
          <Link
            variant="body2"
            sx={{ textDecoration: 'none', cursor: 'pointer' }}
            onClick={handleNavigateToForgotPassword}
          >
            Esqueceu sua senha?
          </Link>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: '2rem' }}>
          Não possui uma conta?
          <Link
            variant="body2"
            sx={{
              textDecoration: 'none',
              ml: 1,
              fontWeight: '500',
              cursor: 'pointer'
            }}
            onClick={handleNavigateToSignUp}
          >
            Cadastrar-se
          </Link>
        </Typography>
      </Container>
      <Copyright />
    </Box>
  );
}
