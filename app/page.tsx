"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const page = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAnalyze = async () => {
    setLoading(true);
    const res = await fetch(`api/analyze`, { method: "POST" });
    const data = await res.json();

    if (data.result === "normal") {
      router.push(`/normal`);
    } else {
      router.push(`/arrythmia`);
    }
  };

  return (
    <main className="p-10 text-center">
      <h1 className="text-2xl mb-4">Analyze ECG Screenshot</h1>
      <Button onClick={handleAnalyze} disabled={loading}>
        {loading ? `Analyzing...` : "Analyze"}
      </Button>
      <div className="mb-10">
        <Image src={"/screenshot.png"} alt="Screenshot" height={300} width={300}/>
        <Image src={"/graph.png"} alt="Cropped Graph" height={200} width={200}/>
      </div>
    </main>
  );
};

export default page;
