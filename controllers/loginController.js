import passport from '../auth/passport.js';

// Middleware used to render the login form
const loginUsersGet = (req, res) => {
  console.log;
  res.render('login', {
    title: 'Log In',
    authErrorMessages: req.flash('error'),
    usernameInput: req.flash('usernameInput') || '',
  });
};

// Middleware used to process the data from the form and authenticate the user via Passport.js
const loginUsersPost = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);

    if (!user) {
      req.flash('usernameInput', req.body.username);
      req.flash('error', info.message);
      return res.redirect('/login');
    }

    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.redirect('/');
    });
  })(req, res, next);
};

export { loginUsersGet, loginUsersPost };
