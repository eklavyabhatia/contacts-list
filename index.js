const express = require('express')
const path = require('path')

const port = 8080

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('assets'))

var contactsList = [
    {
        name: 'eklavya',
        phone: '9876543210'
    },
    {
        name: 'abc',
        phone: '1234567890'
    }
]

app.get('/', function (req, res) {
    res.render('index', {
        contact_list: contactsList
    })
})

app.post('/create-contact', function (req, res) {
    // console.log(req.body)
    contactsList.push(req.body)
    res.redirect('back')
})

app.get('/delete-contact/:phone', function (req, res) {
    let phone = req.params.phone
    let i = contactsList.findIndex(contacts => contacts.phone == phone)
    if (i != -1)
        contactsList.splice(i, 1);
    res.redirect('back')
})

app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Server is running')
})