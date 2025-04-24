from flask import Blueprint, request, jsonify
from ..repositories.user_repository import create_user

user_bp = Blueprint('user', __name__)

@user_bp.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Email e senha são obrigatórios"}), 400

    new_user = create_user(email, password)

    return jsonify(new_user.to_dict()), 201
