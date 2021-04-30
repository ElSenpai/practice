var users =[
    {email:"Senpai@g.com",password:"12345"},
    {email:"Ahmet@g.com",password:"52345"}
]

var posts=[
    {email:"Senpai@g.com",post:"Such a great day!"},
    {email:"Senpai@g.com",post:"im soo bored!"},
    {email:"Ahmet@g.com",post:"its a new day"}  
]

var email=prompt("email?")
var password=prompt("password?")

function login(){
    if((email==users[0].email && password==users[0].password)||(email==users[1].email && password==users[1].password)){
     console.log(posts)
    }else{
        console.log("email or password not exist")
    }
}

login(email,password)