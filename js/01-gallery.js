import { galleryItems } from './gallery-items.js';


const imagesGallery = document.querySelector(".gallery");
const galleryMarkup = createGallary(galleryItems);
imagesGallery.insertAdjacentHTML("beforeend", galleryMarkup);
imagesGallery.addEventListener("click", openModal);

function createGallary(items) {
    return items.map(({ preview, original, description}) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `;
    })
    .join("");
}


function openModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }


const link = event.target.dataset.source; 
const instance = basicLightbox.create(`<img src='${link}' width="800" height="600">`);

instance.show();


imagesGallery.addEventListener(
    `keydown`, (event) => {
        if (event.code === `Espace`) {
            instance.close();
        }
    }, 
    {once: true}
);

}