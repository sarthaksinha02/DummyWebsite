"use client";

import Image from "next/image";

export default function CardsGrid() {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      title: "Lorem ipsum dolor sit amet consectetur.",
      text: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc mollis molestie a vitae vulputate. Phasellus in gravida mi a vitae. Mi eget lectus nec est.",
    },
    {
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Lorem ipsum dolor sit amet consectetur.",
      text: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc mollis molestie a vitae vulputate. Phasellus in gravida mi a vitae. Mi eget lectus nec est.",
    },
    {
      img: "https://images.unsplash.com/photo-1763938666120-49837681f5c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
      title: "Lorem ipsum dolor sit amet consectetur.",
      text: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc mollis molestie a vitae vulputate. Phasellus in gravida mi a vitae. Mi eget lectus nec est.",
    },
    {
      img: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf",
      title: "Lorem ipsum dolor sit amet consectetur.",
      text: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc mollis molestie a vitae vulputate. Phasellus in gravida mi a vitae. Mi eget lectus nec est.",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Small link */}
        <p className="text-blue-500 text-sm font-medium mb-2">
          Lorem ipsum dolor sit amet
        </p>

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          LOREM IPSUM DOLOR SIT
        </h2>

        <p className="text-slate-600 max-w-3xl mb-10">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sodalis facilisis donec dui.
          Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis et 
          felis aliquet. Hendrerit tellus at purus luctus.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cards.map((c, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border shadow-sm bg-white"
            >
              {/* Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{c.text}</p>

                <a
                  href="#"
                  className="text-primary font-medium text-sm hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
