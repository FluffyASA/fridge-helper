Missing Ingredients Predictor – Sparkathon 2025

Team name: Epsilon
 Members:
Arathi A S  https://www.linkedin.com/in/arathi-a-s-035004250/
Powrohittham Samhitha Datta  https://www.linkedin.com/in/p-samhitha-datta-017108288/
Sri Varsha S https://www.linkedin.com/in/sri-varsha-s/
Koti Harshini https://www.linkedin.com/in/koti-harshini-7830b9301/


This project predicts the missing ingredients needed to complete a recipe using the ingredients you already have. 
Powered by a trained Roboflow model, Flask backend, and React frontend.

Features:

->Enter available ingredients in your kitchen

->AI model (via Roboflow) predicts what's missing

->Instant results via Flask API

->Simple and clean React interface for better user experience

Tech Stack:

->React for frontend UI

->Flask for backend API server

->Robolflow hosted ML model for predictions

 How It Works:

1. User inputs the dish and the picture of their fridge.

2. The frontend sends this data to the Flask API.

3. Flask forwards it to the Roboflow model, which returns a prediction of missing ingredients as a list.

4. The prediction is shown on the frontend in real-time.



To run this project on your computer:
  **Clone repo**

```bash
git clone <your-repository-url>
cd fridge-helper
```

### 2. Set Up the Backend (Flask)

 **Install Python dependencies:**


   ```bash
   pip install -r requirements.txt
   ```

   3. **Start the Flask backend server:**

   ```bash
   python backend.py
   ```

   The backend will start running on `http://localhost:5000`

   4. Set Up the Frontend (React)

 **Install Node.js dependencies:**
   ```bash
   npm install
   ```

**Start the React development server:**
   ```bash
   npm start
   ```

   **Open your browser** and navigate to `http://localhost:3000`
   



