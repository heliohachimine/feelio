from flask import Flask
from .config import Config
from .database import db
from .routes import routes
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(Config)

    db.init_app(app)
    app.register_blueprint(routes)

    with app.app_context():
        db.create_all()

    return app
