const UrlRepository = require('../repositories/url');
const urlShortener = require('../services/urlShortener');

module.exports = (req, res) => {
  const { url } = req.body;

  const shortCode = urlShortener.encode(url);
  const shortenedURL = `${req.protocol}://${req.get(
    'host'
  )}/${shortCode}`;

  res.status(200).json({ shortenedURL });
  // Retry sending the shortened URL until the client acknowledges receipt
  const maxRetries = 10; // Maximum number of retries
  const initialInterval = 1000; // Initial retry interval in milliseconds
  const backoffCap = 60000; // Maximum retry interval in milliseconds
  const timeout = 30000; // Timeout in milliseconds
  let retries = 0;
  let retryInterval = initialInterval;

  while (!shortCode) {
    if (retries >= maxRetries) {
      console.log('Retry limit exceeded');
      return;
    }

    if (retryInterval > backoffCap) {
      retryInterval = backoffCap;
    }

    console.log(`Retrying in ${retryInterval} ms`);
    new Promise((resolve) => setTimeout(resolve, retryInterval))
      .then(() => retries++)
      .catch((err) => console.log(err));

    // Randomized exponential backoff
    const jitter = Math.floor(Math.random() * initialInterval);
    const backoff = Math.pow(2, retries) * initialInterval;
    retryInterval = backoff + jitter;
  }

  console.log('Client acknowledged receipt');
};
