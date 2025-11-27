"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AppDownload() {
  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-600 font-medium text-sm mb-2">Lorem Ipsum</p>

          <h2 className="text-3xl md:text-4xl font-heading font-bold leading-snug mb-4">
            Lorem Ipsum Dolor <br /> Sit Amet
          </h2>

          <p className="text-gray-600 text-base max-w-md mb-8">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi 
            suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. 
            Pellentesque ultricies ipsum.
          </p>

          {/* APP STORE BUTTONS */}
          <div className="flex gap-4">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              width={160}
              height={48}
              unoptimized
            />

            <Image
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              width={160}
              height={48}
              unoptimized
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center "
        >
          <Image
            src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbmV8ZW58MHx8MHx8fDA%3D"            
            alt="App Preview"
            width={350}
            height={350}
            unoptimized
            className="object-contain h-full w-full"
          />
        </motion.div>

      </div>
    </section>
  );
}
