const express = require('express');

const app = express();

const humans = [
  { id: 1, name: '가', age: 10 },
  { id: 2, name: '나', age: 20 },
  { id: 3, name: '다', age: 30 },
];

app.get('/humans', (req, res) => {
  res.json(humans);
});

app.get('/humans/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const findHuman = humans.find(human => human.id === id);

  if (findHuman) return res.json(findHuman);
  res.status(404).send('해당하는 데이터가 없습니다');
});
const port = 5000;
app.listen(port, () => {
  console.log(`open Server port ${port}`);
});
