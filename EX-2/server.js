// server.js
import express from "express";
import courses from "./course.js";
const app = express();
const PORT = 3000;

app.use(express.json());
// Route: GET /departments/:dept/courses
app.get('/departments/:dept/courses', (req, res) => {
    const { dept } = req.params;
    const { level, minCredits, maxCredits, semester, instructor } = req.query;
    // Implementing the filter logic
    const Course = courses.filter( course => {
        return (
            course.department === dept &&
            (!level || course.level === level) &&
            (!minCredits || course.credits >= parseInt(minCredits)) &&
            (!maxCredits || course.credits <= parseInt(maxCredits)) &&
            (!semester || course.semester === semester) &&
            (!instructor || course.instructor === instructor)
        ); 
    })
    res.send(Course);
    // Hint: Use the filter method to filter the courses array based on the provided criteria
});
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
}
);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
