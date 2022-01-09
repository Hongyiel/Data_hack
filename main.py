import requests
import json
import get_data
from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)

response = requests.get("https://api.covidactnow.org/v2/states.json?apiKey=8d65e6de718b4c6da48d818e9a204909").text
# load data from json parser
response_info = json.loads(response)

s_data = []
# Start get_data.py
s_data = get_data._data(response_info )

@app.route("/")
@app.route("/home")
def home():
    return render_template("index111.html")

@app.route('/index')
def index():
    print("hello")
    return render_template("index.html", s_data=s_data)

# @app.route('/statementload/<string:statement>', methods=['POST'])
# def statementload(statement):
#     statement = json.loads(statement)
#     print(f"Statement is: {statement['state']}")
#     return 'info Recieved'


@app.route('/data', methods=['POST'])
def data():
    name=request.args.get('value')
    print('name',name)
    return render_template("data.html")


if __name__ == '__main__':
    app.run(debug=True, port=5001)


