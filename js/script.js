let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navlist.classList.toggle('open');
}

document.getElementById('toggleBtn').addEventListener('click', function() {
  var profileCard = document.getElementById('profileCard');
  if (profileCard.classList.contains('hidden')) {
      profileCard.classList.remove('hidden');
      profileCard.classList.add('shown');
  } else {
      profileCard.classList.remove('shown');
      profileCard.classList.add('hidden');
  }
});

const sr = ScrollReveal({
    distance: '200px',
    duration: 2600,
    delay: 450,
    reset: false,
});

sr.reveal('header', {delay:200, origin:'top'});
sr.reveal('.hero-text', {delay:200, origin:'top'});
sr.reveal('.hero-img', {delay:450, origin:'right'});
sr.reveal('.socmed-icons', {delay:500, origin:'left'});
sr.reveal('.profile-kucing-wrapper', {delay:200, origin:'bottom'});
sr.reveal('.swiper', {delay:300, origin:'bottom'});
sr.reveal('.cerita-1', {delay:300, origin:'bottom'});
sr.reveal('.cerita-2-1', {delay:300, origin:'left'});
sr.reveal('.cerita-2-2', {delay:200, origin:'right'});
sr.reveal('.cerita-3', {delay:200, origin:'bottom'});
sr.reveal('.contact-wrapper', {delay:200, origin:'bottom'});



  var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 7,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // dynamicBullets: true,
    },

    breakpoints: {
      1535: {
          slidesPerView: 7,
          spaceBetween: 0,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
      920: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      860: {
      slidesPerView: 4,
      spaceBetween: 0,
      },
      
      560: {
      slidesPerView: 3,
      spaceBetween: 0,
      },
      400: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      240: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  });

  var swiper = new Swiper('.galeri-foto', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });