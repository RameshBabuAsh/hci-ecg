import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function LiveECGPage() {
  return (
    <main className="p-10 flex flex-col items-center space-y-6">
      <h1 className="text-2xl font-bold">Live ECG Monitoring</h1>

      <Card className="w-full max-w-3xl">
        <CardContent className="p-6 space-y-4">
          <div className="flex gap-4 justify-between items-center">
            <div className="text-center">
              <div className="text-2xl font-semibold text-red-500">
                ❤️ 79 BPM
              </div>
            </div>
            <Progress value={33} />
            {/* <Slider defaultValue={[33]} max={100} step={1} className="mx-8" /> */}
            <div className="text-center">
              <div className="text-green-600 font-medium">📶 Great Signal</div>
            </div>
          </div>

          <div className="border border-gray-300 h-40 bg-white rounded-lg shadow-inner flex items-center justify-center">
            <Image
              src={"/ecg_signal.png"}
              alt="ECG Signal"
              height={100}
              width={550}
            />
          </div>

          <div className="text-sm text-gray-500 text-center">
            25 mm/s &nbsp;&nbsp; | &nbsp;&nbsp; 10 mm/mV
          </div>
          <div className="text-center">Your ECG is being measured, get ready to view your results</div>
        </CardContent>
      </Card>
    </main>
  );
}
