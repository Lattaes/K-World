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

    // if(unameValue != 'user' || passwordValue != 'user1234'){
    //     alert("Username or password is wrong");
    // }

    if(passwordValue === ''){
        setError(password, 'Password is required');
    }  else if(passwordValue != 'user1234'){
        alert("Username or Pasword is wrong");
        setSuccess(password);
    }

    

    if(unameValue == 'user' && passwordValue == 'user1234')
    {
        window.location.assign("index.html");
        alert("Login Successfully");
    } 

    
    
};




