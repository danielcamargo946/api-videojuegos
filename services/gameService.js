
const games = require("../src/data/games");

function getAllGames() {
  return games;
}

function getGameById(id) {
  return games.find(game => game.id === Number(id));
}

function createGame(gameData) {
  const newGame = {
    id: games.length > 0
      ? Math.max(...games.map(game => game.id)) + 1
      : 1,
    ...gameData
  };

  games.push(newGame);
  return newGame;
}

module.exports = {
  getAllGames,
  getGameById,
  createGame
};
