const server = "https://ghs-poker-backend.onrender.com/user/log-in/"

async function logIn() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    alert('Hello', username)

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
}