"use strict";

// STICKY NAVIGATION
window.addEventListener("scroll", function () {
    if (window.innerWidth > 767) {
        let navigation = document.querySelector(".navigation");
        let navHeight = navigation.getBoundingClientRect().height;
        navigation.classList.toggle("sticky", window.scrollY > navHeight);
    }
});

// NAVIGATION TOGGLE
const btnToggle = document.querySelector(".navbar-toggle");
const navLinksContainer = document.querySelector(".navbar-links");
const navCloseBtn = document.querySelector(".navbar-cancel-button");
const overlay = document.querySelector(".overlay");
const navIcons = document.querySelector(".navbar-icons-container");

function hideOverlay() {
    overlay.classList.remove("dark-overlay");
}

function removeShow() {
    navLinksContainer.classList.remove("show");
}

btnToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    navLinksContainer.classList.toggle("show");
    overlay.classList.toggle("dark-overlay");
});
document.addEventListener("click", function (event) {
    if (
        !navLinksContainer.contains(event.target) &&
        !btnToggle.contains(event.target)
    ) {
        removeShow();
        hideOverlay();
    }
});
navCloseBtn.addEventListener("click", function () {
    removeShow();
    hideOverlay();
});
overlay.addEventListener("click", function () {
    hideOverlay();
});
navIcons.addEventListener("click", function () {
    hideOverlay();
});

// ACTIVE LINK

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("active");
    }
});
// COUNTER ANIMATION

function animateCounters(selector, increment) {
    let displayValues = document.querySelectorAll(selector);
    let interval = 1000;

    displayValues.forEach((valueDisplay) => {
        let startValue = 0;

        let dataVal = valueDisplay.getAttribute("data-val");
        let isPercentage = dataVal.includes("%");

        let numericValue = isPercentage
            ? parseFloat(dataVal)
            : parseInt(dataVal);

        let endValue = isPercentage ? (numericValue / 100) * 100 : numericValue;

        let duration = endValue !== 0 ? Math.round(interval / endValue) : 0;

        let counter = setInterval(function () {
            startValue += increment;
            valueDisplay.textContent = isPercentage
                ? `${startValue}%`
                : startValue;
            if (startValue >= endValue) {
                clearInterval(counter);
            }
        }, duration);
    });
}

function createIntersectionObserver(targetSection, animationFunction) {
    let animationTriggered = false;

    return new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !animationTriggered) {
                animationFunction(".counter", 1);
                animationTriggered = true;
                observer.disconnect();
            }
        });
    });
}

function exclusiveIntersectionObserver(targetSection, animationFunction) {
    let animationTriggered = false;

    return new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !animationTriggered) {
                animationFunction(".exclusive-counter", 10);
                animationTriggered = true;
                observer.disconnect();
            }
        });
    });
}

let targetHomeSection = document.getElementById("home-counter");
let targetInfoSection = document.getElementById("info-counter");
let targetExclusiveSection = document.getElementById("exclusive");

let observerHome = createIntersectionObserver(
    targetHomeSection,
    animateCounters
);
let observerInfo = createIntersectionObserver(
    targetInfoSection,
    animateCounters
);
let observerExclusive = exclusiveIntersectionObserver(
    targetExclusiveSection,
    animateCounters
);

observerInfo.observe(targetInfoSection);
observerExclusive.observe(targetExclusiveSection);
observerHome.observe(targetHomeSection);

// FOOTER GALLLERY POPUP
const galleryImages = Array.from(document.querySelectorAll(".gallery-image"));
const popup = document.querySelector(".gallery-popup");
const closeBtn = document.querySelector(".popup-close-svg");
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

// SCROLL TO TOP
const scrollTop = document.querySelector(".scroll-top");
scrollTop.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
});
