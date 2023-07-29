let cancionPopularLeft = document.querySelector("#cancionPopularLeft");
let cancionPopularRight = document.querySelector("#cancionPopularRight");
let popsong = document.querySelector(".popsong");

cancionPopularRight.addEventListener('click', () => {
    popsong.scrollLeft += 330;
})

cancionPopularLeft.addEventListener('click', () => {
    popsong.scrollLeft -= 330;
});

let popArtistaLeft = document.querySelector("#popArtistaLeft");
let popArtistaRight = document.querySelector("#popArtistaRight");
let item = document.querySelector(".item");

popArtistaRight.addEventListener('click', () => {
    item.scrollLeft += 330;
})

popArtistaLeft.addEventListener('click', () => {
    item.scrollLeft -= 330;
});
