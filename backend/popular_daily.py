from app import create_app
from app.models import db, Daily, FeelingEnum
from datetime import datetime, timedelta
import random

app = create_app()

# Descrições por sentimento
descriptions = {
    FeelingEnum.positive: [
        'Dia muito produtivo e motivador.',
        'Resolvi pendências importantes.',
        'Recebi um elogio no trabalho!',
    ],
    FeelingEnum.neutral: [
        'Nada de especial aconteceu hoje.',
        'Mais um dia comum.',
        'Rotina tranquila.',
    ],
    FeelingEnum.negative: [
        'Me estressei com um problema técnico.',
        'Senti que não produzi nada.',
        'Recebi uma crítica difícil.',
    ]
}

with app.app_context():
    # Gera e insere dados dos últimos 15 dias
    base_date = datetime.now().date()

    for i in range(15):
        date = base_date - timedelta(days=i)
        feeling = random.choice(list(FeelingEnum))
        description = random.choice(descriptions[feeling])

        entry = Daily(date=date, description=description, feeling=feeling)
        db.session.add(entry)

    db.session.commit()
    print("✔️ Dados inseridos com sucesso via SQLAlchemy.")
