import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg mb-6">Sorry, the page you are looking for does not exist.</p>
            <Link href="/">
                <a className="text-blue-500 hover:underline">Go back to Home</a>
            </Link>
        </div>
    );
};

export default NotFoundPage;