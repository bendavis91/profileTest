var myObj, myJSON, text, obj;
//***************************************************************************************
//REPLACE INFORMATION IN myObj IN QUOTES WITH YOUR OWN DATA *****************************
//***************************************************************************************
// Storing data:
myObj = {
  name: "Ben Davis",
  major: "Information Technology",
  city: "Muscle Shoals",
  aboutMe: "hi this is my web dev profile",

};

myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");

obj = JSON.parse(text);

document.getElementById("demo").innerHTML = obj.name;
document.getElementById("demo2").innerHTML = obj.major;
document.getElementById("demo3").innerHTML = obj.city;
document.getElementById("demo4").innerHTML = obj.aboutMe;

//***************************************************************************************
//INSERT YOUR GITHUB PROFILE LINK INTO aTag.setAttribute('href', "your link here"); BELOW
//***************************************************************************************
//link area to profile
var mydiv = document.getElementById("demo5");
var aTag = document.createElement('a');
//**********************************INSERT BELOW**********
aTag.setAttribute('href', "https://github.com/bendavis91");
//********************************************************
aTag.target = "_blank";
aTag.innerText = "My Github Profile";
mydiv.appendChild(aTag);
