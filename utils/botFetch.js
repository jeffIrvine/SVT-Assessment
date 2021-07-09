const axios = require('axios');

const botFetch = () => {
  return axios.get('https://60c8ed887dafc90017ffbd56.mockapi.io/robots')
  .then(({ data }) => data)

  .catch(error => {
    console.log(error);
  })
}

module.exports = botFetch;