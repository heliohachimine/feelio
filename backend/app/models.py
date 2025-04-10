from .database import db
from sqlalchemy import Enum
import enum
from datetime import date
from datetime import datetime

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
    date = db.Column(db.Date, nullable=False, default=date.today)

    def to_dict(self):
        return {
            "id": self.id,
            "date": self.date.strftime("%Y-%m-%d"),
            "description": self.description,
            "feeling": self.feeling.value
        }
