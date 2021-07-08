const axios = require('axios');

axios.get('https://60c8ed887dafc90017ffbd56.mockapi.io/robots')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });