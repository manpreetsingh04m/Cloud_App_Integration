const express = require('express');
const userRoutes = require('./routes/UserRoutes');
import dotenv from 'dotenv';
import githubRoutes from './routes/githubRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import calendlyRoutes from './routes/calendlyRoutes.js';
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
  const currentTime = new Date().toLocaleTimeString();
  console.log(`[${currentTime}] ${req.method} ${req.url}`);
  next();
});

app.use('/api/github', githubRoutes);
// app.use('/user', userRoutes);
app.use('/api/calendly', calendlyRoutes);
app.use(errorHandler);


app.get('/',(req,res)=>{
  res.send("pong")
})


const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});