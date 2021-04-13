var myObj, myJSON, text, obj, testobj;
//***************************************************************************************
//REPLACE INFORMATION IN myObj IN QUOTES WITH YOUR OWN DATA *****************************
//***************************************************************************************
// Storing data:
/*myObj = [
  {
  name: "Ben Davis",
  major: "Information Technology",
  city: "Muscle Shoals",
  aboutMe: "hi this is my web dev profile",

}];*/

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
 


myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");

obj = JSON.parse(text);

/*document.getElementById("demo").innerHTML = obj.data[0].name;
document.getElementById("demo2").innerHTML = obj.data[0].major;
document.getElementById("demo3").innerHTML = obj.data[0].city;
document.getElementById("demo4").innerHTML = obj.data[0].aboutMe;
document.getElementById("demo5").innerHTML = obj.data[0].url;
*/
//$('#demo.entry[0]').innerHTML = obj.data[0].name;
//$('#demo.entry[0]').
//var demo = $('#demo').get
//document.getElementById("demo")[0].innerHTML = obj.data[0].name;
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
