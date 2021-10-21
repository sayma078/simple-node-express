const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors())
app.use(express.json());

app.get ('/', (req, res)=>{
    res.send('hello this is my second node!!!')
});


const users = [
    {id:0, name: 'somaya', email:'somaya@gmail.com', phone:'01788888'},
    {id:1, name: 'sayma', email:'sayma@gmail.com', phone:'01788888'},
    {id:2, name: 'jeba', email:'jeba@gmail.com', phone:'01788888'},
    {id:3, name: 'ayesha', email:'ayesha@gmail.com', phone:'01788888'},
    {id:4, name: 'shorna', email:'shorna@gmail.com', phone:'01788888'}
]

app.get ('/users', (req, res) =>{
    const search =req.query.search ;
    //use quary parameter
    if(search){
        const searchReasult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchReasult)
    }
    else{
        res.send(users)
    }
})

//app.METHOD
app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id =  users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic api
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/fruits',(req,res) =>{
    res.send(['mango','banana','orange','apple'])
})

app.get('/fruits/mango/fazli',(req,res)=>{
    res.send('yummmy yummy mango');
})

app.listen(port, ()=>{
    console.log('listening', port)
})
