
    function formValidate(){
        firstName = document.forms['form1']['firstName'].value;
        lastName = document.forms['form1']['lastName'].value;
        dob = document.forms['form1']['dob'].value;
        mobileNo = document.forms['form1']['mobileNo'].value;
        address = document.forms['form1']['address'].value;
        branch = document.forms['form1']['branch'].value;
        collegeName = document.forms['form1']['collegeName'].value;
        gender = document.forms['form1']['gender'].value;
        
        if(firstName == ""){
            document.getElementById("firstName").classList.add('border11');
            return false;
        }
        if(lastName == "" ){
            document.getElementById("lastName").classList.add('border11');
            return false;
        }

        if(mobileNo=="" ){
            document.getElementById("mobileNo").classList.add('border11');
            return false;
        }

        if(dob =="" ){
            document.getElementById("dob").classList.add('border11');
            return false;       
        }

        if(gender == ""){
            document.getElementById("gender").classList.add('border11');
            return false;
        }  

        if(address =="" ){
            document.getElementById("address").classList.add('border11');
            return false;
        }

        if(collegeName ==""){
            document.getElementById("collegeName").classList.add('border11');
            return false;
        } 
        if(branch =="" ){
            document.getElementById("branch").classList.add('border11');
            return false;
        }
        if(mobileNo.length < 10 || mobileNo.length > 10){
            alert("Mobile No");
        }
    }

$(document).ready(function(){
    $("input, select, textarea").focus(function(){
        //this.style.outline = "5px dotted #111";
        this.classList.add('borderAnimation');
    });
    $("input, select, textarea").blur(function(){
        this.style.outline = "none";
        this.classList.remove('borderAnimation');
    });

});