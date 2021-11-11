# mongo.py
from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from pymongo import MongoClient
app = Flask(__name__)
app.config['MONGO_DBNAME'] = 'local'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/local'
mongo = PyMongo(app)
client = MongoClient('localhost', 27017)
db = client['local']
collection = db['startup_log']
@app.route('/events', methods=['GET'])
def get_all_stars():
  star = collection
  output = []
  for s in star.find():
    output.append({'event_name' : s['event_name'], 'date' : s['date'],'time':s['time'],'location':['location'],'attenders' : s['attenders']})
  return jsonify({'result' : output})
@app.route('/update', methods=['POST'])
def update():
  event_name = request.json['event_name']
  date = request.json['date']
  time = request.json['time']
  attend = request.json['attend'][-1]
  star = mongo.db.startup_log
  event = collection.find_one({"event_name": event_name,"date":date,"time": time})
  star.update_one({"events": event},{"$push":  {"attenders":  attend } }
)
@app.route('/post_data', methods=['POST'])
def add_star():
  star = collection
  event_name = request.json['event_name']
  date = request.json['date']
  time = request.json['time']
  location = request.json['location']
  attenders = request.json['attenders']
  star_id = star.insert({'event_name' : event_name, 'date' : date,'time':time,'location':location,'attenders':attenders})
  new_star = star.find_one({'_id': star_id })
  output = {'name' : new_star['name'], 'distance' : new_star['distance']}
  return jsonify({'result' : output})

if __name__ == '__main__':
    app.run(debug=True)
