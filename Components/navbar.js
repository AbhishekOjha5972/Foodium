const mainNavbarContainer = () =>{
    return `  <!-- So here we are creating two child divs -->
    <div id="firstNavbarChild">
        <div id="freshlyDiv">
            <!-- here we are putting content-->
            <!-- Meaning of fc is "First Child" -->
            <a href="homePage.html">
                <div id="fc_LeftContentDiv">
                    <img src="https://i.ibb.co/sqp9KQk/foodium-logo.png" alt="">
                    <span>foodium</span>
                </div>
            </a>
        </div>
        <div id="freshlyWellDiv">
            <!-- here we are putting container  -->
            <a href="">
                <div id="rightContentDiv">
                    <span>foodiumwell</span>
                </div>
            </a>
        </div>
    </div>
    <!-- That is the actual navbar which will help you to navigate in this website -->
    <div id="secondNavbarChild">
        <div id="secondNavbarChild_Inner_Navbar">
            <!-- Left div contain logo and the name of the site -->
            <!-- Meaning of sc is "Second Child" -->
            <div id="leftDiv">
                <div id="sc_LeftContentDiv">
                    <img src="https://i.ibb.co/sqp9KQk/foodium-logo.png" alt="">
                    <a href="">
                        <span>foodium</span>
                    </a>
                </div>
            </div>
            <!-- Middle div contain some child items like plans, how it works and etc -->
            <div id="middleDiv">
                <a href="#" class="middleDiv_childs" id="plansAndMenu">Plans & Menu</a>
                <a href="" class="middleDiv_childs" id="howItWorks">How it Works</a>
                <a href="" class="middleDiv_childs" id="gifts">gifts</a>
                <a href="" class="middleDiv_childs" id="referAFriend">Refer a Friend</a>
                <a href="" class="middleDiv_childs" id="help">Help</a>
            </div>
            <!-- Right div contain login and signup button  -->
            <div id="rightDiv">

                <button class="rightDiv_buttons" id="log_In">Login</button>
                <button class="rightDiv_buttons" id="sign_Up">Sign Up</button>
                <button class="Navbar-Model_Active">
                    <i class="fa-solid fa-bars"></i>
                </button>
                <button class="navbar-Icon_Change">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <button class="loggedInUserData"></button>
            </div>
        </div>
    </div>`
}


const navbarModal = () =>{
    return `
    <a href="" class="middleDiv_childs" id="plansAndMenu">Plans & Menu</a>
    <div>
        <a href="">Home</a>
        <a href="">Planes</a>
    </div>
    <a href="" class="middleDiv_childs" id="howItWorks">How it Works</a>
    <div>
        <a href="">Food Philosophy</a>
        <a href="">How Freshly Works</a>
        <a href="">Why Freshly</a>
    </div>
    <a href="" class="middleDiv_childs" id="gifts">Gifts</a>
    <div>
        <a href="">Give</a>
        <a href="">Redeem</a>
    </div>
    <a href="" class="middleDiv_childs" id="referAFriend">Refer a Friend</a>
    <a href="" class="middleDiv_childs" id="help">Help</a>`
} 


export {mainNavbarContainer,navbarModal}



