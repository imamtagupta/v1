
// PARALLAX SCROLLING TO HOME PAGE

const parallax = document.getElementById("thumbnail");
const menu = document.getElementById("menu");
const header = document.getElementById("topbar");

window.addEventListener('scroll', () => {
    let newOffset = window.pageYOffset * 0.6;
    parallax.style.backgroundPositionY = newOffset +  "px";

    if (window.innerWidth > 768){
        header.style.display = 'flex';
    }
});

// ADDING HAMBURGER MENU IN TABLE/MOBILE VIEW


menu.addEventListener("click", () => {
    if (header.style.display === 'none' || header.style.display === ''){
        header.style.display = 'flex';
    }
    else{
        header.style.display = 'none';
    }


})

// ICON ANIMATION ON HOVER (MOUSE-OVER/ MOUSE-OUT)

let contacts = document.getElementsByClassName("fa-brands");
for (let i=0; i<contacts.length; i++){
    let contact = contacts[i];
    contact.addEventListener('mouseover', ()=>{
        contact.classList.add("fa-beat-fade");
    });
       contact.addEventListener('mouseout', ()=>{
        contact.classList.remove("fa-beat-fade");
    });
}

// CHANGE FOOTER AVATAR IN EVERY 0.8S

let avatar = document.getElementById("imageAvatar");
let i = 1
setInterval(()=> {
    if (i === 4) {
        i = 1
    }
    else{
        avatar.src = "assets/footer"+ i +".png";
        i = i+1
    }
}, 800)
