from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from models import db, Pitcher
from config import Config  # Assuming your config file is in the backend package

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json_compact = False

db.init_app(app)
migrate = Migrate(app, db)

@app.route('/pitchers')
def get_pitchers():
    pitchers = Pitcher.query.all()
    return jsonify([p.to_dict() for p in pitchers]), 200

if __name__ == '__main__':
    app.run(port=5555, debug=True)
