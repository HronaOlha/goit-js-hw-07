import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryItem = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryItem);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `
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
    `
    )
    .join("");
}

gallery.addEventListener("click", handleGetOriginalImg);

function handleGetOriginalImg(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const originaSizeImg = basicLightbox.create(`
    <img
      src='${e.target.dataset.source}'
    />`);
  originaSizeImg.show();

  gallery.addEventListener("keydown", (event) => {
    if (event.key === "Escape") originaSizeImg.close();
  });
}
