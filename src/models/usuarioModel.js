var database = require("../database/config")

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT id, nome, email, ja_viu_anime AS jaViuAnime FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha, jaViuAnime) {
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, ja_viu_anime) VALUES ('${nome}', '${email}', '${senha}', ${jaViuAnime});
    `;
    return database.executar(instrucaoSql);
}

function buscarPorEmail(email) {
    var instrucaoSql = `
        SELECT id FROM usuario WHERE email = '${email}';
    `;
    return database.executar(instrucaoSql);
}

function buscarPorNomeOuEmail(nome, email) {
    var instrucaoSql = `
        SELECT id FROM usuario WHERE email = '${email}' OR nome = '${nome}';
    `;
    return database.executar(instrucaoSql);
}

function kpiAnimes() {
    var instrucaoSql = `
        SELECT count(id) as qtdUsuarios FROM usuario WHERE ja_viu_anime = 1;
    `;
    return database.executar(instrucaoSql);
}

function kpiSemAnime() {
    var instrucaoSql = `
        SELECT count(id) as qtdUsuarios FROM usuario WHERE ja_viu_anime = 0;
    `;
    return database.executar(instrucaoSql);
}

function kpiTotal() {
    var instrucaoSql = `
        SELECT count(id) as qtdUsuarios FROM usuario;
    `;
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
