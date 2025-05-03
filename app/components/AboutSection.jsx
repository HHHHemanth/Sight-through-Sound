"use client";
import React from "react";
import AnimatedTestimonials from "@/components/magicui/animated-testimonials";
const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20 mt-10" id="about">
      <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-10 lg:space-y-0">
        
        {/* Left - Title */}
        <div className="lg:w-1/3 flex justify-center items-start">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        </div>

        {/* Right - Content */}
        <div className="lg:w-2/3 space-y-8">
          {/* Description */}
          <div>
            <p className="text-lg p-2 font-sans text-gray-700 leading-relaxed text-justify">
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
