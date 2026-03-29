const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('You are not authorized to view this resource');
  }
};

const isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.is_admin) {
    next();
  } else {
    res
      .status(401)
      .send(
        'You are not authorized to view this resource as you are not the admin'
      );
  }
};

export { isAuth, isAdmin };
