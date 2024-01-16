jQuery(document).ready(function () {
    //////////// FOOTER STARTS ////////////////

    var apiUrl = "http://localhost:1337/api/setting?populate=*";
    jQuery.ajax({
        url: apiUrl,
        type: "GET",
        dataType: "json",
        success: function (data) {
            var copyrightText = data.data.attributes.Footer.copyright;
            $(".copyright-paragraph").text(copyrightText);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: apiUrl,
        type: "GET",
        dataType: "json",
        success: function (data) {
            if (data) {
                $(".main-menu-nav").empty();

                $.each(
                    data.data.attributes.Main_Menu,
                    function (index, menuItem) {
                        $(".main-menu-nav").append(
                            '<li class="navbar-item">' +
                                '<a class="navbar-link" href="' +
                                menuItem.MenuLink +
                                '">' +
                                menuItem.MenuName +
                                "</a>" +
                                "</li>"
                        );
                    }
                );
            }
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: apiUrl,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var navbarLogoPath = data.data.attributes.Logo.data.attributes.url;

            var baseUrl = "http://localhost:1337";
            var navbarLogo = baseUrl + navbarLogoPath;

            $(".navbar-logo-icon").attr("src", navbarLogo);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer1",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerText = data.data.attributes.Footer.Footer1.AboutText;
            $(".footer-paragraph").text(footerText);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/setting?populate=Footer,Footer.Footer1.FooterLogo",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var footerLogoPath =
                data.data.attributes.Footer.Footer1.FooterLogo.data.attributes
                    .url;

            var baseUrl = "http://localhost:1337";
            var footerLogo = baseUrl + footerLogoPath;

            $(".footer-logo").attr("src", footerLogo);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer1",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var buttonName = data.data.attributes.Footer.Footer1.ButtonName;
            var buttonLink = data.data.attributes.Footer.Footer1.ButtonLink;
            $(".copyright-button").text(buttonName);
            $(".copyright-button").attr("href", buttonLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/setting?populate=Footer,Footer.Footer1.FooterImg",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var footerImageArray =
                data.data.attributes.Footer.Footer1.FooterImg.data;

            var footerImgPath = footerImageArray[0].attributes.url;
            var baseUrl = "http://localhost:1337";
            var footerImage = baseUrl + footerImgPath;

            $(".footer-payment-image").attr("src", footerImage);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    ///////// FOOTER ENDS ////////////

    /////////// HOMEPAGE START ////////////

    var homeURL = "http://localhost:1337/api/home?populate=*";

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeMetaTitle = data.data.attributes.homeMeta.metaTitle;

            $("title").text(homeMetaTitle);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeMetaDescription = data.data.attributes.homeMeta.metaDesc;

            $("meta-description").text(homeMetaDescription);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/setting?populate=Footer,Footer.Footer1.FooterImg",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var metaImageArray = data.data.attributes.homeMeta.metaImg.data;

            var metaImgPath = metaImageArray[0].attributes.url;
            var baseUrl = "http://localhost:1337";
            var metaImage = baseUrl + metaImgPath;

            $(".meta-favicon").attr("href", metaImage);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var sliderTagline = data.data.attributes.sliderTagline;
            $(".main-banner-title").text(sliderTagline);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var sliderHeading = data.data.attributes.sliderHeading;
            $(".main-banner-heading").text(sliderHeading);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var sliderCTAName = data.data.attributes.sliderCTAName;
            var sliderCTAURL = data.data.attributes.sliderCTAURL;
            $(".banner-cta").text(sliderCTAName);
            $(".banner-cta").attr(sliderCTAURL);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeSliderArray = data.data.attributes.homeSlider;

            var homeSliderTitle = homeSliderArray[0].captionTitle;

            $(".carousel-caption-title-1").text(homeSliderTitle);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeSliderArray = data.data.attributes.homeSlider;

            var homeSliderTitle = homeSliderArray[1].captionTitle;

            $(".carousel-caption-title-2").text(homeSliderTitle);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeSliderArray = data.data.attributes.homeSlider;

            var homeSliderTitle = homeSliderArray[2].captionTitle;

            $(".carousel-caption-title-3").text(homeSliderTitle);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeSliderArray = data.data.attributes.homeSlider;

            var homeSliderPrice = homeSliderArray[0].captionPrice;

            $(".carousel-caption-price-1").text(homeSliderPrice);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeSliderArray = data.data.attributes.homeSlider;

            var homeSliderPrice = homeSliderArray[1].captionPrice;

            $(".carousel-caption-price-2").text(homeSliderPrice);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeSliderArray = data.data.attributes.homeSlider;

            var homeSliderPrice = homeSliderArray[2].captionPrice;

            $(".carousel-caption-price-3").text(homeSliderPrice);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeSliderArray = data.data.attributes.homeSlider;

            var homeSliderButtonName = homeSliderArray[0].captionButtonName;
            var homeSliderButtonLink = homeSliderArray[0].captionButtonLink;

            $(".carousel-caption-button").text(homeSliderButtonName);
            $(".carousel-caption-button").attr("href", homeSliderButtonLink);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeSliderArray = data.data.attributes.homeSlider;

            var homeSliderButtonName = homeSliderArray[1].captionButtonName;
            var homeSliderButtonLink = homeSliderArray[1].captionButtonLink;

            $(".carousel-caption-button").text(homeSliderButtonName);
            $(".carousel-caption-button").attr("href", homeSliderButtonLink);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeSliderArray = data.data.attributes.homeSlider;

            var homeSliderButtonName = homeSliderArray[2].captionButtonName;
            var homeSliderButtonLink = homeSliderArray[2].captionButtonLink;

            $(".carousel-caption-button").text(homeSliderButtonName);
            $(".carousel-caption-button").attr("href", homeSliderButtonLink);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/home?populate=homeSlider,homeSlider.captionImage",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var captionImageArray = data.data.attributes.homeSlider;

            var captionImgPath =
                captionImageArray[0].captionImage.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var captionImage = baseUrl + captionImgPath;
            $(".carousel-image-1").attr("src", captionImage);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/home?populate=homeSlider,homeSlider.captionImage",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var captionImageArray = data.data.attributes.homeSlider;

            var captionImgPath =
                captionImageArray[1].captionImage.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var captionImage = baseUrl + captionImgPath;
            $(".carousel-image-2").attr("src", captionImage);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/home?populate=homeSlider,homeSlider.captionImage",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var captionImageArray = data.data.attributes.homeSlider;

            var captionImgPath =
                captionImageArray[2].captionImage.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var captionImage = baseUrl + captionImgPath;
            $(".carousel-image-3").attr("src", captionImage);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeCounterArray = data.data.attributes.homeCount;

            var homeCounterPercent = homeCounterArray[0].counterPercent;

            $(".percent-counter-1").text(homeCounterPercent);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeCounterArray = data.data.attributes.homeCount;

            var homeCounterPercent = homeCounterArray[1].counterPercent;

            $(".percent-counter-2").text(homeCounterPercent);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeCounterArray = data.data.attributes.homeCount;

            var homeCounterPercent = homeCounterArray[2].counterPercent;

            $(".percent-counter-3").text(homeCounterPercent);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeCounterArray = data.data.attributes.homeCount;

            var homeCounterDescription = homeCounterArray[0].counterDescription;

            $(".home-counter-description-1").text(homeCounterDescription);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeCounterArray = data.data.attributes.homeCount;

            var homeCounterDescription = homeCounterArray[1].counterDescription;

            $(".home-counter-description-2").text(homeCounterDescription);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeCounterArray = data.data.attributes.homeCount;

            var homeCounterDescription = homeCounterArray[2].counterDescription;

            $(".home-counter-description-3").text(homeCounterDescription);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var exclusiveCounter = data.data.attributes.exclusiveCounter;

            $(".exclusive-counter").text(exclusiveCounter);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });
    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var exclusiveTitle = data.data.attributes.exclusiveTitle;

            $(".exclusive-sub-heading").text(exclusiveTitle);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeExclusiveArray = data.data.attributes.exclusiveProducts;

            var exclusiveProductName =
                homeExclusiveArray[0].exclusiveProductName;

            $(".exclusive-category-name-1").text(exclusiveProductName);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeExclusiveArray = data.data.attributes.exclusiveProducts;

            var exclusiveProductName =
                homeExclusiveArray[1].exclusiveProductName;

            $(".exclusive-category-name-2").text(exclusiveProductName);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeExclusiveArray = data.data.attributes.exclusiveProducts;

            var exclusiveProductName =
                homeExclusiveArray[2].exclusiveProductName;

            $(".exclusive-category-name-3").text(exclusiveProductName);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeExclusiveArray = data.data.attributes.exclusiveProducts;

            var exclusiveProductName =
                homeExclusiveArray[3].exclusiveProductName;

            $(".exclusive-category-name-4").text(exclusiveProductName);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeExclusiveArray = data.data.attributes.exclusiveProducts;

            var exclusiveProductName =
                homeExclusiveArray[4].exclusiveProductName;

            $(".exclusive-category-name-5").text(exclusiveProductName);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeExclusiveArray = data.data.attributes.exclusiveProducts;

            var exclusiveProductName =
                homeExclusiveArray[5].exclusiveProductName;

            $(".exclusive-category-name-6").text(exclusiveProductName);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/home?populate=exclusiveProducts,exclusiveProducts.exclusiveProductImg",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var exclusiveImageArray = data.data.attributes.exclusiveProducts;

            var exclusiveImgPath =
                exclusiveImageArray[0].exclusiveProductImg.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var exclusiveImage = baseUrl + exclusiveImgPath;
            $(".exclusive-product-image-1").attr("src", exclusiveImage);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/home?populate=exclusiveProducts,exclusiveProducts.exclusiveProductImg",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var exclusiveImageArray = data.data.attributes.exclusiveProducts;

            var exclusiveImgPath =
                exclusiveImageArray[1].exclusiveProductImg.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var exclusiveImage = baseUrl + exclusiveImgPath;
            $(".exclusive-product-image-2").attr("src", exclusiveImage);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/home?populate=exclusiveProducts,exclusiveProducts.exclusiveProductImg",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var exclusiveImageArray = data.data.attributes.exclusiveProducts;

            var exclusiveImgPath =
                exclusiveImageArray[2].exclusiveProductImg.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var exclusiveImage = baseUrl + exclusiveImgPath;
            $(".exclusive-product-image-3").attr("src", exclusiveImage);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/home?populate=exclusiveProducts,exclusiveProducts.exclusiveProductImg",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var exclusiveImageArray = data.data.attributes.exclusiveProducts;

            var exclusiveImgPath =
                exclusiveImageArray[3].exclusiveProductImg.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var exclusiveImage = baseUrl + exclusiveImgPath;
            $(".exclusive-product-image-4").attr("src", exclusiveImage);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/home?populate=exclusiveProducts,exclusiveProducts.exclusiveProductImg",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var exclusiveImageArray = data.data.attributes.exclusiveProducts;

            var exclusiveImgPath =
                exclusiveImageArray[4].exclusiveProductImg.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var exclusiveImage = baseUrl + exclusiveImgPath;
            $(".exclusive-product-image-5").attr("src", exclusiveImage);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/home?populate=exclusiveProducts,exclusiveProducts.exclusiveProductImg",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var exclusiveImageArray = data.data.attributes.exclusiveProducts;

            var exclusiveImgPath =
                exclusiveImageArray[5].exclusiveProductImg.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var exclusiveImage = baseUrl + exclusiveImgPath;
            $(".exclusive-product-image-6").attr("src", exclusiveImage);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });
});
