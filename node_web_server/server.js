const express = require('express')
const fs = require('fs')
const path = require('path')
const hbs = require('hbs')
const { isBuffer } = require('util')


let app = express()

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

app.use((req, res, next) => {
    let now=new Date().toDateString();
    let log=(`${now} - ${req.method} ${req.url}`)
    fs.appendFile('server.log',log + '\n',(err)=>{
        if(err){console.log("error occured")}
    })
    next()
})
app.use((req,res,next)=>{
    res.render('maintenence.hbs')
})
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
})
app.use(express.static('public'))

app.get('/', (request, respond) => {
    respond.render('home.hbs', {
        headerMessage: "Welcome to home page",
        title: 'home page',
        welcomeMessage: 'welcome to my website'
    })
})

app.get('/about', (request, respond) => {
    respond.render('about.hbs', {
        headerMessage: "Welcome to about page",
        pageTitle: 'Our About Page',
        divIcerik: "Some content here"
    })
}
)




app.listen(3000)