let product_data = [
    {
        name: "BBQ Bison Burger*",
        subtitle: "with Masterful Mac & Cheese",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb765dff2da0c2e1fb_635823f4ce4929328b1f96f9_production-meal-image-9e969581-d09c-4617-9b17-d455d23c8952.jpeg",
        calories: "610 cal",
        serving: "single-serve"
    },
    {
        name: "Sausage Baked Penne",
        subtitle: "with Sautéed Zucchini & Spinach",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb8cd4f9d87ba86916_635823f4ce492977d91f974a_production-meal-image-f0de55be-d691-4ade-bc26-b4a8aedaa1fe.jpeg",
        calories: "470 cal",
        serving: "single-serve"
    },
    {
        name: "Homestyle Chicken",
        subtitle: "with Masterful Mac & Cheese",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb5ae22f4680ff53d8_635823f4ce492947161f9738_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg",
        calories: "560 cal",
        serving: "single-serve"
    },
    {
        name: "Cauliflower Shell Beef Bolognese",
        subtitle: "with Nonna’s Soffritto & Italian Cheeses",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb8b1f5aa9b139be56_635823f4ce492904901f973e_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg",
        calories: "490 cal",
        serving: "single-serve"
    },
    {
        name: "Tricolor Beef Lasagna",
        subtitle: "with Brown-Rice & Spinach Pasta Sheets",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb7be30f1df3054aa2_635823f4ce492958261f9755_production-meal-image-29e2b6e1-12af-405d-8b33-91e19b2a0fef.jpeg",
        calories: "640 cal",
        serving: "single-serve"
    },
    {
        name: "Flame-Seared Top Blade Steak",
        subtitle: "with Green Pea Risotto & Parmesan Crumble",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb684a20a3c8466513_635823f4ce492969991f9772_production-meal-image-25f9ce2d-ca21-499e-a140-8d59b4733ec2.jpeg",
        calories: "610 cal",
        serving: "single-serve"
    },
    {
        name: "Protein-Packed Chicken Parm",
        subtitle: "with Mozzarella & Garlicky Broccoli",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb765dff25b4c2e1ef_635823f4ce49292cdf1f9759_production-meal-image-7a62bb89-9bcb-4f1f-9f0f-d8372698d48e.jpeg",
        calories: "410 cal",
        serving: "single-serve"
    },
    {
        name: "Savory-Sweet Chicken Teriyaki Bowl",
        subtitle: "with Basmati Rice & Veggies",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb5ae22f2be0ff53c1_635823f4ce4929bf011f9751_production-meal-image-92ec0fc1-d352-4720-9b83-96798ab8d2de.jpeg",
        calories: "420 cal",
        serving: "single-serve"
    },
    {
        name: "White Bean Turkey Chili Bowl",
        subtitle: "with Basmati Rice & Cheddar Cheese",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bbb3434944174678b8_635823f4ce492970be1f970e_production-meal-image-17ade4a4-7351-4ff8-95c6-765d70e5ea5d.jpeg",
        calories: "510 cal",
        serving: "single-serve"
    },
    {
        name: "Zingy Buffalo Chicken",        
        subtitle: "with Loaded Cauliflower Mash & Broccoli",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66ba53442824eea7387b_635823f4ce492943221f9741_production-meal-image-536ab066-5461-4cc0-bbad-f3246a0bb7df.jpeg",
        calories: "160 cal",
        serving: "single-serve"
    },
    {
        name: "Philly-ish Cheesesteak",
        subtitle: "with Seasoned Beef & Masterful Mash",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66baa6980360ca0578ae_635823f4ce492939fc1f9723_production-meal-image-d5ef4016-ed9b-4aac-93e1-109ae9b9b6ba.jpeg",
        calories: "540 cal",
        serving: "single-serve"
    },
    {
        name: "Steak Peppercorn",
        subtitle: "with Sautéed Carrots & French Green Beans",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66ba0238eb0c6d9aab2e_635823f4ce4929f27a1f9729_production-meal-image-2fd3df62-8abf-413e-8650-afca039518ec.jpeg",
        calories: "500 cal",
        serving: "single-serve"
    },
    {
        name: "Linguine Marinara & Beef Meatballs",
        subtitle: "with Five Italian-Style Cheeses",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66ba503a5b1714628910_635823f4ce4929575f1f97b0_production-meal-image-6c9081ec-aecf-4eb0-980c-4843c3883727.jpeg",
        calories: "430 cal",
        serving: "single-serve"
    },
    {
        name: "Chicken Tikka Masala",
        subtitle: "with Seven-Spice Vegetable Biryani",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66baabcbab4689f2a67d_635823f4ce49292dfc1f975e_production-meal-image-fa07e0dc-cb7f-43d7-a669-d35dc3fbcf93.jpeg",
        calories: "470 cal",
        serving: "single-serve"
    },
    {
        name: "Roasted Tomato & Parmesan Risotto",
        subtitle: "with Pesto Squash & Mozzarella Cheese",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66ba2304e159bb9e2b4e_635823f4ce492964a01f971f_production-meal-image-d30dad76-4b61-40ab-bdfc-0d7a907829a6.jpeg",
        calories: "490 cal",
        serving: "single-serve"
    },
    {
        name: "Swede-ish Meatballs",
        subtitle: "with Cream Sauce & Masterful Mash",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66ba243b24b4a60f949b_635823f4ce4929390e1f976c_production-meal-image-4663a574-d74a-4854-a881-ef4da5b24cee.jpeg",
        calories: "630 cal",
        serving: "single-serve"
    },
    {
        name: "Creamy Chicken Fettuccine Alfredo",
        subtitle: " ",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b91c7417151a7735ef_635823f4ce4929a4141f97c5_production-meal-image-4e60254a-6b6e-461b-9ec7-a25a2035949f.jpeg",
        calories: "360 cal",
        serving: "Multi-serve"
    },
    {
        name: "3 Grilled Chicken Breasts (9.75 oz)",
        subtitle: " ",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66ba53442824eea7387b_635823f4ce492943221f9741_production-meal-image-536ab066-5461-4cc0-bbad-f3246a0bb7df.jpeg",
        calories: "160 cal",
        serving: "single-serve"
    },
    {
        name: "8 Baked Turkey Meatballs (9.98 oz)",
        subtitle: "with Masterful Mac & Cheese",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66ba5f7a141963813370_635823f4ce492947371f9766_production-meal-image-578506ac-e956-4c6f-bcbc-4e709ab34f98.jpeg",
        calories: "110 cal",
        serving: "single-serve"
    },
    {
        name: "Heartland Turkey Meatloaf",
        subtitle: "with Cheesy Broccoli & Chive-Cauli Mash",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b9243b2459120f9492_635823f4ce4929bd771f976e_production-meal-image-5bd23e4d-884e-4c36-b685-bfff1db5834f.jpeg",
        calories: "460 cal",
        serving: "single-serve"
    },
    {
        name: "Wild-Caught Fish Cake",
        subtitle: "with Southern Succotash & Lime-Cilantro Sauce",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b9846bcfc1dbde22cd_635823f4ce4929d96f1f97bd_production-meal-image-2076958f-3cde-4481-9644-0573e8ede33e.jpeg",
        calories: "570 cal",
        serving: "single-serve"
    },
    {
        name: "Seared Beef Brisket & BBQ Sauce",
        subtitle: "with Collards & Cauli-Shell Mac ‘n’ Cheese",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b9765dff09dfc2e1e8_635823f4ce49290dc81f9711_production-meal-image-9d663db0-fc03-445d-9626-e4347e65f217.jpeg",
        calories: "510 cal",
        serving: "single-serve"
    },
    {
        name: "Shrimp & Andouille Paella",
        subtitle: "with Roasted Red Peppers",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b98b1f5a621d39be4b_635823f4ce492963791f9704_production-meal-image-e5f3f794-0103-40b2-b243-0cb311a8638a.jpeg",
        calories: "530 cal",
        serving: "single-serve"
    },
    {
        name: "Oven-Baked BBQ Pork Chop",
        subtitle: "with Creamy Green Beans & Mashed Potatoes",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b909fc4a2e520ddc35_635823f4ce492955611f97b7_production-meal-image-7a187b20-0f13-45d7-9417-5a1b9e0f9662.jpeg",
        calories: "580 cal",
        serving: "single-serve"
    },
    {
        name: "Grilled Lemon-Tahini Chicken",
        subtitle: "with Riced Broccoli & Cauliflower Pilaf",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b909fc4a7e8e0ddc2d_635823f4ce492925751f9778_production-meal-image-8c822399-bb64-4643-9c22-9beba7f589dd.jpeg",
        calories: "380 cal",
        serving: "single-serve"
    },
    {
        name: "Oven-Baked Chicken Florentine",
        subtitle: "with Creamed Spinach & Riced Broccoli Pilaf",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b9a3da77602a0acd0f_635823f4ce49296a1a1f9782_production-meal-image-5eb84c62-bb11-48e3-bb03-e19cd31b82d3.jpeg",
        calories: "410 cal",
        serving: "single-serve"
    },
    {
        name: "Farmer’s Sunrise Scramble",
        subtitle: "with Crumbled Sausage & Sautéed Spinach",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b840d40d297183f389_635823f4ce49299d611f97d0_production-meal-image-32de8264-0b85-40b5-b910-032a2f8ebece.jpeg",
        calories: "410 cal",
        serving: "single-serve"
    },
    {
        name: "Tex-Mex Grilled Chicken",
        subtitle: "with Creamy Queso Sauce, Sausage & Peppers",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b90238ebb8449aab1b_635823f4ce492929e91f977c_production-meal-image-74a2ccd1-00a7-40df-b3cf-df2e105b657d.jpeg",
        calories: "550 cal",
        serving: "single-serve"
    },
    // {
    //     name: "Chimichurri Rojo Seared Steak",
    //     subtitle: "with Herbed Mushrooms, Asparagus & Cauli Rice",
    //     image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b90238ebb8449aab1b_635823f4ce492929e91f977c_production-meal-image-74a2ccd1-00a7-40df-b3cf-df2e105b657d.jpehttps://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b8aa89f66c143c6769_635823f4ce492996261f97c1_production-meal-image-064ddd32-490c-4956-b5db-ded0b1e365d0.jpeg",
    //     calories: "530 cal",
    //     serving: "single-serve"
    // },
    {
        name: "Carved Turkey & Creamy Mash",
        subtitle: "with Green Bean Sauté & Toasted Pecans",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b90238ebc3759aab15_635823f4ce4929cb2d1f97b5_production-meal-image-c735f24b-3626-45ec-97be-b64910120b11.jpeg",
        calories: "530 cal",
        serving: "single-serve"
    },
    {
        name: "Coconut Purple Rice Porridge",
        subtitle: "with Blueberry, Peach & Toasted Pecans",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b8f1d3cb3ac073110f_635823f4ce492930e81f9797_production-meal-image-060ecc01-fb56-4074-85b9-15716062e146.jpeg",
        calories: "350 cal",
        serving: "single-serve"
    },
    {
        name: "Coq Au Vin",
        subtitle: "with Red Wine Sauce, Canadian Bacon & Mash",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b809fc4a09a00ddc24_635823f4ce492901a31f9713_production-meal-image-26eb81cd-a53a-47ed-a7da-56cc1b7272ef.jpeg",
        calories: "550 cal",
        serving: "single-serve"
    },
    {
        name: "Creamy Marinara Lentil Pasta",
        subtitle: "with Mushrooms & Plant-Based Mozzarella",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b82304e1e7519e2b40_635823f4ce492969611f9787_production-meal-image-61221a9e-23cf-4042-a8ff-c15cc1493807.jpeg",
        calories: "520 cal",
        serving: "single-serve"
    },
    {
        name: "Hearty Veggie Bolognese",
        subtitle: "with Red Lentil Ziti & Parmesan Cheese",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b8765dff59fec2e1dc_635823f4ce492964ed1f978c_production-meal-image-1d053d43-fedb-4c71-93e4-615f29442853.jpeg",
        calories: "490 cal",
        serving: "single-serve"
    },
    {
        name: "Harvest Time Chicken Risotto",
        subtitle: "with Butternut Squash Three Ways",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b87c6e9a79f393f455_635823f4ce4929e9f41f976a_production-meal-image-ddd22bc7-1601-46a0-8404-01005533c56b.jpeg",
        calories: "620 cal",
        serving: "single-serve"
    },
    {
        name: "Egg & Cheddar Breakfast Scramble",
        subtitle: "with Gravy, Spinach & Sweet Potato",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b8a6980365070578a3_635823f4ce492910bd1f97a0_production-meal-image-555c8877-ce2e-4804-9465-590e6b8de29a.jpeg",
        calories: "390 cal",
        serving: "single-serve"
    },
    {
        name: "Indian-Spiced Red Lentil Dal",
        subtitle: "with Sweet Potatoes & Green Chickpeas",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b826aa84716db59c22_635823f4ce4929f11f1f97c9_production-meal-image-c2bd7c69-3db7-40c1-8740-e86f50357fcb.jpeg",
        calories: "620 cal",
        serving: "single-serve"
    },
    {
        name: "Indian-Style Palak Chicken",
        subtitle: "with Spinach Sauce & Tandoori Cauliflower",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b89f0dd67c2bb6ae51_635823f4ce49292c9d1f97cc_production-meal-image-cad55a0d-ac7c-4907-aa5e-6f29775c6b87.jpeg",
        calories: "410 cal",
        serving: "single-serve"
    },
    {
        name: "Romesco Grilled Chicken",
        subtitle: "with Rainbow Vegetable Hash & Cilantro Rice",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b7ba0d1073f5595991_635823f4ce492901801f9780_production-meal-image-c87d5ef6-072c-4e75-a8e1-fef772ef1b13.jpeg",
        calories: "550 cal",
        serving: "single-serve"
    },
    {
        name: "Veggie-Loaded Burrito Bake",
        subtitle: "with Plant-Based Chorizo & Refried Beans",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b7fb2692a7db3e6768_635823f4ce492905c21f97a9_production-meal-image-857e178e-6526-43e2-a8f3-7b8eb178c3c1.jpeg",
        calories: "650 cal",
        serving: "single-serve"
    },
    {
        name: "Italian Sausage, Peppers & Onions",
        subtitle: "with Marinara Sauce & Zesty Verde Rice",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b709fc4a32aa0ddc0a_635823f4ce492910b11f979b_production-meal-image-cc0f939b-6814-4d3e-ae51-47ad08339bf3.jpeg",
        calories: "600 cal",
        serving: "single-serve"
    },
    {
        name: "Thai Green Curry Bowl",
        subtitle: "with Sweet Potato, Mushrooms & Basmati Rice",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b7715eea290d4e0c46_635823f4ce49292fd51f9792_production-meal-image-eea55b43-0737-4923-912f-d2aa340a7bc0.jpeg",
        calories: "390 cal",
        serving: "single-serve"
    },
    {
        name: "Protein Power Sausage Breakfast",
        subtitle: "with Butternut Squash & Potato Hash",
        image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b7dae2e977c5964f82_635823f4ce4929c4691f97a4_production-meal-image-2aa92117-8b20-4c48-b5a3-4340b1a67637.jpeg",
        calories: "530 cal",
        serving: "single-serve"
    },
]


