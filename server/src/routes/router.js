module.exports = (app) => {
  app.use('/', (req, res) => {
    res.send('OK');
  });
}
