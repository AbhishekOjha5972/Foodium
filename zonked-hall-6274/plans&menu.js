
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



let que=document.getElementsByClassName("question")
let ans=document.getElementsByClassName("answer")
//console.log(ans)
//ans[1].style.display="none"
var i;
 for( i=0;i<que.length;i++){
    que[i].addEventListener("click" ,function(){
        this.classList.toggle("active");
        var answ = this.nextElementSibling;
        if (answ.style.display === "block") {
            answ.style.display = "none";
          } else {
            answ.style.display = "block";
          }
    });
 }

