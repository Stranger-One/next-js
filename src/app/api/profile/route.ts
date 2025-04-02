import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest){
    // Incoming Headers
    // case - 1
    const requestHeaders = new Headers(request.headers)
    // console.log(requestHeaders.get("Authorization"))
    
    // case - 2
    const headersList = await headers()
    // console.log(headersList.get("Authorization"))


    // get cookie
    // case - 1
    const username = request.cookies.get("username")
    const age = request.cookies.get("age")
    // console.log(username, age);
    
    // case - 2
    const cookiesStore = await cookies()
    cookiesStore.set("name", "JohnDeo")
    cookiesStore.set("age", "20")

    console.log(cookiesStore.get('name'));
    console.log(cookiesStore.get('age'));
    
    

    // Outgoing Headers
    return new Response('<h1>GET /api/profile</h1>', { 
        headers: {
            "Content-Type": "text/html",
            // "Set-Cookie": "username=JohnDoe,age=20",     // set cookies
        },
        status: 200
     });
}