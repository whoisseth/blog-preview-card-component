/** @format */

import Image from "next/image";

import articalImage from "@/images/illustration-article.svg";
import avatarImage from "@/images/image-avatar.webp";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center  bg-yellow-400 p-8">
      <section className="relative group">
        {/* card component */}
        <div className="relative bg-white p-4 rounded-2xl border border-black flex flex-col gap-4 max-w-[365px] z-20 ">
          <Image
            src={articalImage}
            className="rounded-lg "
            alt="artical-image"
          />
          {/* tags */}
          <div className="text-black bg-yellow-400 rounded px-3 py-1 text-sm w-fit font-bold">
            Leaning
          </div>

          {/* date */}
          <p className="text-sm font-semibold text-gray-700">
            Published 24 Dec 2023
          </p>

          <h2 className="hover:text-yellow-400 text-2xl font-bold cursor-pointer">
            HTML & CSS foundations
          </h2>

          <p className=" text-gray-400">
            These languages are the backgbon of every website, definnig
            structure, content, and presentation.
          </p>

          <div className="flex gap-4 items-center">
            {/* image */}

            <Image className="h-8 w-8 " src={avatarImage} alt="user-image" />
            <p className="font-bold text-sm">Greg Hooper</p>
          </div>
        </div>

        <div className="absolute z-10 rounded-2xl top-2 group-hover:top-4 left-2  group-hover:left-4 transition-all bg-black  h-full w-full " />
      </section>
    </main>
  );
}
