
var firebaseConfig = {
      apiKey: "AIzaSyB0KZRY-c2wWnhyaMruJw9Z-q8InES1Hus",
      authDomain: "kwitter-30106.firebaseapp.com",
      databaseURL: "https://kwitter-30106-default-rtdb.firebaseio.com",
      projectId: "kwitter-30106",
      storageBucket: "kwitter-30106.appspot.com",
      messagingSenderId: "660585615230",
      appId: "1:660585615230:web:02b09ac03d6b511f3dad2f",
      measurementId: "G-LEQ2KRRZNL"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function addRoom()
    {
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
       });
       localStorage.setItem("room_name",room_name);
       window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
