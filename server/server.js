const express = require('express');

// create our express app
const app = express();

let games = [
    {
        name: 'Minecraft',
        funLevel: 7
    },
    {
        name: 'CoD',
        funLevel: 8.7
    },
    {
        name: 'Mario Bros',
        funLevel: 9.3
    }
]

// share my client side files with the public (client/anyone that wants them)
app.use(express.static('server/public'));

app.get('/games', (req, res) => {
    //this code is run when someone asks to get games

    // send the games back to the client
    res.send(games);
});

// Listen for internet requests
app.listen(5000, () => {
    console.log("I'm listening...");
});

console.log("look, ma, I'm a server.");