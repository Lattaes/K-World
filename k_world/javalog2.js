const form2 = document.getElementById('form2');
const uname2 = document.getElementById('uname2');
const password2 = document.getElementById('password2');

const setSuccess2 = element => {
    const inputControl2 = element.parentElement;
    const errorDisplay2 = inputControl2.querySelector('.error');

    errorDisplay2.innerText = '';
    inputControl2.classList.add('successLog');
    inputControl2.classList.remove('error');
}

form2.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs2();
});

const setError2 = (element, message) => {
    const inputControl2 = element.parentElement;
    const errorDisplay2 = inputControl2.querySelector('.error');

    errorDisplay2.innerText = message;
    inputControl2.classList.add('error');
    inputControl2.classList.remove('successLog');
}

const validateInputs2 = () => {
    const unameValue2 = uname2.value.trim();
    const passwordValue2 = password2.value.trim();

    if(unameValue2 === ''){
        setError2(uname2, 'Username is required');
    } else{
        setSuccess2(uname2);
    }

    // if(unameValue != 'user' || passwordValue != 'user1234'){
    //     alert("Username or password is wrong");
    // }

    if(passwordValue2 === ''){
        setError2(password2, 'Password is required');
    }  else if(passwordValue2 != 'user1234'){
        alert("Username or Pasword is wrong");
        setSuccess2(password2);
    }

    

    if(unameValue2 == 'user' && passwordValue2 == 'user1234')
    {
        window.location.assign('html/action/midnigthRunners2.html');
        alert("Login Successfully");
    } 

};

