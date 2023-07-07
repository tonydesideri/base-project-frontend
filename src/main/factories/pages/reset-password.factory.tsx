import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Avatar, Box, Container, Link, Typography } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { usePreloadResetPasswordAdapter } from 'src/main/adapters/auth/preload-reset-password.adapter';
import { Copyright } from 'src/presentation/components/copyrigth';
import SplashScreen from 'src/presentation/components/splash-screen';
import ResetPasswordPage from 'src/presentation/ui/pages/reset-password';

export default function ResetPasswordPageFectory() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const token = searchParams.get('token');

  if (!email || !token) {
    // TODO: Criar componente de página não encontrada
    return <h1>Página não encontrada</h1>;
  }

  return <ResetPasswordContent email={email} token={token} />;
}

function ResetPasswordContent({ email, token }: any) {
  const navigate = useNavigate();

  const { preloadResetPasswordSuccess, preloadResetPasswordLoading } =
    usePreloadResetPasswordAdapter({
      email,
      token
    });

  if (preloadResetPasswordLoading) {
    return <SplashScreen />;
  }

  if (preloadResetPasswordSuccess && !preloadResetPasswordLoading) {
    return <ResetPasswordPage email={email} token={token} />;
  }

  const handleNavigateToForgotPassword = () => {
    navigate('/forgot-password', {
      replace: true
    });
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
            padding: '3rem 1rem',
            gap: 3
          }}
        >
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <WarningAmberIcon fontSize="large" color="primary" />
          <Typography component="h1" variant="h6">
            O link de redefinição de senha expirou.
          </Typography>
          <Link
            variant="body2"
            sx={{ textDecoration: 'none', cursor: 'pointer' }}
            onClick={handleNavigateToForgotPassword}
          >
            Tente redefinir sua senha novamente.
          </Link>
        </Box>
      </Container>
      <Copyright />
    </Box>
  );
}
