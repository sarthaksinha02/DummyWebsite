"use client";
import { useState } from "react";

const items = [
  {q:'Lorem ipsum dolor sit amet consectetur?', a:'Answer text goes here.'},
  {q:'Lorem ipsum dolor sit amet consectetur?', a:'Answer text goes here.'},
  {q:'Lorem ipsum dolor sit amet consectetur?', a:'Answer text goes here.'},
];

export default function FAQ(){
  const [open,setOpen] = useState<number|null>(0);
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-heading mb-6">Frequently Asked Questions (FAQs)</h3>
        <div className="space-y-3">
          {items.map((it,idx)=>(
            <div key={idx} className="bg-white p-4 rounded shadow">
              <button onClick={()=>setOpen(open===idx?null:idx)} className="flex justify-between w-full items-center">
                <span className="font-semibold">{it.q}</span>
                <span>{open===idx?'-':'+'}</span>
              </button>
              {open===idx && <p className="mt-3 text-sm text-slate-600">{it.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
