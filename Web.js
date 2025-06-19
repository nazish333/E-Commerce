
// let card = document.querySelector(".trend");
// let card2 = document.getElementById("trendSec");
// let about = document.querySelector(".about");
// let contact = document.querySelector(".contact");


// console.log(card);
// let blog = document.querySelector(".trends");
// let mainPage = document.querySelector(".main");

// function homes(){
//     mainPage.style.display="flex";
//     card.style.display="block";
//     card2.style.display="block";
//     blog.style.display="block";
//    about.style.display="none"


    
// document.getElementById("blog").style.color="black";
// document.getElementById("home").style.color="rgb(2, 173, 173)";
// document.getElementById("shop").style.color="black";
// document.getElementById("contact").style.color="black";
// document.getElementById("about").style.color="black"


// }
// function shops(){
// mainPage.style.display="none";
// blog.style.display="none";
// about.style.display="none"
// card.style.display="block";
// card2.style.display="block";

 
// document.getElementById("blog").style.color="black";
// document.getElementById("home").style.color="black";
// document.getElementById("shop").style.color="rgb(2, 173, 173)";
// document.getElementById("contact").style.color="black";
// document.getElementById("about").style.color="black"


// }

// function blogs(){
//     mainPage.style.display="none";
//     card.style.display="none";
//     card2.style.display="none";
//    blog.style.display="block";
//    about.style.display="none"
    

// document.getElementById("blog").style.color="rgb(2, 173, 173)";
// document.getElementById("home").style.color="black";
// document.getElementById("shop").style.color="black";
// document.getElementById("contact").style.color="black";
// document.getElementById("about").style.color="black"

 



// }

// function abouts(){
//     mainPage.style.display="none";
//     card.style.display="none";
//     card2.style.display="none";
//    blog.style.display="none";
//    about.style.display="block"

// document.getElementById("blog").style.color="black";
// document.getElementById("home").style.color="black";
// document.getElementById("shop").style.color="black";
// document.getElementById("contact").style.color="black";
// document.getElementById("about").style.color="rgb(2, 173, 173)"

// }

// function contacts(){
//     mainPage.style.display="none";
//     card.style.display="none";
//     card2.style.display="none";
//    blog.style.display="none";
//    about.style.display="none";
//    contact.style.display="block"

// document.getElementById("blog").style.color="black";
// document.getElementById("home").style.color="black";
// document.getElementById("shop").style.color="black";
// document.getElementById("contact").style.color="black";
// document.getElementById("about").style.color="black"
// document.getElementById("contact").style.color="rgb(2, 173, 173)"

// }

// // cart

// function show(img){
//     let newImg = document.getElementById("newImg");
//     console.log(img);
//     newImg.src=img.src;

//     mainPage.style.display="none";
//     card.style.display="none";
//     card2.style.display="none";
//    blog.style.display="none";
//    about.style.display="none";
//    contact.style.display="none"
//     document.querySelector(".cart").style.display="flex"
// }


// function addCart(){
//     alert("Added To Cart");
//     location.reload()
// }
// let card = document.querySelector(".trend");
// let card2 = document.getElementById("trendSec");
// let about = document.querySelector(".about");
// let contact = document.querySelector(".contact");
// let blog = document.querySelector(".trends");
// let mainPage = document.querySelector(".main");
// let cart = document.querySelector(".cart");

// // New: Address Form section creation
// let addressFormHTML = `
//     <div class="addressForm" style="text-align:center; padding: 20px;">
//         <h2>Enter Your Shipping Address</h2>
//         <input type="text" placeholder="Full Name" style="margin:10px; padding:10px; width:300px;"><br>
//         <input type="text" placeholder="Street Address" style="margin:10px; padding:10px; width:300px;"><br>
//         <input type="text" placeholder="City" style="margin:10px; padding:10px; width:300px;"><br>
//         <input type="text" placeholder="Postal Code" style="margin:10px; padding:10px; width:300px;"><br>
//         <input type="text" placeholder="Phone Number" style="margin:10px; padding:10px; width:300px;"><br>
//         <button onclick="submitAddress()" style="margin-top: 15px; padding: 10px 20px; font-size: 18px;">Submit</button>
//     </div>
// `;

// // Function to highlight active navigation
// function highlightNav(activeId) {
//     const navIds = ["home", "shop", "blog", "about", "contact"];
//     navIds.forEach(id => {
//         document.getElementById(id).style.color =
//             id === activeId ? "rgb(2, 173, 173)" : "black";
//     });
// }

// function homes() {
//     mainPage.style.display = "flex";
//     card.style.display = "block";
//     card2.style.display = "block";
//     blog.style.display = "block";
//     about.style.display = "none";
//     contact.style.display = "none";
//     cart.style.display = "none";
//     removeAddressForm();
//     highlightNav("home");
// }

// function shops() {
//     mainPage.style.display = "none";
//     blog.style.display = "none";
//     about.style.display = "none";
//     contact.style.display = "none";
//     cart.style.display = "none";
//     card.style.display = "block";
//     card2.style.display = "block";
//     removeAddressForm();
//     highlightNav("shop");
// }

