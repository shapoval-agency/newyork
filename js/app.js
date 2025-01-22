(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
    if (document.querySelector(".hero__title")) gsap.from(".hero__title", {
        opacity: 0,
        x: -300,
        ease: "expo.inOut",
        duration: 1.8
    });
    if (document.querySelector(".hero__subtitle")) gsap.from(".hero__subtitle", {
        opacity: 0,
        x: 300,
        ease: "expo.inOut",
        duration: 1.8
    });
    if (document.querySelector(".introduction__content")) gsap.from(".introduction__content", {
        scrollTrigger: {
            trigger: ".introduction__container"
        },
        x: 300,
        opacity: 0,
        duration: .5,
        delay: .2
    });
    if (document.querySelector(".about__text-box--left")) gsap.from(".about__text-box--left", {
        scrollTrigger: {
            trigger: ".about"
        },
        x: -300,
        opacity: 0,
        duration: .5,
        delay: 1
    });
    if (document.querySelector(".about__text-box--right")) gsap.from(".about__text-box--right", {
        scrollTrigger: {
            trigger: ".about"
        },
        x: 300,
        opacity: 0,
        duration: .5,
        delay: 1.5
    });
    if (document.querySelector(".principles__title")) gsap.from(".principles__title", {
        scrollTrigger: {
            trigger: ".principles"
        },
        x: -300,
        opacity: 0,
        duration: .5,
        delay: 1
    });
    if (document.querySelector(".principles__left-col")) gsap.from(".principles__left-col", {
        scrollTrigger: {
            trigger: ".principles"
        },
        x: -300,
        opacity: 0,
        duration: .5,
        delay: 1.5
    });
    if (document.querySelector(".principles-adv__item")) gsap.to(".principles-adv__item", {
        scrollTrigger: {
            trigger: ".principles"
        },
        opacity: 1,
        delay: 2,
        ease: "power3.inOut",
        duration: 1.2,
        stagger: .5
    });
    if (document.querySelector(".cta__left-col")) gsap.from(".cta__left-col", {
        scrollTrigger: {
            trigger: ".cta__container"
        },
        x: -300,
        opacity: 0,
        duration: .5,
        delay: .5
    });
    if (document.querySelector(".cta__right-col")) gsap.from(".cta__right-col", {
        scrollTrigger: {
            trigger: ".cta__container"
        },
        x: 300,
        opacity: 0,
        duration: .5,
        delay: .5
    });
    if (document.querySelector(".popular-obj__title")) gsap.from(".popular-obj__title", {
        scrollTrigger: {
            trigger: ".popular-obj"
        },
        x: -300,
        opacity: 0,
        duration: .5,
        delay: .5
    });
    if (document.querySelector(".popular-obj__nav")) gsap.from(".popular-obj__nav", {
        scrollTrigger: {
            trigger: ".popular-obj"
        },
        opacity: 0,
        duration: .5,
        delay: 1
    });
    if (document.querySelector(".popular-obj__slide")) gsap.from(".popular-obj__slide", {
        scrollTrigger: {
            trigger: ".popular-obj"
        },
        opacity: 0,
        duration: .5,
        delay: 1
    });
    if (document.querySelector(".feedback__title")) gsap.from(".feedback__title", {
        scrollTrigger: {
            trigger: ".feedback"
        },
        x: -300,
        opacity: 0,
        duration: .5,
        delay: 1
    });
    if (document.querySelector(".feedback__slider")) gsap.from(".feedback__slider", {
        scrollTrigger: {
            trigger: ".feedback"
        },
        x: 300,
        opacity: 0,
        duration: .5,
        delay: 1
    });
    if (document.querySelector(".experts__title")) gsap.from(".experts__title", {
        scrollTrigger: {
            trigger: ".experts"
        },
        x: -300,
        opacity: 0,
        duration: .5,
        delay: 1
    });
    if (document.querySelector(".experts__box-card")) gsap.from(".experts__box-card", {
        scrollTrigger: {
            trigger: ".experts"
        },
        opacity: 0,
        duration: .5,
        stagger: .5,
        delay: 1.5
    });
    if (document.querySelector(".blog__title")) gsap.from(".blog__title", {
        scrollTrigger: {
            trigger: ".blog"
        },
        x: -300,
        opacity: 0,
        duration: .5,
        delay: .5
    });
    if (document.querySelector(".blog__navigation")) gsap.from(".blog__navigation", {
        scrollTrigger: {
            trigger: ".blog"
        },
        opacity: 0,
        duration: .5,
        delay: 1
    });
    if (document.querySelector(".blog__slide")) gsap.from(".blog__slide", {
        scrollTrigger: {
            trigger: ".blog"
        },
        opacity: 0,
        duration: .5,
        delay: 1
    });
    function main() {
        initSwiper();
        menu();
        function initSwiper() {
            new Swiper(".popular-obj-slider", {
                slidesPerView: "auto",
                spaceBetween: 48,
                loop: true,
                speed: 500,
                pagination: {
                    el: ".popular-obj__nav .swiper-pagination",
                    type: "fraction",
                    formatFractionCurrent: function(number) {
                        return ("0" + number).slice(-2);
                    },
                    formatFractionTotal: function(number) {
                        return ("0" + number).slice(-2);
                    },
                    renderFraction: function(currentClass, totalClass) {
                        return '<span class="' + currentClass + '"></span>' + "/" + '<span class="' + totalClass + '"></span>';
                    }
                },
                navigation: {
                    nextEl: ".popular-obj__nav .swiper-button-next",
                    prevEl: ".popular-obj__nav .swiper-button-prev"
                }
            });
        }
        function menu() {
            const buttonOpen = document.querySelectorAll(".header__burger");
            const menu = document.querySelector(".menu-header");
            const html = document.querySelector("html");
            const buttonClose = document.querySelector(".menu-header__close");
            buttonOpen.forEach((button => {
                button.addEventListener("click", (e => {
                    e.preventDefault();
                    menu.classList.toggle("active");
                    if (window.innerWidth <= 676) html.classList.toggle("lock");
                }));
            }));
            buttonClose.addEventListener("click", (e => {
                e.preventDefault();
                menu.classList.toggle("active");
                if (html.classList.contains("lock")) html.classList.remove("lock");
            }));
        }
        const appHeight = () => {
            const doc = document.documentElement;
            doc.style.setProperty("--app-height", `${window.innerHeight}px`);
        };
        appHeight();
        function adjustArticleTextHeight() {
            document.querySelectorAll(".archive-article__item").forEach((item => {
                if (window.matchMedia("(max-width: 1279px)").matches) {
                    const title = item.querySelector(".archive-article__title");
                    const textHolder = item.querySelector(".archive-article__text-holder");
                    const titleHeight = title.scrollHeight;
                    const textHolderMaxHeight = 205;
                    const maxTextHeight = textHolderMaxHeight - titleHeight;
                    textHolder.style.maxHeight = `${maxTextHeight > 0 ? maxTextHeight : 0}px`;
                } else {
                    const title = item.querySelector(".archive-article__title");
                    const textHolder = item.querySelector(".archive-article__text-holder");
                    const titleHeight = title.scrollHeight;
                    console.log(titleHeight);
                    const textHolderMaxHeight = 281;
                    const maxTextHeight = textHolderMaxHeight - titleHeight;
                    textHolder.style.maxHeight = `${maxTextHeight > 0 ? maxTextHeight : 0}px`;
                }
            }));
        }
        window.addEventListener("load", adjustArticleTextHeight);
        window.addEventListener("resize", (() => {
            appHeight();
            adjustArticleTextHeight();
        }));
    }
    function additional() {
        blogSliders();
        feedbackSliders();
        jQuery(document).ready((function($) {
            function setupFAQ() {
                var faqBox = $(".faq__box");
                var showMoreBtn = $("#showMoreBtn");
                var isExpanded = false;
                showMoreBtn.click((function() {
                    faqBox.slideToggle(300);
                    isExpanded = !isExpanded;
                    var buttonText = isExpanded ? "СВЕРНУТЬ" : "РАЗВЕРНУТЬ";
                    $(this).toggleClass("active", isExpanded).find(".btn-text").text(buttonText);
                }));
                $(".faq__header").click((function() {
                    var faqHeader = $(this);
                    var faqItem = faqHeader.closest(".faq__item");
                    faqHeader.toggleClass("active");
                    $(".faq__header").not(faqHeader).removeClass("active");
                    $(".faq__item").not(faqItem).removeClass("active").find(".faq__content").slideUp(300);
                    faqItem.toggleClass("active").find(".faq__content").slideToggle(300);
                }));
            }
            function seo() {
                $("#seo__btn").click((function() {
                    $(".seo__main").slideToggle(300);
                    $(this).toggleClass("active");
                    var buttonText = $(this).hasClass("active") ? "СВЕРНУТЬ" : "РАЗВЕРНУТЬ";
                    $(this).find(".btn-text").text(buttonText);
                }));
            }
            function feedback() {
                $(".feedback__btn").click((function() {
                    var targetBlock = $(this).data("target");
                    var $textElement = $('.feedback__text-holder[data-block="' + targetBlock + '"]');
                    $textElement.toggleClass("expanded");
                    var isExpanded = $textElement.hasClass("expanded");
                    var buttonText = isExpanded ? "СВЕРНУТЬ" : "РАЗВЕРНУТЬ";
                    $(this).find(".btn-text").text(buttonText);
                    $(this).toggleClass("active", isExpanded);
                    if (isExpanded) $textElement.css("-webkit-line-clamp", "unset"); else $textElement.css("-webkit-line-clamp", "6");
                }));
            }
            setupFAQ();
            seo();
            feedback();
        }));
        function blogSliders() {
            new Swiper(".blog__main", {
                slidesPerView: "auto",
                spaceBetween: 48,
                loop: true,
                speed: 500,
                pagination: {
                    el: ".blog__navigation .swiper-pagination",
                    type: "fraction",
                    formatFractionCurrent: function(number) {
                        return ("0" + number).slice(-2);
                    },
                    formatFractionTotal: function(number) {
                        return ("0" + number).slice(-2);
                    },
                    renderFraction: function(currentClass, totalClass) {
                        return '<span class="' + currentClass + '"></span>' + "/" + '<span class="' + totalClass + '"></span>';
                    }
                },
                navigation: {
                    nextEl: ".blog__navigation .swiper-button-next",
                    prevEl: ".blog__navigation .swiper-button-prev"
                }
            });
        }
        function feedbackSliders() {
            new Swiper(".feedback__slider", {
                slidesPerView: "auto",
                spaceBetween: 48,
                loop: true,
                speed: 500,
                pagination: {
                    el: ".feedback__navigation .swiper-pagination",
                    type: "fraction",
                    formatFractionCurrent: function(number) {
                        return ("0" + number).slice(-2);
                    },
                    formatFractionTotal: function(number) {
                        return ("0" + number).slice(-2);
                    },
                    renderFraction: function(currentClass, totalClass) {
                        return '<span class="' + currentClass + '"></span>' + "/" + '<span class="' + totalClass + '"></span>';
                    }
                },
                navigation: {
                    nextEl: ".feedback__navigation .swiper-button-next",
                    prevEl: ".feedback__navigation .swiper-button-prev"
                }
            });
        }
    }
    document.addEventListener("DOMContentLoaded", (function() {
        main();
        additional();
    }));
    window["FLS"] = true;
    isWebp();
})();