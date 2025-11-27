"use client";

import Image from "next/image";

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE CONTENT */}
        <div>
          <p className="text-blue-600 text-sm font-semibold mb-2">NO LIMITS</p>

          <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight mb-4">
            LOREM IPSUM DOLOR SIT AMET
          </h2>

          <p className="text-gray-600 mb-8 max-w-md">
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor 
            pharetra tempor quis arcu. Ipsum nullam.
          </p>

          <button className=" text-white px-6 py-3 rounded-md bg-blue-600 transition flex items-center gap-2">
            Lorem Ipsum →
          </button>
        </div>

        {/* RIGHT COLLAGE */}
        <div className="relative w-full">

          {/* TOP RIGHT LARGE IMAGE */}
          <div className="absolute top-0 right-0 w-[55%] h-[140px] rounded overflow-hidden shadow">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
              alt="1"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* SMALL VERTICAL IMAGE LEFT */}
          <div className="absolute top-[60px] left-0 w-[32%] h-40 rounded overflow-hidden shadow">
            <Image
              src="https://images.unsplash.com/photo-1493238792000-8113da705763"
              alt="2"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* SMALL VERTICAL IMAGE RIGHT */}
          <div className="absolute top-[60px] left-[38%] w-[32%] h-40 rounded overflow-hidden shadow">
            <Image
              src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab"
              alt="3"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* LARGE WIDE SUNSET IMAGE */}
          <div className="absolute top-[230px] right-0 w-[55%] h-[180px] rounded overflow-hidden shadow">
            <Image
              src="https://images.unsplash.com/photo-1506610654-064fbba4780c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwb3J0cyUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="4"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* BOTTOM LEFT SMALL IMAGE */}
          <div className="absolute top-[230px] left-0 w-[32%] h-[100px] rounded overflow-hidden shadow">
            <Image
              src="https://images.unsplash.com/photo-1592853625511-ad0edcc69c07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwb3J0cyUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="5"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* BOTTOM RIGHT SMALL IMAGE */}
          <div className="absolute top-[350px] left-[38%] w-[32%] h-[100px] rounded overflow-hidden shadow">
            <Image
              src="https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BvcnRzJTIwY2FyfGVufDB8fDB8fHww"
              alt="6"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Wrapper height to allow collage positioning */}
          <div className="h-[480px]"></div>
        </div>

      </div>
    </section>
  );
}
