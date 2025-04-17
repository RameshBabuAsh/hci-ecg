from flask import Flask, render_template, request, url_for
import subprocess
from PIL import Image
import easyocr
import numpy as np

app = Flask(__name__, static_folder='static')

# Initialize EasyOCR reader once (English only, CPU mode)
reader = easyocr.Reader(['en'], gpu=True)

@app.route('/', methods=['GET'])
def index():
    # Step 1: Show initial Analyze button
    return render_template('index.html')  # Flask templates via Jinja2 :contentReference[oaicite:3]{index=3}

@app.route('/screenshot', methods=['POST'])
def screenshot():
    # Step 2a: Capture & pull full screen via ADB
    try:
        subprocess.run(["adb","shell","screencap","-p","/sdcard/screen.png"], check=True)
        subprocess.run(["adb","pull","/sdcard/screen.png","./static/screenshot.png"], check=True)
    except:
        pass

    # Step 2b: No crop yet—just display screenshot
    return render_template('screenshot.html')  # form POST → screenshot page :contentReference[oaicite:4]{index=4}

@app.route('/analyze_graph', methods=['POST'])
def analyze_graph():
    # Crop the graph region from the screenshot
    img   = Image.open("static/screenshot.png")
    width, height = img.size
    crop_box = (0, 470, width, 1100)
    graph = img.crop(crop_box)
    graph.save("static/graph.png")

    # Convert PIL image to numpy array for EasyOCR
    graph_np    = np.array(img)
    ocr_results = reader.readtext(graph_np, detail=0)
    extracted_text = " ".join(ocr_results)

    print("Extracted Text:", extracted_text.lower())

    # Choose redirect URL based on presence of "normal"
    if "normal" in extracted_text.lower():
        redirect_url = "http://localhost:3000/normal"
    else:
        redirect_url = "http://localhost:3000/arrythmia"

    return render_template('graph.html', redirect_url=redirect_url)

if __name__ == '__main__':
    app.run(debug=True)
