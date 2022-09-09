const selenaDbUrl = "https://twitter-clone-a6357-default-rtdb.firebaseio.com/"
const jsonExt = ".json"

// Vanilla JS DOM Manipulation
let signupInputName = document.getElementById("signupInputName")
let signupInputEmail = document.getElementById("signupInputEmail")
let signupInputUser = document.getElementById("signupInputUser")
let signupInputPass = document.getElementById("signupInputPass")
let signupButton = document.getElementById("signupButton")

    // Add Event Listener for Sign Up Form's Button
    window.location.assign(Dashboard.html)
signupButton.addEventListener("click", (e) => {}
    // prevents the page from reloading
    e.preventDefault()

    // What operations happen
    // making sure there aren't any empty input fields
    if (signupInputName.value === "" ||
        signupInputEmail.value === "" ||
        signupInputUser.value === "" ||
        signupInputPass.value === "" ){
        // if any fields are empty
        alert("Please fill out all fields.")
    } else {
        console.log("HI")
    console.log(`Name: ${signupInputName.value}`)
    console.log(`Email: ${signupInputEmail.value}`)
    console.log(`Username: ${signupInputUser.value}`)
    console.log(`Password: ${signupInputPass.value}`)

    // send the data to your API/DB
    fetch( `${selenaDbUrl}users${jsonExt}`, {
        method: "POST",
        body: JSON.stringify({
            name: signupInputName.value,
            email: signupInputEmail.value,
            username: signupInputUser.value,
            password: signupInputPass.value
        }),
        headers: { "Conent-type": "application/json; charset=UTF-8"}
    })
    // making sure data doesn't conflict with the DB
    // storing the data from the fields

    // clear the input fields
    signupInputName.value = ""
    signupInputEmail.value = ""
    signupInputUser.value = ""
    signupInputPass.value = ""

    // username doesn't already exist
                // require a GET call to have a list of usernames to check against
    
}
        // print each input field's value to the console
        
})

// create a function to handle getting user data
function getUsers () {
    let users;

    // let combinedStringByConcatenation = "some string " + selenaDbUrl + " some other string"
    // let combinedStringThroughInterpolation = `some string ${selenaDbUrl} some other string`


    // // FAILED Fetch Attempt
    // fetch(`${selenaDbUrl}users${jsonExt}`, {
    //     method: "GET",
    //     headers: { "Conent-type": "application/json; charset=UTF-8"}
    // })
    // .then((res) => {res.json()})
    // .then((data) => {
    //     console.log(data)
    //     return data
    //     // for (let u in data) {
    //     //     users.push(data[u])
    //     // }
    // })

    // Using jQuery and AJAX
    $.ajax({
        type: "GET",
        dataType: "json",
        url: `${selenaDbUrl}users${jsonExt}`,
        success: function (data, status, xhr) {
          console.log(data);
          users = [];
        for (u in data) {
          users.push(u)
        }
        },
      })
      return users
}

console.log(getUsers())

// home page
    // take use login
    // take use signup
// login form
    // authenticate if a user can have access to dashboard
        // check if username exists
        // check if password is correct
    // signup form
        // allowing a user to create a brand new account
            // username doesn't already exist
                // require a GET call to have a list of usernames to check against
            // email doesn't already exist
                // require a GET call to have a list of email to check against
            // form completely filled out
            // submit new user data to the DB
                // POST data to the DB
// dashboard/feed page
    // displaying the data 
    // and providing extra operations to users that own certain posts/tweets