from .auth_controller import auth_bp
from .user_controller import user_bp
from .daily_controller import daily_bp

all_blueprints = [auth_bp, user_bp, daily_bp]
