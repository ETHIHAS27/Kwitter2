var firebaseConfig = {
    apiKey: "AIzaSyDufxoTVXHfUaYllo2WAwQdQrf9tU9OpG8",
    authDomain: "project-chat-app-cb26d.firebaseapp.com",
    databaseURL: "https://project-chat-app-cb26d-default-rtdb.firebaseio.com",
    projectId: "project-chat-app-cb26d",
    storageBucket: "project-chat-app-cb26d.appspot.com",
    messagingSenderId: "870868854940",
    appId: "1:870868854940:web:1cbafad7256c94b3116559"
  };

    user_name = localStorage.getItem("user_Id");
    room_name = localStorage.getItem("room_name");

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function send(){
    msg = document.getElementById("msg").value;
    console.log(msg);

    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = " ";
}

function getData() {firebase.database().ref("/"+ room_name).on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key; childData = childSnapshot.val();if(childKey != "purpose"){
    firebase_message_id = childKey;
    message_data = childData;
   //Start code
    console.log(message_data);
    console.log(firebase_message_id);
   //End code
 } });});}
getData();