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

module.exports = {
  calcDistance,
  validateInput
}