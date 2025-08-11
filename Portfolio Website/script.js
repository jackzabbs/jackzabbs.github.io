const images = [
  'Bedroom 1 Shelf removed.jpg',
  'draft-2.jpg',
  'Passage 8-20.jpg',
  'White Noise Scarf-06.jpg',
  'White Noise Scarf-05.jpg',
  'Tukki-19.jpg',
  'Tukki-18.jpg',
  'Tukki-4.jpg',
  'Tree Hang - Grain.jpg',
  'Sonnie Ghost Control Photos.jpg',
  'Sonnie Ghost Control Photos-2.jpg',
  'Passage 8-13.jpg',
  'Passage 8-8.jpg',
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
