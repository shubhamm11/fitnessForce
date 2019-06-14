
function formValidate(){
        firstName = document.getElementById("firstName").value;
        lastName = document.getElementById("lastName").value;
        dob = document.getElementById("dob").value;
        mobileNo = document.getElementById("mobileNo").value;
        address = document.getElementById("address").value;
        branch = document.getElementById("branch").value;
        collegeName = document.getElementById("collegeName").value;
        gender = document.getElementById("gender").value;
        
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
        if(mobileNo.toString().length < 10 || mobileNo.toString().length > 10){
            alert("Enter valid Mobile");
            
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