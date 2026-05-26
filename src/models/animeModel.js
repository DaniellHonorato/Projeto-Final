var database = require("../database/config");

function listar() {
    var instrucaoSql = `
        SELECT * FROM anime;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    listar
};
