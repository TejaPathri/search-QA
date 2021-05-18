const express = require('express');
// var cors = require('cors')
// const { response } = require('../app');
var router = express.Router();
var QA = require("../models/table");
/* GET users listing. */


router.get('/', function(req, res, next) {

  // console.log("get")
  res.send('respond with a resource');
});
router.post('/addQuestionWithAnswer', async function(req, res, next) {
  console.log("entered");
  const qa = new QA({
    question:req.body.question,
    answer:req.body.answer
  });
  console.log(qa)
  try {
    console.log("try")
    const a1 = await qa.save();
    res.status(200).send(a1);
  } catch (err) {
    console.log("catch")
    res.status(404).send('Sorry, cant find that');
  }
 

});
router.post('/addQuestionsWithAnswers', async function(req, res, next) {
  // console.log(req.body);
  var objLength = req.body.length;
  var array = req.body;
  // console.log(objLength);
  for (let i = 0; i < objLength; i++) {
    let qa = new QA({
        question:array[i].question,
        answer:array[i].answer
      });
      try {
          const a1 = await qa.save();
        } catch (err) {
          // console.log(err);
        }
  }
res.send("succesful");
});

router.get('/json',  async function(req, res, next) {
  const data = await QA.find();
  console.log('In GET ', data);
  res.send(data);
  // document.getElementById("data").innerHTML = data;
  
  
});
module.exports = router;
