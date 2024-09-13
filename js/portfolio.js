$(document).ready(function () {

  lastScrollTop = 0;
  delta = 15;

  $(window).scroll((event) => {
    let nowScroll = $(this).scrollTop();

    if (Math.abs(lastScrollTop - nowScroll) <= delta) return;
    if (nowScroll > lastScrollTop && lastScrollTop > 0) {
      $('.soundwrap,.innermenu').css('top', '-80px')
    } else {
      $('.soundwrap,.innermenu').css('top', '50px')
    }
    lastScrollTop = nowScroll
  })
  // 헤더부분 스크롤시

  const audio = document.querySelector('.sound');
  const audioWraaper = document.querySelector('.soundwrap');
  let isPlay = false;

  function toggleBgm() {
    if (isPlay) {
      audio.pause()
      audioWraaper.classList.remove('play');
      isPlay = false;
    } else {
      audio.play();
      audioWraaper.classList.add('play');
      isPlay = true;
    }
  }

  audioWraaper.addEventListener('click', toggleBgm);
  // bgm

  $('.modalbtnY').click(function () {
    $('#modal').fadeOut();
    toggleBgm()
  })

  $('.modalbtnN').click(function () {
    $('#modal').fadeOut();
  })


  $(".nav-click>a").click(function () {
    if ($(".portfolio-list").hasClass("active")) {
      $(".portfolio-list").removeClass("active");
    } else {
      $(".portfolio-list").addClass("active");
    }
  });


  $('.menu, .innermenu a,.menu-close').not('.nav-click>a').click(function () {
    if ($('.innermenuback').hasClass('active')) {
      $('.innermenuback').removeClass('active');
    } else {
      $('.innermenuback').addClass('active');
    }
  })


  $('.con-btn').mouseenter(function () {
    $('.btnbg').addClass('active');
    $('.con-btn p').addClass('active');
    $('.cursor').addClass('active');
  })
  $('.con-btn').mouseleave(function () {
    $('.btnbg').removeClass('active');
    $('.con-btn p').removeClass('active');
    $('.cursor').removeClass('active');
  })

  $('.innermenu').mouseenter(function () {
    $('.cursor').addClass('active');
  })
  $('.innermenu').mouseleave(function () {
    $('.cursor').removeClass('active');
  })

  $('.modalbtn span').mouseenter(function () {
    $('.cursor').addClass('modalActive')
  })
  $('.modalbtn span').mouseleave(function () {
    $('.cursor').removeClass('modalActive')
  })

  $('.github').hover(() => {
    $('.cursor').addClass('active');
  }, () => {
    $('.cursor').removeClass('active');
  })

  gsap.registerPlugin(ScrollTrigger);

  const gsapText = gsap.timeline();
  gsapText
    .from('#about .num1', { autoAlpha: 0, duration: 1, y: 50 })
    .to('#about .num1', { autoAlpha: 0, duration: 1 }, '+=1')

    .from('#about .num2', { autoAlpha: 0, duration: 1, y: 50 }, '-=1')
    .to('#about .num2', { autoAlpha: 0, duration: 1 }, '+=1')

    .from('#about .num3', { autoAlpha: 0, duration: 1, y: 50 }, '-=1')
    .to('#about .num3', { autoAlpha: 0, duration: 1 }, '+=1')

    .from('#about .num4', { autoAlpha: 0, duration: 1, y: 50 }, '-=1')
    .to('#about .num4', { autoAlpha: 0, duration: 1 }, '+=1')

    .from('#about .num5', { autoAlpha: 0, duration: 1, y: 50 })


  ScrollTrigger.create({
    animation: gsapText,
    trigger: "#about",
    start: "top top",
    end: "+=4000",
    scrub: true,
    pin: true,
    markers: false,
    anticipatePin: 1,
  })
  //about

  const item1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.portfolio-wrap',
      start: '-15% 50%',
      end: '0% 50%',
      // markers: true,
      scrub: 3
    }
  })

  item1
    .to('.portfolio-wrap .item1', { width: '100%' }, 'w')

  const pin = gsap.timeline({
    scrollTrigger: {
      trigger: '.portfolio-wrap',
      start: '0 0',
      end: '100% 150%',
      scrub: 3,
      // markers: true
    }
  })

  pin
    .to('.portfolio-wrap .item2', { transform: 'translateY(0)' }, "a+=0.2")
    .to('.portfolio-wrap .item2', { width: '100%' }, "a")
    .to('.portfolio-wrap .item1 .port-wrap', { opacity: 0 }, "a+=0.2")

    .to('.portfolio-wrap .item3', { transform: 'translateY(0)' }, "b+=0.2")
    .to('.portfolio-wrap .item3', { width: '100%' }, "b")
    .to('.portfolio-wrap .item2 .port-wrap', { opacity: 0 }, "b+=0.2")

    .to('.portfolio-wrap .item4', { transform: 'translateY(0)' }, "c+=0.2")
    .to('.portfolio-wrap .item4', { width: '100%' }, "c")
    .to('.portfolio-wrap .item3 .port-wrap', { opacity: 0 }, "c+=0.2")

  // gsap.to('.portfolio-wrap .item4 .port-wrap', {
  //   scrollTrigger: {
  //     trigger: '.portfolio-wrap',
  //     start: "100% 100%",
  //     end: "110% 100%",
  //     scrub: 3,
  //     // markers: true
  //   }
  // })

  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });

  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });

  gsap.utils.toArray('.reveal').forEach((item) => {

    ScrollTrigger.create({
      trigger: item,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => { animate(item) }
    })
    item.style.opacity = '0'
  })

  const animate = (item) => {

    let x = 0;
    let y = 0;
    let delay = item.dataset.delay;

    if (item.classList.contains('Rright')) {
      x = '100%'
      y = 0
    } else if (item.classList.contains('Rbtm')) {
      x = 0
      y = '100%'
    } else {
      x = '-100%'
      y = 0
    }

    gsap.fromTo(item,
      { autoAlpha: 0, x: x, y: y },
      { autoAlpha: 1, x: 0, y: 0, delay: delay, duration: 1.25, overwrite: "auto", ease: "expo" }
    )
  }

  //contact

  // var max = $(window).height();
  // $(window).scroll(function () {
  //   var sct = $(this).scrollTop();
  //   if (sct > max) {
  //     $(".bg-shadow").css({ opacity: (sct - max) / max, zIndex: 0 });
  //   } else {
  //     $(".bg-shadow").css({ opacity: 0, zIndex: -1 });
  //   }
  // });

  //수정
  // document.addEventListener("scroll", () => {
  //   const sections = document.querySelectorAll(".trigger");
  //   const scrollPosition = window.scrollY;

  //   sections.forEach((section, index) => {
  //     const overlay = section.querySelector(".bg-shadow");

  //     if (index > 0) {
  //       const previousSection = sections[index - 1];
  //       const previousOverlay = previousSection.querySelector(".bg-shadow");
  //       const previousSectionTop = previousSection.offsetTop;
  //       const previousSectionHeight = previousSection.offsetHeight;

  //       if (
  //         scrollPosition > previousSectionTop &&
  //         scrollPosition < previousSectionTop + previousSectionHeight
  //       ) {
  //         const opacity = Math.min(
  //           1,
  //           (scrollPosition - previousSectionTop) / previousSectionHeight
  //         );
  //         previousOverlay.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
  //       } else {
  //         previousOverlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  //       }
  //     }

  //     overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  //   });
  // });


  const main = document.querySelector("#main");
  const mainText = document.querySelector(".main-text");
  const moon = document.querySelector(".moon");
  const moon2 = document.querySelector('.moon2');
  const sun = document.querySelector(".sun");
  const rollTextSpans = document.querySelectorAll(".roll-text span");
  let isNight = true;

  function toggleTheme() {
    if (isNight) {
      main.classList.add("light");
      sun.classList.add("animate");
      moon.classList.remove("animate");
      moon2.classList.remove('animate');
      rollTextSpans[0].classList.remove("active");
      rollTextSpans[1].classList.add("active");
    } else {
      main.classList.remove("light");
      moon.classList.add("animate");
      moon2.classList.add('animate');
      sun.classList.remove("animate");
      rollTextSpans[1].classList.remove("active");
      rollTextSpans[0].classList.add("active");
    }
    isNight = !isNight;
  }

  moon.classList.add("animate");
  rollTextSpans[0].classList.add("active");

  setInterval(toggleTheme, 3000);

  //main

  let mouseCursor = document.querySelector(".cursor");
  let navLinks = document.querySelectorAll(".port-img a");
  window.addEventListener("scroll", cursor);
  window.addEventListener("mousemove", cursor);
  function cursor(e) {
    mouseCursor.style.left = e.clientX + "px";
    mouseCursor.style.top = e.clientY + "px";
  }
  // 커서


}); //
