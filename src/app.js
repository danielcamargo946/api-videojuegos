import express from 'express';
import gameRoutes from './routes/gameRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de videojuegos funcionando correctamente');
});

app.use('/api/games', gameRoutes);

app.listen(PORT, () => {
  console.log(
    `Servidor ESM corriendo en http://localhost:${PORT}`
  );
});