localStorage.setItem("product_data", JSON.stringify(product_data))


let grid_container_Div = document.getElementById("grid-container");

let i = 1;

function append(data) {

    grid_container_Div.innerHTML = null;
//{name, subtitle, image, calories, serving}

    data.forEach(function(el,index) {

        let div = document.createElement('div');
        div.className = 'cardDiv';

        div.onclick = function() {
            // console.log(el,index);
        }

        let img_container = document.createElement('div');

        let img = document.createElement('img');
        img.src = el.image;

        img_container.append(img);

        let n = document.createElement('h3');
        n.innerText = el.name;

        let sub = document.createElement('p');
        sub.innerText = el.subtitle;

        let cal = document.createElement('p');
        cal.innerText = el.calories;

        let plus = document.createElement('div');
        plus.className = 'adding';
        plus.innerText = "+";
        plus.onclick = function() {
            if(plus.style.display != 'none') {
                plus.style.display = 'none';
                adding_Button.style.display = 'flex';
                p.innerText = i;
            }
        }

        let adding_Button = document.createElement('div');
        adding_Button.className = 'adding_Button';

        let addition = document.createElement('p');
        addition.innerText = "+";
        addition.onclick = function() {
            i++;
            p.innerText = i;
        }

        let p = document.createElement('p');
        p.className = "count";

        let subtraction = document.createElement('p');
        subtraction.innerText = "-";
        subtraction.onclick = function() {
            i--;
            if( i == 0) {
                i = 1;
                adding_Button.style.display = 'none';
                plus.style.display = 'block';
                p.innerText = "";
        }
            p.innerText = i;
        }

        adding_Button.append(subtraction, p, addition);

        div.append(img_container, n, sub, cal, plus, adding_Button);
        grid_container_Div.append(div);

    });

};

append(product_data);

let sidebar = document.getElementById('sidebar');
let grid = document.getElementById('grid-container');

showSideBar = () => {

    // if(grid_container_Div.style.grid-template-columns == 'repeat(4,1fr)') {
    //     grid_container_Div.style.grid-template-columns = 'repeat(3,1fr)';
    // }
    // else {
    //     grid_container_Div.style.grid-template-columns = 'repeat(4,1fr)';
    // }

    sidebar.classList.toggle('active');

    if(hide_filters_btn.innerText ==  "Sort & Filters") {
        hide_filters_btn.innerText = "Hide Filters";
    }
    else {
        hide_filters_btn.innerText =  "Sort & Filters";
    }

    if(grid.style.width == '60%') {
        grid.style.width = '77%'
    }
    else {
        grid.style.width = '60%';
    }

}

let hide_filters_btn = document.getElementById('hide-filters');
hide_filters_btn.addEventListener('click', showSideBar);