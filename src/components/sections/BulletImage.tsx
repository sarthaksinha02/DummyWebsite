"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BulletImage(){
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-6 items-start">
        <div>
          <h3 className="text-blue-600 text-sm">Lorem ipsum dolor sit amet</h3>
          <h2 className="text-4xl font-heading font-bold mt-2">LOREM IPSUM DOLOR SIT AMET</h2>
          <p className="mt-3 text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste necessitatibus rem eaque voluptatibus placeat doloremque sit minima error deleniti vitae. Ut sit laborum aspernatur temporibus.</p>

          <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} className="mt-6 flex gap-4">
            <ul className="space-y-4">
              <li className="flex">
                <div className="">
                    <Image src="https://media.istockphoto.com/id/481436112/photo/illustration-of-transportation-sport-motorbike-racing-concept.jpg?s=612x612&w=0&k=20&c=dtUUckysQuQD49l_ZUrF0undSYBYRfPZs8ONpe7xS3U=" 
                    alt="small bike"
                    height={200}
                    width={300}
                    unoptimized/>
                </div>
                <div><p className="text-sm text-slate-600 content-center py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nihil cum modi ea delectus? Vel autem fuga qui mollitia quaerat. </p>
                </div>
              </li>
            <li className="flex w-full h-auto">
                <div className="">
                    <Image src="https://media.istockphoto.com/id/1456747956/vector/black-and-white-vector-illustration-a-motorcycle.jpg?s=612x612&w=0&k=20&c=nyHkCZAxOX7JiRMNTi-SyTLd8_3RzpY_UsEFSRBzJBU="
                     alt="small bike 2" width={600} height={600} unoptimized/>
                </div>
                <div><p className="text-sm text-slate-600 py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed autem voluptatibus quo ducimus inventore iure in ipsam sint repudiandae! Sequi necessitatibus ipsa dolorem! Aspernatur praesentium dolorum ipsam, facilis excepturi placeat?\</p>
                </div>
            </li>
              <li className="flex w-full h-auto">
                <div className="bg-white rounded px-8">
                    <Image src="https://media.istockphoto.com/id/668997582/vector/black-legend-riders-typographic-design.jpg?s=612x612&w=0&k=20&c=etdKaAOk0RCgv3YQwefppz1BJzi-_4P_2ZvxrH5x2mM=" 
                    alt="" width={300} height={200} unoptimized/>
                </div>
                <div><p className="text-sm text-slate-600 py-2.5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, molestiae sed! Tempora, possimus laboriosam, et tempore eius sint illo aliquid repellat quo maxime explicabo voluptatibus.</p></div>
            </li>
            </ul>
          </motion.div>
        </div>
        <motion.li initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}}  className="flex gap-3 items-start">
            <div className="relative h-screen rounded">
            <Image src="https://media.istockphoto.com/id/603855922/photo/this-is-what-i-have-in-mind.jpg?s=612x612&w=0&k=20&c=JDeFpoqLUHHTKkQUNH7ce5d-RWCAuLisBNQMZkssQ9U=" 
                alt="Bike2"
                width={480} height={480}
                unoptimized/>
            </div>
        </motion.li>
      </div>
    </section>
  );
}
