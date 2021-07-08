const express = require('express')
const app = express()
const axios = require('axios');

app.use(express.json())

app.post('/api/closest-bot', (req, res) => {
  const data = validateInput(req.body)
  res.send(data)
}) 

const validateInput = ({ x: xCord, y: yCord }) => {
  if(typeof xCord == 'number' && typeof yCord == 'number') {
    return true 
  }

  else return false;
}

const botFetch = () => {
  axios.get('https://60c8ed887dafc90017ffbd56.mockapi.io/robots')
  .then(({ data }) => data)

  .catch(error => {
    console.log(error);
  })
}
  

app.listen(6660, () => console.log('Server started'))