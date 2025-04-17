import { NextResponse } from "next/server";
import { exec } from "child_process";
// import path from "path";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function POST() {
  try {
    await execAsync(`adb shell screencap -p /sdcard/screen.png`);
    await execAsync(`adb pull /sdcard/screen.png ./public/screenshot.png`);

    const { stdout } = await execAsync(`python ocr_analyzer.py`);
    const result = stdout.trim();

    return NextResponse.json({ result });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to analyze" }, { status: 500 });
  }
}
