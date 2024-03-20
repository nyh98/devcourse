import express from 'express';

const app = express();
app.use(express.static('public'));
// app.use(express.urlencoded({ extended: false}));
app.use(express.json());
const port = 5000;

const data = [];

app.post('/data', (req, res) => {
  const item = req.body;
  data.push(item);
  res.sendStatus(200);
});

app.get('/data', (req, res) => {
  res.json(db.get(id));
});

app.listen(port, () => {
  console.log(`open Server port ${port}`);
});
