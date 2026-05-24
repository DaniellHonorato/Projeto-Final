var database = require("../database/config");

function listar() {
    console.log("ACESSEI O ANIME MODEL \n \n\t\t >> function listar()");
    var instrucaoSql = `
        SELECT * FROM anime;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar
};
