var database = require("../database/config");

// ── Verificar ──────────────────────────────────────────────────────
function verificar(idUsuario, idAnime) {
    var instrucaoSql = `
        SELECT COUNT(*) AS favoritado FROM favorito 
        WHERE fk_usuario = ${idUsuario} AND fk_anime = ${idAnime};
    `;
    return database.executar(instrucaoSql);
}

// ── Favoritar ──────────────────────────────────────────────────────
function favoritar(idUsuario, idAnime) {
    var instrucaoSql = `
        INSERT INTO favorito (fk_usuario, fk_anime) VALUES (${idUsuario}, ${idAnime});
    `;
    return database.executar(instrucaoSql);
}

// ── Desfavoritar ───────────────────────────────────────────────────
function desfavoritar(idUsuario, idAnime) {
    var instrucaoSql = `
        DELETE FROM favorito WHERE fk_usuario = ${idUsuario} AND fk_anime = ${idAnime};
    `;
    return database.executar(instrucaoSql);
}

// ── Mais Favoritado ────────────────────────────────────────────────
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

// ── Listar Favoritos do Usuário ────────────────────────────────────
function listarFavoritosPorUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT a.* FROM anime a
        INNER JOIN favorito f ON f.fk_anime = a.id
        WHERE f.fk_usuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    verificar,
    favoritar,
    desfavoritar,
    obterMaisFavoritado,
    listarFavoritosPorUsuario
};
