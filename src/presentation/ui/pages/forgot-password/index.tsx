import { zodResolver } from '@hookform/resolvers/zod';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab';
import {
  Alert,
  Avatar,
  Box,
  Container,
  LinearProgress,
  Link,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ForgotPasswordErrors } from 'src/infrastructure/common/constants/forgot-password-errors.constant';
import { useForgotPasswordAdapter } from 'src/main/adapters/auth/forgot-password.adapter';
import { Copyright } from 'src/presentation/components/copyrigth';
import { z } from 'zod';

const forgotPasswordFormSchema = z.object({
  email: z
    .string()
    .nonempty(ForgotPasswordErrors.EMAIL_REQUIRED)
    .email(ForgotPasswordErrors.EMAIL_INVALID)
    .toLowerCase()
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordFormSchema>;

export default function ForgotPasswordPage() {
  const [showMessage, setShowMessage] = useState(false);
  const [resendEmail, setResendEmail] = useState('');

  const { forgotPassword, forgotPasswordError, forgotPasswordLoading } =
    useForgotPasswordAdapter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordFormSchema)
  });

  const handleForgotPassword = async ({ email }: ForgotPasswordFormData) => {
    await forgotPassword(
      {
        email
      },
      {
        onSuccess: () => {
          setShowMessage(true);
          reset();
        }
      }
    );

    if (resendEmail === '') {
      setResendEmail(email);
    }
  };

  const handleCloseMessageSuccess = () => {
    setShowMessage(false);
  };

  const handleResendEmail = async () => {
    await handleForgotPassword({ email: resendEmail });
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
          <>
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
                Redefinição de senha
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit(handleForgotPassword)}
                noValidate
                sx={{ mt: 2 }}
              >
                <Typography component="p" variant="body2" sx={{ mb: 2 }}>
                  Informe o e-mail associado à sua conta para receber um link de
                  redefinição de senha.
                </Typography>
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
                {forgotPasswordError && (
                  <Alert
                    sx={{ mt: 2, display: 'flex', alignItems: 'center' }}
                    severity="error"
                  >
                    {forgotPasswordError}
                  </Alert>
                )}
                <LoadingButton
                  loading={forgotPasswordLoading}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  size="large"
                >
                  Continuar
                </LoadingButton>
              </Box>
              <Link href="/" variant="body2" sx={{ textDecoration: 'none' }}>
                Voltar ao início
              </Link>
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: '2rem' }}
            >
              Não possui uma conta?
              <Link
                href="/sign-up"
                variant="body2"
                sx={{
                  textDecoration: 'none',
                  ml: 1,
                  fontWeight: '500'
                }}
              >
                Cadastrar-se
              </Link>
            </Typography>
          </>
        )}

        {showMessage && (
          <Box
            maxWidth="xs"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '3rem 1rem',
              textAlign: 'center'
            }}
          >
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ mt: 3, mb: 2 }}>
              Se o endereço inserido corresponder ao que temos registrado, você
              receberá um e-mail com as instruções de redefinição da senha.
            </Typography>

            <Typography
              variant="body2"
              component="div"
              color="text.secondary"
              display="inline-block"
              sx={{ mt: 1 }}
            >
              Se não tiver recebido um e-mail em 5 minutos, verifique a pasta de
              spam,{' '}
              <Typography
                variant="body2"
                component="div"
                color="primary.main"
                fontWeight={500}
                display="inline-block"
                sx={{ cursor: 'pointer ' }}
                onClick={handleResendEmail}
              >
                solicite o reenvio da mensagem
              </Typography>{' '}
              ou{' '}
              <Typography
                variant="body2"
                component="div"
                color="primary.main"
                fontWeight={500}
                display="inline-block"
                sx={{ cursor: 'pointer' }}
                onClick={handleCloseMessageSuccess}
              >
                tente usar outro e-mail.
              </Typography>
            </Typography>
            {forgotPasswordLoading && (
              <LinearProgress sx={{ width: '100%', mt: 3 }} />
            )}
          </Box>
        )}
      </Container>
      <Copyright />
    </Box>
  );
}
