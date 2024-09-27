// frontend/components/Register.tsx
import React, { useState } from 'react';
import { register } from '../utils/api';

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Patron');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register({ name, email, password, role });
            alert('Registration successful!');
        } catch (error) {
            console.error(error);
            alert('Registration failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Librarian">Librarian</option>
                <option value="Patron">Patron</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
