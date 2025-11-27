"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero(){
  return (
    <div className="relative w-screen h-screen">
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

        <motion.div className="relative h-screen lg:h-screen overflow-hidden rounded-lg" initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} transition={{duration:0.7}}>
        <Image
        src="https://media.istockphoto.com/id/1582664831/photo/biker-with-full-safety-gear-enjoys-ride-on-country-road.jpg?s=612x612&w=0&k=20&c=1GUQV9iZxx9NH194S_QZRQzsjbHgt0SgoB7MXcWJLC4="
        alt="biker"
        fill
        unoptimized
        />
        </motion.div>
      </div>
    </div>
  );
}
