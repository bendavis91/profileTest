//import json from './scripts/data.json';
//console.log(json);
/*const data = require('/scripts/data.json');
var myObj, myJSON, text, obj, testobj;


myObj = 
  {
    "data":
    [{
      "name": "Ben Davis",
      "major": "Information Technology",
      "city": "Muscle Shoals",
      "aboutMe": "hi this is my web dev profile",
      "url": "<a href='https://github.com/bendavis91'target='_blank'>Ben's Github</a>"
    },
    {
      "name": "Luan Nguyen",
      "major": "Information Technology",
      "city": "florence",
      "aboutMe": "im a dev",
      "url": "<a href='https://github.com/luannguyen1410'target='_blank'>Luan's Github</a>"
    },
    {
      "name": "Jeffery Dill",
      "major": "Information Technology",
      "city": "Florence",
      "aboutMe": "im a dev",
      "url": "<a href='https://github.com/JGantDill'target='_blank'>Gant's Github</a>"
    }]
  }
 


//myJSON = JSON.stringify(myObj);
myJSON = JSON.stringify(data);
//localStorage.setItem("testJSON", myJSON);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");

//obj = JSON.parse(text);
obj = JSON.parse(text);
//$('#demo.entry[0]').innerHTML = obj.data[0].name;
//$('#demo.entry[0]').
//var demo = $('#demo').get
//document.getElementById("demo")[0].innerHTML = obj.data[0].name;

//var element = $('#demo1')[0];

for(var x = 0; x < obj.data.length; x++){

  document.getElementById("demo1").innerHTML = obj.data[x].name;
  document.getElementById("demo2").innerHTML = obj.data[x].major;
  document.getElementById("demo3").innerHTML = obj.data[x].city;
  document.getElementById("demo4").innerHTML = obj.data[x].aboutMe;
  document.getElementById("demo5").innerHTML = obj.data[x].url;
  
}

//***************************************************************************************
//INSERT YOUR GITHUB PROFILE LINK INTO aTag.setAttribute('href', "your link here"); BELOW
//***************************************************************************************
//link area to profile
var mydiv = document.getElementById("demo6");
var aTag = document.createElement('a');
//**********************************INSERT BELOW**********
aTag.setAttribute('href', "https://github.com/bendavis91");
//********************************************************
aTag.target = "_blank";
aTag.innerText = "My Github Profile";
mydiv.appendChild(aTag);
*/

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);

    //for (var x = 0; x < myObj.data.length; x++) {
    $(document).ready(function () {
      if (window.location.pathname == '/testerProfile.html') {

        document.getElementById("demo1").innerHTML = myObj.data[0].name;
        document.getElementById("demo2").innerHTML = myObj.data[0].major;
        document.getElementById("demo3").innerHTML = myObj.data[0].city;
        document.getElementById("demo4").innerHTML = myObj.data[0].aboutMe;
        document.getElementById("demo5").innerHTML = myObj.data[0].url;

      }else if(window.location.pathname == '/testerProfile2.html'){
       
        document.getElementById("demo1").innerHTML = myObj.data[1].name;
        document.getElementById("demo2").innerHTML = myObj.data[1].major;
        document.getElementById("demo3").innerHTML = myObj.data[1].city;
        document.getElementById("demo4").innerHTML = myObj.data[1].aboutMe;
        document.getElementById("demo5").innerHTML = myObj.data[1].url;
      }else if(window.location.pathname == '/testerProfile3.html'){
        
        document.getElementById("demo1").innerHTML = myObj.data[2].name;
        document.getElementById("demo2").innerHTML = myObj.data[2].major;
        document.getElementById("demo3").innerHTML = myObj.data[2].city;
        document.getElementById("demo4").innerHTML = myObj.data[2].aboutMe;
        document.getElementById("demo5").innerHTML = myObj.data[2].url;
      }else{
        console.log("this is not the profile page");
      }
    })
      /*document.getElementById("demo1").innerHTML = myObj.data[0].name;
      document.getElementById("demo2").innerHTML = myObj.data[0].major;
      document.getElementById("demo3").innerHTML = myObj.data[0].city;
      document.getElementById("demo4").innerHTML = myObj.data[0].aboutMe;
      document.getElementById("demo5").innerHTML = myObj.data[0].url;
      document.getElementById("demo6").innerHTML = myObj.data[1].name;
      document.getElementById("demo7").innerHTML = myObj.data[1].major;
      document.getElementById("demo8").innerHTML = myObj.data[1].city;
      document.getElementById("demo9").innerHTML = myObj.data[1].aboutMe;
      document.getElementById("demo10").innerHTML = myObj.data[1].url;
    //}*/
  }
};

xmlhttp.open("GET", "/scripts/data.txt", true);
xmlhttp.send();