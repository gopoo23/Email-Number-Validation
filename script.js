var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var submitError = document.getElementById('submit-error');

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Number is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'OOps!! 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please.';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(email.indexOf('@')<=0){
        emailError.innerHTML = 'Email Invalid';
         return false;
    }
    if((email.charAt(email.length-4) !='.') && (email.charAt(email.length-3)!='.')){
        emailError.innerHTML = 'Email Invalid';
     return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validatePhone() || !validateEmail()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}