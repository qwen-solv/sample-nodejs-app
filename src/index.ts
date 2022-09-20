import express from 'express';
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world from ECS Service!');
});
app.listen(80, () => {
  console.log('Server is up on 80');
});
