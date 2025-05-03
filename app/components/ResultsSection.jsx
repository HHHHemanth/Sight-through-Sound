// ResultsSection.jsx
import Image from 'next/image';
import { MagicCard } from "@/components/magicui/magic-card";
const ResultsSection = () => {
  const capturedImagePath = "/images/cap.jpg";
  const processedImagePath = "/images/res.jpg";

  return (
    <section className="bg-white">
      <h1 className="text-3xl font-bold text-center my-6">Image Processing Results</h1>
      <div className='flex flex-col lg:flex-row justify-between lg:space-x-4 space-y-4 lg:space-y-0 p-6'>
        
        {/* Captured Image */}
        <div className="flex-1 flex justify-center items-center bg-gray-200 p-4 rounded-lg shadow-lg">
          <div className="w-full h-auto max-w-xs">
            <h3 className="text-center font-semibold text-lg mb-4">Captured Image</h3>
            <Image
              src={capturedImagePath}
              alt="Captured"
              width={300}
              height={300}
              className="object-cover rounded-md"
            />
          </div>
        </div>

        {/* Processed Image */}
        <div className="flex-1 flex justify-center items-center bg-gray-200 p-4 rounded-lg shadow-lg">
          <div className="w-full h-auto max-w-xs">
            <h3 className="text-center font-semibold text-lg mb-4">Processed Image</h3>
            <Image
              src={processedImagePath}
              alt="Processed"
              width={300}
              height={300}
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
