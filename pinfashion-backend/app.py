from flask import Flask, jsonify, request, render_template
from analyzers.skin_analyzer import analyze_skin
from analyzers.face_analyzer import analyze_face
from analyzers.body_shape_analyzer import analyze_body
from chatbot.chat import generate_reply 
from flask_cors import CORS 

app = Flask(__name__)
CORS(app) 


# Home Page

@app.route('/')
def index():
    return render_template('chatbox.html')  

#  Chatbox Route (GET)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_msg = data.get('message', '')
    bot_reply = generate_reply(user_msg)
    return jsonify({'reply': bot_reply})

if __name__ == '__main__':
    app.run(debug=True)

# Skin Analyzer Routes

@app.route('/skin-analyzer')
def skin_analyzer_page():
    return render_template('skinanalyzer.html') 

@app.route('/analyze-skin', methods=['POST'])
def skin_route():
    data = request.json
    result = analyze_skin(data)
    return jsonify(result)

tone_palettes = {
    "warm": ["Peach", "Coral", "Olive", "Gold"],
    "cool": ["Lavender", "Rose Pink", "Mint", "Silver"],
    "neutral": ["Ivory", "Blush", "Taupe", "Gray"]
}

@app.route('/get-palette', methods=['POST'])
def get_palette():
    data = request.get_json()
    tone = data.get('tone')
    colors = tone_palettes.get(tone, ["No colors found"])
    return jsonify({'colors': colors})

from analyzers.face_analyzer import analyze_face

def main():
    input_data = "some face data"  # Just an example input
    result = analyze_face(input_data)
    print(result)

if __name__ == "__main__":
    main()



#  Face & Body Analyzer Routes
# 
@app.route('/analyze-face', methods=['POST'])
def face_route():
    data = request.json
    result = analyze_face(data)
    return jsonify(result)

@app.route('/analyze-body', methods=['POST'])
def body_route():
    data = request.json
    result = analyze_body(data)
    return jsonify(result)


#  GPT/AI Chat Route (Optional)

@app.route('/chat', methods=['POST'])
def chat_route():
    data = request.json
    message = data.get("message")
    reply = get_styling_reply(message)
    return jsonify({"reply": reply})


#  Run the Flask App

if __name__ == '__main__':
     app.run(debug=True, port=5002)


@app.route('/')
def home():
    return render_template('chatbox.html')



