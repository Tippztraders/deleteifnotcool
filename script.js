// Image Gallery
const gallerySwiper = new Swiper('.gallery-swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Video Gallery
const videoList = ['FGVIDS1.mp4'];
const videoContainer = document.getElementById('videos');
videoList.forEach(src => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `<video src="${src}" controls></video>`;
  videoContainer.appendChild(slide);
});

// Initialize Swipers
new Swiper('.hero-swiper', {
  pagination: { el: '.swiper-pagination' },
  loop: true,
  autoplay: { delay: 4000 },
});

new Swiper('.gallery-swiper', {
  pagination: { el: '.swiper-pagination' },
  spaceBetween: 20,
  loop: true,
});

new Swiper('.video-swiper', {
  pagination: { el: '.swiper-pagination' },
  spaceBetween: 20,
  loop: true,
});
