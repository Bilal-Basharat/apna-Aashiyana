let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}

 function validation(){
    var userName = document.getElementById('name').value;
    var userEmail = document.getElementById('email').value;
    var userSubject = document.getElementById('subject').value;
    var userMessage = document.getElementById('userMessage').value;
    var userNumber = document.getElementById('number').value;
    if(userName == ""){
        document.getElementById('userNameValidation').innerHTML  = "Please enter your name";
        return false;
    }
     
    if(userName.length <= 2 || userName.length > 20){
        document.getElementById('userNameValidation').innerHTML  = "user name must be between 2 and 20 characters";
        return false;
    }
    if(!isNaN(userName)){
        document.getElementById('userNameValidation').innerHTML  = "Please enter correct user name";
        return false;
    }

     if(userEmail == ""){
        document.getElementById('userEmailValidation').innerHTML  = "Please enter your email";
        return false;
    }
    if(userEmail.indexOf('@') <= 0){
        document.getElementById('userEmailValidation').innerHTML  = "Please enter correct email";
        return false;
    }

    if(userNumber == ""){
        document.getElementById('numberValidation').innerHTML  = "Please enter your number";
        return false;
    }
     if(isNaN(userNumber)){
        document.getElementById('numberValidation').innerHTML  = "Please enter a valid mobile number";
        return false;
    }
     if(userNumber.length != 11){
        document.getElementById('numberValidation').innerHTML  = "Please enter a valid mobile number";
        return false;
    }

     if(userSubject == ""){
        document.getElementById('subjectValidation').innerHTML  = "Please enter your subject";
        return false;
    }
    if(!isNaN(userSubject)){
        document.getElementById('subjectValidation').innerHTML  = "Subject must be in characters";
        return false;
    }

     if(userMessage == ""){
        document.getElementById('messageValidation').innerHTML  = "Please enter your message";
        return false;
    }
    if(userMessage.length < 20){
        document.getElementById('messageValidation').innerHTML  = "Message must be more than 20 characters";
        return false;
    }
    
   
}