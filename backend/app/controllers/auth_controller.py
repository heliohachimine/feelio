from flask import Blueprint, request, jsonify
from ..models import User
from flask_jwt_extended import create_access_token

auth_bp = Blueprint('auth', __name__)

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()

    if user and user.check_password(password):
        access_token = create_access_token(identity=str(user.id))
        return jsonify({"access_token": access_token, "user": user.to_dict()}), 200

    return jsonify({"error": "Credenciais inválidas"}), 401
