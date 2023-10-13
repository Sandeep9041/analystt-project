import express from 'express';
import axios from "axios";
import cors from "cors";
const app = express();
import 'dotenv/config'

const port  = process.env.PORT || 8080

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


app.get('/users', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/users/:id', async (req, res) => {
  console.log(req.params.id);

  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${req.params.id}`);
    const data = response.data;
    res.json(data);
    console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  app.use(cors());
