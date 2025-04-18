import requests
import json


OLLAMA_URL = "http://localhost:11434/api/generate"  # API do Ollama

def analyze(message):
    prompt = f"Classifique o sentimento do autor do seguinte texto como joy (alegre), sadness (triste), anger (com raiva), love (apaixonado), afraid (com medo), peace (tranquilo), surprise (surpreso), hope (esperançoso), nostalgia (se recordando de coisas do passado), confidence (confiante em algo)  ou none (caso não seja possivel reconhecer nenhum sentimento expressivo no texto)e responda somente  JSON com a resposta usando a chave 'feeling' e uma mensagem para consolar a  pessoa que escreveu esse texto na chave 'message': {message}"
    response = requests.post(OLLAMA_URL, json={
        "model": "llama3.2:latest",
        "prompt": prompt,
        "stream": False
    })
    response_data = response.json()  # Isso pega o JSON retornado pela API do Llama

    # Retornando a resposta de forma adequada
    print("TODO O RESPONSE", response_data["response"])
    return json.loads(response_data["response"])
