"use client";
import Image from "next/image";

export default function FullImage(){
  return (
    <section className="relative">
        
      <div className="relative h-150 ">
        <span className="border-2 shadow-2xl backdrop-blur-2xl">LOGO</span>
        <Image src="https://plus.unsplash.com/premium_photo-1661916078655-4a639152e8c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGJpa2VzfGVufDB8fDB8fHww" 
        fill className="object-cover " 
        alt=""

        unoptimized/>
        <div className="absolute top-6 left-6 bg-white text-black font-bold px-4 py-2 shadow-md">
        LOGO
      </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl text-center text-white px-6">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse enim ipsam beatae tenetur ad doloremque, aut veniam neque odio quisquam obcaecati iste dicta nemo nulla totam, doloribus, hic at labore?</h2>
            <p className="mt-4">Short overlay description text to match design</p>
            {/* <button className="mt-6 bg-white text-slate-900 px-4 py-2 rounded">Learn Ipsum →</button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
