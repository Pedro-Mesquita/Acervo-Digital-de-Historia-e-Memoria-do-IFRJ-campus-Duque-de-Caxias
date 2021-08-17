//getting the components

const buttonMenuMobile = document.querySelector("#button-menu-mobile");
const menuMobile = document.querySelector("#menu-mobile");
const dropdownMobileActive = document.querySelector("#dropdown-mobile-active");
const dropdownMobile = document.querySelector("#dropdown-mobile");
const blackout = document.querySelector("#blackout");


// add a function to click on button for show te dropdown

dropdownMobileActive.addEventListener("click", toogleDropdown);

// function toggle dropdown mobile

function toogleDropdown(){
	if(dropdownMobile.classList.value == "dropdown-mobile-off"){
		dropdownMobile.setAttribute("class", "dropdown-mobile-on");
	}else{
		dropdownMobile.setAttribute("class", "dropdown-mobile-off");
	}
}


// add a function to click on button for show the nav
buttonMenuMobile.addEventListener("click", toggleMenu);

// function toggle nav
function toggleMenu(){
	if(menuMobile.classList.value == "menu-mobile-off"){
		menuMobile.setAttribute("class", "menu-mobile-on");
		blackout.style.display = "block";
	}else{
		menuMobile.setAttribute("class", "menu-mobile-off");
		blackout.style.display = "none";
	}
}


// add a function when the element is clicked

blackout.addEventListener("click", () =>{
	blackout.style.display="none";
	menuMobile.setAttribute("class", "menu-mobile-off");
} );
