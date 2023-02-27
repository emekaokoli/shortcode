const { Router } = require('express');
const payloadValidator = require('../middlewares/payloadValidator')
const decodeHandler = require('../controllers/decode');
const encodeHandler = require('../controllers/encode');

const router = Router();

router
  .route('/url')
  .post(payloadValidator, encodeHandler);
router
  .route('/:code')
  .get(decodeHandler);

module.exports = router;
