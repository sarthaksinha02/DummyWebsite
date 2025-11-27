"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionTwo(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-6 grid lg:grid-cols-2 gap-8 items-center">
      <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}}>
        <h4 className="text-blue-600 text-sm mb-2">Lorem ipsum dolor sit amet</h4>
        <h2 className="text-2xl md:text-3xl font-heading font-bold">LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.</h2>
        <p className="mt-4 text-slate-600">Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend tincidunt.</p>

        <ul className="mt-6 space-y-4">
          <li className="flex items-start gap-3"><span className="text-red-500">●</span><div><b>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, est.</b><p className="text-sm text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore libero vero esse laudantium! Doloremque amet porro nulla reiciendis nisi obcaecati!</p></div></li>
          <li className="flex items-start gap-3"><span className="text-red-500">●</span><div><b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, voluptatum.</b><p className="text-sm text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo obcaecati laborum debitis. Obcaecati ex enim, eaque molestiae doloribus recusandae ipsam?</p></div></li>
          <li className="flex items-start gap-3"><span className="text-red-500">●</span><div><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia?</b><p className="text-sm text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti temporibus, iste esse amet provident vitae distinctio accusamus in qui.</p></div></li>
        </ul>
      </motion.div>

      <motion.div className="relative h-full w-full rounded overflow-hidden" initial={{scale:0.98,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{duration:0.6}}>
        <Image src="https://media.istockphoto.com/id/1720753018/photo/motorcyclist-in-a-helmet-with-a-classic-motorcycle-in-the-fall-stylish-motorcyclist-in-a.jpg?s=612x612&w=0&k=20&c=Q3X3u5dymsrFsgAH_WCRoB_0-NL8qrPX-irD3IzuIrI=
        "
        alt="biker"
        fill
        unoptimized/>
      </motion.div>
        <div className="mt-16  min-w-[1380px] h-3 bg-linear-to-r from-blue-600 via-green-500 to-purple-700"></div>

    </section>
  );
}
