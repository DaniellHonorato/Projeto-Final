# Documentação do Projeto: Caminho Ninja

## 1. Visão Geral do Projeto
O **Caminho Ninja** é um projeto individual desenvolvido no contexto da matéria de WebDataViz (SPTech). O objetivo é conectar a paixão por tecnologia com a essência de três grandes animes Shounen: **Naruto**, **Haikyuu!!** e **Black Clover**. O projeto possui páginas interativas e dinâmicas que explicam a filosofia dos protagonistas de cada anime e como esses valores (resiliência, colaboração e dedicação) se aplicam na área de tecnologia e desenvolvimento de software.

O sistema conta com um Front-End rico e responsivo (HTML, CSS e JS Vanilla) e um Back-End robusto construído em Node.js com banco de dados MySQL para controle de usuários e dashboard com métricas reais (Chart.js).

## 2. Estrutura do Sistema (Arquitetura)
A aplicação segue a arquitetura de **MVC** (Model-View-Controller) simplificada e recomendada pelo padrão SPTech:
- **`public/` (View):** Contém todas as páginas HTML, arquivos CSS (`estilo.css`, `universo.css`, `auth.css`, `dashboard.css`), imagens e o client-side JavaScript (`sessao.js`).
- **`src/routes/`:** Define as rotas (Endpoints) para API RESTful.
- **`src/controllers/`:** Responsável pela lógica de requisição e resposta do servidor (validações).
- **`src/models/`:** Contém as Queries (instruções SQL) para conectar e manipular o banco de dados.
- **`src/database/`:** Arquivo `config.js` que gerencia a conexão direta com o MySQL, separando ambientes de desenvolvimento e produção através do arquivo `.env`.

## 3. Funcionalidades Desenvolvidas

### 3.1. Landing Page (Home)
- **Apresentação Hero:** Banner central focado em tecnologia com estética de animes.
- **Valores Ninja:** Cards interativos que relacionam valores profissionais (Resiliência, Colaboração, Dedicação) aos animes (Naruto, Haikyuu, Black Clover).
- **Explorando Universos:** Seção de redirecionamento para as páginas específicas de cada anime, destacando as filosofias dos protagonistas.

### 3.2. Páginas de Universo (Naruto, Haikyuu, Black Clover)
- **Layout de 3 Colunas Responsivo:** 
  - *Esquerda:* Informações do Anime (gênero, episódios, autor).
  - *Centro:* Protagonista (história, barras animadas de atributos).
  - *Direita:* Filosofias (3 frases célebres de cada protagonista e o contexto da lição aplicável na vida real).
- **Design Temático:** A cor e os ícones mudam dependendo do universo acessado (Laranja para Naruto, Prata para Haikyuu e Vermelho Intenso para Black Clover).

### 3.3. Autenticação (Login e Cadastro)
- **Cadastro Seguro:** O usuário precisa fornecer nome, e-mail e senha. Há validação para garantir que as senhas coincidem e os campos não estão em branco.
- **Anti-Duplicidade:** O Back-End verifica o banco de dados e impede a criação de uma conta se o *Nome* ou o *E-mail* já estiverem cadastrados.
- **Validação CAPTCHA (Binário/Matemático):** Durante o cadastro, o sistema gera uma conta de multiplicação de números de 1 a 10. O usuário insere a resposta em formato decimal, mas por trás dos panos, o JavaScript a converte para número binário para validar a integridade.
- **Login com Sessão:** O sistema armazena os dados básicos de identificação (Session Storage) e mantém as rotas da Dashboard seguras.

### 3.4. Dashboard e Recomendações
- **KPIs (Indicadores-chave):** Mostra dinamicamente quantos usuários da plataforma já assistiram a animes e quantos nunca assistiram.
- **Gráfico de Pizza:** Exibe visualmente a proporção do perfil do público cadastrado.
- **Gráfico de Linha:** Chart.js configurado para buscar de forma assíncrona dados da receita global da indústria de animes.
- **Recomendações:** Uma grade de 10 recomendações com "Modais" personalizados, contendo imagens (`.jpg` na pasta local), gêneros e sinopses dinâmicas via JS.

## 4. Banco de Dados (MySQL)
O banco de dados armazena as seguintes informações essenciais:
- `id` (INT PRIMARY KEY AUTO_INCREMENT)
- `nome` (VARCHAR)
- `email` (VARCHAR UNIQUE)
- `senha` (VARCHAR)
- `ja_viu_anime` (TINYINT - 1 ou 0)

## 5. Tecnologias Utilizadas
- **Front-End:** HTML5, CSS3, JavaScript (Vanilla), Chart.js
- **Back-End:** Node.js, Express, Cors
- **Banco de Dados:** MySQL
- **Controle de Versão:** Git / GitHub

---
*Projeto 95% concluído, focado na entrega da sprint final da SPTech com layout completamente otimizado.*
