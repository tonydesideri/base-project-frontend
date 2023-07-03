import { Link, Typography } from '@mui/material';
import { HTMLAttributes } from 'react';

interface CopyrightProps extends HTMLAttributes<HTMLSpanElement> {}

export function Copyright({ ...props }: CopyrightProps) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
