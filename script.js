// Global variables

let toggle = document.querySelector('.toggle-button');
let switchIcon = document.querySelector('.fas');
let subtitle = document.querySelector('.sub');
let subtitle2 = document.querySelectorAll('.subtitle');
let agree = document.getElementById('agree');
let disagree = document.getElementById('disagree');
let opacity = document.querySelector('.opacity');
let popUp = document.querySelector('.pop-up');
let container = document.querySelectorAll('.container-flex-justify');

// Event Listeners

toggle.addEventListener('click', function () {
  if (switchIcon.classList.contains('fa-moon')) {
    switchIcon.classList.remove('fa-moon');
    switchIcon.classList.add('fa-sun');
    document.body.style.backgroundColor = 'black';
    subtitle.style.color = 'white';
    document.body.style.transition = 'background-color .5s linear';

    for (let i = 0; i < container.length; i++) {
      container[i].style.backgroundColor = 'white';
      subtitle2[i].style.color = 'white';
    }
  } else {
    switchIcon.classList.remove('fa-sun');
    switchIcon.classList.add('fa-moon');
    document.body.style.backgroundColor = 'white';
    subtitle.style.color = 'black';

    for (let i = 0; i < container.length; i++) {
      container[i].style.backgroundColor = 'rgb(243, 236, 236)';
      subtitle2[i].style.color = 'black';
    }
  }

  switchIcon.classList.add('toggle-animation');
  setTimeout(() => {
    switchIcon.classList.remove('toggle-animation');
  }, 500);
});

agree.addEventListener('click', () => {
  opacity.remove();
  popUp.remove();
});

disagree.addEventListener('click', () => {
  alert('Not cool bruh 😡');
});

// Checkout and add to bag functionality

function selectItem() {
  console.log(this.class);
  return this.class;
}

function addItem(parent) {
  console.log(parent);
  let productName = parent.getElementsByTagName('div')[0].innerHTML;

  localStorage.setItem('product', `${productName}`);
  return false;
}
