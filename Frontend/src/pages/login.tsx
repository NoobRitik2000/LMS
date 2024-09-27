// pages/login.tsx
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link'; // Import Link from Next.js
import Swal from 'sweetalert2'; // Import SweetAlert2

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const router = useRouter();

  const onSubmit = (data: LoginFormInputs) => {
    // Simulate backend call for login
    console.log('Login Data:', data);
    Swal.fire({
        title: "Login Successful",
        text: "You will be redirected to the dashboard.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      }).then(() => {
        router.push('/dashboard'); // redirect to dashboard after alert closes
      });
  };
  const handleGuestUser = () => {
    // Redirect to the guest user dashboard
    router.push('/guest-dashboard'); // Assuming you have a page for guest dashboard
  };
  return (
    
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>Login</Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' } })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            {...register('password', { required: 'Password is required' })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
            Login
          </Button>
        </form>
        <Typography variant="body2" mt={2}>
          Don't have an account? <a href="/signup">Sign up here</a>
        </Typography>
        <Typography variant="body2" mt={2} textAlign="center">
          OR 
        </Typography>
         {/* Guest User Option */}
         <Box mt={2} textAlign="center">
          <Button variant="outlined" onClick={handleGuestUser}>
            Guest User
          </Button>
         
        </Box>
      </Box>
    </Container>
  );
}
