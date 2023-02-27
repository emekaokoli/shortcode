const { randomBytes } = require('crypto');
const UrlRepository = require('../repositories/url');

const getShortCode = () =>
  randomBytes(10).toString('base64url').slice(0, 10);

const encode = (url) => {
  const code = getShortCode();
  UrlRepository.save(code, url);

  return code;
};

const decode = (code) => {
  const record = UrlRepository?.retrieve(code);

  return record?.url;
};

module.exports = { encode, decode };
