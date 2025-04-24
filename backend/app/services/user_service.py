from ..models import User
from ..database import db

def get_user(email):
    user = User.query.filter_by(email=email).first()
    return user

def create_user(email, password):
    new_user = User(email=email)
    new_user.set_password(password)

    db.session.add(new_user)
    db.session.commit()
    return new_user
