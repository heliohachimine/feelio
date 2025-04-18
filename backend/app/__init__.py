from flask import Flask
from .config import Config
from .database import db
from .routes import routes
from flask_cors import CORS
from flask_jwt_extended import JWTManager

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(Config)
    app.config["JWT_SECRET_KEY"] = "sua_chave_super_secreta"
    jwt = JWTManager(app)
    db.init_app(app)
    app.register_blueprint(routes)

    with app.app_context():
        db.create_all()

    return app
