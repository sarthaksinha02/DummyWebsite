"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 bg-white h-2/3">
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-16">

        {/* LEFT SIDE */}
        <div className="relative w-full max-w-xl">

          {/* Light tiny + pattern */}
          <div className="absolute -right-2.5 top-[35px] opacity-30">
            
          </div>

          {/* Heading */}
          <h2 className="text-[26px] font-bold tracking-tight mb-4">
            LOREM IPSUM DOLOR SIT AMET
          </h2>

          {/* Tabs */}
          <div className="flex w-max border rounded-lg overflow-hidden bg-white mb-5 shadow-sm">
            <button className="px-8 py-2 text-[13px] font-medium hover:bg-gray-100 transition">
              Research
            </button>
            <button className="px-8 py-2 border-l text-[13px] font-medium hover:bg-gray-100 transition">
              Plan
            </button>
            <button className="px-8 py-2 border-l text-[13px] font-medium hover:bg-gray-100 transition">
              Design
            </button>
          </div>

          {/* Description */}
          <p className="text-[13px] text-gray-600 leading-relaxed mb-6 max-w-sm">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum.
            Nulla felis ac turpis at amet. Purus malesuada placerat arcu et
            enim elit in accumsan.
          </p>

          {/* Link */}
          <button className="text-blue-700 text-[13px] flex items-center gap-2 font-medium hover:underline">
            Check tools <ArrowRight size={13} />
          </button>
        </div>

        {/* RIGHT IMAGE (exact size) */}
        <div className="rounded-2xl overflow-hidden shadow-md ">
          <Image
            src="https://plus.unsplash.com/premium_photo-1678917827802-721b5f5b4bf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGFuZCUyMHNoYWtlfGVufDB8fDB8fHww"
            alt="handshake"
            width={900}
            height={600}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
