import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function ECGSummaryPage() {
  return (
    <main className="p-10 flex flex-col items-center space-y-6">
      <h1 className="text-2xl font-bold">ECG Result</h1>

      <Card className="w-full max-w-3xl">
        <CardContent className="p-6 space-y-4">
          <div className="text-lg font-semibold text-green-600">
            ✔ Normal Sinus Rhythm
          </div>
          <div className="text-red-500">❤️ 79 BPM</div>

          <div className="border border-gray-300 h-40 bg-white rounded-lg shadow-inner flex items-center justify-center">
            <Image
              src={"/ecg_signal.png"}
              alt="ECG Signal"
              height={100}
              width={550}
            />
          </div>

          <Separator />

          <p className="text-gray-700 text-sm">
            No rhythm abnormalities detected in your ECG.
          </p>

          <h1 className="text-2xl font-bold text-center">Next Steps</h1>
          <Button variant="default" className="w-full">
            Download PDF
          </Button>
          <Button variant={"default"} className="w-full">
            Visualize your ECG in heart for better understanding
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
