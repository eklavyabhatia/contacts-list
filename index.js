const express=require('express')
const path=require('path')

const port=8080

const app=express()

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

var contactsList=[
    {
        name:'eklavya',
        phone:'9876543210'
    },
    {
        name:'abc',
        phone:'1234567890'
    }
]

app.get('/',function(req,res){
    res.render('index',{
        contact_list:contactsList
    })
})

app.listen(port,function(err){
    if(err){
        console.log(err)
        return
    }
    console.log('Server is running')
})