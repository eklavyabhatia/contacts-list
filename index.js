const express = require('express')
const path = require('path')
const port = 8080

const db = require('./config/mongoose')
const Contact = require('./models/contact')

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
    Contact.find({}, function (err, contacts) {
        if (err) {
            console.log(err)
            return;
        }
        res.render('index', {
            contact_list: contacts
        })
    })

})

app.post('/create-contact', function (req, res) {
    // console.log(req.body)
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function (err, newContact) {
        if (err) {
            console.log(err)
            return
        }
        return res.redirect('back')
    })
})

app.get('/delete-contact/:id', function (req, res) {
    let id = req.params.id
    Contact.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log(err)
            return;
        }

        res.redirect('back')
    })
})

app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Server is running')
})