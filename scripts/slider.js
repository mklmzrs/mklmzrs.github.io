const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
    },
});

(function () {
    const wrapper = document.getElementById("swiper-wrapper");
    const dir = wrapper.dataset.dir;
    const number = wrapper.dataset.images;

    for (let index = 1; index <= number; index++) {
        const img = document.createElement("img");
        img.src = `./assets/img/${dir}/${index}.jpg`;
        img.className = "swiper-lazy";

        const div = document.createElement("div");
        div.className = "swiper-slide";

        div.appendChild(img);
        wrapper.appendChild(div);
    }
})();
