// const axios = require('axios');
// import axios from axios;
async function myFunction() {
    var txt = document.getElementById("text").value;
    console.log(txt);
    var url = "http://localhost:3000/qa/addQuestionWithAnswer";
    axios.post(url, {
        question: txt,
        answer: ''
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });

}