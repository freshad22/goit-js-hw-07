import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const imagesGallery = document.querySelector(".gallery");
const galleryMarkup = createGallary(galleryItems);
imagesGallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createGallary(items) {
    return items.map(({ preview, original, description}) => {
        return `
        
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>

        `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });

