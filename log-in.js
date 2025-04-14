const server = "https://ghs-poker-backend.onrender.com"



async function logIn() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

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