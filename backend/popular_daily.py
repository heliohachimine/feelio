import random
from datetime import date, timedelta

from app import create_app
from app.models import db, Daily, FeelingEnum

# Inicializa a app Flask
app = create_app()

# Lista de exemplos de descrições por sentimento
feeling_descriptions = {
    FeelingEnum.joy: "Hoje foi um dia maravilhoso, me senti muito feliz.",
    FeelingEnum.sadness: "Me senti meio pra baixo, nada pareceu dar certo.",
    FeelingEnum.anger: "Fiquei irritado com algumas situações do trabalho.",
    FeelingEnum.love: "Passei um tempo incrível com quem amo.",
    FeelingEnum.afraid: "Tive alguns momentos de insegurança hoje.",
    FeelingEnum.peace: "Um dia calmo, tranquilo e sem estresse.",
    FeelingEnum.surprise: "Recebi uma notícia inesperada que me deixou animado!",
    FeelingEnum.hope: "Estou confiante de que as coisas vão melhorar.",
    FeelingEnum.nostalgia: "Lembrei dos velhos tempos e bateu uma saudade boa.",
    FeelingEnum.confidence: "Consegui resolver tudo com segurança e assertividade."
}

# Gera n entradas aleatórias com datas consecutivas
def gerar_dados_ficticios(n=20):
    hoje = date.today()
    dados = []

    for i in range(n):
        data_dia = hoje - timedelta(days=i)
        sentimento = random.choice(list(FeelingEnum))
        descricao = feeling_descriptions[sentimento]

        daily = Daily(
            date=data_dia,
            feeling=sentimento,
            description=descricao
        )
        dados.append(daily)

    return dados

# Executa dentro do contexto da app Flask
with app.app_context():
    # DROP e CREATE na tabela daily
    Daily.__table__.drop(db.engine)
    Daily.__table__.create(db.engine)
    print("Tabela 'daily' reinicializada.")

    # Popula com dados novos
    dados = gerar_dados_ficticios()
    db.session.bulk_save_objects(dados)
    db.session.commit()
    print(f"{len(dados)} registros inseridos na tabela 'daily'.")
