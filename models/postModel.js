import pool from '../db/pool.js';

const getPostsAndTheirUsers = async () => {
  const { rows } = await pool.query(
    `SELECT posts.id, title, content, users.username AS username, created_at FROM posts JOIN users ON posts.user_id=users.id ORDER BY posts.id`
  );
  return rows;
};

const getPostById = async (id) => {
  const { rows } = await pool.query(`SELECT * FROM posts WHERE id=$1`, [id]);
  return rows[0];
};

const insertPostByUserId = async (title, content, userId) => {
  await pool.query(
    `
    INSERT INTO posts (title, content, user_id)
    VALUES ($1, $2, $3)`,
    [title, content, userId]
  );
};

const deletePostById = async (id) => {
  await pool.query(`DELETE FROM posts WHERE id=$1`, [id]);
};

export {
  getPostsAndTheirUsers,
  getPostById,
  insertPostByUserId,
  deletePostById,
};
