document.addEventListener("DOMContentLoaded", () =>{
    const elementosCarousel = document.querySelectorAll(".carousel");
    M.Carousel.init(elementosCarousel, {
        duration: 400,
        dist: -70,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: false,
    });
});