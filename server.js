const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Разрешаем CORS и парсим JSON
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Обработчик формы
app.post("/api/register", (req, res) => {
  const formData = req.body;
  console.log("Получены данные:", formData);

  // Здесь можно сохранить в базу данных или Excel
  // Например, используя библиотеку 'xlsx'

  res.json({ status: "success" });
});

app.listen(3000, () => {
  console.log("Сервер запущен на http://localhost:3000");
});
