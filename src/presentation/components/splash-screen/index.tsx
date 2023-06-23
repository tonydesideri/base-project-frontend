import { CircularProgress, Typography } from '@mui/material';
import { orange } from '@mui/material/colors';
import { styled } from '@mui/system';

const SplashScreenRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#fff',
  color: orange['700']
}));

const SplashScreen = () => {
  return (
    <SplashScreenRoot>
      <CircularProgress size={80} thickness={4} />
      <Typography variant="h4">Carregando...</Typography>
    </SplashScreenRoot>
  );
};

export default SplashScreen;
