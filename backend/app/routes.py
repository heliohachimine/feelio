from flask import Blueprint, request, jsonify
from .models import Daily, FeelingEnum
from .database import db
from app.generator import analyze

routes = Blueprint('routes', __name__)

@routes.route("/daily", methods=["POST"])
def create_daily():
    data = request.get_json()

    message = analyze(data.get("description"))

    daily = Daily(
        description=data.get("description"),
        feeling=FeelingEnum(message['feeling'])
    )
    db.session.add(daily)
    db.session.commit()
    return jsonify(daily.to_dict()), 201

@routes.route("/daily", methods=["GET"])
def get_daily():
    all = Daily.query.all()
    return jsonify([d.to_dict() for d in all])
