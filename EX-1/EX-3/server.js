// server.js
const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
        res.send(`
            <html>
                <head><title>Home</title></head>
                <body>
                    <h1>Welcome to the Home Page</h1>
                    <p>This is a simple Node.js server.</p>
                </body>
            </html>
        `);                                                                                                                                                     
});

app.get('/about', (req, res) => {
        res.send(`
            <html>
                <head><title>About</title></head>
                <body>
                    <h1>About us: at CADT, we love Node.js!</h1>
                </body>
            </html>
        `);
});


app.get('/contact', (req,res) => {
    res.send(`
        <html>
            <head><title>Contact</title></head>
            <body>
                <h1>You can reach us via email...</h1>
                <form action="/Contact" method="POST">
                    <input type="text" name="name" placeholder="Enter your name" required>
                    <button type="submit">Submit</button>
                </form>
            </body>
        </html>
    `);
});
app.post('/Contact', (req, res) => {
    const name = req.body.name;

    console.log('Received name:', name);

    fs.appendFile('./submissions.txt', name + '\n', (err) => {
        if (err) {
            console.error('Error writing to file', err);
            return res.status(500).send('Internal Server Error');
        }

        res.send(`<h1>Thank you for your submission, ${name}</h1>`);
    });
});

app.use((req,res) => {
    res.status(404).send('404 not found')
})
app.listen(3000, () => {
    console.log('Express server running at http://localhost:3000');
});

