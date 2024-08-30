const express = require('express');
const userRoutes = require('./routes/UserRoutes');
const app = express();

app.use(express.json());

app.use('/user', userRoutes);


app.get('/',(req,res)=>{
  res.send("pong")
})


const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});