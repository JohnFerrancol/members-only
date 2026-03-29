// Middleware used to log out a user that is logged in
const logoutUserGet = (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};

export { logoutUserGet };
