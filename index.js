// const express = require('express') // 1st ekta jinis etake import kora.

// const app = express();// tarpor j express ta aslo seta diye ekta app banabo.

// const port = 5000; //tarpor declare a port.

// app.get('/', (req, res)=> {
//     res.send('Hello man, Welcome to my first server') // eta holo data guloke pawar ekta system.
// })
// app.get('/data',(req, res)=> {
//     res.send('my second server coming soon')
// })

// app.listen(port, ()=>{ //app ta choltese ei port er moddhe
//     console.log(`Example app listening on port ${port}`)// call back function na dilew hoy. but port ta rightly kaj kortese ki na seta ekhane dhora porbe. as a junior hisebe deya dorkar
// })

const express = require('express');
const cors = require('cors'); // eta korar karon holo jodi localhost k copy kore fetch kora hoy tahole ekta error dibe, ei error ta handle korar jonno expressJs er resource=> middleware=> cors install korte hobe then nodemon index.js diye enter dite hobe.
const phones = require('./phones.json');

//req press korle directly evabe asbe. const packageName = require('packageName');

const app = express();
const port = 5000;

app.use(cors()); // eta holo cors er middleware. etake call kore dite hobe.

app.get('/', (req, res)=> {
    res.send('my phones information coming soon toon')
})

app.get('/phones', (req, res)=> {
    res.send(phones); // eta koray amar all data k localhost e dekhabe.
})
app.get('/phones/:id', (req, res)=> { // ekhane phones er id onujayi data pawar jonno phone.id === id diye find kora hoyeche.
    const id = parseInt(req.params.id); // phones.json e id number obosthay ase but sejonno req.params.id k parseInt kore ber kora holo.
    console.log('i need some phone id:', id);
    const phone = phones.find(phone => phone.id === id) || {}; // jodi man na pay tahole mt object dekhabe.
    res.send(phone);
    // console.log(phone);
})

app.listen(port, ()=> {
    console.log(`my phone server is running on port: ${port}`)
})
// ekhon port take chalanor jonno command line e node index.js likhe enter dite hobe. then kaj korbe. 

// bar bar reload korle data browser e payna. eta solution er jonno nodemon install korte hobe. npm install -g nodemon => eta diye install korte hobe. then nodemon index.js diye enter dile kaj korbe.