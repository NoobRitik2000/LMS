// frontend/pages/index.tsx
import React from 'react';
import Login from '../pages/login';
import Register from '../pages/signup';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Library Management System</h1>
            <Login />
            <Register />
        </div>
    );
};

export default HomePage;
