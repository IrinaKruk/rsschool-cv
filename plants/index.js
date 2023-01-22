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


console.log('Вёрстка соответствует макету. Ширина экрана 768px +24' + '\n' + 'блок <header> +2' + '\n' + 'секция welcome +3' + '\n' + 'секция about +4' + '\n' + 'секция service +4' + '\n' + 'секция prices +4' + '\n' + 'секция contacts +4' + '\n' + 'блок < footer > +3' + '\n' + 'Вёрстка соответствует макету.Ширина экрана 380px + 24' + '\n' + 'блок < header > +2' + '\n' + 'секция welcome + 3' + '\n' + 'секция about + 4' + '\n' + 'секция service + 4' + '\n' + 'секция prices + 4' + '\n' + 'секция contacts + 4' + '\n' + 'блок < footer > +3' + '\n' + 'Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки.Весь контент страницы при этом сохраняется: не обрезается и не удаляется + 15' + '\n' + 'нет полосы прокрутки при ширине страницы от 1440рх до 380px + 7' + '\n' + 'нет полосы прокрутки при ширине страницы от 380px до 320рх + 8' + '\n' + 'На ширине экрана 380рх и меньше реализовано адаптивное меню + 22(Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px)' + '\n' + 'при ширине страницы 380рх панель навигации скрывается, появляется бургер - иконка + 2 ' + '\n' + ' при нажатии на бургер - иконку плавно появляется адаптивное меню + 4' + '\n' + 'адаптивное меню соответствует цветовой схеме макета + 4 ' + '\n' + 'при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран + 4 ' + '\n' + 'ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям + 4 ' + '\n' + 'при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна + 4');