const selenaDbUrl = "https://twitter-clone-a6357-default-rtdb.firebaseio.com/"
const jsonExt = ".json"

// Vanilla JS DOM Manipulation
let loginInputUser = document.getElementById("loginInputUser")
let loginInputPass = document.getElementById("loginInputPass")
let loginButton = document.getElementById("loginButton")


    // Add Event Listener for Sign Up Form's Button
window.location.assign(Dashboard.html)
loginButton.addEventListener("click", (e) => {
    // prevents the page from reloading
    e.preventDefault()

    // What operations happen
    // making sure there aren't any empty input fields
    if (loginInputUser.value === "" ||
        loginInputPass.value === "" ){
        // if any fields are empty
        alert("Please fill out all fields.")
    } else {
        console.log("HI")
    console.log(`Username: ${loginInputUser.value}`)
    console.log(`Password: ${loginInputPass.value}`)

    // send the data to your API/DB
    fetch( `${selenaDbUrl}users${jsonExt}`, {
        method: "POST",
        body: JSON.stringify({
            username: loginInputUser.value,
            password: loginInputPass.value
        }),
        headers: { "Conent-type": "application/json; charset=UTF-8"}
    })
    // making sure data doesn't conflict with the DB
    // storing the data from the fields

    // clear the input fields
    loginInputUser.value = ""
    loginInputPass.value = ""

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