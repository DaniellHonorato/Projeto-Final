var database = require("../database/config");

function buscarUltimasMedidas() {
    var instrucaoSql = `
        SELECT ano as momento_grafico, receita 
        FROM crescimento_anime 
        ORDER BY id ASC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas
};
