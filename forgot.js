let id=(id) => document.getElementById(id);

let classes=(classes)=> document.getElementsByClassName(classes);

let email=id("email")
    form=id("form")
    errorMsg=classes("error")


var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit",(e) =>{
    e.preventDefault();

    var flag=0;

    if(email.value.match(mailformat) && email.value=="shivendra123patel@gmail.com")
    {
        errorMsg[0].innerHTML=" ";
        email.style.borderBottom="1px solid #DDDDDD";
        flag+=1;
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
        location.href=form.getAttribute("action");
    }

});