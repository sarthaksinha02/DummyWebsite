"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  timeframe: z.string().min(1),
  size: z.string().min(1),
  quantity: z.string().min(1),
  message: z.string().min(5),
});

type FormData = z.infer<typeof schema>;

export default function RequestQuote() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = () => {
    alert("Submitted ✔ (frontend only)");
    reset();
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-center text-2xl md:text-3xl font-heading font-bold mb-12">
          REQUEST A QUOTE
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              {...register("name")}
              className="w-full border border-gray-300 rounded-md px-4 py-3"
            />
            <p className="text-red-500 text-xs">{errors.name?.message}</p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">E-mail</label>
            <input
              {...register("email")}
              className="w-full border border-gray-300 rounded-md px-4 py-3"
            />
            <p className="text-red-500 text-xs">{errors.email?.message}</p>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              {...register("phone")}
              className="w-full border border-gray-300 rounded-md px-4 py-3"
            />
            <p className="text-red-500 text-xs">{errors.phone?.message}</p>
          </div>

          {/* Time Frame */}
          <div>
            <label className="block text-sm mb-1">
              Time Frame<span className="text-red-500">*</span>
            </label>
            <select
              {...register("timeframe")}
              className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white"
            >
              <option value="">Choose Time Frame</option>
              <option>1 Week</option>
              <option>2 Weeks</option>
              <option>1 Month</option>
            </select>
            <p className="text-red-500 text-xs">{errors.timeframe?.message}</p>
          </div>

          {/* Size */}
          <div>
            <label className="block text-sm mb-1">
              Size<span className="text-red-500">*</span>
            </label>
            <select
              {...register("size")}
              className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white"
            >
              <option value="">Choose Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            <p className="text-red-500 text-xs">{errors.size?.message}</p>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm mb-1">
              Quantity<span className="text-red-500">*</span>
            </label>
            <select
              {...register("quantity")}
              className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white"
            >
              <option value="">Choose Quantity</option>
              <option>1</option>
              <option>5</option>
              <option>10</option>
            </select>
            <p className="text-red-500 text-xs">{errors.quantity?.message}</p>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-sm mb-2">
              Please Describe Your Project<span className="text-red-500">*</span>
            </label>

            <textarea
              {...register("message")}
              className="w-full border border-gray-300 rounded-md px-4 py-3 h-36 resize-none"
              placeholder="Choose a project type"
            />

            <p className="text-red-500 text-xs">{errors.message?.message}</p>
          </div>
        </form>

        {/* Terms */}
        <p className="text-center text-sm text-gray-600 mt-6">
          By submitting this form you agree to our{" "}
          <span className="text-primary cursor-pointer">Terms of Service</span> and{" "}
          <span className="text-primary cursor-pointer">Privacy Policy</span>.
        </p>

        {/* BUTTON */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSubmit(onSubmit)}
            className="bg-primary text-white px-8 py-3 rounded-md flex items-center gap-2 hover:bg-primaryDark transition"
          >
            Lorem Ipsum
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
