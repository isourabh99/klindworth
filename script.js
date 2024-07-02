gsap.from("#page1 img", {
    top: "88%",
    // scale:0.5,
    width: "28%",
    duration: 1,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        // markers:true,
        start: "top 0",
        end: "top -150% ",
        scrub: 2,
        pin: true
    }
})

let tl1 = gsap.timeline()
tl1.to("#tooglePage", {
    top: "0",
    duration: .3

})

tl1.pause()


document.querySelector("#toogle").addEventListener("click", () => {
    tl1.play()
    document.body.style.overflow = "hidden"
})



document.querySelector(".cross").addEventListener("click", () => {
    tl1.reverse()
    document.body.style.overflow = "visible"
})


tl1.from("#leftSection,#rightSection,footer", {
    opacity: 0,
    duration: .5,
    y: 20
})


gsap.from('#page2 #heading', {
    y: 70,
    opacity: 0,
    scale: .7,
    scrollTrigger: {
        trigger: '#page2 #heading',
        scroller: 'body',
        start: "top 90%",
        end: "top 70%",
        scrub: 2,

    }
})

gsap.from('#page3 .elements img', {
    y: 150,
    opacity: 0,
    scale: .7,
    scrollTrigger: {
        trigger: '#page2 #heading',
        scroller: 'body',
        start: "top 10%",
        end: "top 50%",
        scrub: 5,
    }
})


gsap.to("#page4 #img1", {
    filter: 'brightness(0.5)',
    scale: .85,

    scrollTrigger: {
        trigger: '#img1',
        scroller: 'body',
        start: 'top 5%',
        end: 'top -50%',
        scrub: true

    }
})
gsap.to("#page4 #img2", {
    filter: 'brightness(0.5)',
    scale: .85,

    scrollTrigger: {
        trigger: '#img2',
        scroller: 'body',
        start: 'top 5%',
        end: 'top -50%',
        scrub: true

    }
})
// swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.3,
    spaceBetween: 150,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// swiper2
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        // el: ".swiper-pagination",
        clickable: true,
    },
});
//kudos scroll
gsap.to(" #page7 #kudos", {
    y: "-50vh",
    scrollTrigger: {
        scroll: "#kudos",
        trigger: "#page7",
        //    markers:true,
        start: "top 20%",
        scrub: 3,
        end: "top -170%",
        scrub: true
    }
})