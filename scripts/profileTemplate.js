
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);

    //for (var x = 0; x < myObj.data.length; x++) {
    $(document).ready(function () {
      if (window.location.href == 'https://bendavis91.github.io/profileTest/testerProfile.html') {

        document.getElementById("demo1").innerHTML = myObj.data[0].name;
        document.getElementById("demo2").innerHTML = myObj.data[0].major;
        document.getElementById("demo3").innerHTML = myObj.data[0].city;
        document.getElementById("demo4").innerHTML = myObj.data[0].aboutMe;
        document.getElementById("demo5").innerHTML = myObj.data[0].url;

      }else if(window.location.href == 'https://bendavis91.github.io/profileTest/testerProfile2.html'){
       
        document.getElementById("demo1").innerHTML = myObj.data[1].name;
        document.getElementById("demo2").innerHTML = myObj.data[1].major;
        document.getElementById("demo3").innerHTML = myObj.data[1].city;
        document.getElementById("demo4").innerHTML = myObj.data[1].aboutMe;
        document.getElementById("demo5").innerHTML = myObj.data[1].url;
      }else if(window.location.href == 'https://bendavis91.github.io/profileTest/testerProfile3.html'){
        
        document.getElementById("demo1").innerHTML = myObj.data[2].name;
        document.getElementById("demo2").innerHTML = myObj.data[2].major;
        document.getElementById("demo3").innerHTML = myObj.data[2].city;
        document.getElementById("demo4").innerHTML = myObj.data[2].aboutMe;
        document.getElementById("demo5").innerHTML = myObj.data[2].url;
      }else{
        console.log("this is not the profile page");
      }
    })
      
  }
};

xmlhttp.open("GET", "/profileTest/scripts/data.txt", true);
xmlhttp.send();
