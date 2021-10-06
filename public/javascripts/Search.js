      var data = "";
      var ques;
      const url = " http://localhost:3000/qa/json";
      async function getData() { 
          const response = await fetch(url);
          data = await response.json();
      }

	    async function onInput(){
        var val = document.getElementById("keyword").value.trim();
        await getData();
        var obj = data;
        if (val == "") {
          document.getElementById("languages").innerHTML = val;
        }
        else {

          var arr = val.split(" ");
          ques = [];
          for (let j = 0; j < arr.length; j++) {
            
            for (var i = 1; i < obj.length; i++) {
              arr[j] = arr[j].toLowerCase();
              if (obj[i].question.toLowerCase().indexOf(arr[j]) >= 0 && ques.indexOf(obj[i].question) == -1) {
                obj[i].question = obj[i].question.toLowerCase();
                var ind = obj[i].question.indexOf(arr[j]);
                var l = ind + arr[j].length;
                var end = obj[i].question.length;
                var res = obj[i].question.substring(0, ind) +'<mark>'+obj[i].question.substring(ind, l)+'</mark>'+obj[i].question.substring(l, end);
                obj[i].question = res;
                if (obj[i].answer != "") {
                  ques.push(obj[i]);
                }
              }
            }
          }
          console.log(ques);
          var temp = "";
          for (let i = 0; i < ques.length; i++) {
            temp += "<a href='questions.html?id="+ques[i]._id+"'>"+"<span class='glyphicon glyphicon-search'></span> "+ques[i].question +"</a>"+"<br>"+"<br>";

          }
          document.getElementById("languages").innerHTML = temp;
        }
	    }
      async function myFunction() {
        var txt = document.getElementById("text").value;
        var ans = document.getElementById("ans").value;

        var url = "http://localhost:3000/qa/addQuestionWithAnswer";
        axios.post(url, {
            question: txt,
            answer: ans
          })
          .then((response) => {
            console.log(response);
            document.getElementById("text").value = "";
            document.getElementById("ans").value = "";
          }, (error) => {
            console.log(error);
          });
      }

      function update() {
        window.location = "file:///D:/QA%20Task/search-QA/admin_modified.html";
      }
