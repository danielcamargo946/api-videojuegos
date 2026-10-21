
const express = require("express");
const gameRoutes = require("./routes/gameRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/videojuegos", gameRoutes);

app.get("/", (req, res) => {
  res.send("API de videojuegos funcionando correctamente");
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
    