/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const sequelize = require('./config/database');
const Post = require('./models/postModel');
const Comment = require('./models/commentModel');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para permitir o uso de JSON nas requisições
app.use(bodyParser.json());

// Rotas para os posts e comentários
app.use('/posts', postRoutes);
app.use('/posts', commentRoutes);

// Configuração das associações entre modelos
Post.hasMany(Comment); // Um post pode ter muitos comentários
Comment.belongsTo(Post); // Um comentário pertence a um único post

// Inicialização do servidor e conexão com o banco de dados
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });
