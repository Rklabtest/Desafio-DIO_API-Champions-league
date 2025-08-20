# Champions League API

Este projeto básico de API tem por finalidade didática e baseia-se nos dados da UEFA Champions League, que fornece informações sobre equipes e jogadores. 

Desenvolvido em Node.js, Typescript e Express, os arquivos json simulam os dados da API e a arquitetura em camadas com separação de responsabilidades permite uma fácil manutenção e escalabilidade do projeto.

## Arquitetura dos dados:

### Jogadores:

```
[
  {
    "id": 1,
    "name": "Kylian Mbappé",
    "club": "Paris Saint-Germain",
    "nationality": "France",
    "position": "Forward",
    "statistics": {
      "Overall": 91,
      "Pace": 97,
      "Shooting": 89,
      "Passing": 80,
      "Dribbling": 92,
      "Defending": 36,
      "Physical": 76
    }
  }
]
```

### Clubes
```
[
  {
    "id": 1,
    "name": "Real Madrid"
  }
]
```


## Endpoints
### Jogadores:
- `GET /players` - Lista todos os jogadores cadastrados nesta API;
- `GET /players/:id` - Pesquisa jogador por ID;
- `POST /players` - Insere novo jogador;
- `PATCH /players/:id` - Atualiza estatísticas do jogador;
- `DELETE /players/:id` - Remove jogador.

### Clubes:
- `GET /clubs` - Lista todos os clubes cadastrados nesta API.



## Como usar

- Baixe o repositório deste projeto;
- Instale as dependências com `npm install`;
- Inicie o servidor com `npm start:dev`
