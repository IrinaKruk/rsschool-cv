//открытие и закрытие burger-menu

const hamb = document.getElementById('hamb');
const popup = document.getElementById('popup');
const menu = document.getElementById('menu');
const body = document.querySelector('body');

if (hamb && popup) {
   hamb.addEventListener('click', function (e) {
      document.body.classList.toggle('lock');
      hamb.classList.toggle('active');
      popup.classList.toggle('open');
      renderPopup();

      e.stopPropagation();
      body.addEventListener("click", (event) => {
         if (!event.target.closest("popup")) {
            document.body.classList.remove('lock');
            hamb.classList.remove('active');
            popup.classList.remove('open');
         };
      });
   });
}

popup.querySelectorAll('.nav-item').forEach(item => {
   item.addEventListener('click', () => {
      document.body.classList.remove('lock');
      hamb.classList.remove('active');
      popup.classList.remove('open');
   });
});

function renderPopup() {
   popup.appendChild(menu);
};

//плавный переход по ссылкам

const menuLinks = document.querySelectorAll('.nav-link[data-goto]');

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

//price accord

const drop_wrapper = document.querySelector('.price-title');
let open_dropup = null;

drop_wrapper.addEventListener('click', (event) => {

   if (event.target === drop_wrapper) {
      return;
   }

   const close_dropup = event.target.closest('.price-item__container');
   const drop_button = event.target.closest('.price-item');

   if (open_dropup === null) {
      open_dropup = close_dropup;
      close_dropup.classList.add('select');
   } else {
      if (close_dropup === open_dropup && drop_button) {
         close_dropup.classList.remove('select');
         open_dropup = null;
      } else if (close_dropup !== open_dropup) {
         open_dropup.classList.remove('select');
         close_dropup.classList.add('select');
         open_dropup = close_dropup;
      }
   }
});

console.log();