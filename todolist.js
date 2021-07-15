const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
let tasks = []
app.get('/', (req, res) => {
    let tasklist = tasks.map(t => `<li>${t}</li>`).join('\n')
    res.send(`
    <html>
        <body>
        <form action="/" method="POST">
        <input name="newtask">
        <button type="submit">ADD</button>
        </form>
        <ul>
        ${tasklist}
        </ul>
        </body>  
    </html>
    `)
})
app.post('/', (req, res) => {
    tasks.push(req.body.newtask)
    res.redirect('/')
})
app.listen(8484, (req, res) => {
    console.log('started')
})