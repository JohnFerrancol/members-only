import passport from '../auth/passport.js';

const loginUsersGet = (req, res) => {
  const authErrorMessages = req.flash('error');
  // const authErrorMessageArray = authErrorMessages.map((message) => ({
  //   msg: message,
  //   path: message.includes('username') ? 'username' : 'password',
  // }));

  // console.log(messages);
  res.render('login', { title: 'Log In', messages: authErrorMessages });
};

const loginUsersPost = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
});

export { loginUsersGet, loginUsersPost };
