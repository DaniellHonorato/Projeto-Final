# Documentação do Projeto: Caminho Ninja

## 1. Visão Geral do Projeto
O **Caminho Ninja** é um projeto individual desenvolvido na SPTech (WebDataViz). O objetivo é conectar a paixão por tecnologia com os valores dos protagonistas de três grandes animes shounen: **Naruto**, **Haikyuu!!** e **Black Clover**. O projeto possui páginas interativas que explicam a filosofia de cada protagonista e como os valores de resiliência, colaboração e dedicação se aplicam à vida na área de tecnologia.

O sistema conta com um Front-End rico e responsivo (HTML, CSS e JS Vanilla) e um Back-End em Node.js com banco de dados MySQL para controle de usuários, recomendações dinâmicas de animes e uma dashboard com métricas reais (Chart.js).

### Objetivos de Desenvolvimento Sustentável (ODS) da ONU
O projeto se conecta diretamente a três ODS:
- **ODS 3 (Saúde e Bem-Estar):** Aborda a saúde mental e emocional do programador iniciante, mostrando como hobbies e as filosofias inspiradoras de resiliência e foco mental dos animes servem de suporte para enfrentar os desafios de aprendizagem e frustrações comuns na área de tecnologia.
- **ODS 8 (Trabalho Decente e Crescimento Econômico):** Estimula a formação de profissionais com fortes valores de trabalho em equipe (colaboração inspirada em Haikyuu!!) e resiliência, gerando programadores mais bem-preparados emocionalmente e produtivos para contribuir de forma saudável com o mercado de TI.
- **ODS 16 (Paz, Justiça e Instituições Eficazes):** Alinha-se perfeitamente com os enredos das obras retratadas (como a busca incessante por paz e alianças de Naruto, e a luta de Asta contra as injustiças sociais e de classe em Black Clover). A nível técnico, a aplicação promove a justiça digital, a segurança e a integridade de dados do usuário através de fortes mecanismos de validação, segurança de senhas e do CAPTCHA matemático/binário.

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
- Layout de 3 colunas: informações do anime, informações e filosofia do protagonista (seção antiga de estatísticas/barras de atributos removida para maior foco no conteúdo teórico) e frases filosóficas com contexto.

### 3.3. Autenticação (Login e Cadastro)
- **Design Espelhado (Split-Screen):** Tanto o login quanto o cadastro utilizam a mesma estrutura harmonizada de duas colunas (45% com imagem dos protagonistas na esquerda e 55% com os formulários na direita), garantindo uma transição extremamente suave e visual estável.
- **Recepção Neutra e Temática:** Acolhimento neutro de gênero com o título imersivo **"Inicie sua jornada!"** (cadastro) e **"De volta à vila?"** (login).
- **Cadastro:** Disposto de forma organizada em **3 linhas e 2 colunas** (Nome/E-mail, Senha/Confirmar, Pergunta/CAPTCHA). Possui validação de campos vazios e anti-duplicidade.
- **Validação de Senha de Dois Modos:**
  * *Validação Simples:* Ativa por padrão (`senhaVar != confirmacaoSenhaVar`) para facilitar cadastros rápidos na apresentação.
  * *Verificação Completa (Comentada em bloco `/* ... */`):* Validação robusta de segurança pronta para ser ativada na hora da apresentação (verifica comprimento mínimo de 8 caracteres via `.length` e presença de caracteres especiais usando um **vetor** de caracteres especiais percorrido via `.indexOf()`).
- **CAPTCHA Matemático/Binário:** O sistema gera uma multiplicação aleatória. O usuário responde em decimal, e o JavaScript converte ambos os valores para **Binário** (`toString(2)`) para comparar — aplicação direta de lógica computacional.
- **Login com Sessão:** Armazenado em `sessionStorage` para proteção de rotas da Dashboard.
- **Loading:** Carregador circular de alta performance feito em CSS puro (na cor laranja da identidade visual), garantindo suavidade e leveza em relação a GIFs.

### 3.4. Dashboard (Painel do Usuário)
- **KPIs:** Quantos usuários já assistiram anime, quantos nunca assistiram, total de cadastrados e o **Anime Mais Favoritado da Vila** (com título e contagem de votos buscados do banco).
- **Gráfico de Rosca (Doughnut):** Proporção do perfil do público cadastrado.
- **Gráfico de Linha:** Receita global da indústria de animes (2015–2024) em bilhões US$, buscada dinamicamente do banco de dados.

### 3.5. Recomendações de Animes
- Grade de 13 animes com modal de detalhes (sinopse, gênero, recomendação).
- Dados carregados **dinamicamente** via `fetch("/animes/listar")` — a lista vem do banco de dados, não do código-fonte.
- **Sistema de Favoritos (Relacionamento N:N):** No modal de cada anime, há um botão de coração (❤️) interativo que permite favoritar e desfavoritar o anime em tempo real via Fetch API no banco de dados.

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
| `favorito` | Tabela ponte associativa para gerenciar os favoritos dos usuários |

### Relacionamentos
- **Relacionamento Relacional N:N (Muitos para Muitos):** Resolvido através da tabela associativa `favorito`, ligando a tabela `usuario` (`fk_usuario` -> `usuario.id`) e `anime` (`fk_anime` -> `anime.id`). Isso garante integridade referencial através de duas chaves estrangeiras.

### Comandos SQL utilizados
- `SELECT` com `COUNT`, `WHERE`, `ORDER BY`, `LIMIT`
- `INSERT INTO` e `DELETE` (para favoritar/desfavoritar)
- `JOIN` e `GROUP BY` (para buscar as estatísticas agregadas e descobrir o anime mais favoritado da vila na KPI)

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
    │   ├── animes.js
    │   └── favoritos.js
    ├── controllers/
    │   ├── usuarioController.js
    │   ├── medidaController.js
    │   ├── animeController.js
    │   └── favoritoController.js
    ├── models/
    │   ├── usuarioModel.js
    │   ├── medidaModel.js
    │   ├── animeModel.js
    │   └── favoritoModel.js
    └── database/
        ├── config.js
        └── script-tabelas.sql
```

---


*Projeto desenvolvido por Daniel Honorato — SPTech, 2026.*
