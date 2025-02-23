import React from "react";
import { getPhotos } from "./ImageDetails";
import Link from "next/link";

function page() {
  return (
    <main className="w-full text-center p-10 space-y-4">
      <h2 className="text-xl mx-auto">Photo Gallery</h2>
      <div className="grid grid-cols-5 gap-2">
        {getPhotos.map((photo) => (
          <Link key={photo.id} href={`/gallery/${photo.id}`}>
            <div className="w-full h-50 bg-red-700 p-1 h-full rounded-md">
              <img
                src={photo.url}
                alt={photo.title}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default page;
