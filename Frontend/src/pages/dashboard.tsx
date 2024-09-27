// pages/dashboard.tsx
import { Typography, Box, Container } from '@mui/material';

export default function Dashboard() {
  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4">Welcome to the Dashboard</Typography>
        <Typography>This is a protected page, accessible only after login.</Typography>
      </Box>
    </Container>
  );
}
