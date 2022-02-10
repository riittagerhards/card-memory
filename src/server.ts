import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

//app.get('/', (_request, response) => {
//  response.send('Hello World!');
//});

app.get('*', (_request, response) => {
  response.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
