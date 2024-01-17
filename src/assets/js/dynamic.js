jQuery(document).ready(function () {
    //////////// FOOTER STARTS ////////////////

    $.ajax({
        url: "http://localhost:1337/api/setting?populate=Footer,Footer.FooterImg,Footer.FooterImg.FooterImage",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var footerImgArray = data.data.attributes.Footer.FooterImg;
            var footerImgCombine =
                footerImgArray[0].FooterImage.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var footerImg = baseUrl + footerImgCombine;
            $(".footer-image-1").attr("src", footerImg);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/setting?populate=Footer,Footer.FooterImg,Footer.FooterImg.FooterImage",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var footerImgArray = data.data.attributes.Footer.FooterImg;
            var footerImgCombine =
                footerImgArray[1].FooterImage.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var footerImg = baseUrl + footerImgCombine;
            $(".footer-image-2").attr("src", footerImg);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/setting?populate=Footer,Footer.FooterImg,Footer.FooterImg.FooterImage",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var footerImgArray = data.data.attributes.Footer.FooterImg;
            var footerImgCombine =
                footerImgArray[2].FooterImage.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var footerImg = baseUrl + footerImgCombine;
            $(".footer-image-3").attr("src", footerImg);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/setting?populate=Footer,Footer.FooterImg,Footer.FooterImg.FooterImage",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var footerImgArray = data.data.attributes.Footer.FooterImg;
            var footerImgCombine =
                footerImgArray[3].FooterImage.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var footerImg = baseUrl + footerImgCombine;
            $(".footer-image-4").attr("src", footerImg);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/setting?populate=Footer,Footer.FooterImg,Footer.FooterImg.FooterImage",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var footerImgArray = data.data.attributes.Footer.FooterImg;
            var footerImgCombine =
                footerImgArray[4].FooterImage.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var footerImg = baseUrl + footerImgCombine;
            $(".footer-image-5").attr("src", footerImg);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/setting?populate=Footer,Footer.FooterImg,Footer.FooterImg.FooterImage",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var footerImgArray = data.data.attributes.Footer.FooterImg;
            var footerImgCombine =
                footerImgArray[5].FooterImage.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var footerImg = baseUrl + footerImgCombine;
            $(".footer-image-6").attr("src", footerImg);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

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

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer2",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerHeading1 =
                data.data.attributes.Footer.Footer2.FooterHeading1;
            $(".footer2-heading-1").text(footerHeading1);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer2",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerHeading1 =
                data.data.attributes.Footer.Footer2.FooterHeading2;
            $(".footer2-heading-2").text(footerHeading1);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer2Links",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerLinkNameArray = data.data.attributes.Footer.Footer2Links;
            var footerLinkName = footerLinkNameArray[0].FooterLinkName;
            var footerLink = footerLinkNameArray[0].FooterLink;
            $(".footer2-link-1").text(footerLinkName);
            $(".footer2-link-1").attr("href", footerLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer2Links",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerLinkNameArray = data.data.attributes.Footer.Footer2Links;
            var footerLinkName = footerLinkNameArray[1].FooterLinkName;
            var footerLink = footerLinkNameArray[1].FooterLink;
            $(".footer2-link-2").text(footerLinkName);
            $(".footer2-link-2").attr("href", footerLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer2Links",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerLinkNameArray = data.data.attributes.Footer.Footer2Links;
            var footerLinkName = footerLinkNameArray[2].FooterLinkName;
            var footerLink = footerLinkNameArray[2].FooterLink;
            $(".footer2-link-3").text(footerLinkName);
            $(".footer2-link-3").attr("href", footerLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer2Links",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerLinkNameArray = data.data.attributes.Footer.Footer2Links;
            var footerLinkName = footerLinkNameArray[3].FooterLinkName;
            var footerLink = footerLinkNameArray[3].FooterLink;
            $(".footer2-link-4").text(footerLinkName);
            $(".footer2-link-4").attr("href", footerLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer2Links",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerLinkNameArray = data.data.attributes.Footer.Footer2Links;
            var footerLinkName = footerLinkNameArray[4].FooterLinkName;
            var footerLink = footerLinkNameArray[4].FooterLink;
            $(".footer2-link-5").text(footerLinkName);
            $(".footer2-link-5").attr("href", footerLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer2Links",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerLinkNameArray = data.data.attributes.Footer.Footer2Links;
            var footerLinkName = footerLinkNameArray[5].FooterLinkName;
            var footerLink = footerLinkNameArray[5].FooterLink;
            $(".footer2-link-6").text(footerLinkName);
            $(".footer2-link-6").attr("href", footerLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer3Links",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerLinkNameArray = data.data.attributes.Footer.Footer3Links;
            var footerLinkName = footerLinkNameArray[0].FooterLinkName;
            var footerLink = footerLinkNameArray[0].FooterLink;
            $(".footer3-link-1").text(footerLinkName);
            $(".footer3-link-1").attr("href", footerLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer3Links",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerLinkNameArray = data.data.attributes.Footer.Footer3Links;
            var footerLinkName = footerLinkNameArray[1].FooterLinkName;
            var footerLink = footerLinkNameArray[1].FooterLink;
            $(".footer3-link-2").text(footerLinkName);
            $(".footer3-link-2").attr("href", footerLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer3Links",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerLinkNameArray = data.data.attributes.Footer.Footer3Links;
            var footerLinkName = footerLinkNameArray[2].FooterLinkName;
            var footerLink = footerLinkNameArray[2].FooterLink;
            $(".footer3-link-3").text(footerLinkName);
            $(".footer3-link-3").attr("href", footerLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer3Links",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerLinkNameArray = data.data.attributes.Footer.Footer3Links;
            var footerLinkName = footerLinkNameArray[3].FooterLinkName;
            var footerLink = footerLinkNameArray[3].FooterLink;
            $(".footer3-link-4").text(footerLinkName);
            $(".footer3-link-4").attr("href", footerLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer3Links",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerLinkNameArray = data.data.attributes.Footer.Footer3Links;
            var footerLinkName = footerLinkNameArray[4].FooterLinkName;
            var footerLink = footerLinkNameArray[4].FooterLink;
            $(".footer3-link-5").text(footerLinkName);
            $(".footer3-link-5").attr("href", footerLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer2Links",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerLinkNameArray = data.data.attributes.Footer.Footer2Links;
            var footerLinkName = footerLinkNameArray[6].FooterLinkName;
            var footerLink = footerLinkNameArray[6].FooterLink;
            $(".footer2-link-7").text(footerLinkName);
            $(".footer2-link-7").attr("href", footerLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer3",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerHeading1 =
                data.data.attributes.Footer.Footer3.FooterHeading1;
            $(".footer3-heading").text(footerHeading1);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer4",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerHeading = data.data.attributes.Footer.Footer4.Heading;
            $(".footer-help").text(footerHeading);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer4",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerPhone = data.data.attributes.Footer.Footer4.PhoneNumber1;
            $(".footer-phone-1").text(footerPhone);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer4",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerPhone = data.data.attributes.Footer.Footer4.PhoneNumber2;
            $(".footer-phone-2").text(footerPhone);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer4",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerTimeHeading =
                data.data.attributes.Footer.Footer4.TimeHeading1;
            $(".footer-time-heading-1").text(footerTimeHeading);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer4",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerTimeHeading =
                data.data.attributes.Footer.Footer4.TimeHeading2;
            $(".footer-time-heading-2").text(footerTimeHeading);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer4",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerTime = data.data.attributes.Footer.Footer4.Time1;
            $(".footer-time-1").text(footerTime);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: " http://localhost:1337/api/setting?populate=Footer,Footer.Footer4",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var footerTime = data.data.attributes.Footer.Footer4.Time2;
            $(".footer-time-2").text(footerTime);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    ///////// FOOTER ENDS ////////////

    /////////// HOMEPAGE START ////////////

    var homeURL = "http://localhost:1337/api/home?populate=*";

    ///////// HOME META //////////////////
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

    //////////// HOME BANNER ///////////////
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

    ///////////////////// HOME PERCENT COUNTER /////////////
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

    ////////// HOME EXCLUSIVE ////////////
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

    /////// EXCLUSIVE BANNERS ///////////
    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var exclusiveCollection = data.data.attributes.exclusiveCollection;
            $(".exclusive-collection").text(exclusiveCollection);
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
            var exclusiveDiscountOff =
                data.data.attributes.exclusiveDiscountOff;
            $(".exclusive-off-heading").text(exclusiveDiscountOff);
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
            var exclusiveDiscountDesc =
                data.data.attributes.exclusiveDiscountDesc;
            $(".exclusive-off-description").text(exclusiveDiscountDesc);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: homeURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            var exclusiveBtnName =
                data.data.attributes.exclusiveDiscountBtnName;
            var exclusiveBtnLink =
                data.data.attributes.exclusiveDiscountBtnLink;
            $(".exclusive-off-button").text(exclusiveBtnName);
            $(".exclusive-off-button").attr("href", exclusiveBtnLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/home?populate=exclusiveCollectionImg",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var exclusiveCollectionImg =
                data.data.attributes.exclusiveCollectionImg.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var exclusiveImage = baseUrl + exclusiveCollectionImg;
            $(".exclusive-collection-img").attr("src", exclusiveImage);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/home?populate=exclusiveDiscountImg",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var exclusiveDiscountImg =
                data.data.attributes.exclusiveDiscountImg.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var exclusiveImage = baseUrl + exclusiveDiscountImg;
            $(".exclusive-discount-img").attr("src", exclusiveImage);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    ////////// SURPRISE ///////////
    $.ajax({
        url: homeURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var surpriseTitle = data.data.attributes.surpriseTitle;
            $(".surprise-title").text(surpriseTitle);
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
            var surpriseSubtitle = data.data.attributes.surpriseSubtitle;
            $(".surprise-heading").text(surpriseSubtitle);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: homeURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            var surpriseBtnName = data.data.attributes.surpriseBtnName;
            var surpriseBtnLink = data.data.attributes.surpriseBtnLink;
            $(".surprise-offer-button").text(surpriseBtnName);
            $(".surprise-offer-button").attr("href", surpriseBtnLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/home?populate=surpriseGift",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var surpriseGift =
                data.data.attributes.surpriseGift.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var surpriseGiftImg = baseUrl + surpriseGift;
            $(".surprise-gift-img").attr("src", surpriseGiftImg);
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
            var surpriseOptionsArray = data.data.attributes.surpriseOptions;

            var surpriseCount = surpriseOptionsArray[0].surpriseCount;

            $(".surprise-count-1").text(surpriseCount);
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
            var surpriseOptionsArray = data.data.attributes.surpriseOptions;

            var surpriseCount = surpriseOptionsArray[1].surpriseCount;

            $(".surprise-count-2").text(surpriseCount);
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
            var surpriseOptionsArray = data.data.attributes.surpriseOptions;

            var surpriseCount = surpriseOptionsArray[2].surpriseCount;

            $(".surprise-count-3").text(surpriseCount);
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
            var surpriseOptionsArray = data.data.attributes.surpriseOptions;

            var surpriseCount = surpriseOptionsArray[3].surpriseCount;

            $(".surprise-count-4").text(surpriseCount);
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
            var surpriseOptionsArray = data.data.attributes.surpriseOptions;

            var surpriseHeading = surpriseOptionsArray[0].surpriseHeading;

            $(".surprise-heading-1").text(surpriseHeading);
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
            var surpriseOptionsArray = data.data.attributes.surpriseOptions;

            var surpriseHeading = surpriseOptionsArray[1].surpriseHeading;

            $(".surprise-heading-2").text(surpriseHeading);
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
            var surpriseOptionsArray = data.data.attributes.surpriseOptions;

            var surpriseHeading = surpriseOptionsArray[2].surpriseHeading;

            $(".surprise-heading-3").text(surpriseHeading);
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
            var surpriseOptionsArray = data.data.attributes.surpriseOptions;

            var surpriseHeading = surpriseOptionsArray[3].surpriseHeading;

            $(".surprise-heading-4").text(surpriseHeading);
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
            var surpriseOptionsArray = data.data.attributes.surpriseOptions;

            var surpriseSubHeading = surpriseOptionsArray[0].surpriseSubHeading;

            $(".surprise-subheading-1").text(surpriseSubHeading);
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
            var surpriseOptionsArray = data.data.attributes.surpriseOptions;

            var surpriseSubHeading = surpriseOptionsArray[1].surpriseSubHeading;

            $(".surprise-subheading-2").text(surpriseSubHeading);
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
            var surpriseOptionsArray = data.data.attributes.surpriseOptions;

            var surpriseSubHeading = surpriseOptionsArray[2].surpriseSubHeading;

            $(".surprise-subheading-3").text(surpriseSubHeading);
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
            var surpriseOptionsArray = data.data.attributes.surpriseOptions;

            var surpriseSubHeading = surpriseOptionsArray[3].surpriseSubHeading;

            $(".surprise-subheading-4").text(surpriseSubHeading);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    ///// HOME CLIENTS /////////
    $.ajax({
        url: "http://localhost:1337/api/home?populate=homeClients,homeClients.homeClientImg",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeClientArray = data.data.attributes.homeClients;
            var homeClientCombine =
                homeClientArray[0].homeClientImg.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var homeClientImg = baseUrl + homeClientCombine;
            $(".home-client-img-1").attr("src", homeClientImg);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/home?populate=homeClients,homeClients.homeClientImg",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeClientArray = data.data.attributes.homeClients;
            var homeClientCombine =
                homeClientArray[1].homeClientImg.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var homeClientImg = baseUrl + homeClientCombine;
            $(".home-client-img-2").attr("src", homeClientImg);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/home?populate=homeClients,homeClients.homeClientImg",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeClientArray = data.data.attributes.homeClients;
            var homeClientCombine =
                homeClientArray[2].homeClientImg.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var homeClientImg = baseUrl + homeClientCombine;
            $(".home-client-img-3").attr("src", homeClientImg);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/home?populate=homeClients,homeClients.homeClientImg",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeClientArray = data.data.attributes.homeClients;
            var homeClientCombine =
                homeClientArray[3].homeClientImg.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var homeClientImg = baseUrl + homeClientCombine;
            $(".home-client-img-4").attr("src", homeClientImg);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/home?populate=homeClients,homeClients.homeClientImg",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeClientArray = data.data.attributes.homeClients;
            var homeClientCombine =
                homeClientArray[4].homeClientImg.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var homeClientImg = baseUrl + homeClientCombine;
            $(".home-client-img-5").attr("src", homeClientImg);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/home?populate=homeClients,homeClients.homeClientImg",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var homeClientArray = data.data.attributes.homeClients;
            var homeClientCombine =
                homeClientArray[5].homeClientImg.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var homeClientImg = baseUrl + homeClientCombine;
            $(".home-client-img-6").attr("src", homeClientImg);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    ///////// INFO SECTION /////////

    var infoURL = "http://localhost:1337/api/info?populate=*";

    $.ajax({
        url: infoURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var infoSince = data.data.attributes.infoComponent.infoSince;

            $(".info-since").text(infoSince);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: infoURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var infoDate = data.data.attributes.infoComponent.infoDate;

            $(".info-date").text(infoDate);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: infoURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var infoDesc = data.data.attributes.infoComponent.infoDesc;

            $(".info-description").text(infoDesc);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/info?populate=infoComponent,infoComponent.infoImg",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var infoCompImg =
                data.data.attributes.infoComponent.infoImg.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var infoImg = baseUrl + infoCompImg;
            $(".info-img").attr("src", infoImg);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/info?populate=infoComponent,infoComponent.infoCounterComp",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var infoCounterArray =
                data.data.attributes.infoComponent.infoCounterComp;

            var infoCounter = infoCounterArray[0].infoCount;

            $(".info-counter-1").text(infoCounter);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/info?populate=infoComponent,infoComponent.infoCounterComp",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var infoCounterArray =
                data.data.attributes.infoComponent.infoCounterComp;

            var infoCounter = infoCounterArray[1].infoCount;

            $(".info-counter-2").text(infoCounter);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/info?populate=infoComponent,infoComponent.infoCounterComp",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var infoCounterArray =
                data.data.attributes.infoComponent.infoCounterComp;

            var infoCounter = infoCounterArray[2].infoCount;

            $(".info-counter-3").text(infoCounter);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/info?populate=infoComponent,infoComponent.infoCounterComp",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var infoCounterDescArray =
                data.data.attributes.infoComponent.infoCounterComp;

            var infoCounterDesc = infoCounterDescArray[0].infoCountDesc;

            $(".info-counter-desc-1").text(infoCounterDesc);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/info?populate=infoComponent,infoComponent.infoCounterComp",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var infoCounterDescArray =
                data.data.attributes.infoComponent.infoCounterComp;

            var infoCounterDesc = infoCounterDescArray[1].infoCountDesc;

            $(".info-counter-desc-2").text(infoCounterDesc);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/info?populate=infoComponent,infoComponent.infoCounterComp",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var infoCounterDescArray =
                data.data.attributes.infoComponent.infoCounterComp;

            var infoCounterDesc = infoCounterDescArray[2].infoCountDesc;

            $(".info-counter-desc-3").text(infoCounterDesc);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    /////// SUBSCRIBE ///////////

    var subURL = "http://localhost:1337/api/subscribe?populate=*";

    $.ajax({
        url: subURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var subscribeTitle =
                data.data.attributes.subscribeComp.subscribeTitle;

            $(".subscribe-title").text(subscribeTitle);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: subURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var subscribeDescription =
                data.data.attributes.subscribeComp.subscribeDesc;

            $(".subscribe-description").text(subscribeDescription);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: subURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            var subscribeBtnName =
                data.data.attributes.subscribeComp.subscribeBtnName;
            var subscribeBtnLink =
                data.data.attributes.homeSubscribe.subscribeBtnLink;
            $(".subscription-button").text(subscribeBtnName);
            $(".subscription-button").attr("href", subscribeBtnLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    //////////// INSPIRATIONS /////////////

    var inspireURL = "http://localhost:1337/api/inspiration?populate=*";

    $.ajax({
        url: inspireURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var mainTitle = data.data.attributes.MainTitle;

            $(".inspiration-main-title").text(mainTitle);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: inspireURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var mainHeading = data.data.attributes.MainHeading;

            $(".inspiration-main-heading").text(mainHeading);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: inspireURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var inspirationDesc = data.data.attributes.inspirationDesc;

            $(".inspiration-description").text(inspirationDesc);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: inspireURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var inspirationSign = data.data.attributes.inspirationSign;

            $(".inspirations-signature").text(inspirationSign);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: inspireURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var inspirationQuote =
                data.data.attributes.inspirationQuote.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var inspirationQuoteImg = baseUrl + inspirationQuote;
            $(".inspirations-quote").attr("src", inspirationQuoteImg);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: inspireURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var inspirationSign =
                data.data.attributes.inspirationSignImg.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var inspirationSignImg = baseUrl + inspirationSign;
            $(".inspiration-sign-img").attr("src", inspirationSignImg);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: inspireURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var inspirationMain =
                data.data.attributes.inspirationMainImg.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var inspirationMainImg = baseUrl + inspirationMain;
            $(".inspiration-main-img").attr("src", inspirationMainImg);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: inspireURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var inspirationMainHeading =
                data.data.attributes.inspiration1.inspireMainHeading;

            $(".inspire1-heading").text(inspirationMainHeading);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: inspireURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var inspirationMainHeading =
                data.data.attributes.inspiration2.inspireMainHeading;

            $(".inspire2-heading").text(inspirationMainHeading);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: inspireURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var inspirationMainHeading =
                data.data.attributes.inspiration3.inspireMainHeading;

            $(".inspire3-heading").text(inspirationMainHeading);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: inspireURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var inspirationDesc = data.data.attributes.inspiration1.inspireDesc;

            $(".inspire1-desc").text(inspirationDesc);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: inspireURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var inspirationDesc = data.data.attributes.inspiration2.inspireDesc;

            $(".inspire2-desc").text(inspirationDesc);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: inspireURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var inspirationDesc = data.data.attributes.inspiration3.inspireDesc;

            $(".inspire3-desc").text(inspirationDesc);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: inspireURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            var inspireBtnName =
                data.data.attributes.inspiration1.inspireBtnName;
            var inspireBtnLink =
                data.data.attributes.inspiration1.inspireBtnLink;
            $(".inspirations-button").text(inspireBtnName);
            $(".inspirations-button").attr("href", inspireBtnLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: inspireURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            var inspireBtnName =
                data.data.attributes.inspiration2.inspireBtnName;
            var inspireBtnLink =
                data.data.attributes.inspiration2.inspireBtnLink;
            $(".inspirations-button").text(inspireBtnName);
            $(".inspirations-button").attr("href", inspireBtnLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: inspireURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            var inspireBtnName =
                data.data.attributes.inspiration3.inspireBtnName;
            var inspireBtnLink =
                data.data.attributes.inspiration3.inspireBtnLink;
            $(".inspirations-button").text(inspireBtnName);
            $(".inspirations-button").attr("href", inspireBtnLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/inspiration?populate=inspiration1.inspireImg",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var inspirationImg =
                data.data.attributes.inspiration1.inspireImg.data.attributes
                    .url;
            var baseUrl = "http://localhost:1337";
            var inspirationImage = baseUrl + inspirationImg;
            $(".inspiration-img-1").attr("src", inspirationImage);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/inspiration?populate=inspiration2.inspireImg",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var inspirationImg =
                data.data.attributes.inspiration2.inspireImg.data.attributes
                    .url;
            var baseUrl = "http://localhost:1337";
            var inspirationImage = baseUrl + inspirationImg;
            $(".inspiration-img-2").attr("src", inspirationImage);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: "http://localhost:1337/api/inspiration?populate=inspiration3.inspireImg",
        method: "GET",
        dataType: "json",
        success: function (data) {
            var inspirationImg =
                data.data.attributes.inspiration3.inspireImg.data.attributes
                    .url;
            var baseUrl = "http://localhost:1337";
            var inspirationImage = baseUrl + inspirationImg;
            $(".inspiration-img-3").attr("src", inspirationImage);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    ///////// ABOUT PAGE /////////////

    var aboutURL = "http://localhost:1337/api/about?populate=*";

    $.ajax({
        url: aboutURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var aboutMainTitle = data.data.attributes.aboutMainTitle;

            $(".about-main-title").text(aboutMainTitle);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: aboutURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var aboutMainHeading = data.data.attributes.aboutMainHeading;

            $(".about-main-heading").text(aboutMainHeading);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: aboutURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var aboutHeading = data.data.attributes.aboutHeading;

            $(".about-heading").text(aboutHeading);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: aboutURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var abouteQuote =
                data.data.attributes.aboutQuote.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var aboutQuoteImg = baseUrl + abouteQuote;
            $(".about-quote-img").attr("src", aboutQuoteImg);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: aboutURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var aboutDesc = data.data.attributes.aboutDesc;

            $(".about-description").text(aboutDesc);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: aboutURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            var aboutBtnName = data.data.attributes.aboutBtnName;
            var aboutBtnLink = data.data.attributes.aboutBtnLink;
            $(".about-button").text(aboutBtnName);
            $(".about-button").attr("href", aboutBtnLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: aboutURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var aboutImage =
                data.data.attributes.aboutImage.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var aboutImg = baseUrl + aboutImage;
            $(".about-image").attr("src", aboutImg);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: aboutURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var aboutDescription = data.data.attributes.aboutDescription1;

            $(".about-description-1").text(aboutDescription);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: aboutURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var aboutDescription = data.data.attributes.aboutDescription2;

            $(".about-description-2").text(aboutDescription);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: aboutURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var aboutDescription = data.data.attributes.aboutDescription3;

            $(".about-description-3").text(aboutDescription);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: aboutURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var aboutSignature =
                data.data.attributes.aboutSignature.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var aboutSign = baseUrl + aboutSignature;
            $(".about-signature").attr("src", aboutSign);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    /////// CONTACT PAGE //////////

    var contactURL = "http://localhost:1337/api/contact?populate=*";

    $.ajax({
        url: contactURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var contactMainTitle = data.data.attributes.contactMainTitle;

            $(".contact-main-title").text(contactMainTitle);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: contactURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var contactMainHeading = data.data.attributes.contactMainHeading;

            $(".contact-main-heading").text(contactMainHeading);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: contactURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var contactAddress = data.data.attributes.contactAddress;

            $(".contact-address").text(contactAddress);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: contactURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var contactLocation = data.data.attributes.contactLocation;

            $(".contact-location").text(contactLocation);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });

    $.ajax({
        url: contactURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            var contactBtnName = data.data.attributes.contactBtnName;
            var contactBtnLink = data.data.attributes.contactBtnLink;
            $(".contact-btn").text(contactBtnName);
            $(".contact-btn").attr("href", contactBtnLink);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: contactURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            var contactUs = data.data.attributes.contactUs;
            $(".contact-us-heading").text(contactUs);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: contactURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            var contactNumber = data.data.attributes.contactNumber;
            $(".contact-phone").text(contactNumber);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: contactURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            var contactMail = data.data.attributes.contactMail;
            $(".contact-mail").text(contactMail);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: contactURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            var contactHourHeading = data.data.attributes.contactHourHeading;
            $(".contact-hour-heading").text(contactHourHeading);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: contactURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            var contactDays1 = data.data.attributes.contactDays1;
            $(".contact-days-1").text(contactDays1);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: contactURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            var contactDays2 = data.data.attributes.contactDays2;
            $(".contact-days-2").text(contactDays2);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: contactURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            var contactTime1 = data.data.attributes.contactTime1;
            $(".contact-time-1").text(contactTime1);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: contactURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            var contactTime2 = data.data.attributes.contactTime2;
            $(".contact-time-2").text(contactTime2);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: contactURL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            var contactQuestion = data.data.attributes.contactQuestion;
            $(".qa-heading").text(contactQuestion);
        },
        error: function (error) {
            console.error("Error fetching copyright:", error);
        },
    });

    $.ajax({
        url: contactURL,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var contactImg =
                data.data.attributes.contactImage.data.attributes.url;
            var baseUrl = "http://localhost:1337";
            var contactImage = baseUrl + contactImg;
            $(".qa-image").attr("src", contactImage);
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        },
    });
});
