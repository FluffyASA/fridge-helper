from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import io
import json
import os
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


dishes_data = [
    {
        "name": "Sandwich",
        "ingredients": ["bread", "cheese", "butter"]
    },
    {
        "name": "Pasta",
        "ingredients": ["pasta", "tomato_sauce", "cheese"]
    },
    {
        "name": "Omelette",
        "ingredients": ["egg", "milk", "cheese"]
    },
    {
        "name": "Avocado Toast",
        "ingredients": ["bread", "avocado"]
    },
    {
        "name": "PBJ Sandwich",
        "ingredients": ["bread", "marmelade"]
    },
    {
        "name": "Tomato Soup",
        "ingredients": ["tomato", "onion", "garlic", "heavy_cream"]
    },
    {
        "name": "Fruit Salad",
        "ingredients": ["apple", "banana", "orange", "grapes"]
    }
]

def get_ingredients_for_dish(dish_name):
    for dish in dishes_data:
        if dish["name"].lower() == dish_name.lower():
            return [ingredient.lower() for ingredient in dish["ingredients"]]
    return []

# ---- REAL ROBOFLOW DETECTION ----
def detect_items_in_image(image_bytes):
    # Prepare Roboflow API call
    api_key = "YOUR_API_KEY_HERE"  # <-- Replace with your actual API key
    project = "smartfridgle-wso9t"
    version = "1"

    url = f"https://detect.roboflow.com/{project}/{version}?api_key={api_key}"

    # Send as form data instead of JSON
    files = {'file': ('image.jpg', image_bytes, 'image/jpeg')}
    response = requests.post(url, files=files)
    
    if response.status_code != 200:
        print("Roboflow error:", response.text)
        return []

    data = response.json()
    detected_items = list({pred["class"].lower() for pred in data.get("predictions", [])})
    print("Roboflow detected:", detected_items)
    return detected_items

@app.route('/detect', methods=['POST'])
def detect():
    image_file = request.files.get('image')
    dish = request.form.get('dish')

    if not image_file or not dish:
        return jsonify({"error": "Missing image or dish name"}), 400

    print(f"Received dish: {dish}")
    print(f"Received image: {image_file.filename}")

    # Read image bytes
    image_bytes = image_file.read()

    # Run actual detection
    detected_items = detect_items_in_image(image_bytes)
    print(f"Detected items: {detected_items}")

    # Check against dish requirements
    required_ingredients = get_ingredients_for_dish(dish)
    print(f"Required for '{dish}': {required_ingredients}")

    missing = [item for item in required_ingredients if item not in detected_items]

    return jsonify({
        "detected": detected_items,
        "missing": missing
    })

if __name__ == '__main__':
    app.run(debug=True)
