from PIL import Image
import easyocr
import numpy as np
import sys
import os

reader = easyocr.Reader(['en'], gpu=False)

def run():
    img_path = "public/screenshot.png"
    img = Image.open(img_path)
    width, height = img.size
    crop_box = (0, 470, width, 1100)
    graph = img.crop(crop_box)
    graph.save("public/graph.png")

    graph_np = np.array(graph)
    result = reader.readtext(graph_np, detail=0)
    text = " ".join(result).lower()

    if "normal" in text:
        print("normal")
    else:
        print("arrythmia")

if __name__ == "__main__":
    run()