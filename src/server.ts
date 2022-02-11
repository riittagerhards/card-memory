import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static('dist/app'));

app.get('*', (_request, response) => {
  response.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
