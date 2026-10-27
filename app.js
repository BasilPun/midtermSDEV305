import express from 'express';

const app = express();
const PORT = 3005;

app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(`${import.meta.dirname}/views/home.html`)
});

app.post('/thank-you', (req, res) =>{
    res.sendFile(`${import.meta.dirname}/views/thank-you.html`)
})


app.listen(PORT, () =>{
    console.log(`Server is running at: http://localhost:${PORT}`);
});