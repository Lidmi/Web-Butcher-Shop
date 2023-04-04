let products = document.querySelectorAll('.product');

 for (let i = 0; i < products.length; i++) {

    let description_container = document.createElement("div");
    description_container.className = "description-container";

    let description = document.createElement("div");
    description.className = "description";
    products[i].appendChild(description_container);
    description_container.appendChild(description);

    let img = products[i].querySelector('.img').cloneNode();
    let name = products[i].querySelector('.name').cloneNode(true);
    let price = products[i].querySelector('.price').cloneNode(true);
    let text = document.createElement("p");
    let btn = document.createElement("button");
    btn.className ="close  fa-solid fa-xmark";
    text.textContent ='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, voluptas quisquam animi magnam laborum at magni corrupti ratione reprehenderit mollitia quod. Quaerat cumque commodi maxime!';

    let img_and_price = document.createElement("div");
    img_and_price.className = "img-and-price";

    description.appendChild(name);
    description.appendChild(btn);
    description.appendChild(text);

    img_and_price.appendChild(img);
    img_and_price.appendChild(price);

    description.appendChild(img_and_price);

     let card = products[i].querySelector('.card');

    //  card.onclick = () =>{
    //       description_container.classList.add('active');
    //  }

 }

 document.addEventListener('click', (e) => {
    let card;
    let path;
    for (let i = 0; i < products.length; i++) {
        card = products[i].querySelector('.card');
        description_container = products[i].querySelector('.description-container');
        description = description_container.querySelector('.description');
        path1 = e.composedPath().includes(card);
        path2 = e.composedPath().includes(description_container);
        path3 = e.composedPath().includes(description);
        if (path1) {
            description_container.classList.add('active');
        } else if (path2 && !path3) {
            description_container.classList.remove('active');
        }
    }

 })

let close_btn = document.querySelectorAll('.close');
for (let i = 0; i < close_btn.length; i++) {
    close_btn[i].onclick = () => {
        close_btn[i].closest('.description-container').classList.remove('active');
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
    let timerId = setInterval(swipeRight, 5);
    setTimeout(() => clearInterval(timerId), 500)
}

function swipeRight(){
    models_container.scrollLeft +=3;
}

function leftArrow(){
    let timerId = setInterval(swipeLeft, 5);
    setTimeout(() => clearInterval(timerId), 500)
}

function swipeLeft(){
    models_container.scrollLeft += -3;
}


