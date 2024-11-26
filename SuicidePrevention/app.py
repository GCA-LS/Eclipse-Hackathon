from flask import Flask, render_template, request
import json
import random
import nltk
import pickle
import numpy as np
from keras.models import load_model

# Load model, intents, etc.
model = load_model('model.h5')
intents = json.loads(open('intents.json').read())
words = pickle.load(open('texts.pkl', 'rb'))
classes = pickle.load(open('labels.pkl', 'rb'))

# Define functions for cleaning, prediction, and response generation
def clean_up_sentence(sentence):
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words = [word.lower() for word in sentence_words]  # Remove lemmatization for now
    return sentence_words

def bow(sentence, words):
    sentence_words = clean_up_sentence(sentence)
    bag = [0]*len(words)  
    for s in sentence_words:
        for i, w in enumerate(words):
            if w == s: 
                bag[i] = 1
    return np.array(bag)

def predict_class(sentence, model):
    p = bow(sentence, words)
    res = model.predict(np.array([p]))[0]
    ERROR_THRESHOLD = 0.25
    results = [[i, r] for i, r in enumerate(res) if r > ERROR_THRESHOLD]
    results.sort(key=lambda x: x[1], reverse=True)
    return [{"intent": classes[r[0]], "probability": str(r[1])} for r in results]

def get_response(ints, intents_json):
    if ints:
        tag = ints[0]['intent']
        for intent in intents_json['intents']:
            if intent['tag'] == tag:
                return random.choice(intent['responses'])
    return "Sorry, I didn't understand that."

# Initialize Flask app
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    print("User input:", userText)

    # Get response from model
    ints = predict_class(userText, model)
    bot_response = get_response(ints, intents)

    return bot_response

if __name__ == "__main__":
    app.run(debug=True)
