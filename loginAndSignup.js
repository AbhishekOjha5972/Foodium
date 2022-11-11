// This is the modal active and deactive feature

let getStartedBTN = document.getElementById('Auth-getStarted_Jump');
let logInBTN = document.getElementById('Auth-logIn_Jump');
let Auth_loginContainer = document.getElementById('Auth_login-Container');
let Auth_signupContainer = document.getElementById('Auth_signup-Container');


getStartedBTN.addEventListener("click", () => {
    Auth_loginContainer.style.display = "none";
    Auth_signupContainer.style.display = "block";
})
logInBTN.addEventListener('click', () => {
    Auth_loginContainer.style.display = "block";
    Auth_signupContainer.style.display = "none";
})
// In this part we are taking value from new user 


let lsData = JSON.parse(localStorage.getItem('authentication_Database')) || [];
let continueBTN = document.getElementById('continue');
continueBTN.addEventListener('click', () => {
    const takeFName = document.getElementById('firstName').value;
    const takeLName = document.getElementById('lastName').value;
    const takeEmail = document.querySelector('#signin-secondDiv #email').value;
    const takePhoneNumber = document.querySelector('#signin-secondDiv #number').value;
    console.log(takeEmail, takeFName, takeLName, takePhoneNumber)
    const userData = {
        first_name: takeFName,
        last_name: takeLName,
        email: takeEmail,
        phone_No: takePhoneNumber,
    }
    console.log(lsData)
    let flage = false;
    lsData.forEach((Element) => {
        if (Element.phone_No == takePhoneNumber) {
            flage = true;
        }
    })

    if (flage == false) {
        console.log("check false",lsData)
        lsData.push(userData)
        localStorage.setItem('authentication_Database', JSON.stringify(lsData));

        let updatedlsData = JSON.parse(localStorage.getItem('authentication_Database'))

        updatedlsData.forEach((Element) => {
            if (Element.phone_No == takePhoneNumber) {
                runTimeCheck(takePhoneNumber);
            }
        })

    }
    else {
        alert("You have done sign up process, Please try to log in.")
        Auth_loginContainer.style.display = "block";
    }

})

// Run time login functon 
const runTimeCheck = (data) => {
    let childLsData = JSON.parse(localStorage.getItem('authentication_Database'))
    childLsData.forEach((Element) => {
        if (Element.phone_No == data) {
            appendTheUserData(Element);
        }
    })
}



// login modal 

let Auth_logInBTN = document.getElementById('Auth-login');
Auth_logInBTN.addEventListener('click', () => {

    const takeEmail = document.querySelector('#Auth-ContentDiv #email').value;
    console.log('takeEmail:', takeEmail)
    const takePhoneNumber = document.querySelector('#Auth-ContentDiv #number').value;
    console.log('takePhoneNumber:', takePhoneNumber)

    let flage = false;
    lsData.forEach((Element) => {
        if (Element.phone_No == takePhoneNumber) {
            flage = true;
        }
    })
    console.log(flage)
    if (flage == true) {
        lsData.forEach((Element) => {
            if (Element.phone_No == takePhoneNumber) {
                appendTheUserData(Element);
                alert('Login successful')
                window.location.href = "homePage.html"
            }
        })
    }
})

const appendTheUserData = (Element) => {
    localStorage.setItem('activeUser', JSON.stringify(Element));
    console.log("login successful")
    window.location.href='homePage.html'
}

// jump to the home page 
const jumpToHomePage=document.getElementById('Auth-Logodiv');
jumpToHomePage.addEventListener('click',()=>{
    window.location.href="homePage.html"
})









