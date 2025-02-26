import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  if (!comment) {
    return Response.json({ error: "Not a valid Id" }, { status: 400 });
  }
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const index = comments.findIndex((comment) => comment.id === parseInt(id));

  if (!comments[index]) {
    return Response.json({ error: "Not a valid Id" }, { status: 400 });
  }

  comments[index].text = body.text;

  return Response.json({
    message: "Comment updated successfully",
    comment: comments[index],
    allComments: comments,
  });
}

export async function DELETE(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
  ) {
    const { id } = await params;
  
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
  
    if (!comments[index]) {
      return Response.json({ error: "Not a valid Id" }, { status: 400 });
    }

    comments.splice(index, 1); // remove the comment from the array
  
    return Response.json({
        message: "Comment deleted successfully",
        allComments: comments,
    });
  }
