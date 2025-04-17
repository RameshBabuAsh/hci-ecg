"use client";

import React from "react";
import Image from "next/image";

export default function NormalHeartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-green-50 to-green-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center space-y-6">
        <h1 className="text-4xl font-bold text-green-700">
          💓 Healthy Heart!
        </h1>
        <div className="relative w-64 h-64">
          <Image
            src="/normal_heart.png"
            alt="Illustration of a healthy heart"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-lg text-gray-700 text-center">
          Congratulations! You have a strong, healthy heart pumping with energy and vitality!
        </p>
      </div>
    </div>
  );
}