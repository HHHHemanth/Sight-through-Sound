"use client";
import React from "react";
import Image from 'next/image';
import Link from "next/link";
import AnimatedTestimonials from "@/components/magicui/animated-testimonials";
const AboutSection = () => {
  return (
    <section className="relative bg-white py-16 px-6 overflow-hidden" id="about">


<Image
        src="/images/s1b.png"
        alt="Decorative Small"
        width={120}
        height={120}
        className="absolute top-0 right-0 block sm:hidden pointer-events-none"
      />

      {/* For medium screens */}
      <Image
        src="/images/s1b.png"
        alt="Decorative Medium"
        width={200}
        height={200}
        className="absolute top-0 right-0 hidden sm:block md:hidden pointer-events-none"
      />

      {/* For large screens and above */}
      <Image
        src="/images/s1b.png"
        alt="Decorative Large"
        width={250}
        height={250}
        className="absolute top-0 right-0 md:right-0 hidden md:block pointer-events-none"
      />

<Image
        src="/images/s2r.png"
        alt="Decorative Small"
        width={150}
        height={150}
        className="absolute bottom-20 left-0 block sm:hidden pointer-events-none"
      />

      {/* For medium screens */}
      <Image
        src="/images/s2r.png"
        alt="Decorative Medium"
        width={200}
        height={200}
        className="absolute bottom-20 left-0  hidden sm:block md:hidden pointer-events-none"
      />

      {/* For large screens and above */}
      <Image
        src="/images/s2r.png"
        alt="Decorative Large"
        width={300}
        height={300}
        className="absolute bottom-5 left-0  md:right-0 hidden md:block pointer-events-none"
      />



{/* <section className="relative flex flex-col sm:flex-row items-center justify-between mt-10 py-16 px-8 bg-[#F6D46B] overflow-hidden"></section> */}

      <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-10 lg:space-y-0 pt-40">
        




        {/* Left - Title */}
        <div className="lg:w-1/3 flex justify-center items-start">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        </div>

        {/* Right - Content */}
        <div className="lg:w-2/3 space-y-8">
          {/* Description */}
          <div>
            <p className="text-lg font-sans text-gray-700 leading-relaxed text-justify lg:px-20 ">
              We are a passionate team committed to leveraging technology to create meaningful solutions.
              Our expertise lies in developing intelligent systems, with a strong focus on image processing,
              natural language understanding, and user-centric design.
            </p>
          </div>

          {/* Mission */}
          <div>
          <AnimatedTestimonials autoplay={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
