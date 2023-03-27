const phoneInputField = document.querySelector("#phone");
      const phoneInput = window.intlTelInput(phoneInputField, {
        initialCountry: "in",
        separateDialCode: true,
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });


      
let id=(id) => document.getElementById(id);

let classes=(classes) => document.getElementsByClassName(classes);

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

let fname=id("fname"),
    lname=id("lname"),
    email=id("email"),
    phone=classes("mobile-input"),
    pass=id("pass"),
    conPass=id("conPass"),
    form=id("form"),
    errorMsg=classes("error");
    sname=id('sname');
    state=id('state');
    city=id('city');
    country=id('country');
    zipcode=id('zipcode');
    service=id('service-accept');

    

  
    function nextPage(){
     var flag=0;

      if(fname.value==""){
        errorMsg[0].innerHTML="*Enter First Name.";
        fname.style.borderBottom="1px solid #ff0000";
      }

      else{
        errorMsg[0].innerHTML=" ";
        fname.style.borderBottom="1px solid #DDDDDD";
           flag+=1;
      }

      if(lname.value==""){
        errorMsg[1].innerHTML="*Enter Last Name.";
        lname.style.borderBottom="1px solid #ff0000";
      }

      else{
        errorMsg[1].innerHTML=" ";
        lname.style.borderBottom="1px solid #DDDDDD";
           flag+=1;
      }



      // email verification
    
      if(email.value.match(mailformat))
      {
        errorMsg[2].innerHTML=" ";
        email.style.borderBottom="1px solid #DDDDDD";
           flag+=1;
        }
    
        else if(email.value=="")
        {
            errorMsg[2].innerHTML="*Enter Email.";
            email.style.borderBottom="1px solid #ff0000";
            
        }
        else{
            errorMsg[2].innerHTML="*Incorrect Email."
            email.style.borderBottom="1px solid #ff0000";
            
        }

    // phone number
        if(phone[0].value.length!=10)
        {
          errorMsg[3].innerHTML="*Enter Correct Mobile Number";
          phone[0].style.borderBottom="1px solid #ff0000";
          
        }else if(phone[0].value=="1")
        {
          errorMsg[3].innerHTML="*Enter Mobile Number.";
            phone[0].style.borderBottom="1px solid #ff0000";
        }
        else{
          errorMsg[3].innerHTML=" ";
          phone[0].style.borderBottom="1px solid #DDDDDD";
           flag+=1;
        }

      // password

      

      
     

      if(pass.value=="")
      {
        errorMsg[4].innerHTML="* Enter Password";
        pass.style.borderBottom="1px solid #ff0000";

      }
      else if((pass.value.match(passw))){
        
        errorMsg[4].innerHTML=" ";
        pass.style.borderBottom="1px solid #DDDDDD";
         flag+=1;

      }

      else{
        errorMsg[4].innerHTML="* Enter correct Password";
        pass.style.borderBottom="1px solid #ff0000";

      }

      if(conPass.value==pass.value)
      {
        errorMsg[5].innerHTML=" ";
        conPass.style.borderBottom="1px solid #DDDDDD";
        flag+=1;
        }

      else
      {
        errorMsg[5].innerHTML="*Password Did't Matched.";
        conPass.style.borderBottom="1px solid #ff0000";
        
      }
      var flag=0;
      if(flag==0)
      {
        document.getElementById("step1").style.display='none';
        document.getElementById("step2").style.display='block';
        document.getElementById("step-01").style.opacity='.5';
        document.getElementById("step-02").style.opacity='1';
      }
      
      
    } 

    function showPass( ){
      let eyeImage= document.getElementById("eye-img")
  
      if(pass.type=="password")
      {
          pass.type="text";
          eyeImage.src="assets/eye-hide.png"
      }
      else{
          pass.type="password";
          eyeImage.src="assets/eye.png"
      }
    }
      function showPass1( ){
        let eyeImage= document.getElementById("eye-img-1")
    
        if(conPass.type=="password")
        {
            conPass.type="text";
            eyeImage.src="assets/eye-hide.png"
        }
        else{
            conPass.type="password";
            eyeImage.src="assets/eye.png"
        }
  
      }

      function step2(){
        var flag=0;
        
        if(sname.value==""){
          console.log('dasdsadasd')
          errorMsg[6].innerHTML="* Enter School name.";
          sname.style.borderBottom="1px solid #ff0000";
        }
        else
        {
          
          errorMsg[6].innerHTML=" ";
         sname.style.borderBottom="1px solid #DDDDDD";
        flag+=1;
        }

        if(state.value==""){
          console.log('dasdsadasd')
          errorMsg[7].innerHTML="* Enter state.";
          state.style.borderBottom="1px solid #ff0000";
        }
        else
        {
          
          errorMsg[7].innerHTML=" ";
         state.style.borderBottom="1px solid #DDDDDD";
        flag+=1;
        }

        if(city.value==""){
          errorMsg[8].innerHTML="* Enter City name.";
          city.style.borderBottom="1px solid #ff0000";
        }
        else
        {
          
          errorMsg[8].innerHTML=" ";
         city.style.borderBottom="1px solid #DDDDDD";
        flag+=1;
        }


        if(country.value==""){
          errorMsg[9].innerHTML="* Enter country name.";
          country.style.borderBottom="1px solid #ff0000";
        }
        else
        {
          
          errorMsg[9].innerHTML=" ";
         country.style.borderBottom="1px solid #DDDDDD";
        flag+=1;
        }

        if(zipcode.value==""){
          errorMsg[10].innerHTML="* Enter zipcode.";
          zipcode.style.borderBottom="1px solid #ff0000";
        }
        else
        {
          
          errorMsg[10].innerHTML=" ";
         zipcode.style.borderBottom="1px solid #DDDDDD";
        flag+=1;
        }
        if(service.checked==false){
          errorMsg[11].innerHTML="* accept terms and conditions.";
          // service.style.borderBottom="1px solid #ff0000";
        }
        else
        {
          
          errorMsg[11].innerHTML=" ";
        //  service.style.borderBottom="1px solid #DDDDDD";
        flag+=1;
        }
        

        

      if(flag==6)
      {
        location.href='dashboard.html';
      }



      }




      function stepBack(){
        document.getElementById("step1").style.display='block';
        document.getElementById("step2").style.display='none';
        document.getElementById("step-01").style.opacity='1';
        document.getElementById("step-02").style.opacity='.5';
      }





      