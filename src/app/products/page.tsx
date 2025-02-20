import Link from "next/link";

export default async function Product({ params }: { params: Promise<{ productId: string }> }) {
    const productId = (await params).productId;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Products</h1>
            <div className=" shadow-md rounded-lg p-6 flex flex-col ga1">
                <Link href={"/products/1"}>Product 01</Link>
                <Link href={"/products/2"}>Product 02</Link>
                <Link href={"/products/3"}>Product 03</Link>
                <Link href={"/products/4"}>Product 04</Link>
                <Link href={"/products/5"} replace>Product 05</Link>
                <Link href={"/products/6"} replace>Product 06</Link>
            </div>
        </div>
    );
}