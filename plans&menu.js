
let data=JSON.parse(localStorage.getItem("product_data"))
//console.log(data)

function append_data(data){
    data.forEach(function(el){

        let div=document.createElement("div")
        div.className="append_data_div"
        
        let image=document.createElement("img")
        image.src=el.image

        let title=document.createElement("h1")
        title.innerText=el.name

        let div2=document.createElement("div")
        div2.className="caloriesdiv"

        let cal=document.createElement("p")
        cal.innerText=el.calories+" "+"|"

        let gluten=document.createElement("p")
        gluten.innerText="gluten free"+" "+"|"

        let serving=document.createElement("p")
        serving.innerText=el.serving

        div2.append(cal,gluten,serving)
        div.append(image,title,div2)
        document.getElementById("appendmenudiv").append(div)
    })
}

append_data(data)


import commonquestion from "./Components/commonquestion.js"
let common_question_div=document.getElementById("common_question_append_div")
common_question_div.innerHTML=commonquestion();




let arrow=document.getElementsByClassName("arrow_image")
var acc = document.getElementsByClassName("question");




for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";    
      
    }
  });
}








