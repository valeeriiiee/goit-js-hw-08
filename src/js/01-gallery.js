import { galleryItems } from './gallery-items.js';
var lightbox = new SimpleLightbox('.gallery-items.js');

// Creating and rendering markup from the galleryItems data array and provided gallery element template. Use the ready-made code from the first task
const gallery = document.querySelector('.gallery');

function createGalleryItem(item) {
  const li = document.createElement('li');
  li.classList.add('gallery__item');

  const a = document.createElement('a');
  a.classList.add('gallery__link');
  a.href = item.original;

  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = item.preview;
  img.setAttribute('data-source', item.original);
  img.alt = item.description;

  a.appendChild(img);
  li.appendChild(a);
  return li;
}

function renderGallery(items) {
  const fragment = document.createDocumentFragment();
  items.forEach(item => {
    const galleryItem = createGalleryItem(item);
    fragment.appendChild(galleryItem);
  });
  gallery.appendChild(fragment);
}

renderGallery(galleryItems);

// Library initialization after gallery items are created and added to ul.gallery
document.addEventListener('DOMContentLoaded', function () {
    const lightbox = new SimpleLightbox('.gallery a', {
      /* Configuration options will go here */
    });
  });  

// Look in the documentation for the Options section and add image caption display from the alt attribute. Let the caption be at the bottom and appear 250 milliseconds after image
document.addEventListener('DOMContentLoaded', function () {
    const lightbox = new SimpleLightbox('.gallery a', {
      captions: true, // Enable captions
      captionDelay: 250 // Delay before displaying captions in milliseconds
    });
  });  

console.log(galleryItems);
