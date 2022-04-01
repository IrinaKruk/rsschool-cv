Irina Kruk
========================
My contact
========================
+ Discord: IraKruk#6944
+ Phone: +375(29)767-70-74
+ Telegram: Iryna
+ E-mail: fatum07@gmail.com

About me:
========================
I am 33 years old, I work as a progect engineer on telecommunication in Belarusian Railway. My work is interesting, complex and responsible. But still, in any work there is monotony and I wanted to do something else. That's why I came to this course!


## My personal and professional qualities:
+ sociability
+ stress resistance
+ high efficiency
+ analytical thinking
+ desire for professional growth

## Skills:
+ HTML
+ CSS (SASS/SCSS,BEM)
+ JavaScript (Fundamentals, ES6+, DOM)
+ Git/GitHub
+ VSCode, Sublime Text, Replit

## Code Examples
```
  class HashStorageFunc {
    
    constructor(){
      this.storage = {};
    }
   
   addValue(key, value) {
      this.storage[key] = value;
   }

   getValue(key) {
      return this.storage[key];
   }

   deleteValue(key) {
      if (key in this.storage) {
         delete this.storage[key];
         return true;
      }
      return false;
   }

   getKey() {
      return Object.keys(this.storage);
   }

}

class drinkStorage extends HashStorageFunc{
  constructor(){
    super();
  }
}

let drink = new drinkStorage;

let addButton = document.getElementById('add-coctail');
addButton.onclick = function () {
   let name = prompt("Название напитка?");
   let r = prompt("Рецепт");
   let a = confirm("Алкогольный или нет?");
   drink.addValue(name, { recipe: r, alko: a });
}

let getButton = document.getElementById('get-coctail');
getButton.onclick = function () {
   let name = prompt("Название напитка?");
   let info = drink.getValue(name);
   if (info == undefined) {
      alert('Нет такого напитка');
   } else {
      alert('Напиток ' + name + '\n' + 'Алкогольный: ' + info.alko + '\n' + 'Рецепт приготовления: ' + info.recipe);
   }
}

let delButton = document.getElementById('delete-coctail');
delButton.onclick = function () {
   let name = prompt("Название напитка?");
   let res = drink.deleteValue(name);
   if (res==true){
     alert('Напиток удален');
   } else {
    alert ('Такого напитка и нет');
    }
}

let allButton = document.getElementById('all-coctail');
allButton.onclick = function () {
   let all = drink.getKey();
   alert(all);
  }
```

## Education and Course
1. Belarusian State University of Informatics and Radioelectronics (BSUIR)
   + Telecommunication systems
2. IT Academy, Minsk 
   + HTML/CSS (project https://Project.irakruk.repl.co)
   + JavaScript (in the learning process)(project: https://addTaskA2.irakruk.repl.co , https://Drinkhashfunc.irakruk.repl.co) 

## Languages
+ Russian - native speaker
+ Belarusian - native speaker
+ English - level A2
