import passport from '../auth/passport.js';

const loginUsersGet = (req, res) => {
  const authErrorMessages = req.flash('error');

  res.render('login', {
    title: 'Log In',
    messages: authErrorMessages,
    formData: req.body || [],
  });
};

const loginUsersPost = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
});

export { loginUsersGet, loginUsersPost };
