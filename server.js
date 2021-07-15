const express = require('express')
    //we get instance of our server  by using express
const app = express()
    //.listen() starts your server on a certain ports..
    //when u create server it needsto start on a certain ports..
    //we can send requests to that particular port in which case urserver will basically run
    //4444 is the port we created..pick a port greater thn 1024..bcs there are reserved set ports..
    // check exact no. on net
app.use(express.urlencoded({ extended: true }))
    //this prse the whole body of request..so this way we wont have error if we use POST method..bcs POST stores info in body..not in query ..so also there will be no info in our link
app.post('/greet', (req, res) => {
    let person = 'guest'

    if (req.body.person) {
        person = req.body.person
    }

    if (req.body.firstname) {
        person = req.body.firstname
        if (req.body.lastname) {
            person = person + req.body.lastname
        }
    }
    res.send('good morning ' + person)
    res.send('<h1 style="color:red">Hello World</h1>')
})
app.get('/:city/:greeting', (req, res) => {
    res.send(req.params.greeting + 'to' + req.params.city)
})
app.get('/:person/:action', (req, res) => {
    res.send(req.params.person + ' thank you for ' + req.params.action)
})
app.get('/', (req, res) => {
        res.send('Hello World')
    })
    //or
app.get('/greet', (req, res) => {
    /*console.log(req.url)
    console.log(req.header)
    console.log(req.query)*/
    //see the result..in console after opening html page in browser
    let person = 'guest'

    if (req.query.person) {
        person = req.query.person
    }

    if (req.query.firstname) {
        person = person + req.query.firstname
        if (req.query.lastname) {
            person = person + req.query.lastname
        }
    }
    res.send('good morning ' + person)
    res.send('<h1 style="color:red">Hello World</h1>')
})
app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/form.html')
})

//there is another type of request known as post request
//how can we send a bigger response like a file
//in post method parametes goer to body of request rrather than query of the request
app.listen(8080, () => {
    console.log('server started on http://localhost:8080')
})