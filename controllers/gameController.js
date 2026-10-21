
const gameService = require("../services/gameService");

function getAllGames(req, res) {
  res.json(gameService.getAllGames());
}

function getGameById(req, res) {
  const game = gameService.getGameById(req.params.id);

  if (!game) {
    return res.status(404).json({
      mensaje: "Videojuego no encontrado"
    });
  }

  res.json(game);
}

function createGame(req, res) {
  const { nombre, plataforma, genero } = req.body;

  if (!nombre || !plataforma || !genero) {
    return res.status(400).json({
      mensaje: "Debes enviar nombre, plataforma y genero"
    });
  }

  const newGame = gameService.createGame({
    nombre,
    plataforma,
    genero
  });

  res.status(201).json(newGame);
}

module.exports = {
  getAllGames,
  getGameById,
  createGame
};
    