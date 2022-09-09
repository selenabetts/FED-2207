// Fetch API call
let url = "some.website"
let jsonExt = ".json"

// GET
fetch(`${url}${jsonExt}`)

// POST
fetch( `${url}specificLocation${jsonExt}`, {
    method: "POST",
    body: JSON.stringify({
        name: "",
        email: "",
        username: "",
        password: ""
    }),
    headers: { "Conent-type": "application/json; charset=UTF-8"}
})

// PATCH for partial updates
fetch( `${url}specificLocation/someUID${jsonExt}`, {
    method: "PATCH",
    body: JSON.stringify({
        name: "",
        email: "",
        username: "",
        password: ""
    }),
    headers: { "Conent-type": "application/json; charset=UTF-8"}
})


// DELETE
fetch( `${url}specificLocation/someUID${jsonExt}`, {
    method: "DELETE"
})
