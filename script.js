// IMAGE GALLERY
const totalImages = 14;
const galleryWrapper = document.getElementById('gallery');
const fullscreenWrapper = document.getElementById('fullscreenGalleryWrapper');

function createSlide(imgName) {
  const slide = document.createElement('div');
  slide.classList.add('swiper-slide');
  const img = document.createElement('img');
  img.src = imgName;
  img.alt = imgName;
  slide.appendChild(img);
  return slide;
}

// Populate gallery swiper with slides
for (let i = 1; i <= totalImages; i++) {
  const imgName = `FG${i}.jpg`;
  const slide = createSlide(imgName);
  galleryWrapper.appendChild(slide);
}

// Populate fullscreen swiper with slides
for (let i = 1; i <= totalImages; i++) {
  const imgName = `FG${i}.jpg`;
  const slide = createSlide(imgName);
  fullscreenWrapper.appendChild(slide);
}

// Initialize gallery swiper
const gallerySwiper = new Swiper('.gallery-swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Open fullscreen gallery on click
galleryWrapper.querySelectorAll('img').forEach((img, idx) => {
  img.addEventListener('click', () => {
    openGallery(idx);
  });
});

let fullscreenSwiper;

function openGallery(startIndex) {
  document.getElementById('fullscreenGallery').style.display = 'flex';
  
  fullscreenSwiper = new Swiper('.gallery-swiper-fullscreen', {
    initialSlide: startIndex,
    loop: false,
    pagination: {
      el: '.fullscreen-gallery .swiper-pagination',
      clickable: true,
    },
    on: {
      slideChange: function () {
        if (this.isEnd && this.touches.diff < 0) {
          closeGallery();
        }
      }
    }
  });
}

function closeGallery() {
  if (fullscreenSwiper) {
    fullscreenSwiper.destroy(true, true);
    fullscreenSwiper = null;
  }
  document.getElementById('fullscreenGallery').style.display = 'none';
}

// Video Gallery 
const videoList = ['FGVIDS1.mp4', 'FGVIDS1.mp4'];
const videoContainer = document.getElementById('videos');
videoList.forEach(src => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `<video src="${src}" controls></video>`;
  videoContainer.appendChild(slide);
});

// Initialize Hero Swiper 
  pagination: { el: '.swiper-pagination' },
  loop: true,
  autoplay: { delay: 4000 },
});

// Initialize Video Swiper 
new Swiper('.video-swiper', {
  pagination: { el: '.swiper-pagination' },
  spaceBetween: 20,
  loop: true,
});
