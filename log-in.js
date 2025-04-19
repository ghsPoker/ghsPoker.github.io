const server = "https://ghs-poker-backend.onrender.com/user/log-in/"

const username = document.getElementById("username")
const password = document.getElementById("password")

async function logIn() {
    console.log(username.value)


    /*
    await fetch(server, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    */
}