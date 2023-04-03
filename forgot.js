let id=(id) => document.getElementById(id);

let classes=(classes)=> document.getElementsByClassName(classes);

let email=id("email")
    form=id("form")
    errorMsg=classes("error")


var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var flag=0;


function changePass(){
    if(email.value.match(mailformat) || email.value=="shivendra123patel@gmail.com")
    {
        errorMsg[0].innerHTML=" ";
        email.style.borderBottom="1px solweid #DDDDDD";
        flag=1;
    }

    else if(email.value=="")
    {
        errorMsg[0].innerHTML="*Enter Email.";
        email.style.borderBottom="1px solid #ff0000";
        
    }

    else{
        errorMsg[0].innerHTML="*Incorrect Email."
        email.style.borderBottom="1px solid #ff0000";
        
    }

    if(flag==1)
    {
        document.getElementById("submit-button").style.opacity="1";
        document.getElementById("submit-button").disabled=false;
    }
}


form.addEventListener("submit",(e) =>{
    e.preventDefault();

changePass();

 if(flag==1)
    {
        location.href=form.getAttribute("action");
    }

});