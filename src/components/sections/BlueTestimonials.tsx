"use client";

import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function BlueTestimonials() {
  return (
    <section className="bg-[#0A53CC] py-28 relative overflow-hidden">

      {/* MAIN WRAPPER */}
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">

          {/* LEFT TEXT */}
          <div className="text-white max-w-xl">
            <p className="text-white/80 text-sm mb-3">
              Join other Sun harvesters
            </p>

            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 leading-tight">
              LOREM IPSUM DOLOR SIT AMET
            </h2>

            <p className="text-white/80 text-base leading-relaxed">
              Duis euismod iaculis libero, aliquet vitae at elementum porttitor. Eleifend mi 
              tristique condimentum congue fusce nunc, donec magnis commodo.
            </p>
          </div>

          {/* CTA BUTTON */}
          <button className="bg-white text-blue-700 px-7 py-3 rounded font-medium flex items-center gap-2 hover:bg-gray-100 transition self-start">
            Lorem Ipsum <ArrowRight size={16} />
          </button>

        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">

          {/* CARD 1 */}
          <div className="bg-white rounded-lg p-7 shadow min-h-[260px] flex flex-col justify-between">
            <div>
              <div className="text-blue-600 text-3xl mb-3">⭐</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin 
                at non fringilla. Quam nunc volutpat senectus neque eget amet pharetra.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <Image
                src="https://randomuser.me/api/portraits/women/44.jpg"
                width={40}
                height={40}
                className="rounded-full"
                alt="avatar"
                unoptimized
              />
              <span className="font-medium text-gray-800">Jane Cooper</span>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-lg p-7 shadow min-h-[260px] flex flex-col justify-between">
            <div>
              <div className="text-blue-600 text-3xl mb-3">⭐</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Vehicula sit sit pharetra bibendum ut risus accumsan. Purus in metus, 
                enim, ipsum morbi euismod pellentesque.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <Image
                src="https://randomuser.me/api/portraits/men/32.jpg"
                width={40}
                height={40}
                className="rounded-full"
                alt="avatar"
                unoptimized
              />
              <span className="font-medium text-gray-800">Ralph Edwards</span>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-lg p-7 shadow min-h-[260px] flex flex-col justify-between">
            <div>
              <div className="text-blue-600 text-3xl mb-3">⭐</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Viverra lacus suspendisse elit, adipiscing non, arcu turpis etiam sapien. 
                Viverra blandit sem neque pretium.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <Image
                src="https://randomuser.me/api/portraits/women/12.jpg"
                width={40}
                height={40}
                className="rounded-full"
                alt="avatar"
                unoptimized
              />
              <span className="font-medium text-gray-800">Courtney Henry</span>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-lg p-7 shadow min-h-[260px] flex flex-col justify-between">
            <div>
              <div className="text-blue-600 text-3xl mb-3">⭐</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Hendrerit augue nec sit amet integer rutrum. Suspendisse rhoncus magna risus.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <Image
                src="https://randomuser.me/api/portraits/men/15.jpg"
                width={40}
                height={40}
                className="rounded-full"
                alt="avatar"
                unoptimized
              />
              <span className="font-medium text-gray-800">Cameron Williamson</span>
            </div>
          </div>

        </div>

        {/* SLIDER BUTTONS */}
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition">
            <ChevronLeft size={20} />
          </button>

          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-700 hover:bg-gray-100 transition">
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
