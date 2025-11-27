"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero(){
  return (
    <div className="relative w-screen max-w-[1750px] h-screen">
      <div className="max-w-7xl mx-auto w-screen h-screen px-6 pb-16 grid lg:grid-cols-2 items-center gap-8">
        <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}}>
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">Lorem ipsum dolor sit amet</h1>
          <p className="mt-4 text-slate-600 max-w-lg">Lorem ipsum dolor sit amet consectetur. Enim metus cras congue quis elit sociis.</p>

          <form className="mt-6 flex  max-w-md">
            <input placeholder="Enter email" className="input flex-1 border mx-1 px-1" />
            <button className="bg-primary text-white px-6 rounded-md">Submit →</button>
          </form>

          <label className="mt-3 inline-flex items-center gap-2 text-sm text-gray-500">
            <input type="checkbox" /> No credit card required
          </label>
        </motion.div>

        <div className="absolute right-0 top-0 w-[50%] h-full mt-0 bg-white clip-hero">
        <motion.div className=" relative w-full h-[900px]  -mt-20 " initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} transition={{duration:0.7}}>
        <Image
        src="/assets/hero/hero-bg.jpg"
        alt="biker"
        fill
        unoptimized
        />
        </motion.div>
        </div>
      </div>
    </div>
  );
}
