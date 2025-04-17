"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Placeholder images
const slides = [
  {
    src: "/compare_myo.png",
    text: "A normal heart",
  },
  {
    src: "/myo_desc.png",
    text: "Blood pipe blockage starts accumulating",
  },
  {
    src: "/artery_comp.png",
    text: "Blood pipe (artery) blockage",
  },
  {
    src: "/compare_myo.png",
    text: "Due to blockage, blood flow decreases leading to heart attack",
  },
];

// If you want a single video, you can store data like this
const videoData = {
  src: "/myocardial.mp4",
  description: "This 3D animation illustrates myocardial infarction.",
};

export default function MyocardialInfarctionPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [is3DMode, setIs3DMode] = useState(false);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-blue-50 to-blue-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            🫀 Myocardial Infarction
          </h1>
          {/* <Link href="/"> <button>X</button> </Link> */}
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main display */}
          <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
            {!is3DMode ? (
              <>
                <p className="text-gray-700 text-lg mb-4 text-center font-semibold">
                  {slides[activeSlide].text}
                </p>
                <div className="relative w-full h-72 md:h-96 mb-4">
                  <Image
                    src={slides[activeSlide].src}
                    alt={`Slide ${activeSlide + 1}`}
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
                {/* Conditionally render carousel controls */}
                {slides.length > 1 && (
                  <div className="flex gap-4">
                    <Button onClick={handlePrev} className="cursor-pointer">
                      <ArrowLeft size={18} /> Prev
                    </Button>
                    <Button onClick={handleNext} className="cursor-pointer">
                      Next <ArrowRight size={18} />
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <>
                <video
                  src={videoData.src}
                  controls
                  className="w-full rounded-xl shadow mb-4"
                />
                <p className="text-gray-700 text-center">
                  {videoData.description}
                </p>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Language</h2>
              <select
                id="lang"
                className="mt-2 w-full p-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                defaultValue="en"
              >
                <option value="en">English</option>
              </select>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Presentation
              </h2>
              <div className="mt-2 space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="presentation"
                    checked={!is3DMode}
                    onChange={() => setIs3DMode(false)}
                    className="form-radio text-blue-600"
                  />
                  <span>Images</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="presentation"
                    checked={is3DMode}
                    onChange={() => setIs3DMode(true)}
                    className="form-radio text-blue-600"
                  />
                  <span>3D Animation</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-10">
          Built with ❤️ for cardiac condition awareness
        </div>
      </div>
    </div>
  );
}
