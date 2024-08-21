const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const cPass = document.getElementById('cPass');

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

form.addEventListener('submit', e => {
    // Prevent default event. In this case, it will prevent the form to immediately submit when clicking the button, because the data that already inputted have to be validated first
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();
    const cPassValue = cPass.value.trim();

    if(usernameValue === ''){
        setError(username, 'Username is required');
    } else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
    } else if(!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    } else{
        setSuccess(email);
    }

    if(passValue === ''){
        setError(pass, 'Password is required');
    } else if(passValue.toString().length < 8){
        setError(pass, 'Password must be at least 8 characters');
    } else{
        setSuccess(pass);
    }

    if(cPassValue === ''){
        setError(cPass, 'Please confirm your password');
    } else if(cPassValue !== passValue){
        setError(cPass, "Password doesn't match");
    } else{
        setSuccess(cPass)
    }

    
    if(usernameValue != '' && emailValue != '' && passValue != '' && cPassValue == passValue){
        window.location.assign("loginForm.html");
        alert
    }
   
};