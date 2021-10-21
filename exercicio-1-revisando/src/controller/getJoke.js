const jokeModel = require('../models');

const getJoke = async (_req, res) => {
  const joke = await jokeModel.getJoke();

  res.render('JokeView', { joke });
};

module.exports = getJoke;