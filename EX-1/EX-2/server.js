// server.js
const express = require('express');
const app = express();

// Home route
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

// About route
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

// Contact Us route
app.get('/contact-us', (req, res) => {
    res.send(`
        <html>
            <head><title>Contact</title></head>
            <body>
                <h1>You can reach us via email...</h1>
            </body>
        </html>
    `);
});

// Products route
app.get('/products', (req, res) => {
    res.send(`
        <html>
            <head><title>Products</title></head>
            <body>
                <h1>Buy one get one</h1>
            </body>
        </html>
    `);
});

// Projects route (fixed missing slash!)
app.get('/projects', (req, res) => {
    res.send(`
        <html>
            <head><title>Projects</title></head>
            <body>
                <h1>Here are our awesome projects</h1>
            </body>
        </html>
    `);
});

// Catch-all 404 route
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Start server
app.listen(3000, () => {
    console.log('Express server running at http://localhost:3000');
});
