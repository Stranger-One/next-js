import React from 'react';

const SecondBlogPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">Second Blog Page</h1>
                <p className="text-gray-700 mb-6">
                    Welcome to the second blog page! This is where you can add your content.
                </p>
                <div className="space-y-4">
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                    </p>
                    <p className="text-gray-600">
                        Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                    </p>
                    <p className="text-gray-600">
                        Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SecondBlogPage;