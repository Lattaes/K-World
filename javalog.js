const form = document.getElementById('form');
const uname = document.getElementById('uname');
const password = document.getElementById('password');

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('successLog');
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
    inputControl.classList.remove('successLog');
}

const validateInputs = () => {
    const unameValue = uname.value.trim();
    const passwordValue = password.value.trim();

    if(unameValue === ''){
        setError(uname, 'Username is required');
    } else{
        setSuccess(uname);
    }


    if(passwordValue === ''){
        setError(password, 'Password is required');
    }

    if(unameValue != '' && passwordValue != '')
    {
        window.location.assign("index.html");
        alert("Login Successfully");
    } 

    
    
};




