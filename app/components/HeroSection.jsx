import Image from 'next/image';
import Link from 'next/link';
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col sm:flex-row items-center justify-between mt-10 py-16 px-8 bg-[#F6D46B] overflow-hidden">

      {/* For small screens */}
      <Image
        src="/images/s1l.png"
        alt="Decorative Small"
        width={150}
        height={150}
        className="absolute top-35 left-0 block sm:hidden pointer-events-none -py-10"
      />

      {/* For medium screens */}
      <Image
        src="/images/s1l.png"
        alt="Decorative Medium"
        width={200}
        height={200}
        className="absolute top-30 -left-10 hidden sm:block md:hidden pointer-events-none"
      />

      {/* For large screens and above */}
      <Image
        src="/images/s1l.png"
        alt="Decorative Large"
        width={250}
        height={250}
        className="absolute top-25 -left-10 hidden md:block pointer-events-none"
      />



      {/* For small screens */}


      {/* Image Section */}
      <div className="flex-1 mb-8 sm:mb-0">
        <Image
          src="/images/herosts.png" // Replace with your image path
          alt="Project Image"
          width={600}
          height={400}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 ml-0 sm:ml-8 text-center sm:text-left">
        <h1 className="text-4xl font-bold text-black mb-4">
          Sight Through Sound
        </h1>
        <p className="text-xl font-medium text-black font-sans mb-6">
          An IoT and Machine Learning Project for Blind People
        </p>

        <Link href="#about">
          <InteractiveHoverButton>About Us</InteractiveHoverButton>
        </Link>
      </div>
      <Image
        src="/images/s2t.png"
        alt="Decorative Small"
        width={120}
        height={120}
        className="absolute bottom-0 right-0 block sm:hidden pointer-events-none"
      />

      {/* For medium screens */}
      <Image
        src="/images/s2t.png"
        alt="Decorative Medium"
        width={200}
        height={200}
        className="absolute bottom-0 right-0 hidden sm:block md:hidden pointer-events-none"
      />

      {/* For large screens and above */}
      <Image
        src="/images/s2t.png"
        alt="Decorative Large"
        width={250}
        height={250}
        className="absolute bottom-0 right-0 hidden md:block pointer-events-none"
      />
    </section>
  );
};

export default HeroSection;
