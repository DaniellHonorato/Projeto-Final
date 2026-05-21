var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function autenticar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, nome, email, ja_viu_anime AS jaViuAnime FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha, jaViuAnime) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, jaViuAnime);
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, ja_viu_anime) VALUES ('${nome}', '${email}', '${senha}', ${jaViuAnime});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorEmail(email) {
    console.log("ACESSEI O USUARIO MODEL - function buscarPorEmail()");
    var instrucaoSql = `
        SELECT id FROM usuario WHERE email = '${email}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorNomeOuEmail(nome, email) {
    console.log("ACESSEI O USUARIO MODEL - function buscarPorNomeOuEmail()");
    var instrucaoSql = `
        SELECT id FROM usuario WHERE email = '${email}' OR nome = '${nome}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function kpiAnimes() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function kpiAnimes()");
    var instrucaoSql = `
        SELECT count(id) as qtdUsuarios FROM usuario WHERE ja_viu_anime = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function kpiSemAnime() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> function kpiSemAnime()");
    var instrucaoSql = `
        SELECT count(id) as qtdUsuarios FROM usuario WHERE ja_viu_anime = 0;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function kpiTotal() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> function kpiTotal()");
    var instrucaoSql = `
        SELECT count(id) as qtdUsuarios FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    buscarPorEmail,
    buscarPorNomeOuEmail,
    kpiAnimes,
    kpiSemAnime,
    kpiTotal
};
