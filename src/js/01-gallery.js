import { galleryItems } from './gallery-items.js';

// Creating and rendering markup from the galleryItems data array and provided gallery item template.
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

// Implementing delegation to ul.gallery and getting the URL of a large image
gallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.tagName === 'IMG') {
    const largeImageUrl = e.target.dataset.source;
    // Call function to open modal window with the large image
    openModal(largeImageUrl);
  }
});

// Opening a modal window by clicking on a gallery item
function openModal(imageUrl) {
  const instance = basicLightbox.create(`
    <img src="${imageUrl}" width="800" height="600">
`).show();
}

// Replacing the value of the src attribute of the <img> element in a modal window before opening
galleryList.addEventListener('click', e => {
  e.preventDefault();
  const link = e.target.closest('.gallery__link');
  if (!link) return;

  const largeImageURL = link.getAttribute('href');

  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" width="800" height="600">
  `);

  instance.show();
});

// Closing from keyboard
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    basicLightbox.close();
  }
});

console.log(galleryItems);
