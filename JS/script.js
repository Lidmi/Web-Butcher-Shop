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

