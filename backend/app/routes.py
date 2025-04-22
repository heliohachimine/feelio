from flask import Blueprint, request, jsonify
from .models import Daily, FeelingEnum, User
from .database import db
from app.generator import analyze, analyze_days
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity

routes = Blueprint('routes', __name__)

@routes.route("/daily", methods=["POST"])
@jwt_required()
def create_daily():
    data = request.get_json()
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "Usuário não encontrado"}), 404

    message = analyze(data.get("description"))

    daily = Daily(
        description=data.get("description"),
        feeling=FeelingEnum(message['feeling']),
        user_id=user.id
    )
    db.session.add(daily)
    db.session.commit()
    return jsonify(daily.to_dict()), 201

@routes.route("/daily", methods=["GET"])
@jwt_required()
def get_daily():
    print("entrou")
    user_id = int(get_jwt_identity())
    user = User.query.get(user_id)
    print(user)
    if not user:
        return jsonify({"error": "Usuário não encontrado"}), 404
    daily_user = Daily.query.filter_by(user_id=user.id).all()
    return jsonify([d.to_dict() for d in daily_user])

@routes.route("/daily/analyze", methods=["GET"])
@jwt_required()
def get_daily_analyze():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "Usuário não encontrado"}), 404
    daily_user = Daily.query.filter_by(user_id=user.id).all()
    days = [d.description for d in daily_user]
    print(days)
    message = analyze_days(days)
    return {
        "message": message
    }


@routes.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()

    if user and user.check_password(password):
        access_token = create_access_token(identity=str(user.id))
        return jsonify({"access_token": access_token, "user": user.to_dict()}), 200

    return jsonify({"error": "Credenciais inválidas"}), 401

@routes.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Email e senha são obrigatórios"}), 400

    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"error": "Email já cadastrado"}), 409

    new_user = User(email=email)
    new_user.set_password(password)

    db.session.add(new_user)
    db.session.commit()

    return jsonify(new_user.to_dict()), 201
