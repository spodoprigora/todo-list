const express = require('express');

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  res.json({ status: 'Task API' });
});
app.listen(PORT, () => console.log(`Task API - ${PORT}`));
