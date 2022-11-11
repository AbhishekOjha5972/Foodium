import {mainNavbarContainer,navbarModal} from "./Components/navbar.js";

let mainNavbarContainer_append=document.getElementById('mainNavbarContainer');
let navbarModal_append=document.querySelector('.navbarModal');
mainNavbarContainer_append.innerHTML=mainNavbarContainer();
navbarModal_append.innerHTML=navbarModal();



let activeModalBtn=document.querySelector('.Navbar-Model_Active');
let closeModalBtn=document.querySelector('.navbar-Icon_Change');
let needsToActiveThisModal=document.querySelector('.navbarModal');
// let thatCSS_HaveToPut=document.querySelector('');

activeModalBtn.addEventListener('click',()=>{
  let changeTheIcon=document.querySelector('.Navbar-Model_Active');
  changeTheIcon.style.display='none';
  let replaceToIcon=document.querySelector('.navbar-Icon_Change');
  replaceToIcon.style.display='block'
  //   changeTheIcon.innerHTML=(`<i class="fa-solid fa-xmark"></i>`) 

  needsToActiveThisModal.classList.add('activeCss');
})

closeModalBtn.addEventListener('click',()=>{
    let replaceToIcon=document.querySelector('.navbar-Icon_Change');
    replaceToIcon.style.display='none'
    let changeTheIcon=document.querySelector('.Navbar-Model_Active');
    changeTheIcon.style.display='block';
    needsToActiveThisModal.classList.remove('activeCss');
  })
  let screenSize = window.screen.width;

function reportWindowSize() {
    console.log("hello")
    let widthOutput= window.innerWidth;
    let changeTheIcon=document.querySelector('.Navbar-Model_Active');
    let replaceToIcon=document.querySelector('.navbar-Icon_Change');
  
    if(widthOutput>=1000){
       
        changeTheIcon.style.display="none";
    
        replaceToIcon.style.display='none'
    }
    else{
        if(replaceToIcon.style.display!=="block"){
            changeTheIcon.style.display="block";
        }
    }
  }
  window.onresize = reportWindowSize;



//   ------------------------Authentication Area------------------------ 

let signupEvent=document.getElementById('sign_Up');
signupEvent.addEventListener('click',()=>{
    window.location.href="loginAndSignup.html"
})

let loginEvent=document.getElementById('log_In');
loginEvent.addEventListener('click',()=>{
    window.location.href="loginAndSignup.html"
})


// -----------------Appending the user data into the home page-----------------

const lsUserData=JSON.parse(localStorage.getItem('activeUser'));
console.log('lsUserData:', lsUserData)
console.log("check")
const userDataAppend=document.querySelector('#rightDiv .loggedInUserData');
const signUpPlace=document.getElementById('sign_Up');
const logInPlace=document.getElementById('log_In');
if(lsUserData==null){
    userDataAppend.style.display='none'
    // logInPlace.style.display='block';
    // signUpPlace.style.display='block';
}
else{
    logInPlace.style.display='none';
    signUpPlace.style.display='none';
    userDataAppend.style.display="block"
    userDataAppend.textContent=lsUserData.first_name;
}




// Carousel section 


const productContainers = [...document.querySelectorAll('.product-container')];
console.log('productContainers:', productContainers)
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
console.log('nxtBtn:', nxtBtn)
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})