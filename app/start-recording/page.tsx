import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function StartRecordingPage() {
  return (
    <main className="p-10 flex flex-col items-center space-y-6">
      <h1 className="text-2xl font-bold">Start ECG Recording</h1>

      <Card className="w-full max-w-3xl">
        <CardContent className="p-6 space-y-6">
          {/* Top section */}
          <div className="flex justify-between items-center text-center">
            <div>
              <div className="text-red-500 text-2xl">❤️ -- BPM</div>
            </div>
            <Progress value={30} className="mx-8" />
            <div>
              <div className="text-gray-500">📶 No Signal</div>
            </div>
          </div>

          {/* Electrode instructions */}
          <Card className="shadow-md border border-dashed">
            <CardContent className="p-6 text-center">
              <p className="font-medium mb-4 text-gray-700">
                Touch the electrodes to start recording
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Your recording will start once contact is detected on the electrodes.
              </p>

              {/* Electrode visual */}
              
              <div className="flex justify-center items-center gap-4 mb-4">
              <Image src={"/ecg_machine.png"} alt="ECG Machine" width={500} height={500}/>
                {/* <div className="bg-gray-200 rounded-md p-4 w-24 text-xs">Left Hand</div>
                <div className="bg-gray-400 rounded-md p-4 w-24 text-xs font-bold">ECG Device</div>
                <div className="bg-gray-200 rounded-md p-4 w-24 text-xs">Right Hand</div> */}
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </main>
  );
}
