import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Servidor rodando com TypeScript!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
}); 