"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function YellowFrame() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">

      {/* LIGHT BACKGROUND LINES */}
      {/* <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
        <Image
          src=""
          alt="bg-lines"
          width={500}
          height={500}
          unoptimized
        />
      </div> */}

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="h-full w-full p-0 pb-8 bg-gray-200 mx-0 px-0 m-0 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="bike"
            width={700}
            height={200}
            className=" object-fill"
            unoptimized
          />
        </div>

        {/* RIGHT CONTENT BOX */}
        <div className="bg-gray-200 p-10 mt-112 shadow-sm">

          {/* SMALL LABEL */}
          <p className="text-blue-600 text-sm font-semibold mb-2">
            Lorem ipsum
          </p>

          {/* HEADING */}
          <h2 className="text-3xl font-heading font-bold leading-tight mb-4">
            <span className="text-blue-600">LOREM</span> IPSUM DOLOR SIT
            AMET CONSECTETUR. ENIM DONEC.
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mb-6 max-w-md">
            Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
          </p>

          {/* 2 COLUMN ITEM LIST */}
          <div className="grid grid-cols-2 gap-y-3 text-gray-700 mb-8">
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>

          {/* CTA BUTTON */}
          <button className="bg-primary text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-primaryDark transition">
            Lorem Ipsum
            <ArrowRight size={18} />
          </button>
        </div>

      </div>

      
        {/* Bottom color strip */}
        <div className="mt-16 w-full h-3 bg-linear-to-r from-blue-600 via-green-500 to-purple-700"></div>
    </section>
  );
}




