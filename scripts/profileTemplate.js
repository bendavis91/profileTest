
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);

    //for (var x = 0; x < myObj.data.length; x++) {
    $(document).ready(function () {
      if (window.location.href == 'https://bendavis91.github.io/profileTest/luan-dev-profile.html') {
        
        document.getElementById("name").innerHTML = myObj.devProfiles[0].name;
        document.getElementById("major").innerHTML = myObj.devProfiles[0].major;
        document.getElementById("concentration").innerHTML = myObj.devProfiles[0].concentration;
        document.getElementById("degree").innerHTML = myObj.devProfiles[0].degree;
        document.getElementById("languages").innerHTML = myObj.devProfiles[0].skills.languages;
        document.getElementById("frameworks").innerHTML = myObj.devProfiles[0].skills.frameworks;
        document.getElementById("database").innerHTML = myObj.devProfiles[0].skills.database;
        document.getElementById("position").innerHTML = myObj.devProfiles[0].skills.position;
        document.getElementById("description").innerHTML = myObj.devProfiles[0].description;
        document.getElementById("email").innerHTML = myObj.devProfiles[0].email;
        document.getElementById("githubProfile").innerHTML = myObj.devProfiles[0].githubProfile;

      }else if(window.location.href == 'https://bendavis91.github.io/profileTest/davis-dev-profile.html'){
       
        document.getElementById("name").innerHTML = myObj.devProfiles[1].name;
        document.getElementById("major").innerHTML = myObj.devProfiles[1].major;
        document.getElementById("concentration").innerHTML = myObj.devProfiles[1].concentration;
        document.getElementById("degree").innerHTML = myObj.devProfiles[1].degree;
        document.getElementById("languages").innerHTML = myObj.devProfiles[1].skills.languages;
        document.getElementById("frameworks").innerHTML = myObj.devProfiles[1].skills.frameworks;
        document.getElementById("database").innerHTML = myObj.devProfiles[1].skills.database;
        document.getElementById("position").innerHTML = myObj.devProfiles[1].skills.position;
        document.getElementById("description").innerHTML = myObj.devProfiles[1].description;
        document.getElementById("email").innerHTML = myObj.devProfiles[1].email;
        document.getElementById("githubProfile").innerHTML = myObj.devProfiles[1].githubProfile;
        
      }else if(window.location.pathname == '/gant-dev-profile.html'){
       
        document.getElementById("name").innerHTML = myObj.devProfiles[2].name;
        document.getElementById("major").innerHTML = myObj.devProfiles[2].major;
        document.getElementById("concentration").innerHTML = myObj.devProfiles[2].concentration;
        document.getElementById("degree").innerHTML = myObj.devProfiles[2].degree;
        document.getElementById("languages").innerHTML = myObj.devProfiles[2].skills.languages;
        document.getElementById("frameworks").innerHTML = myObj.devProfiles[2].skills.frameworks;
        document.getElementById("database").innerHTML = myObj.devProfiles[2].skills.database;
        document.getElementById("position").innerHTML = myObj.devProfiles[2].skills.position;
        document.getElementById("description").innerHTML = myObj.devProfiles[2].description;
        document.getElementById("email").innerHTML = myObj.devProfiles[2].email;
        document.getElementById("githubProfile").innerHTML = myObj.devProfiles[2].githubProfile;

      }else if(window.location.pathname == '/Estacio-dev-profile.html'){
       
        document.getElementById("name").innerHTML = myObj.devProfiles[3].name;
        document.getElementById("major").innerHTML = myObj.devProfiles[3].major;
        document.getElementById("concentration").innerHTML = myObj.devProfiles[3].concentration;
        document.getElementById("degree").innerHTML = myObj.devProfiles[3].degree;
        document.getElementById("languages").innerHTML = myObj.devProfiles[3].skills.languages;
        document.getElementById("frameworks").innerHTML = myObj.devProfiles[3].skills.frameworks;
        document.getElementById("database").innerHTML = myObj.devProfiles[3].skills.database;
        document.getElementById("position").innerHTML = myObj.devProfiles[3].skills.position;
        document.getElementById("description").innerHTML = myObj.devProfiles[3].description;
        document.getElementById("email").innerHTML = myObj.devProfiles[3].email;
        document.getElementById("githubProfile").innerHTML = myObj.devProfiles[3].githubProfile;

      }else if(window.location.pathname == '/humphreys-dev-profile.html'){
       
        document.getElementById("name").innerHTML = myObj.devProfiles[4].name;
        document.getElementById("major").innerHTML = myObj.devProfiles[4].major;
        document.getElementById("concentration").innerHTML = myObj.devProfiles[4].concentration;
        document.getElementById("degree").innerHTML = myObj.devProfiles[4].degree;
        document.getElementById("languages").innerHTML = myObj.devProfiles[4].skills.languages;
        document.getElementById("frameworks").innerHTML = myObj.devProfiles[4].skills.frameworks;
        document.getElementById("database").innerHTML = myObj.devProfiles[4].skills.database;
        document.getElementById("position").innerHTML = myObj.devProfiles[4].skills.position;
        document.getElementById("description").innerHTML = myObj.devProfiles[4].description;
        document.getElementById("email").innerHTML = myObj.devProfiles[4].email;
        document.getElementById("githubProfile").innerHTML = myObj.devProfiles[4].githubProfile;

      }else if(window.location.pathname == '/owen-dev-profile.html'){
       
        document.getElementById("name").innerHTML = myObj.devProfiles[5].name;
        document.getElementById("major").innerHTML = myObj.devProfiles[5].major;
        document.getElementById("concentration").innerHTML = myObj.devProfiles[5].concentration;
        document.getElementById("degree").innerHTML = myObj.devProfiles[5].degree;
        document.getElementById("languages").innerHTML = myObj.devProfiles[5].skills.languages;
        document.getElementById("frameworks").innerHTML = myObj.devProfiles[5].skills.frameworks;
        document.getElementById("database").innerHTML = myObj.devProfiles[5].skills.database;
        document.getElementById("position").innerHTML = myObj.devProfiles[5].skills.position;
        document.getElementById("description").innerHTML = myObj.devProfiles[5].description;
        document.getElementById("email").innerHTML = myObj.devProfiles[5].email;
        document.getElementById("githubProfile").innerHTML = myObj.devProfiles[5].githubProfile;

      }else if(window.location.pathname == '/Haruki-dev.html'){
       
        document.getElementById("name").innerHTML = myObj.devProfiles[6].name;
        document.getElementById("major").innerHTML = myObj.devProfiles[6].major;
        document.getElementById("concentration").innerHTML = myObj.devProfiles[6].concentration;
        document.getElementById("degree").innerHTML = myObj.devProfiles[6].degree;
        document.getElementById("languages").innerHTML = myObj.devProfiles[6].skills.languages;
        document.getElementById("frameworks").innerHTML = myObj.devProfiles[6].skills.frameworks;
        document.getElementById("database").innerHTML = myObj.devProfiles[6].skills.database;
        document.getElementById("position").innerHTML = myObj.devProfiles[6].skills.position;
        document.getElementById("description").innerHTML = myObj.devProfiles[6].description;
        document.getElementById("email").innerHTML = myObj.devProfiles[6].email;
        document.getElementById("githubProfile").innerHTML = myObj.devProfiles[6].githubProfile;

      }else{
        console.log("this is not the profile page");
      }
    })
      
  }
};

xmlhttp.open("GET", "/profileTest/scripts/devs-data.txt", true);
xmlhttp.send();
