// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // always remember to add .value to get the text from input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    // step -3: get password
    // 3.a. set id on the html element
    // 3.b. get the element
    // 3.c. get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password);

    // DANGER: DO NOT VERIFY email password on the client side
    // step-4: verify email and password and check whether valid user or not
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Tui password vul e gesos!!!Tok e ami tejjo ghosona korlam.')
    }
})