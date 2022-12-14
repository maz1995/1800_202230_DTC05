
function insertName() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            // Do something for the currently logged-in user here: 
            console.log(user.uid);
            console.log(user.displayName);
            user_Name = user.displayName;
            var email = user.email;
            console.log(email, "is signed in");

            //method #1:  insert with html only
            //document.getElementById("name-goes-here").innerText = user_Name;    //using javascript
            //method #2:  insert using jquery
            $("#name-goes-here").text(user_Name); //using jquery
            $("#loginBtn").hide();
            $("#logoutBtn").click(logout);

        } else {
            // No user is signed in.
            console.log("No user is signed in");
            $("#logoutBtn").hide();
        }
    });
}
insertName(); //run the function

function logout() {
    console.log("logout");
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}
