"use client";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { useState } from "react";

interface iAppGallery {
  images: any;
}

const ImageGallery = ({ images }: iAppGallery) => {
  const [bigImage, setImage] = useState(images[0]);
  const handleSmallImage = (image: any) => {
    setImage(image);
  };
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, id: any) => (
          <div key={id} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="images"
              className="w-full h-full object-cover object-center
                cursor-pointer"
              onClick={() => handleSmallImage(image)}
            />
          </div>
        ))}
      </div>
      {/*  */}
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="photo"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />
        <span
          className="absolute left-0 top-0 rounded-br-lg bg-red-500 py-1.5 px-3 text-sm uppercase tracking-wider
            text-white"
        >
          Sale
        </span>
      </div>
    </div>
  );
};

export default ImageGallery;
