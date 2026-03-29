const createLocals = (req, res, next) => {
  res.locals.links = [
    { href: '/', text: 'Odin Members' },
    { href: '/register', text: 'Register' },
    { href: '/login', text: 'Log In' },
  ];

  res.locals.errors = [];
  res.locals.formData = [];
  next();
};

export default createLocals;
