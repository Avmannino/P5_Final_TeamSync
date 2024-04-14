from flask import Blueprint, jsonify

bp = Blueprint('team', __name__)

@bp.route('/api')
def api():
    return jsonify({"message": "Welcome to the Sports Team Manager API!"})
