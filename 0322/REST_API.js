const express = require('express');

const app = express();
app.use(express.json());

const humanData = new Map();

let id = 1;
humanData.set(id++, { name: '가', age: 10 });
humanData.set(id++, { name: '나', age: 20 });
humanData.set(id++, { name: '다', age: 30 });

app.get('/humans', (req, res) => {
  if (humanData.size > 0) {
    //객체는 for of 문으로 반복할시 에러가 날텐데 Map 객체는 가능하다?
    const humans = {};
    for (let [humanId, human] of humanData) {
      humans[humanId] = human;
    }
    return res.json(humans);
  }

  res.status(404).send('조회할 데이터가 없습니다');
});

app.get('/humans/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const human = humanData.get(id);

  if (!human) return res.status(404).send('찾는 사람이 없습니다');

  res.json(human);
});

app.post('/humans', (req, res) => {
  const human = req.body;
  if (!human.name) {
    return res.status(400).send('요청한 데이터가 정확하지 않습니다');
  }

  humanData.set(id++, human);
  res.status(201).json({ message: `${humanData.get(id - 1).name} ㅎㅇㅎㅇ` });
});

app.delete('/humans/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const human = humanData.get(id);

  if (!human) return res.status(404).send('삭제할 사람이 없습니다');

  humanData.delete(id);
  res.json({ message: `${human.name} 님 잘가요..` });
});

app.delete('/humans', (req, res) => {
  if (humanData.size === 0) {
    return res.status(404).send('데이터를 삭제하려고 했지만 db가 비어있습니다');
  }

  humanData.clear();
  //전체 삭제 후 id 값 초기화
  id = 1;
  res.json({ message: '사람들 데이터 전체 삭제 완료' });
  return;
});

app.put('/humans/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const human = humanData.get(id);
  if (!human) return res.status(404).send(`${id}에 해당하는 데이터가 없습니다`);

  const afterName = req.body.name;
  const beforeName = human.name;
  human.name = afterName;
  humanData.set(id, human);
  res.json({ message: `${beforeName} => ${afterName} 으로 닉변 완료` });
});

const port = 5000;
app.listen(port, () => {
  console.log(`open Server port ${port}`);
});
