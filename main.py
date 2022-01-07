import requests
import json
import get_data
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("index111.html")

@app.route('/index')
def index():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True, port=5001)

response = requests.get("https://api.covidactnow.org/v2/states.json?apiKey=8d65e6de718b4c6da48d818e9a204909").text
# load data from json parser
response_info = json.loads(response)

# Start get_data.py
get_data._data(response_info)
