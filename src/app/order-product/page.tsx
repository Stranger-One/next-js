"use client"
import { useRouter } from "next/navigation"

async function Order() {
    const router = useRouter()
    const handleClick = () => {
        console.log("Placing Your Order...")
        router.push("/")
    }

    

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-4">Order Product</h1>
        <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Place Order</button>
    </div>
  )
}

export default Order