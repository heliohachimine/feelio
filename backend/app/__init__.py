from flask import Flask
from .config import Config
from .database import db, migrate
from app.controllers import all_blueprints
from flask_cors import CORS
from flask_jwt_extended import JWTManager

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(Config)
    jwt = JWTManager(app)
    db.init_app(app)
    migrate.init_app(app, db)

    for bp in all_blueprints:
        app.register_blueprint(bp)

    with app.app_context():
        db.create_all()

    return app
