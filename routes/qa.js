const { response } = require('express');
const express = require('express');
// var cors = require('cors')
// const { response } = require('../app');
var router = express.Router();
var QA = require("../models/table");
/* GET users listing. */
//get 1 -- question = "xyz", answer = ""

// router.put('/updateAnswer/:question', async function(req, res, next){
//   var addAns = await QA.find({question: req.params.question});
//   addAns[0].answer = req.body.answer;
//   addAns[0].save();
//   console.log(addAns);

//   res.send(addAns);
// });

// router.get('/:param', async function(req, res, next) {
//   var addAns = await QA.find({question: req.params.param});
//   console.log(addAns);

//   // addAns[0].answer = "topper";
//   // await addAns[0].save();
//   // console.log("get");
//   res.send(addAns[0]);
// });
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
