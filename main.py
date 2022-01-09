import requests
import json
import get_data
from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)

response = requests.get("https://api.covidactnow.org/v2/states.json?apiKey=8d65e6de718b4c6da48d818e9a204909").text
# load data from json parser
response_info = json.loads(response)

real_data = []
pop_data = []
# Start get_data.py
s_data = get_data._data(response_info)
pop_data = get_data.pop_data(response_info)

for i in range(len(s_data)):
    real_data.append(get_data.all_data(s_data[i],pop_data[i]))
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

return_data = []
@app.route('/data', methods=['GET', 'POST'])
def data():
    global name
    if request.method == 'POST':
        name=request.args.get('value')
        # return_data = get_data.sorting_data(name,s_data,real_data)
    return render_template("data.html", return_data=get_data.sorting_data(name,s_data,real_data))

if __name__ == '__main__':
    app.run(debug=True, port=5001)


