//https://i.ibb.co/sqp9KQk/foodium-logo.png
let logo = document.getElementById(`nav-logo-img`);
logo.src = `https://i.ibb.co/sqp9KQk/foodium-logo.png`;

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

// On form submit,
let form = document.getElementById(`checkout-form`);
form.onsubmit = (e) => {
  e.preventDefault();
  //fname, address, adr, city, state, zip, cname, ccnum, expmonth, expyear, cvv
  let fname_div = document.getElementById(`fname`).value;
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
  );
};
