from ..services.daily_service import create_daily, get_dailies
from ..generator import analyze, analyze_days
from datetime import date, timedelta


def create_daily(description, user_id):
    result = analyze(description)
    create_daily(description, result.feeling, user_id)
    return result

def get_dailies(user_id):
    return get_dailies(user_id=user_id)

def analyze_days(user_id, how_many_days):
    initial_date = date.today() - timedelta(days=how_many_days)
    daily_user = get_dailies(user_id=user_id, initial_date=initial_date)
    days = [d.description for d in daily_user]
    message = analyze_days(days)
    return message
