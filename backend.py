from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/detect', methods=['POST'])
def detect():
    image = request.files.get('image')
    dish = request.form.get('dish')
    print("Received dish:", dish)
    print("Received image:", image.filename if image else "No image")
    # For now, just return a fake missing ingredients list
    return jsonify({"missing": ["cheese", "bread"]})

if __name__ == '__main__':
    app.run(debug=True)
