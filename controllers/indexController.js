// Middleware used to render the home page
const getIndexPage = (req, res) => {
  res.render('index', { title: 'Home', user: req.user });
};

export { getIndexPage };
