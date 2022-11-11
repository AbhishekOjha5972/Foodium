
let data = JSON.parse(localStorage.getItem("product_data"))
//console.log(data)

function append_data(data) {
  data.forEach(function (el) {

    let div = document.createElement("div")
    div.className = "append_data_div"
    div.onclick=()=>{
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


import commonquestion from "./Components/commonquestion.js"
let common_question_div = document.getElementById("common_question_append_div")
common_question_div.innerHTML = commonquestion();




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

let data1 = [
  {
    name: "BBQ Bison Burger*",
    subtitle: "with Masterful Mac & Cheese",
    image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb765dff2da0c2e1fb_635823f4ce4929328b1f96f9_production-meal-image-9e969581-d09c-4617-9b17-d455d23c8952.jpeg",
    subimage: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb765dfff4f4c2e1f8_635823f4ce49292d9a1f96ff_production-meal-image-9eddc975-4cfc-40a0-a0ad-588d1e603506.jpeg",
    calories: "610 cal",
    serving: "single-serve",
    soy: "Soy free",
    gluten: "gluten-free",
    description:
      ["*This naked (aka bunless) burger is a premium blend of 69% ground bison, 23% beef, and 8% umami-rich mushrooms  Slathered in our smoky, honey-sweetened BBQ sauce", "Over a hearty mix of roasted broccoli, onions, and Parisian carrots seasoned with garlic and parsley"],
    carb: "42g",
    fat: "28g",
    protein: "30g"
  },
]
let a = data1[0].description.length



function append_pop_div(data) {
  data.forEach(function (el) {

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

    for (let i = 0; i < data1[0].description.length; i++) {
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

  })
}

append_pop_div(data1)

//_____________________________________________________________________________________________________________//


function addpopup(el){
 // console.log("b")
  let a=[]
  a.push(el)
  localStorage.setItem("popupdata",JSON.stringify(a))
  let asd=document.querySelector(".menu_popup_append_div")  
  asd.style.display="block";
  //document.querySelector("html").style.display="rgba(0,0,0,0.7)";
  //document.querySelector("body").style.backdrop-filter="blur(5px)""
}

let qwe=document.querySelector("#imagecross")
qwe.onclick=()=>{
  let abc=document.querySelector(".menu_popup_append_div")
  abc.style.display="none";
}

