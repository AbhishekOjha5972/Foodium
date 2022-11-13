let logo = document.getElementById(`nav-logo-img`);
logo.src = `https://i.ibb.co/sqp9KQk/foodium-logo.png`;
logo.onclick = () => {
  window.location.replace(`homePage.html`);
};

let project_name = document.getElementById(`project-name`);
project_name.onclick = () => {
  window.location.replace(`homePage.html`);
};

//some required accesses
let cart_count = document.getElementById(`cart-count`);
let cart_amount = document.getElementById(`cart-amount`);
let billData = document.querySelector(".clicked-items");
//let selectedItemsArr =
//JSON.parse(localStorage.getItem("selectedItemsArr")) || [];
let selectedItemsArr =
  JSON.parse(localStorage.getItem(`selectedItemsArr`)) || [];
//dropdown of navbar
let help_btn = document.getElementById(`nav-dropdown`);
help_btn.onclick = () => {
  document.getElementById("myDropdown").classList.toggle("show");
};
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
//EO: dropdown of navbar

// On form submit,
let form = document.getElementById(`checkout-form`);
form.onsubmit = (e) => {
  e.preventDefault();
  window.location.replace(`transition.html`);
  //fname, address, adr, city, state, zip, cname, ccnum, expmonth, expyear, cvv
  /* let fname_div = document.getElementById(`fname`).value;
  let address_div = document.getElementById(`address`).value;
  let address_div2 = document.getElementById(`adr`).value;
  let city_div = document.getElementById(`city`).value;
  let state_div = document.getElementById(`state`).value;
  let zip_div = document.getElementById(`zip`).value;
  let cname_div = document.getElementById(`cname`).value;
  let ccnum_div = document.getElementById(`ccnum`).value;
  let expmonth_div = document.getElementById(`expmonth`).value;
  let expyear_div = document.getElementById(`expyear`).value;
  let cvv_div = document.getElementById(`cvv`).value;
  console.log(
    fname_div,
    address_div,
    address_div2,
    city_div,
    state_div,
    zip_div,
    cname_div,
    ccnum_div,
    expmonth_div,
    expyear_div,
    cvv_div 
  );*/
};

//onclick of promo code btn,
let pcbtn = document.getElementById(`promo-code-btn`);
pcbtn.onclick = () => {
  appendCode(pcbtn);
};
//onclick of gift card btn,
let gcbtn = document.getElementById(`gift-card-btn`);
gcbtn.onclick = () => {
  appendCode(gcbtn);
};

//function creating input for promo code or gift card
const appendCode = (ele) => {
  let gc_div = document.getElementById(`gift-card-div`);
  if (ele.id == `promo-code-btn`) {
    let temp_div = document.createElement(`div`);
    let ipbox = document.createElement(`input`);
    ipbox.placeholder = `Add Promo Code here`;
    let cclbtn = document.createElement(`button`);
    cclbtn.innerText = `cancel`;
    cclbtn.setAttribute(`id`, `promo-code-btn`);
    cclbtn.onclick = () => {
      temp_div.innerHTML = null;
    };
    temp_div.append(ipbox, cclbtn);
    gc_div.append(temp_div);
  } else if (ele.id == `gift-card-btn`) {
    let temp_div = document.createElement(`div`);
    let ipbox = document.createElement(`input`);
    ipbox.placeholder = `Redeem Gift Card here`;
    let cclbtn = document.createElement(`button`);
    cclbtn.innerText = `cancel`;
    cclbtn.setAttribute(`id`, `promo-code-btn`);
    cclbtn.onclick = () => {
      temp_div.innerHTML = null;
    };
    temp_div.append(ipbox, cclbtn);
    gc_div.append(temp_div);
  }
};

// function appending all cart items in cart section
appendBill = (selectedItemsArr) => {
  billData.innerHTML = null;
  selectedItemsArr.forEach(function (el) {
    let div = document.createElement("div");
    div.className = "one_item_bill";

    let bill_image_container = document.createElement("div");
    bill_image_container.className = "bill_image_container";

    let img = document.createElement("img");
    img.src = el.image;
    img.className = "selectedImage";

    bill_image_container.append(img);

    let sub_container = document.createElement("div");
    sub_container.className = "sub_container";
    sub_container.innerText = el.name;

    div.append(bill_image_container, sub_container);
    billData.append(div);
  });
};
appendBill(selectedItemsArr);
cart_count.innerText = selectedItemsArr.length;
cart_amount.innerText = "$" + selectedItemsArr.length * 12;
