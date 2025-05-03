import Image from 'next/image';
import Link from 'next/link';
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between mt-10 py-16 px-8 bg-[#F6D46B]">
      {/* Image Section */}
      <div className="flex-1">
        <Image
          src="/images/herosts.png" // Replace with your image path
          alt="Project Image"
          width={600}
          height={400}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 ml-8">
        <h1 className="text-4xl font-bold text-black mb-4">
        Sight Through Sound
        </h1>
        <p className="text-xl font-medium text-black font-sans mb-6">
        An Iot and Machine Learning Project for Blind People
        </p>


        <Link
          href="#">
          <InteractiveHoverButton>About Us</InteractiveHoverButton>
        </Link>
        

        
      </div>
    </section>
  );
};

export default HeroSection;
