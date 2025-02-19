document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".scroll__container-wrapper");
    const items = document.querySelectorAll(".slide");
    const btnPrev = document.querySelector(".scroll__container-btn-prev");
    const btnNext = document.querySelector(".scroll__container-btn-next");

    // const firstClone = items[0].cloneNode(true);
    // const lastClone = items[totalCards - 1].cloneNode(true);

    const card = document.querySelector(".slide");
    const scrollAmont = card.getBoundingClientRect().width;

    // track.appendChild(firstClone);
    // track.insertBefore(lastClone, items[0]);

    // setTimeout(() => {
    //     if (index === newItems.length - 1) {
    //       index = 1;
    //       track.style.transition = "none";
    //       track.style.transform = `translateX(${-cardWidth * index}px)`;
    //     }
    //     if (index === 0) {
    //       index = totalCards;
    //       track.style.transition = "none";
    //       track.style.transform = `translateX(${-cardWidth * index}px)`;
    //     }
    //   }, 500); // Ждем завершения анимации


    btnNext.addEventListener("click", () => {
        track.scrollBy({
            left: scrollAmont,
            behavior: "smooth"
        });
    });

    btnPrev.addEventListener("click", () => {
        track.scrollBy({
            left: -scrollAmont,
            behavior: "smooth"
        });
    });
});
