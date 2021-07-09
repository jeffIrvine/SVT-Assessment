const express = require('express')
const botFetch = require('./utils/botFetch')
const {validateInput, calcDistance} = require('./utils/utils')
const app = express()

app.use(express.json())

app.post('/api/closest-bot', async (req, res) => {
  //checks that post request(input) is a number
  const validated = validateInput(req.body)
  if(!validated) return res.send({Error: 'Not a valid input'})
  
  //fetches bot position data
  const botPositionData = await botFetch()

  //loops through botPosition array solving for distance 
  for(let i = 0; i < botPositionData.length; i++){
    const distanceToGoal = calcDistance(req.body, botPositionData[i])

    //adds distanceToGoal to bot object
    botPositionData[i].distanceToGoal = distanceToGoal

    //strips off x and y keys to match response example
    delete botPositionData[i].x
    delete botPositionData[i].y
  }

  //sorts bots in asc order
  botPositionData.sort((a, b) => a.distanceToGoal - b.distanceToGoal)

  //returns closest bot if no bots are within 10 units
  const filteredBots = botPositionData.filter((botItem)=> botItem.distanceToGoal <= 10)
  if(filteredBots.length === 0) return res.send(botPositionData[0])

  //returns bot with highest battery within 10 units
  else return res.send(filteredBots.sort((a, b) => b.batteryLevel - a.batteryLevel)[0])
})  

app.listen(6660, () => console.log('Server started'))