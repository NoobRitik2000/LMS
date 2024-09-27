// frontend/components/Login.tsx
import React, { useState } from 'react';
import { login } from '../utils/api';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await login({ email, password });
            localStorage.setItem('token', response.data.token);
            alert('Login successful!');
            // Redirect based on role here
        } catch (error) {
            console.error(error);
            alert('Login failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
