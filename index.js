const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const AllData = require("./AllData")
const MentorDetails = require("./MentorDetails");

app.set('view engine', 'ejs');
app
.use(express.static(__dirname + '/public'))
.use(bodyParser.urlencoded({extended: true}))
.get("/", (req, res)=>{                     
    res.sendFile(__dirname +"/index.html")
})
.get("/data", (req, res)=>{                              //Fetches All Mentor
    res.render("trail", {data: AllData} ) 
})
.get("/mentors", (req, res)=>{                           //Fetches all raw data of Mentor
    res.render("mentors", {data: MentorDetails} ) 
})
.post("/SpecificMentor",(req,res)=>{                     //Fetches Students under one Mentor
    let mentor = req.body.MentorName;
    let Filtered = AllData.filter((data)=> data.MentorName === mentor)
    if(Filtered.length>0){
        res.render("specific", {data: Filtered} ) 
    }else{
       res.sendFile(__dirname + "/public/failure.html")  
    }
    
})
.post("/assignMentor", (req,res) => {                     //Assign mentor to all unassigned students
    let mentor =  req.body.MentorName
    let Input = MentorDetails.filter((data)=> data.MentorName === mentor)
    if(Input.length>0){
        AllData.filter((student)=>{
            if(student.MentorName === "NA"){
                student.MentorName = mentor
                res.sendFile(__dirname + "/public/success.html") 
            }
        })
    }
    if(Input.length===0){
        res.sendFile(__dirname + "/public/failure.html") 
    }    
})
.post("/assignSingleMentor", (req, res)=>{                  //Update/Assign Mentor to Students 
    let student = req.body.StudentName;
    let mentor = req.body.MentorName;
    let Input1 = MentorDetails.filter((data)=> data.MentorName === mentor)
    let Input2 = AllData.filter((data)=> data.Name === student)
    if(Input1.length>0 && Input2.length > 0){
        AllData.forEach((data) => {
                if(data.Name === student){
                    data.MentorName = mentor;
                    res.sendFile(__dirname + "/public/success.html")
                }
            })
        
    }
    if(Input1.length === 0 || Input2.length === 0){
        res.sendFile(__dirname + "/public/failure.html") 
    }
})
.post("/createStudent", (req, res)=>{                        //Create a new Student 
let Input = AllData.filter((data)=> data.Name === req.body.Name)
    if(Input.length===0){
        req.body.MentorName = "NA"
        AllData.push(req.body)
        res.sendFile(__dirname + "/public/success.html") 
    }
    if(Input.length>0){
        res.sendFile(__dirname + "/public/failure.html")   
    }

})
.get("/mentors", (req, res)=>{                              //Fetches all the Mentor
    res.render("mentors", {data: MentorDetails} ) 
})
.post("/createMentor", (req, res)=>{                        //Create a new Mentor 
let Input = MentorDetails.filter((data)=> data.MentorName === req.body.MentorName)
    if(Input.length===0){
        MentorDetails.push(req.body)
        res.sendFile(__dirname + "/public/success.html")  
    }
    if(Input.length>0){
        res.sendFile(__dirname + "/public/failure.html")   
    }
})
.listen(process.env.PORT)




