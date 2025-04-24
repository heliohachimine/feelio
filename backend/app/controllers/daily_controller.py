from flask import Blueprint, request, jsonify, g
from flask_jwt_extended import jwt_required, get_jwt_identity, verify_jwt_in_request

daily_bp = Blueprint('daily', __name__)

@daily_bp.before_request
def load_logged_user():
    verify_jwt_in_request()
    g.user_id = get_jwt_identity()

@daily_bp.route("/daily", methods=["POST"])
@jwt_required()
def create_daily():
    data = request.get_json()
    daily = create_daily(
        description=data.get("description"),
        user_id=g.user_id
    )
    return jsonify(daily.to_dict()), 201

@daily_bp.route("/daily", methods=["GET"])
@jwt_required()
def get_daily():
    daily_user = get_daily(g.user_id)
    return jsonify([d.to_dict() for d in daily_user])

@daily_bp.route("/daily/analyze", methods=["GET"])
@jwt_required()
def get_daily_analyze():
    days_param = request.args.get("days", default=7, type=int)
    message = get_daily_analyze(user_id=g.user_id, how_many_days=days_param)

    return {
        "message": message
    }
