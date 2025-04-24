from ..models import Daily
from ..database import db

def create_daily(description, feeling, user_id):
    daily = Daily(
        description=description,
        feeling=feeling,
        user_id=user_id
    )
    db.session.add(daily)
    db.session.commit()

def get_dailies(user_id, initial_date):
    query = Daily.query.filter_by(user_id=user_id)
    if initial_date:
        query = query.filter(Daily.date >= initial_date)
    return query.all()
