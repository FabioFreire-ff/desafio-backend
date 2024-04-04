const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

async function createPost(req, res) {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getPosts(req, res) {
  try {
    const posts = await Post.findAll({ include: Comment });
    res.json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updatePost(req, res) {
  try {
    const postId = req.params.id;
    const [updated] = await Post.update(req.body, { where: { id: postId } });
    if (updated) {
      const updatedPost = await Post.findByPk(postId);
      res.json(updatedPost);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deletePost(req, res) {
  try {
    const postId = req.params.id;
    const deleted = await Post.destroy({ where: { id: postId } });
    if (deleted) {
      res.json({ message: 'Post deleted' });
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createPost, getPosts, updatePost, deletePost,
};
