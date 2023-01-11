const proxy = require('http-proxy-middleware');
const morgan = require('morgan');

module.exports = (app) => {
  app.use(
    '/socket',
    proxy({
      target: 'https://developer-community-backend.herokuapp.com',
      changeOrigin: true,
    }),
  );
  app.use(morgan('combined'));
  console.log(app);
};
