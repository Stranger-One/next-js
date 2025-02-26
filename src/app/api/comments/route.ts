import { comments } from "./data";

export async function GET(){
    return Response.json(comments);
}

export async function POST(request: Request){
    const body = await request.json();

    // console.log({request, body});

    const newComment = {
        id: comments.length + 1,
        text: body.text,
    }

    comments.push(newComment);
    return Response.json(comments, {
        headers: {"Content-Type": "application/json"},
        status: 201,
    });
    

}