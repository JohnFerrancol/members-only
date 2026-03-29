const getIndexPage = (req, res) => {
  res.render('index', { title: 'Index', user: req.user });
};

export { getIndexPage };
