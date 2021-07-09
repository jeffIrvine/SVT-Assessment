const express = require('express')
const app = express()
const axios = require('axios');

app.use(express.json())

app.post('/api/closest-bot', async (req, res) => {
  const validated = validateInput(req.body)
  if(!validated) return res.send({Error: 'Not a valid input'})
  
  const botPositionData = await botFetch()

  for(let i = 0; i < botPositionData.length; i++){
    const distance = calcDistance(req.body, botPositionData[i])
    console.log(distance)
  }
}) 

const validateInput = ({ x: xCord, y: yCord }) => {
  if(typeof xCord == 'number' && typeof yCord == 'number') {
    return true 
  }

  else return false;
}

const calcDistance = (loadPoints, botPoints) => {
  const { x: x1, y: y1} = loadPoints
  const { x: x2, y: y2} = botPoints

  return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
}

const botFetch = () => {
  return axios.get('https://60c8ed887dafc90017ffbd56.mockapi.io/robots')
  .then(({ data }) => data)

  .catch(error => {
    console.log(error);
  })
}
  

app.listen(6660, () => console.log('Server started'))