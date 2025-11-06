import React from 'react';
import { Link } from 'react-router-dom';

export const Error = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'underline' }}>
            Go to Home
        </Link>
    </div>
);