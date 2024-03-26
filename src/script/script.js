const images = document.querySelectorAll(".content img");

images.forEach(image => {
    image.addEventListener('click', () => {
        const description = image.closest('.content').querySelector('.description');
        description.classList.toggle('selected')

        if(description.classList.contains('selected')) {
            image.src = "src/images/icon-minus.svg"
        } else {
            image.src = "src/images/icon-plus.svg"
        }
    } )
})