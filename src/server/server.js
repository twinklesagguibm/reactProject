const express = require('express')
const cors = require('cors', {origin: '*'});
const bodyParser = require('body-parser');

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
const data = {
    success : true,
    isUserAuthenticated: true,
    custmoerId : "C101"
}
const router = express.Router();

//server.use(cors());
router.post('/login', (req, res) => {
    console.log("req", req.body);
    if(req.body.name == "react_admin" && req.body.password == "react_admin"){
        console.log("============success=======")
        res.send(data);
    }else{
        console.log("============faiure=======")
        
        res.send({auth: false, error: "invalid cred"});
    }
});
const userData = [
        {
            "id" : "1",
            "desc" : "room rent",
            "amount" : "$700",
            "username" : "Harman Singh"
        },
        {
            "id" : "2",
            "desc" : "morrision",
            "amount" : "$40",
            "username" : "Vishu Patil"
        },
        {
            "id" : "3",
            "desc" : "morrision",
            "amount" : "$40",
            "username" : "Venkat Shetty"
        },
        {
            "id" : "4",
            "desc" : "morrision",
            "amount" : "$40",
            "username" : "Navroop Kaur"
        },
        {
            "id" : "5",
            "desc" : "morrision",
            "amount" : "$40",
            "username" : "Priya Singla"
        },
        {
            "id" : "6",
            "desc" : "morrision",
            "amount" : "$40",
            "username" : "Ajay Kapoor"
        },
        {
            "id" : "7",
            "desc" : "morrision",
            "amount" : "$40",
            "username" : "Maninder Singh"
        }
    
];

router.get('/userdata', (req,res)=>{
    console.log("reqqqq", req.body)
    res.send(userData);
})
server.use("/", router);
server.listen(4000);