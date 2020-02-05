const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/contact_list_db', { useUnifiedTopology: true, useNewUrlParser: true })

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log('Successfully connected to database')
});