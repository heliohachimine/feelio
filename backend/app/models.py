from .database import db
from sqlalchemy import Enum
import enum
from datetime import date
from datetime import datetime
from sqlalchemy.orm import validates, relationship
from sqlalchemy import ForeignKey
from werkzeug.security import generate_password_hash, check_password_hash


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    dailies = db.relationship("Daily", back_populates="user")
    # name = db.Column(db.String(40), nullable=False)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def to_dict(self):
        return {"id": self.id, "email": self.email}

class FeelingEnum(enum.Enum):
    joy = 'joy'
    sadness = 'sadness'
    anger = 'anger'
    love = 'love'
    afraid = 'afraid'
    peace = 'peace'
    surprise = 'surprise'
    hope = 'hope'
    nostalgia = 'nostalgia'
    confidence = 'confidence'
    none = 'none'

class Daily(db.Model):
    __tablename__ = 'daily'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.Text, nullable=False)
    feeling = db.Column(Enum(FeelingEnum), nullable=False)
    humor_score = db.Column(db.Integer, nullable=False, default=0, )
    date = db.Column(db.Date, nullable=False, default=date.today)
    user_id = db.Column(db.Integer, ForeignKey("user.id", name="fk_daily_user_id"))

    user = db.relationship("User", back_populates="dailies")
    @validates('humor_score')
    def validate_humor_score(self, key, value):
        if value < -5 or value > 5:
            raise ValueError("humor_score must be between -5 and 5")
        return value

    def to_dict(self):
        return {
            "id": self.id,
            "date": self.date.strftime("%Y-%m-%d"),
            "description": self.description,
            "feeling": self.feeling.value
        }
