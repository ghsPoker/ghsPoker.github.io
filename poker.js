import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function input(prompt) {
    rl.question(prompt, name => {
        return name
    });
}