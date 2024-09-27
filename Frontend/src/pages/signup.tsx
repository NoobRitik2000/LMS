// pages/signup.tsx
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography, Container, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link'; // Import Link from Next.js

interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string; // Add role to the inputs
}

export default function Signup() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SignupFormInputs>();
  const password = watch('password');
  const router = useRouter();

  const onSubmit = (data: SignupFormInputs) => {
    // Simulate backend call for signup
    console.log('Signup Data:', data);
    router.push('/login'); // redirect to login after signup
  };

  return (
    
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>Signup</Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
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
            {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters long' } })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
            {...register('confirmPassword', { validate: value => value === password || 'Passwords do not match' })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
             <FormControl fullWidth margin="normal" error={!!errors.role}>
            <InputLabel>Role</InputLabel>
            <Select
              {...register('role', { required: 'Role is required' })}
              label="Role"
            >
              <MenuItem value="Librarian">Librarian</MenuItem>
              <MenuItem value="Patron">Patron</MenuItem>
              {/* Add more roles as needed */}
            </Select>
            {errors.role && <Typography color="error">{errors.role.message}</Typography>}
          </FormControl>
          
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
            Signup
          </Button>
        </form>
        <Typography variant="body2" mt={2}>
          Already have an account? <a href="/login">Login here</a>
        </Typography>
      </Box>
    </Container>
  );
}
