export default async function ProductDetails({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold mb-4 text-black">Review for {slug && slug[0]} product {slug && slug[1]}</h1>
                <p className="text-gray-700">Here you can add more details about the product and its reviews.</p>
            </div>
        </div>
    );
}