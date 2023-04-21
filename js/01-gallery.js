import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

import * as basicLightbox from "basiclightbox";

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

instance.show();

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

const makeGaleryEl = ({ preview, original, description }) => {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
   </a>
 </li>`;
};

const addingTagsGalery = galleryItems.map(makeGaleryEl).join("");
galleryEl.insertAdjacentHTML("afterbegin", addingTagsGalery);

galleryEl.addEventListener("click", onClickGallery);

const onClickGallery = (event) => {

};




