"use strict";

// Footer Gallery Popup
const galleryImages = Array.from(document.querySelectorAll(".gallery-image"));
const popup = document.querySelector(".gallery-popup");
const closeBtn = document.querySelector(".popup-close__svg");
const imageIndexElement = document.querySelector(".index");
const leftArrowElement = document.querySelector(".popup-left");
const rightArrowElement = document.querySelector(".popup-right");
const largeImageElement = document.querySelector(".large-image");
const leftSideElement = document.querySelector(".popup-left-arrow");
const rightSideElement = document.querySelector(".popup-right-arrow");
let currentIndex = 0;

galleryImages.forEach((image, index) => {
    image.addEventListener("click", () => {
        updateImage(index);
        togglePopup();
    });
});

const updateImage = (newIndex) => {
    const imagePath = `assets/img/jeweler2-gallery-pic${newIndex + 1}.webp`;
    largeImageElement.src = imagePath;
    imageIndexElement.innerHTML = `${newIndex + 1} / ${galleryImages.length}`;
    currentIndex = newIndex;
};

const togglePopup = () => {
    popup.classList.toggle("active");
};

const navigate = (direction) => {
    if (direction === "left" && currentIndex > 0) {
        updateImage(currentIndex - 1);
    } else if (direction === "left" && currentIndex === 0) {
        updateImage(galleryImages.length - 1);
    } else if (
        direction === "right" &&
        currentIndex < galleryImages.length - 1
    ) {
        updateImage(currentIndex + 1);
    } else if (
        direction === "right" &&
        currentIndex === galleryImages.length - 1
    ) {
        updateImage(0);
    }
};

leftArrowElement.addEventListener("click", () => navigate("left"));
rightArrowElement.addEventListener("click", () => navigate("right"));

[
    largeImageElement,
    imageIndexElement,
    leftSideElement,
    rightSideElement,
].forEach((element) => {
    element.addEventListener("click", (event) => {
        if (
            event.target === largeImageElement ||
            event.target === imageIndexElement
        ) {
            navigate("right");
        } else if (event.target === leftSideElement) {
            navigate("left");
        } else if (event.target === rightSideElement) {
            navigate("right");
        }
    });
});

popup.addEventListener("click", (event) => {
    if (
        ![
            largeImageElement,
            leftSideElement,
            rightSideElement,
            imageIndexElement,
        ].includes(event.target)
    ) {
        togglePopup();
    }
});
