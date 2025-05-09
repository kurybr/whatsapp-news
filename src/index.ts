import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config({ debug: true, override: true })

import SuperchatService from './services/superchats/superchat.service';

const app = express();
const port = process.env.PORT || 4000;


SuperchatService.onInit();

app.get('/', async (req, res) => {
  
  const messages = await SuperchatService.onHooks();
  
  res.json({ 
    message: 'Servidor rodando com TypeScript!',
    messages
  });

});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
}); 