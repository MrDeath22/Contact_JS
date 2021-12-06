let nameInp = document.querySelector('#nameInp');
let relInp = document.querySelector('#relInp');
let numInp = document.querySelector('#numInp');
let btn = document.querySelector('#btn');
const elForm = document.querySelector(".form")
let list = document.querySelector('.list');

let arr = [];

let allBtn = document.querySelector('#all');
let workBtn = document.querySelector('#work');
let familyBtn = document.querySelector('#family');
let friendBtn = document.querySelector('#friend');
let template = document.querySelector("#template").content;

elForm.addEventListener('submit', function (e) {
   e.preventDefault();
   if (!nameInp.value == '' && !relInp.value == '' && !numInp.value == '') {
      let obj = {
         name: nameInp.value,
         job: relInp.value,
         num: numInp.value
      };
      arr.push(obj);
      render(arr);
   }
})

function render(array) {

   list.innerHTML = "";

   array.forEach(item => {
      let newTemp = template.cloneNode(true);
      newTemp.querySelector(".card-title").textContent = item.name;
      newTemp.querySelector(".card-text").textContent = item.job;
      newTemp.querySelector(".tel-number").textContent = item.num;

      list.append(newTemp);
   });
   
   document.querySelectorAll('.input').forEach(inp => {inp.value = ''})
}

allBtn.addEventListener('click', function () {
   render(arr)
});

workBtn.addEventListener('click', function () {
   let filter = arr.filter(item => item.job == "Work")
   render(filter)
});

familyBtn.addEventListener('click', function () {
   let filter = arr.filter(item => item.job == "Family")
   render(filter)
});

friendBtn.addEventListener('click', function () {
   let filter = arr.filter(item => item.job == "Friend")
   render(filter)
});