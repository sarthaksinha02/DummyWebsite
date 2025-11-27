"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function PinnedCardSection() {
  return (
    <section className="relative bg-white pt-24 pb-32 overflow-visible">

      {/* TOP GREY PANEL */}
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="bg-[#F4F6F8] rounded-md p-10 pr-0 relative z-10">

          {/* LEFT TEXT AREA */}
          <div className="max-w-md">
            <h2 className="text-3xl font-bold leading-tight mb-4 text-[#1A3A80]">
              LOREM IPSUM DOLOR SIT <br /> AMET CONSECTETUR. <br /> DIGNISSIM TELLUS.
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit
              laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt
              ultricies feugiat mauris. Aliquam platea turpis porta nisl felis. Massa in
              facilisis semper libero eget eu quisque bibendum platea. Tortor fames.
            </p>

            {/* Button */}
            <button className="bg-primary text-white px-5 py-2 rounded flex items-center gap-2 hover:bg-primaryDark transition">
              Lorem Ipsum <ArrowRight size={16} />
            </button>
          </div>

          {/* RIGHT IMAGE (FLOATS OUTSIDE GREY CONTAINER) */}
          <div className="absolute right-0 top-[-60px] w-[420px] h-[350px] rounded overflow-hidden shadow-lg z-20">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="scooter"
              width={600}
              height={500}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* PINNED NOTE CARD (OVERFLOWING BELOW) */}
        <div className="absolute left-10 top-[380px] bg-white w-[400px] p-6 rounded shadow-lg z-30">

          {/* tiny red pin */}
          <div className="absolute top-3 right-3 text-red-500 text-xl">📌</div>

          <h3 className="font-semibold mb-3">Lorem ipsum dolor sit</h3>

          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet
            habitasse semper.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat
            vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Hac netus consectetur ame quisque
            scelerisque facilisi. Ultrices lectus viverra pharetra commodo.
          </p>
        </div>
      </div>

      {/* BOTTOM COLOR STRIP */}
      <div className="absolute bottom-0 left-0 w-full h-3 bg-linear-to-r from-blue-600 via-green-500 to-purple-700"></div>
    </section>
  );
}
