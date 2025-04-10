import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABAE_URL", 'sqlite:///banco.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
