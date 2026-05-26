var database = require("../database/config");

function verificar(idUsuario, idAnime) {
    var instrucaoSql = `
        SELECT COUNT(*) AS favoritado FROM favorito 
        WHERE fk_usuario = ${idUsuario} AND fk_anime = ${idAnime};
    `;
    return database.executar(instrucaoSql);
}

function favoritar(idUsuario, idAnime) {
    var instrucaoSql = `
        INSERT INTO favorito (fk_usuario, fk_anime) VALUES (${idUsuario}, ${idAnime});
    `;
    return database.executar(instrucaoSql);
}

function desfavoritar(idUsuario, idAnime) {
    var instrucaoSql = `
        DELETE FROM favorito WHERE fk_usuario = ${idUsuario} AND fk_anime = ${idAnime};
    `;
    return database.executar(instrucaoSql);
}

function obterMaisFavoritado() {
    var instrucaoSql = `
        SELECT a.titulo, COUNT(f.fk_anime) AS total 
        FROM favorito f 
        JOIN anime a ON f.fk_anime = a.id 
        GROUP BY f.fk_anime, a.titulo
        ORDER BY total DESC 
        LIMIT 1;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    verificar,
    favoritar,
    desfavoritar,
    obterMaisFavoritado
};