// function blogs() {
//     mainPage.style.display = "none";
//     card.style.display = "none";
//     card2.style.display = "none";
//     about.style.display = "none";
//     contact.style.display = "none";
//     cart.style.display = "none";
//     blog.style.display = "block";
//     removeAddressForm();
//     highlightNav("blog");
// }

// function abouts() {
//     mainPage.style.display = "none";
//     card.style.display = "none";
//     card2.style.display = "none";
//     blog.style.display = "none";
//     contact.style.display = "none";
//     cart.style.display = "none";
//     about.style.display = "block";
//     removeAddressForm();
//     highlightNav("about");
// }

// function contacts() {
//     mainPage.style.display = "none";
//     card.style.display = "none";
//     card2.style.display = "none";
//     blog.style.display = "none";
//     about.style.display = "none";
//     cart.style.display = "none";
//     contact.style.display = "block";
//     removeAddressForm();
//     highlightNav("contact");
// }

// // Cart preview with image
// function show(img) {
//     let newImg = document.getElementById("newImg");
//     newImg.src = img.src;

//     mainPage.style.display = "none";
//     card.style.display = "none";
//     card2.style.display = "none";
//     blog.style.display = "none";
//     about.style.display = "none";
//     contact.style.display = "none";
//     cart.style.display = "flex";
//     removeAddressForm(); // reset if it was previously opened
// }

// // Add to cart alert
// function addCart() {
//     alert("Added to cart successfully!");
//     homes();
// }

// // Buy now shows address form
// document.querySelector(".cart .btn button").addEventListener("click", () => {
//     removeAddressForm();
//     let formDiv = document.createElement("div");
//     formDiv.innerHTML = addressFormHTML;
//     cart.appendChild(formDiv);
// });

// // Submit address function
// function submitAddress() {
//     alert("Address submitted successfully!");
//     homes();
// }

// // Back button behavior
// document.querySelector(".back").addEventListener("click", function () {
//     homes();
// });

// // Helper to remove any existing address form
// function removeAddressForm() {
//     const existingForm = document.querySelector(".addressForm");
//     if (existingForm) existingForm.remove();
// }
// References to key sections
let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".main");
let cart = document.querySelector(".cart");

// Helper to highlight current nav item
function highlightNav(activeId) {
    const navItems = ["home", "shop", "blog", "about", "contact"];
    navItems.forEach(id => {
        document.getElementById(id).style.color =
            id === activeId ? "rgb(2, 173, 173)" : "black";
    });
}

// Home view
function homes() {
    mainPage.style.display = "flex";
    card.style.display = "block";
    card2.style.display = "block";
    blog.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
    cart.style.display = "none";
    removeAddressForm();
    highlightNav("home");
}

// Shop view
function shops() {
    mainPage.style.display = "none";
    card.style.display = "block";
    card2.style.display = "block";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    cart.style.display = "none";
    removeAddressForm();
    highlightNav("shop");
}

// Blog view
function blogs() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
    cart.style.display = "none";
    removeAddressForm();
    highlightNav("blog");
}

// About view
function abouts() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "block";
    contact.style.display = "none";
    cart.style.display = "none";
    removeAddressForm();
    highlightNav("about");
}

// Contact view
function contacts() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";
    cart.style.display = "none";
    removeAddressForm();
    highlightNav("contact");
}

// Show cart with selected product image
function show(img) {
    document.getElementById("newImg").src = img.src;
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    cart.style.display = "flex";
    removeAddressForm();
}

// Buy Now -> Show address form
function buyNow() {
    removeAddressForm();

    let formHTML = `
        <div class="addressForm" style="text-align:center; padding: 20px;">
            <h2>Enter Your Shipping Address</h2>
            <input type="text" placeholder="Full Name" style="margin:10px; padding:10px; width:300px;"><br>
            <input type="text" placeholder="Street Address" style="margin:10px; padding:10px; width:300px;"><br>
            <input type="text" placeholder="City" style="margin:10px; padding:10px; width:300px;"><br>
            <input type="text" placeholder="Postal Code" style="margin:10px; padding:10px; width:300px;"><br>
            <input type="text" placeholder="Phone Number" style="margin:10px; padding:10px; width:300px;"><br>
            <button onclick="submitAddress()" style="margin-top: 15px; padding: 10px 20px; font-size: 18px;">Submit</button>
        </div>
    `;

    let formDiv = document.createElement("div");
    formDiv.innerHTML = formHTML;
    cart.appendChild(formDiv);
}

// Submit address
function submitAddress() {
    alert("Address submitted successfully!");
    homes();
}

// Add to cart
function addCart() {
    alert("Added to cart!");
    homes();
}

// Back to home
function goBack() {
    homes();
}

// Remove address form if it exists
function removeAddressForm() {
    let form = document.querySelector(".addressForm");
    if (form) {
        form.remove();
    }
}
