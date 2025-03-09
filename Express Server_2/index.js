import express from 'express';
const app  = express();
const port = 3002;

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1>');
}   );

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us</h1><p>Phone: 123-456-7890</p>');
}
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});