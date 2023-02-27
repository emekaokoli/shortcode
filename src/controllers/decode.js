const urlShortener = require('../services/urlShortener');
const UrlRepository = require('../repositories/url');

module.exports = (req, res) => {
  const { code } = req.params;

  const url = urlShortener?.decode(code);
  

  if (!url) {
    return res.status(404).send('Not found');
  }

  const newUrl = UrlRepository.markDelivered(url)

  res.json(newUrl);
};
