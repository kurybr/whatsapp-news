import express from 'express';


import * as dotenv from 'dotenv';
dotenv.config({ debug: true, override: true })

import SuperchatService from './services/superchats/superchat.service';

const app = express();
const port = process.env.PORT || 9999;


// Middleware para interpretar JSON no corpo da requisição
app.use(express.json());

// Para application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  res.json({ 
    message: 'Servidor rodando com TypeScript!'
  });
});


app.use('/webhook', async (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.json({ 
    message: 'Servidor rodando com TypeScript!'
  });
});



app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
}); 