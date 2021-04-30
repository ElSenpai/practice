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

function userIsExist(email,password){
    for(i=0;i<users.length;i++){
        if(users[i].email==email&&users[i].password==password){
         return true
        }
    }
    return false;
}
function login(){
    if(userIsExist(email,password)){
     console.log(posts)
    }else{
        console.log("email or password not exist")
    }
}

login(email,password)