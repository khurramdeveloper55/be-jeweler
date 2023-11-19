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

leftArrowElement.addEventListener("click", () => {
    if (currentIndex > 0) {
        updateImage(currentIndex - 1);
    } else if (currentIndex === 0) {
        updateImage(galleryImages.length - 1);
    }
});

rightArrowElement.addEventListener("click", () => {
    if (currentIndex < galleryImages.length - 1) {
        updateImage(currentIndex + 1);
    } else if (currentIndex === galleryImages.length - 1) {
        updateImage(0);
    }
});

largeImageElement.addEventListener("click", () => {
    if (currentIndex < galleryImages.length - 1) {
        updateImage(currentIndex + 1);
    } else if (currentIndex === galleryImages.length - 1) {
        updateImage(0);
    }
});

imageIndexElement.addEventListener("click", () => {
    if (currentIndex < galleryImages.length - 1) {
        updateImage(currentIndex + 1);
    } else if (currentIndex === galleryImages.length - 1) {
        updateImage(0);
    }
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
