
var firebaseConfig = {
      apiKey: "AIzaSyBuvGbyLZi7TnASVCEuA_ZlM0c9ONLEGQI",
      authDomain: "emeralds-and-ruby-4edb8.firebaseapp.com",
      databaseURL: "https://emeralds-and-ruby-4edb8-default-rtdb.firebaseio.com",
      projectId: "emeralds-and-ruby-4edb8",
      storageBucket: "emeralds-and-ruby-4edb8.appspot.com",
      messagingSenderId: "34395887304",
      appId: "1:34395887304:web:5328e2abe52992330cb7fd"
    };
    
    
    firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML =" Welcome " + user_name+"!";
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
    } 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
