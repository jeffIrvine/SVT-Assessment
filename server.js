const express = require('express')
const botFetch = require('./utils/botFetch')
const {validateInput, calcDistance} = require('./utils/utils')
const app = express()

app.use(express.json())

app.post('/api/closest-bot', async (req, res) => {
  const validated = validateInput(req.body)
  if(!validated) return res.send({Error: 'Not a valid input'})
  
  const botPositionData = await botFetch()

  for(let i = 0; i < botPositionData.length; i++){
    const distanceToGoal = calcDistance(req.body, botPositionData[i])
    botPositionData[i].distanceToGoal = distanceToGoal
    delete botPositionData[i].x
    delete botPositionData[i].y
  }

  botPositionData.sort((a, b) => a.distanceToGoal - b.distanceToGoal)

  const filteredBots = botPositionData.filter((botItem)=> botItem.distanceToGoal <= 10)
  if(filteredBots.length === 0) return res.send(botPositionData[0])

  else return res.send(filteredBots.sort((a, b) => b.batteryLevel - a.batteryLevel)[0])
})  


app.listen(6660, () => console.log('Server started'))