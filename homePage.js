import { mainNavbarContainer, navbarModal } from "./Components/navbar.js";

let mainNavbarContainer_append = document.getElementById('mainNavbarContainer');
let navbarModal_append = document.querySelector('.navbarModal');
mainNavbarContainer_append.innerHTML = mainNavbarContainer();
navbarModal_append.innerHTML = navbarModal();



let activeModalBtn = document.querySelector('.Navbar-Model_Active');
let closeModalBtn = document.querySelector('.navbar-Icon_Change');
let needsToActiveThisModal = document.querySelector('.navbarModal');
// let thatCSS_HaveToPut=document.querySelector('');

activeModalBtn.addEventListener('click', () => {
    let changeTheIcon = document.querySelector('.Navbar-Model_Active');
    changeTheIcon.style.display = 'none';
    let replaceToIcon = document.querySelector('.navbar-Icon_Change');
    replaceToIcon.style.display = 'block'
    //   changeTheIcon.innerHTML=(`<i class="fa-solid fa-xmark"></i>`) 

    needsToActiveThisModal.classList.add('activeCss');
})

closeModalBtn.addEventListener('click', () => {
    let replaceToIcon = document.querySelector('.navbar-Icon_Change');
    replaceToIcon.style.display = 'none'
    let changeTheIcon = document.querySelector('.Navbar-Model_Active');
    changeTheIcon.style.display = 'block';
    needsToActiveThisModal.classList.remove('activeCss');
})
let screenSize = window.screen.width;

function reportWindowSize() {
    console.log("hello")
    let widthOutput = window.innerWidth;
    let changeTheIcon = document.querySelector('.Navbar-Model_Active');
    let replaceToIcon = document.querySelector('.navbar-Icon_Change');

    if (widthOutput >= 1000) {

        changeTheIcon.style.display = "none";

        replaceToIcon.style.display = 'none'
    }
    else {
        if (replaceToIcon.style.display !== "block") {
            changeTheIcon.style.display = "block";
        }
    }
}
window.onresize = reportWindowSize;



//   ------------------------Authentication Area------------------------ 

let signupEvent = document.getElementById('sign_Up');
signupEvent.addEventListener('click', () => {
    window.location.href = "loginAndSignup.html"
    //console.log("Invoked")
})

let loginEvent = document.getElementById('log_In');
loginEvent.addEventListener('click', () => {
    window.location.href = "loginAndSignup.html"
})


// -----------------Appending the user data into the home page-----------------

const lsUserData = JSON.parse(localStorage.getItem('activeUser'));
console.log('lsUserData:', lsUserData)
console.log("check")
const userDataAppend = document.querySelector('#rightDiv .loggedInUserData');
const signUpPlace = document.getElementById('sign_Up');
const logInPlace = document.getElementById('log_In');
if (lsUserData == null) {
    userDataAppend.style.display = 'none'
    // logInPlace.style.display='block';
    // signUpPlace.style.display='block';
}
else {
    logInPlace.style.display = 'none';
    signUpPlace.style.display = 'none';
    userDataAppend.style.display = "block"
    userDataAppend.textContent = lsUserData.first_name;
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





// jump to the plans & menu 

const jumpPlansAndMenu = document.getElementById('plansAndMenu');

jumpPlansAndMenu.addEventListener('click', () => {
    window.location.href = "plans&menu.html"
    // console.log("hello")
})


const jumpToTheHomePage=document.getElementById('jumpToTheHomePage');
jumpToTheHomePage.addEventListener('click',()=>{
    window.location.href="index.html";
})



// Chatbot 

let activeUserData_forBot = JSON.parse(localStorage.getItem('activeUser'));

let nameData = activeUserData_forBot.first_name[0].toUpperCase() + activeUserData_forBot.first_name.substring(1);
console.log('nameData:', nameData)

const botStartQuestions = {
    1: `Hi ${nameData}`,
    2: `My name is FAV, I'm your virtual assistant on footium`,
    3: "We have some questions for you to answer Yes or No",
    4: "Do you want see our meals product",
    5: `<span id="YES">Yes</span> or <span id="NO">No</span>`,
}

// check logic 





const activeBtn = document.getElementById('chatbotContainer')
activeBtn.addEventListener('click', () => {
    const chatActiveDiv = document.getElementById('chatActiveDiv');
    // setTimeout(() => {
    chatActiveDiv.style.display = "block";

    // }, 500)

    // Calling the "startConV" function 
    startConV();


})


// TODO: Creating a function who will start the conversation
const startConV = async () => {
    for (let key in botStartQuestions) {
        await Delay(2000)
        console.log(botStartQuestions[key]);
        let message = divCreate(botStartQuestions[key]);
        console.log('message:', message)
        let sendMessage = document.getElementById('chatbot-ChildTwo');
        console.log('sendMessage:', sendMessage)
        sendMessage.append(message);
    }
}

// Delay Function 
const Delay = (DelayValue) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, DelayValue)
    })
}


const divCreate = (para) => {
    const div = document.createElement('div');

    div.innerHTML = `<p>${para}</p>`
    return div;
}


// creating chat bot function in which he will response
// const jumpMealsProduct=document.getElementById('YES');
// jumpMealsProduct.addEventListener('click',()=>{
//     console.log("yes")
// })

const closeBtn = document.getElementById('closeBtnSVG');
console.log('closeBtn:', closeBtn)
closeBtn.addEventListener('click', () => {

    let sendMessage = document.getElementById('chatbot-ChildTwo');
    sendMessage.innerHTML = null;

    const chatActiveDiv = document.getElementById('chatActiveDiv');
    chatActiveDiv.style.display = "none";
})



