const app = require('./app');
const { createServer } = require('http');

const server = createServer(app);

const PORT = Number(process.env.PORT) || 6000;

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
