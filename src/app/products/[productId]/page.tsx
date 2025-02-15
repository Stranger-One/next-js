export default async function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
    const productId = (await params).productId;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Details about product {productId}</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <p className="text-lg text-black">Here you can add more details about the product.</p>
            </div>
        </div>
    );
}