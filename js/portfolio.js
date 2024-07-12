$(document).ready(function () {

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



  var burger = $('.menu-trigger');

  burger.each(function (index) {
    var $this = $(this);

    $this.on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('active-' + (index + 1));
    })
  });


  const nonClick = document.querySelectorAll(".portfolio-list li a");

  function handleClick(event) {
    nonClick.forEach((e) => {
      e.classList.remove("active");
    });
    event.target.classList.add("active");
  }

  nonClick.forEach((e) => {
    e.addEventListener("click", handleClick);
  });
  // nav

  // var max = $(window).height();
  // $(window).scroll(function () {
  //   var sct = $(this).scrollTop();
  //   if (sct > max) {
  //     $(".bg-shadow").css({ opacity: (sct - max) / max, zIndex: 0 });
  //   } else {
  //     $(".bg-shadow").css({ opacity: 0, zIndex: -1 });
  //   }
  // });
  document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".trigger");
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
      const overlay = section.querySelector(".bg-shadow");

      if (index > 0) {
        const previousSection = sections[index - 1];
        const previousOverlay = previousSection.querySelector(".bg-shadow");
        const previousSectionTop = previousSection.offsetTop;
        const previousSectionHeight = previousSection.offsetHeight;

        if (
          scrollPosition > previousSectionTop &&
          scrollPosition < previousSectionTop + previousSectionHeight
        ) {
          const opacity = Math.min(
            1,
            (scrollPosition - previousSectionTop) / previousSectionHeight
          );
          previousOverlay.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
        } else {
          previousOverlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
      }

      overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    });
  });

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

  // 포트폴리오 패럴시 opacity

  let mouseCursor = document.querySelector(".cursor");
  let navLinks = document.querySelectorAll(".port-img a");
  window.addEventListener("scroll", cursor);
  window.addEventListener("mousemove", cursor);
  function cursor(e) {
    mouseCursor.style.left = e.clientX + "px";
    mouseCursor.style.top = e.clientY + "px";
  }
  // 커서

  //   gsap.utils.toArray(".trigger").forEach((panel, i) => {
  //     ScrollTrigger.create({
  //       trigger: panel,
  //       start: "top top",
  //       pin: true,
  //       pinSpacing: false,
  //       scrub: 1,
  //     });
  //   });
  // 패럴렉스

  // const ani4 = gsap.timeline();
  // ani4.from(".aekyung", {
  //     autoAlpha: 0,
  //     scale: .5,
  //     width: "100vw",
  //     height: "100vh"
  // })

  // ScrollTrigger.create({
  //     animation: ani4,
  //     trigger: ".trigger",
  //     start: "top top",
  //     end: "+=3000",
  //     scrub: true,
  //     pin: true,
  //     markers: false,
  //     anticipatePin: 1
  // });

  // 포트폴리오 섹션 스크롤 시 이전 포트폴리오 어둡게 (GSAP)
  // 인트로 에니메이션 전환 관련 변경
  // 마우스도 bg 컬러에 맞춰 색 변경
  // 인트로 타이틀 1개로 변경해서 에니메이션 적용

  AOS.init();
  //   gsap.registerPlugin(ScrollTrigger);
}); //
