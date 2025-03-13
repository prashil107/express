import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.set('views', path.join(process.cwd(), 'views')); 

app.get('/', (req, res) => {
    let Type = "a weekday";
    let adv = "its time to go to work";
    const date = new Date();
    const day = date.getDay();
    if (day === 0 || day === 6) {
        Type = "the weekend";
        advice = "its time to relax";
    }
    res.render('index.ejs', { dayType : Type, advice: adv })});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}
);