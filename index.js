const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
    const { name = 'Not known!'} = req.cookies;
    res.send('Hey there ' + name);

})

app.get('/', (req, res) => {
    res.send('The options for the sites are : \n setname \n signedcookie \n getcookies ')
})

app.get('/setname', (req, res) =>{
    res.cookie('name', 'Jake');
    res.cookie('animal', 'goat');
    res.send('Ok, sent you a cookie!');
})

app.get('/signedcookie', (req, res) =>{
    res.cookie('fruit', 'banana', {signed : true});
    res.send('Ok, sent you a cookie!');
})

app.get('/getcookies', (req, res) =>{
    //res.send(req.cookies);
    res.send(req.signedCookies);
})



app.listen(3000, () => {
    console.log('Listening on port 3000')
})