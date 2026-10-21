import games from '../data/games.js';

export const getAllGames = () => games;

export const getGameById = (id) =>
  games.find(game => game.id === parseInt(id));