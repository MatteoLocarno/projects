from flask import Flask, jsonify, render_template
import json

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/f1')
def f1():
    return render_template('f1.html')

@app.route('/motogp')
def motogp():
    return render_template('motogp.html')

@app.route('/api/f1')
def get_f1_standings():
    with open('f1_standings.json') as f:
        data = json.load(f)
    return jsonify(data)

@app.route('/api/motogp')
def get_motogp_standings():
    with open('motogp_standings.json') as f:
        data = json.load(f)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
