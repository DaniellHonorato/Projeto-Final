# Documentação do Projeto: Caminho Ninja

## 1. Visão Geral do Projeto
O **Caminho Ninja** é um projeto individual desenvolvido na SPTech (WebDataViz). O objetivo é conectar a paixão por tecnologia com os valores dos protagonistas de três grandes animes shounen: **Naruto**, **Haikyuu!!** e **Black Clover**. O projeto possui páginas interativas que explicam a filosofia de cada protagonista e como os valores de resiliência, colaboração e dedicação se aplicam à vida na área de tecnologia.

O sistema conta com um Front-End rico e responsivo (HTML, CSS e JS Vanilla) e um Back-End em Node.js com banco de dados MySQL para controle de usuários, recomendações dinâmicas de animes e uma dashboard com métricas reais (Chart.js).

### Objetivos de Desenvolvimento Sustentável (ODS) da ONU
O projeto se conecta diretamente a três ODS:
- **ODS 3 (Saúde e Bem-Estar):** Aborda a saúde mental do programador iniciante, usando hobbies e valores de animes como ferramenta de resiliência emocional.
- **ODS 4 (Educação de Qualidade):** Promove a ideia de que dedicação e esforço contínuo superam barreiras educacionais, inspirado na história do Asta (Black Clover).
- **ODS 8 (Trabalho Decente e Crescimento Econômico):** Fomenta profissionais colaborativos e resilientes, valores essenciais para um mercado de trabalho de TI saudável.

---

## 2. Arquitetura do Sistema (MVC)
A aplicação segue a arquitetura **MVC** (Model-View-Controller) recomendada pela SPTech:

- **`public/` (View):** Páginas HTML, arquivos CSS, imagens e JavaScript client-side (`sessao.js`).
- **`src/routes/`:** Define os endpoints da API RESTful.
- **`src/controllers/`:** Lógica de requisição e resposta (validações de campos, regras de negócio).
- **`src/models/`:** Queries SQL que se comunicam diretamente com o banco de dados MySQL.
- **`src/database/config.js`:** Gerencia a conexão com o banco, separando ambientes de desenvolvimento (`.env.dev`) e produção (`.env`).

---

## 3. Funcionalidades

### 3.1. Landing Page (Home)
- **Hero:** Banner central com frase inspiracional.
- **Valores Ninja:** Cards interativos relacionando Resiliência (Naruto), Colaboração (Haikyuu) e Dedicação (Black Clover) à área de TI.
- **Protagonistas:** Seção de redirecionamento para as páginas de universo de cada anime.
- **Call-to-Action:** Botão animado "Explore mais universos" direcionando para o cadastro.

### 3.2. Páginas de Universo (Naruto, Haikyuu!!, Black Clover)
- Layout de 3 colunas: informações do anime, protagonista com barras de atributos animadas e frases filosóficas com contexto.

### 3.3. Autenticação (Login e Cadastro)
- **Cadastro:** Validação de campos em branco, verificação de senhas iguais e anti-duplicidade (nome/email já cadastrado).
- **CAPTCHA Matemático/Binário:** O sistema gera uma multiplicação aleatória. O usuário responde em decimal, e o JavaScript converte ambos os valores para **Binário** (`toString(2)`) para comparar — aplicação direta de lógica computacional e operações matemáticas.
- **Login com Sessão:** Dados do usuário (id, nome, email) armazenados em `sessionStorage` para proteger as rotas da Dashboard.
- **Loading:** GIF animado exibido durante o processamento da requisição.

### 3.4. Dashboard (Painel do Usuário)
- **KPIs:** Quantos usuários já assistiram anime e quantos nunca assistiram.
- **Gráfico de Rosca (Doughnut):** Proporção do perfil do público cadastrado.
- **Gráfico de Linha:** Receita global da indústria de animes (2015–2024) em bilhões US$, buscada dinamicamente do banco de dados.

### 3.5. Recomendações de Animes
- Grade de 13 animes com modal de detalhes (sinopse, gênero, recomendação).
- Dados carregados **dinamicamente** via `fetch("/animes/listar")` — a lista vem do banco de dados, não do código-fonte.

### 3.6. Linha da Vida
- Timeline pessoal documentando a jornada com animes desde 2019, com os marcos mais importantes de cada ano.

---

## 4. Banco de Dados (MySQL)

### Tabelas
| Tabela | Descrição |
|---|---|
| `usuario` | Armazena os usuários cadastrados no site |
| `anime` | Lista de animes recomendados (migrada do front para o banco) |
| `crescimento_anime` | Dados históricos da receita global da indústria de animes (2015–2024) |

### Relacionamentos
`usuario` e `crescimento_anime` são tabelas independentes. `anime` é independente e serve a lista de recomendações de forma dinâmica.

### Comandos SQL utilizados
- `SELECT` com `COUNT`, `WHERE`, `ORDER BY`
- `INSERT INTO`

---

## 5. Tecnologias Utilizadas
- **Front-End:** HTML5, CSS3, JavaScript Vanilla, Chart.js
- **Back-End:** Node.js, Express.js, Cors, Dotenv
- **Banco de Dados:** MySQL
- **Controle de Versão:** Git / GitHub

---

## 6. Estrutura de Pastas
```
Projeto-Individual/
├── app.js                    # Servidor principal (Node.js/Express)
├── public/                   # Front-End (View)
│   ├── index.html
│   ├── login.html
│   ├── cadastro.html
│   ├── universo-naruto.html
│   ├── universo-haikyuu.html
│   ├── universo-blackclover.html
│   ├── dashboard/
│   │   ├── dashboard.html
│   │   ├── recomendacoes.html
│   │   └── linha-vida.html
│   ├── css/
│   │   ├── estilo.css
│   │   ├── universo.css
│   │   ├── auth.css
│   │   └── dashboard.css
│   ├── js/
│   │   └── sessao.js
│   └── assets/
│       ├── icon/
│       └── imgs/
└── src/                      # Back-End (MVC)
    ├── routes/
    │   ├── usuarios.js
    │   ├── medidas.js
    │   └── animes.js
    ├── controllers/
    │   ├── usuarioController.js
    │   ├── medidaController.js
    │   └── animeController.js
    ├── models/
    │   ├── usuarioModel.js
    │   ├── medidaModel.js
    │   └── animeModel.js
    └── database/
        ├── config.js
        └── script-tabelas.sql
```

---

*Projeto desenvolvido por Daniel Honorato — SPTech, 2026.*
