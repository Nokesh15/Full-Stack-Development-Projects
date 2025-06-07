const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const overlay = document.querySelector('.overlay');
const toggleBtn = document.querySelector('.toggle-btn');
const leftBtn = document.querySelector('.nav.left');
const rightBtn = document.querySelector('.nav.right');

const imageList = [
  { src: 'images/pic1.jpg', alt: 'Closeup of a blue human eye' },
  { src: 'images/pic2.jpg', alt: 'Rock that looks like a wave' },
  { src: 'images/pic3.jpg', alt: 'Purple and white pansies' },
  { src: 'images/pic4.jpg', alt: 'Section of wall from a pharaoh\'s tomb' },
  { src: 'images/pic5.jpg', alt: 'Large moth on a leaf' }
];

let currentIndex = 0;

// Function to update displayed image
function updateImage(index) {
  displayedImage.src = imageList[index].src;
  displayedImage.alt = imageList[index].alt;
  currentIndex = index;
  updateNavButtons();
}

// Function to show/hide arrows
function updateNavButtons() {
  leftBtn.style.display = currentIndex === 0 ? 'none' : 'block';
  rightBtn.style.display = currentIndex === imageList.length - 1 ? 'none' : 'block';
}

// Generate thumbnails
imageList.forEach((image, index) => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', image.src);
  newImage.setAttribute('alt', image.alt);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', () => updateImage(index));
});

// Darken/Lighten functionality
toggleBtn.addEventListener('click', () => {
  const isDark = toggleBtn.classList.contains('dark');
  toggleBtn.classList.toggle('dark');
  toggleBtn.classList.toggle('light');
  toggleBtn.textContent = isDark ? 'Lighten' : 'Darken';
  overlay.style.backgroundColor = isDark ? 'rgba(0, 0, 0, 0.5)' : 'transparent';
});

// Navigation buttons
leftBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    updateImage(currentIndex - 1);
  }
});

rightBtn.addEventListener('click', () => {
  if (currentIndex < imageList.length - 1) {
    updateImage(currentIndex + 1);
  }
});

// Initial setup
updateImage(currentIndex);
