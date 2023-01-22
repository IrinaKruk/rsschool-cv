const hamb = document.getElementById('hamb');
const popup = document.getElementById('popup');
const menu = document.getElementById('menu');
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
   e.preventDefault();
   popup.classList.toggle("open");
   hamb.classList.toggle("active");
   body.classList.toggle("lock");
   renderPopup();
};

function renderPopup() {
   popup.appendChild(menu);
};

menu.addEventListener("click", closePopup);

function closePopup(e) {
   e.preventDefault();
   popup.classList.toggle("open");
   body.classList.toggle("lock");
   hamb.classList.toggle("active");
}


const menuLinks = document.querySelectorAll('.nav-link[data-goto]');
console.log(menuLinks);
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageXOffset - document.querySelector('header').offsetHeight;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}

