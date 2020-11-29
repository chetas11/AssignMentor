const StudentDivToggler = document.getElementById("StudentDivToggler");
const StudentDiv = document.getElementById("create-student");
const AssignMentorToggler = document.getElementById("AssignMentorToggler");
const assignMentor = document.getElementById("assign-mentor");
const MentorDivToggler = document.getElementById("MentorDivToggler");
const createMentor = document.getElementById("create-mentor");
const SingleMentorDivToggler = document.getElementById("SingleMentorDivToggler");
const assignSingleMentor = document.getElementById("assign-singleMentor");
const SpecificMentorDivToggler = document.getElementById("SpecificMentorDivToggler");
const assignSpecificMentor = document.getElementById("assign-specificMentor");
const checkData = document.getElementById("checkData");
const getMentors = document.getElementById("getMentors");

checkData.addEventListener("click",()=>{
    var x = location.pathname+"data";
    location.href = x
})

getMentors.addEventListener("click",()=>{
    var x = location.pathname+"mentors";
    location.href = x
})

StudentDivToggler.addEventListener("click", ()=>{
    if(StudentDiv.style.display === "none"){
        StudentDiv.style.display = "block"
    }else{
        StudentDiv.style.display = "none"
    }
    
})

AssignMentorToggler.addEventListener("click", ()=>{
    if(assignMentor.style.display === "none"){
        assignMentor.style.display = "block"
    }else{
        assignMentor.style.display = "none"
    }
    
})

MentorDivToggler.addEventListener("click", ()=>{
    if(createMentor.style.display === "none"){
        createMentor.style.display = "block"
    }else{
        createMentor.style.display = "none"
    }
    
})

SingleMentorDivToggler.addEventListener("click", ()=>{
    if(assignSingleMentor.style.display === "none"){
        assignSingleMentor.style.display = "block"
    }else{
        assignSingleMentor.style.display = "none"
    }
})


SpecificMentorDivToggler.addEventListener("click", ()=>{
    if(assignSpecificMentor.style.display === "none"){
        assignSpecificMentor.style.display = "block"
    }else{
        assignSpecificMentor.style.display = "none"
    }
})


