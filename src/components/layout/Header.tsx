"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Menu items + Dropdown content
  const menuItems = [
    {
      label: "Lorem Ipsum",
      options: ["Option A1", "Option A2", "Option A3"],
    },
    {
      label: "Lorem Ipsum",
      options: ["Option B1", "Option B2", "Option B3"],
    },
    {
      label: "Lorem Ipsum",
      options: ["Option C1", "Option C2", "Option C3"],
    },
     {
      label: "Lorem Ipsum",
      options: ["Option D1", "Option D2", "Option D3"],
    },
  ];

  return (
    <header className="top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-6">
          <div className="bg-slate-900 text-white font-bold px-3 py-1">LOGO</div>

          {/* NAV */}
          <nav className="hidden md:flex gap-6 text-sm items-center relative px-50">

            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center gap-1 cursor-pointer"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                {/* Label */}
                <span className="hover:text-blue-700 transition">{item.label}</span>

                {/* Arrow Rotation */}
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown size={16} />
                </motion.span>

                {/* Dropdown Panel */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-8 left-0 w-48 bg-white shadow-lg rounded-md border p-3 z-50"
                    >
                      <ul className="text-sm space-y-2">
                        {item.options.map((opt, i) => (
                          <li
                            key={i}
                            className="hover:text-primary cursor-pointer transition"
                          >
                            {opt}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

          </nav>
        </div>

        {/* RIGHT SIDE BUTTON */}
        <button className="text-sm bg-white border px-4 py-2 rounded shadow-sm">
          Sign In
        </button>
      </div>
    </header>
  );
}
