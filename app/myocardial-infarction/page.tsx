"use client";

import React, { useState } from "react";
// import Link from "next/link";
import Image from "next/image";

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

  // Handle next slide
  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  // Handle previous slide
  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <center>
        <div className="w-full max-w-3xl flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold mb-4">Myocardial Infarction</h1>
            {/* “X” mark to return to homepage */}
            {/* <Link href="/" aria-label="Close and go back to homepage"> */}
            {/* <button className="text-red-500 font-bold text-2xl">X</button> */}
            {/* </Link> */}
        </div>
      </center>

      {/* Content Section */}
      <div className="w-full max-w-3xl bg-white shadow p-4 rounded-md relative">
        <div className="flex justify-between items-start gap-4">
          {/* Main Section (Carousel or Video) */}
          <div className="flex-1">
            {is3DMode ? (
              // 3D Mode: show video
              <div className="flex flex-col items-center">
                <video
                  src={videoData.src}
                  controls
                  className="w-full h-auto rounded-md mb-2"
                />
                <p className="text-gray-700">{videoData.description}</p>
              </div>
            ) : (
              // Carousel Mode
              <div className="flex flex-col items-center">
                {!is3DMode && (
                <div className="mb-4 p-4">
                    <p className="text-gray-900">{slides[activeSlide].text}</p>
                </div>
                )}
                <div className="w-full h-64 relative mb-2">
                  <Image
                    src={slides[activeSlide].src}
                    alt={`Slide ${activeSlide + 1}`}
                    fill
                    style={{ objectFit: "contain" }}
                    className="transition-all duration-500"
                  />
                </div>
                {/* Carousel Controls */}
                <div className="flex space-x-4 mt-8">
                  <button
                    onClick={handlePrev}
                    className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Prev
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar (Settings, etc.) */}
          <div className="w-48 border-l pl-4">
            <div className="mb-4">
              <h2 className="font-semibold">Settings</h2>
              {/* Language dropdown - only English for now */}
              <div className="mt-2">
                <label htmlFor="lang" className="block text-sm font-medium">
                  Language
                </label>
                <select
                  id="lang"
                  className="border rounded p-1 w-full bg-white"
                  value="en"
                  onChange={() => {
                    /* do nothing for now */
                  }}
                >
                  <option value="en">English</option>
                </select>
              </div>
            </div>

            {/* Presentation toggle */}
            <div className="mb-4">
              <h2 className="font-semibold">Presentation</h2>
              <div className="mt-2 flex flex-col">
                <label className="inline-flex items-center mb-2 cursor-pointer">
                  <input
                    type="radio"
                    name="presentation"
                    className="form-radio"
                    checked={!is3DMode}
                    onChange={() => setIs3DMode(false)}
                  />
                  <span className="ml-2">Images</span>
                </label>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="presentation"
                    className="form-radio"
                    checked={is3DMode}
                    onChange={() => setIs3DMode(true)}
                  />
                  <span className="ml-2">3D Animation</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
