const createLocals = (req, res, next) => {
  const baseLinks = [{ href: '/', text: 'Odin Members' }];

  if (!req.user) {
    res.locals.links = [
      ...baseLinks,
      { href: '/register', text: 'Register' },
      { href: '/login', text: 'Log In' },
    ];
  } else {
    res.locals.links = [
      ...baseLinks,
      { href: '/', text: req.user.username, isText: true },
      { href: '/logout', text: 'Log Out' },
    ];
  }

  res.locals.errors = [];
  res.locals.formData = [];
  next();
};

export default createLocals;
