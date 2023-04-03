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

