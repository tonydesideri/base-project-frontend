import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { LoadingButton } from '@mui/lab';
import {
  Avatar,
  Box,
  CircularProgress,
  Container,
  Typography
} from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEmailConfirmationAdapter } from 'src/main/adapters/user/email-confirmation.adapter';

interface EmailConfirmationPageProps {
  email: string;
  token: string;
}

export function EmailConfirmationPage({
  email,
  token
}: EmailConfirmationPageProps) {
  const navigate = useNavigate();
  const {
    emailConfirmation,
    emailConfirmationError,
    emailConfirmationLoading,
    emailConfirmationSuccess
  } = useEmailConfirmationAdapter();

  useEffect(() => {
    emailConfirmation({
      email,
      token
    });
  }, []);

  const handleNavigateToHome = () => {
    navigate('/home');
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
          <Avatar sx={{ bgcolor: 'primary.main', mb: 3 }}>
            <LockOutlinedIcon />
          </Avatar>
          {emailConfirmationLoading && <CircularProgress thickness={4} />}
          {emailConfirmationSuccess && (
            <>
              <Typography component="h1" variant="h5" fontWeight={500}>
                O e-mail foi verificado
              </Typography>
              <Typography
                variant="body1"
                component="div"
                display="inline-block"
                sx={{ mt: 3 }}
              >
                Está tudo pronto. O{' '}
                <Typography
                  variant="body1"
                  component="div"
                  fontWeight={500}
                  display="inline-block"
                >
                  {email}
                </Typography>{' '}
                já foi verificado.
              </Typography>
              <LoadingButton
                type="button"
                variant="contained"
                sx={{ mt: 3 }}
                onClick={handleNavigateToHome}
              >
                Continuar para o Dashboard
              </LoadingButton>
            </>
          )}
          {emailConfirmationError && (
            <>
              <WarningAmberIcon fontSize="large" color="primary" />
              <Typography
                variant="body1"
                component="div"
                display="inline-block"
                sx={{ mt: 3 }}
              >
                Não foi possível processar sua solicitação de verificação de
                e-mail. Confirme se o link está correto.
              </Typography>
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
}
