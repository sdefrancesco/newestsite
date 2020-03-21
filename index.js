const express = require('express')

const app = express()

var Vimeo = require('vimeo').Vimeo;
var client = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN)

app.use(express.static('./public'))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('./index.hbs', {
        serverSays: 'Hello from the backend'
    })
})

app.listen(3000, () => {
    console.log('server started on port 3000')
})
