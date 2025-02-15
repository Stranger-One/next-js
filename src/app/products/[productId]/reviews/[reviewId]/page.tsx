import 'tailwindcss/tailwind.css';

export default async function ProductDetails({ params }: { params: Promise<{ productId: string; reviewId: string }> }) {
    const { productId, reviewId } = await params;
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-black">Review {reviewId} for Product {productId}</h1>
                <p className="text-gray-700">This is a detailed review for the product with ID {productId}.</p>
            </div>
        </div>
    );
}