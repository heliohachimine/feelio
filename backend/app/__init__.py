from flask import Flask
from .config import Config
from .database import db, migrate
from .routes import routes
from flask_cors import CORS
from flask_jwt_extended import JWTManager

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(Config)
    jwt = JWTManager(app)
    db.init_app(app)
    migrate.init_app(app, db)
    app.register_blueprint(routes)
    print("ROTAS REGISTRADAS:")
    print(app.url_map)

    with app.app_context():
        db.create_all()

    return app
