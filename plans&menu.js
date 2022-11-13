
 import {mainNavbarContainer,navbarModal} from "./Components/navbar.js"
 let navbar_div1=document.getElementById("mainNavbarContainer")
  navbar_div1.innerHTML=mainNavbarContainer()
  console.log(navbar_div1)

  let navbar_div2=document.querySelector(".navbarModal")
  navbar_div2.innerHTML=navbarModal()


    let data = JSON.parse(localStorage.getItem("product_data"))
    //console.log(data)

    function append_data(data) {
      document.getElementById("appendmenudiv").innerHTML = ""
        data.forEach(function (el, i) {

            let div = document.createElement("div")
            div.className = "append_data_div"
            div.onclick = () => {
                addpopup(el)
            }

            let image = document.createElement("img")
            image.src = el.image

            let title = document.createElement("h1")
            title.innerText = el.name

            let div2 = document.createElement("div")
            div2.className = "caloriesdiv"

            let cal = document.createElement("p")
            cal.innerText = el.calories + " " + "|"

            let gluten = document.createElement("p")
            gluten.innerText = "gluten free" + " " + "|"

            let serving = document.createElement("p")
            serving.innerText = el.serving

            div2.append(cal, gluten, serving)
            div.append(image, title, div2)
            document.getElementById("appendmenudiv").append(div)
        })
    }

    append_data(data)

    let arrow = document.getElementsByClassName("arrow_image")
    var acc = document.getElementsByClassName("question");




    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";

            }
        });
    }

    //_________________________________________________________________________________________________________//



  



    function append_pop_div(el) {
        // data.forEach(function (el) {

        let titlediv = document.createElement("div")
        titlediv.className = "titleinfo"

        let title = document.createElement("h3")
        title.innerText = el.name

        let subtitle = document.createElement('p')
        subtitle.innerText = el.subtitle

        let div2 = document.createElement("div")
        div2.className = "benifit_div"

        let cal = document.createElement("p")
        cal.innerText = el.calories

        let soy = document.createElement("p")
        soy.innerText = el.soy
        div2.append(cal, soy)

        let div3 = document.createElement("div")
        div3.className = "imgdiv"

        let div4 = document.createElement("div")
        div4.className = "imgappenddiv"

        let img1 = document.createElement("img")
        img1.src = el.image

        let img2 = document.createElement("img")
        img2.src = el.subimage
        div4.append(img1, img2)

        let div5 = document.createElement("div")
        div5.className = "description"

        let special = document.createElement("h4")
        special.innerText = "What makes this dish special"
        div5.append(special)

        for (let i = 0; i < el.description.length; i++) {
            let disdata = document.createElement("p")
            disdata.innerText = el.description[i]
            div5.append(disdata)
        }

        let div6 = document.createElement("div")
        div6.className = "nutrition"
        div5.append(div6)

        let n1 = document.createElement("div")
        let p1 = document.createElement("p")
        p1.innerText = "Calories"
        let p2 = document.createElement("p")
        p2.innerText = el.calories
        n1.append(p1, p2)

        let n2 = document.createElement("div")
        let p3 = document.createElement("p")
        p3.innerText = "Carbs"
        let p4 = document.createElement("p")
        p4.innerText = el.carb
        n2.append(p3, p4)

        let n3 = document.createElement("div")
        let p5 = document.createElement("p")
        p5.innerText = "Total fat"
        let p6 = document.createElement("p")
        p6.innerText = el.fat
        n3.append(p5, p6)

        let n4 = document.createElement("div")
        let p7 = document.createElement("p")
        p7.innerText = "Protein"
        let p8 = document.createElement("p")
        p8.innerText = el.protein
        n4.append(p7, p8)

        div6.append(n1, n2, n3, n4)

        div3.append(div4, div5)

        titlediv.append(title, subtitle, div2, div3)

        let x = document.querySelector(".menu_popup_append_div")

        x.append(titlediv)

        
    }



    //_____________________________________________________________________________________________________________//


    function addpopup(el) {
        //append_pop_div(el)
        // console.log(i)
        let asd = document.querySelector(".menu_popup_append_div")
        asd.style.display = "block";
        //let g=JSON.parse(localStorage.getItem("product_data"))   
        append_pop_div(el)

       document.getElementsByTagName("body").style.opacity=0.7;


    }

    let qwe = document.querySelector("#imagecross")
    qwe.onclick = () => {
        let abc = document.querySelector(".menu_popup_append_div")
        abc.style.display = "none";
        window.location.reload();
    }


  
  
 
  let ftr=document.getElementById("filter_to_menu").addEventListener("change",filtermenu)
  let data2=JSON.parse(localStorage.getItem("product_data"))
  //console.log(data2)
  
  function filtermenu(){
    let text=document.getElementById("filter_to_menu").value
    if(text=="Freshly Fit"){
      let res1 = data2.filter(function (el) {
        return el.catagory == "freshly-fit"
    })
    append_data(res1)
    
    }

    if(text=="Protins and Sides"){
      let res2 = data2.filter(function (el) {
        return el.catagory =="protin & sides"
    })
    append_data(res2)
    
    }

    
    if(text=="Purely Plants"){
      let res4 = data2.filter(function (el) {
        return el.catagory == "puerly-plant"
    })
    append_data(res4)
        
    }

    if(text=="Signature Collection"){
      let res5 = data2.filter(function (el) {
        return el.catagory == "signeture-collection"
    })
    append_data(res5)
    
    }
   

    if(text=="All Meals"){
    window.location.reload()
    }

    


    

  }

 

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

