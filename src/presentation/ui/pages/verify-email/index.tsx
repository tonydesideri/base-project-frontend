import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab';
import {
  Avatar,
  Box,
  Container,
  LinearProgress,
  Typography
} from '@mui/material';
import { TIsAuthenticatedUseCase } from 'src/domain/usecases/auth/isAuthenticated.interface';
import { useResendConfirmationEmailAdapter } from 'src/main/adapters/user/resend-confirmation-email.adapter';

interface VerifyEmailPageProps {
  user?: TIsAuthenticatedUseCase.Model;
}

export default function VerifyEmailPage({ user }: VerifyEmailPageProps) {
  const { resendConfirmationEmail, resendConfirmationEmailLoading } =
    useResendConfirmationEmailAdapter();

  const handleResendConfirmationEmail = async () => {
    if (user) {
      await resendConfirmationEmail({
        email: user.email
      });
    }

    console.log('Erro ao reenviar e-mail');
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
        maxWidth="sm"
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
            alignItems: 'center ',
            textAlign: 'center',
            padding: '3rem 1rem',
            gap: '0.725rem'
          }}
        >
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" fontWeight={500}>
            Verifique seu e-mail
          </Typography>
          <Typography
            variant="body1"
            component="div"
            display="inline-block"
            sx={{ mt: 3 }}
          >
            Para desfrutar de todos os recursos que oferecemos, por favor,
            verifique sua conta através do e-mail{' '}
            <Typography
              variant="body1"
              component="div"
              fontWeight={500}
              display="inline-block"
            >
              {user?.email}
            </Typography>
            . Obrigado pela confiança!
          </Typography>
          <LoadingButton
            type="button"
            variant="outlined"
            sx={{ mt: 3 }}
            loading={resendConfirmationEmailLoading}
            onClick={handleResendConfirmationEmail}
          >
            Reenviar e-mail
          </LoadingButton>
          <Typography
            variant="body2"
            component="div"
            color="text.secondary"
            display="inline-block"
            sx={{ mt: 1 }}
          >
            Precisa de ajuda?{' '}
            <Typography
              variant="body2"
              component="div"
              color="primary.main"
              fontWeight={500}
              display="inline-block"
            >
              Acesse o suporte
            </Typography>{' '}
            ou{' '}
            <Typography
              variant="body2"
              component="div"
              color="primary.main"
              fontWeight={500}
              display="inline-block"
            >
              fale conosco.
            </Typography>
          </Typography>
          {resendConfirmationEmailLoading && (
            <LinearProgress sx={{ width: '100%', mt: 3 }} />
          )}
        </Box>
      </Container>
    </Box>
  );
}
