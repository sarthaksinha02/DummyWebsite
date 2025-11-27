"use client";
import Image from "next/image";

export default function DarkHero(){
  return (
    <section className="relative">
      <div className="relative h-150 ">
        <Image src="https://media.istockphoto.com/id/1136829806/vector/website-app-design-development-technology-software-code-programming-ui-ux-concept.jpg?s=612x612&w=0&k=20&c=wB6hinX448B_fLDEGKubgkeVyX6ijVLQQ_Gz_kSqQUg=" 
        fill className="object-cover brightness-75" 
        alt=""

        unoptimized/>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl text-center text-white px-6">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">DOLOR SIT AMET CONSECTETUR. QUIS</h2>
            <p className="mt-4">Short overlay description text to match design</p>
            <button className="mt-6 bg-white text-slate-900 px-4 py-2 rounded">Learn Ipsum →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
