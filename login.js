let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error");
  loginButton=id("login-button");


  var flag=0;


var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function main(){
    if(email.value.match(mailformat) || email.value=="shivendra123patel@gmail.com")
  {
    errorMsg[0].innerHTML=" ";
    email.style.borderBottom="1px solid #DDDDDD";
       flag=1;
    }

    else if(email.value=="")
    {
        errorMsg[0].innerHTML="*Please Enter the Email.";
        email.style.borderBottom="1px solid #ff0000";
        
    }
    else{
        errorMsg[0].innerHTML="**Please enter valid email address"
        email.style.borderBottom="1px solid #ff0000";
        
    }

    if(password.value=="ilead"){
        errorMsg[1].innerHTML=" ";
        password.style.borderBottom="1px solid #DDDDDD";
        flag=2;
        }
    else if(password.value==""){
        errorMsg[1].innerHTML="*Enter password.";
        password.style.borderBottom="1px solid #ff0000";
    }
    else{
        errorMsg[1].innerHTML="*Incorrect password.";
        password.style.borderBottom="1px solid #ff0000";
    }

    console.log(flag)
    if(flag==2)
    {

        document.getElementById("login-button").disabled = false;
        loginButton.style.opacity="1";
        
    }
  
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

 
    main();
    if(flag==2)
    {
        location.href=form.getAttribute("action");
    }
    
    
});

function showPass( ){
    let eyeImage= document.getElementById("eye-img");

    if(password.type=="password")
    {
        password.type="text";
        eyeImage.src="assets/eye-hide.png"
    }
    else{
        password.type="password";
        eyeImage.src="assets/eye.png"
    }

}