import express from 'express';

const port = 5000;
const app = express();
app.use(express.static('./dist'));

// Run the server
app.listen(port, () => {
  console.info(`Server listening in http://localhost:${port}`);
});
