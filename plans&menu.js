
import commonquestion from "./Components/commonquestion.js" 
let common_question_div=document.getElementById("common_question_append_div")
common_question_div.innerHTML=commonquestion()


 import {mainNavbarContainer,navbarModal} from "./Components/navbar.js"
 let navbar_div1=document.getElementById("mainNavbarContainer")
  navbar_div1.innerHTML=mainNavbarContainer()
  



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
            document.getElementById("appendmenudiv").style.width="90%"
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
        subtitle.style.marginTop="15px"

        let div2 = document.createElement("div")
        div2.className = "benifit_div"

        let cal = document.createElement("p")
        cal.innerText = el.calories

        let soy = document.createElement("p")
        soy.innerText = el.soy
        div2.append(cal, soy)
        div2.style.marginTop="20px"

        let div3 = document.createElement("div")
        div3.className = "imgdiv"
        div3.style.marginTop="30px"

        let div4 = document.createElement("div")
        div4.className = "imgappenddiv"


        let img1 = document.createElement("img")
        img1.src = el.image

        let img2 = document.createElement("img")
        img2.src = el.subimage
        div4.append(img1, img2)
        div4.style.marginTop="20px"

        let div5 = document.createElement("div")
        div5.className = "description"
        

        let special = document.createElement("h4")
        special.innerText = "What makes this dish special"
        special.style.marginTop="20px"
        
        div5.append(special)
        div5.style.lineHeight="5px"
       

        for (let i = 0; i < el.description.length; i++) {
            let disdata = document.createElement("p")
            disdata.innerText = el.description[i]
            div5.append(disdata)
            disdata.style.marginTop="10px"
        }
          
        


        let div6 = document.createElement("div")
        div6.className = "nutrition"
        div5.append(div6)
        div5.style.marginTop="10px"

        let n1 = document.createElement("div")
        n1.style.marginTop="20px"
        let p1 = document.createElement("p")
        p1.innerText = "Calories"
        let p2 = document.createElement("p")
        p2.innerText = el.calories
        p2.style.marginTop="15px"
        n1.append(p1, p2)

        let n2 = document.createElement("div")
        n2.style.marginTop="20px"
        let p3 = document.createElement("p")
        p3.innerText = "Carbs"
        let p4 = document.createElement("p")
        p4.innerText = el.carb
        p4.style.marginTop="15px"
        n2.append(p3, p4)

        let n3 = document.createElement("div")
        n3.style.marginTop="20px"
        let p5 = document.createElement("p")
        p5.innerText = "Total fat"
        let p6 = document.createElement("p")
        p6.innerText = el.fat
        p6.style.marginTop="15px"
        n3.append(p5, p6)

        let n4 = document.createElement("div")
        n4.style.marginTop="20px"
        let p7 = document.createElement("p")
        p7.innerText = "Protein"
        let p8 = document.createElement("p")
        p8.innerText = el.protein
        p8.style.marginTop="15px"
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
    }

  /*  document.addEventListener("mouseup",function(e){
      let container=document.querySelector(".menu_popup_append_div")
      if(!container.contains(e.target)){
        container.style.display="none"
      }
    })*/

    let qwe = document.querySelector("#imagecross")
    qwe.onclick = () => {
      removediv()
  }
  function removediv(){   
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

 
let signup=document.getElementById("sign_Up")
signup.onclick=()=>{
  window.location.href = "./loginAndSignup.html";

}

let login=document.getElementById("log_In")
login.onclick=()=>{
  window.location.href = "./loginAndSignup.html";

}

