// Image Gallery
const galleryImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
const gallery = document.getElementById('gallery');
galleryImages.forEach(src => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `<img src="${src}" alt="">`;
  gallery.appendChild(slide);
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
