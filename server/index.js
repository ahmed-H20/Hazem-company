const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const mongoose  = require('mongoose');

//Middleware
app.use(cors());
app.use(express.json());

//Mongodb connection
mongoose.connect("mongodb+srv://ahmedheshamahah8:ue6CLKNLwPeIYkyI@hazem-ari-db.go7pz.mongodb.net/?retryWrites=true&w=majority&appName=hazem-ari-db")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})