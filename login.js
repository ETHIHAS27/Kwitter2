var username = localStorage.getItem("userId");


function addUser(){
    var user_name = document.getElementById("user_name").value;

    localStorage.setItem("userId",user_name);

    window.location = "room.html"
}
