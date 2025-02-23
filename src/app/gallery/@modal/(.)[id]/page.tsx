import React from 'react'
import IPhotos, { getPhotos } from '../../ImageDetails';




async function page({params}: {params: Promise<{id: string}>}) {
    const { id } = await params;
    const photo: IPhotos = getPhotos.find((photo) => photo.id === parseInt(id))!;
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-black/70 absolute top-0'>
        <div className="w-[500px] bg-gray-400 p-2 rounded-lg space-y-2">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-black">layout</h2>
                <div className=""></div>
            </div>
            <img src={photo.url} alt={photo.title} className='rounded-lg' />
            <div className="">
                {/* <h2 className="text-2xl font-bold text-black">layout</h2> */}
                <h2 className="text-2xl font-bold text-black">{photo.title}</h2>
                <p className=" text-black">{photo.photoGrapher}</p>
                <p className=" text-black">{photo.location}</p>
            </div>
        </div>
    </div>
  )
}

export default page