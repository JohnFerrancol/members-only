import pool from '../db/pool.js';

const getPostsAndTheirUsers = async () => {
  const { rows } = await pool.query(
    `SELECT posts.id, title, content, users.username AS username, created_at FROM posts JOIN users ON posts.user_id=users.id ORDER BY posts.id`
  );
  return rows;
};

export { getPostsAndTheirUsers };
