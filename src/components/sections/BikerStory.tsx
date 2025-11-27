"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BikerStory() {
  return (
    <section className="py-24 bg-white relative mt-25">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-3xl font-heading font-bold mb-4 tracking-tight">
          LOREM IPSUM DOLOR SIT AMET
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-600 max-w-3xl mx-auto text-sm leading-relaxed mb-12">
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
          Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut 
          aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget 
          purus ornare. Risus elit et fringilla habitant ut facilisi.
        </p>

        {/* IMAGE WRAPPER */}
        <div className="relative flex justify-center">
          {/* Main Biker Image */}
          <Image
            src="https://plus.unsplash.com/premium_photo-1663013456452-ca31687f8728?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJpa2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="bikers"
            width={1100}
            height={500}
            className="rounded-md shadow-md object-cover"
            unoptimized
          />

          {/* FLOATING CARD */}
          <div className="absolute right-10 bottom-[-60px] bg-white p-6 rounded-lg shadow-lg w-[380px] text-left">
            <h3 className="font-semibold text-gray-900 mb-2">Artist & Investor</h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing 
              auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac 
              arcu amet nisi quis est …
            </p>

            <button className="text-blue-700 text-sm font-semibold flex items-center gap-1 hover:underline">
              Read Full Story <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* PAGINATION DOTS */}
        <div className="flex justify-center mt-20 gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-400"></div>
          <div className="w-3 h-3 rounded-full bg-blue-300"></div>
          <div className="w-3 h-3 rounded-full bg-blue-300"></div>
        </div>

      </div>
    </section>
  );
}
