const server = "https://ghs-poker-backend.onrender.com/user/sign-up/"

const username = document.getElementById("username")
const password = document.getElementById("password")

async function logIn() {
    console.log(username.value)


    try {
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
        console.log("Success")
    } catch (err) {
        console.log(err)
    }
    
}