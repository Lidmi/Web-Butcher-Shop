let products = document.querySelectorAll('.product');

for (let i = 0; i < products.length; i++) {

    let description = products[i].querySelector('.description');
    let image = products[i].querySelector('.img');

    products[i].onclick = () =>{
        products[i].classList.toggle('active');
        description.classList.toggle('active');
        image.classList.toggle('active');
    }
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('.topBtn').style.display = "block";
    } else {
        document.querySelector('.topBtn').style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let models_container = document.querySelector('.models-container');
let leftBtn = document.querySelector('.leftBtn');
let rightBtn = document.querySelector('.rightBtn');

function rightArrow(){
    models_container.scrollLeft += 300;
}

function leftArrow(){
    models_container.scrollLeft += -300;
}

// models_container.onmouseover = function () {
//     leftBtn.style.display = 'block';
//     rightBtn.style.display = 'block';
// };
// models_container.onmouseleave = function () {
//     leftBtn.style.display = 'none';
//     rightBtn.style.display = 'none';
// }

