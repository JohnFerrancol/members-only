const getIndexPage = (req, res) => {
  console.log(req.user);
  res.render('index', { title: 'Index', user: req.user });
};

export { getIndexPage };
