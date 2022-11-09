// let activeBtn=document.querySelector('#Log_In')
// let logIn_Container=document.querySelector('.login-Container');
// let signUp_Container=document.querySelector('#signup-Container')
// let disableBtn=document.querySelector('#Sign_Up');


// activeBtn.addEventListener('click',()=>{
//     logIn_Container.classList.add('active_model')
//     console.log("hello0000")
//     logIn_Container.style.display="block"
//     signUp_Container.style.display='none'
// })
// disableBtn.addEventListener('click',()=>{
//     console.log("hello")
//     logIn_Container.classList.remove('active_model')
//     logIn_Container.style.display="none"
//     signUp_Container.style.display='block'
//     signUp_Container.style.display='flex'

// })

let getStartedBTN=document.getElementById('Auth-getStarted_Jump');
let logInBTN=document.getElementById('Auth-logIn_Jump');
let Auth_loginContainer=document.getElementById('Auth_login-Container');
let Auth_signupContainer=document.getElementById('Auth_signup-Container');


getStartedBTN.addEventListener("click",()=>{
Auth_loginContainer.style.display="none";
Auth_signupContainer.style.display="block";
})
logInBTN.addEventListener('click',()=>{
    Auth_loginContainer.style.display="block";
    Auth_signupContainer.style.display="none";
})