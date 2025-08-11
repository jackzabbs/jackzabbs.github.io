const images = [
  'images/photo1.jpg',
  'images/photo2.jpg',
  'images/photo3.jpg'
];

let current = 0;
const imgEl = document.getElementById('carousel-image');

document.querySelector('.left').onclick = () => {
  current = (current - 1 + images.length) % images.length;
  imgEl.src = images[current];
};

document.querySelector('.right').onclick = () => {
  current = (current + 1) % images.length;
  imgEl.src = images[current];
};
