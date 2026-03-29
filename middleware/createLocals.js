import { getPostsAndTheirUsers } from '../models/postModel.js';

// Function used to render how long ago the post was created
const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (let unit in intervals) {
    const counter = Math.floor(seconds / intervals[unit]);
    if (counter > 0) {
      return `${counter} ${unit}${counter === 1 ? '' : 's'} ago`;
    }
  }
  return 'just now';
};

const createLocals = async (req, res, next) => {
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
      { href: '/post', text: 'New Post' },
      { href: '/logout', text: 'Log Out' },
    ];
  }

  const posts = await getPostsAndTheirUsers();
  const updatedPostsArray = posts.map((post) => ({
    ...post,
    created_at: timeAgo(post.created_at),
  }));
  res.locals.posts = updatedPostsArray;

  res.locals.user = req.user || { is_member: false };
  res.locals.errors = [];
  res.locals.formData = [];
  res.locals.showDeleteDialog = false;
  next();
};

export default createLocals;
