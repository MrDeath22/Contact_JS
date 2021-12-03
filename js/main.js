let nameInp = document.querySelector('#nameInp');
let relInp = document.querySelector('#relInp');
let numInp = document.querySelector('#numInp');
let btn = document.querySelector('#btn');

let list = document.querySelector('.list');
let arr = [];

let workBtn = document.querySelector('#work');
let familyBtn = document.querySelector('#family');
let friendBtn = document.querySelector('#friend');

workBtn.addEventListener('click', function() {

   for (let i = 0; i < arr.length; i++) {

      if (arr[i].job == 'work') {
         
         arr[i].style.display = 'none';
      }

   }
   
});

btn.addEventListener('click', function(e) {
   e.preventDefault();

   let obj = {
      name: numInp.value,
      job: relInp.value,
      num: numInp.value
   };

   let li = document.createElement('li');
   let div = document.createElement('div');
   let h5 = document.createElement('h5');
   let p = document.createElement('p');
   let a = document.createElement('a');

   if (!numInp.value == '' && !relInp.value == '' && !numInp.value == '') {

      list.appendChild(li);
      li.className = 'item col-sm-12 mb-3';
      li.appendChild(div);
      div.className = 'card card-body';
      div.appendChild(h5);
      h5.className = 'card-title';
      div.appendChild(p);
      p.className = 'card-text';
      div.appendChild(a);
      a.className = 'btn btn-success w-25';

      h5.appendChild(document.createTextNode(nameInp.value));
      p.appendChild(document.createTextNode(relInp.value));
      a.appendChild(document.createTextNode(numInp.value));

      if (relInp.value == 'work') {
         li.className = 'item col-sm-12 mb-3 work';
         arr.push(li);
      }

      if (relInp.value == 'family') {
         li.className = 'item col-sm-12 mb-3 family';
         arr.push(li);
      }

      if (relInp.value == 'friend') {
         li.className = 'item col-sm-12 mb-3 friend';
         arr.push(li);
      }
      console.log(arr);

      arr.push(obj);

      console.log(obj);

   }

   nameInp.value = '';
   relInp.value = '';
   numInp.value = '';
})


