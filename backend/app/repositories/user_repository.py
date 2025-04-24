from ..services.user_service import get_user, create_user

def signup(email, password):
    existing_user = get_user(email)
    if not existing_user:
        return create_user(email, password)
