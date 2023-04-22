import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

///////////////Create a markup HTML//////////////
const galleryEl = document.querySelector(".gallery");

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

//////////////////Delegation and reference acquisition/////////////////
galleryEl.addEventListener("click", onClickGallery);
function onClickGallery(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src ="${event.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  galleryEl.addEventListener("keydown", removeEvent);
  function removeEvent(event) {
    if (event.code === "Escape") instance.close();
    document.removeEventListener("keydown", (event) =>
      removeEvent(event, instance)
     );
  };
};


////////Number 2--------
///////////////Create a markup HTML//////////////
// const galleryEl = document.querySelector(".gallery");

// const makeGaleryEl = ({ preview, original, description }) => {
//   return `<li class="gallery__item">
//    <a class="gallery__link" href="${original}">
//      <img
//        class="gallery__image"
//        src="${preview}"
//        data-source="${original}"
//        alt="${description}"
//      />
//    </a>
//  </li>`;
// };

// const addingTagsGalery = galleryItems.map(makeGaleryEl).join("");
// galleryEl.insertAdjacentHTML("afterbegin", addingTagsGalery);
// //Or// galleryEl.innerHTML = galleryItems.map(makeGaleryEl).join("");

// //////////////////Delegation and reference acquisition/////////////////
// // const instances = [];
// galleryEl.addEventListener("click", onClickGallery);

// function onClickGallery(event) {
//   event.preventDefault();

//   const originalImage = event.target
//     .closest(".gallery__link")
//     .getAttribute("href");
//     const instance = basicLightbox.create(`
//       <img src ="${originalImage}" width="800" height="600">
//   `);
//   const instance = basicLightbox.create(
//     `<img src ="${event.target.dataset.source}" width="800" height="600">`
//   );
//   // instances.push(instance);
//   instance.show();

//   galleryEl.addEventListener("keydown", (event) => {
//     if (event.code === "Escape")
//       instance.close();
//   });
// };





////////Number 3---------

//  import { galleryItems } from "./gallery-items.js";

// const galleryList = document.querySelector(".gallery");

// // Create and render gallery items
// const createGalleryItem = ({ preview, original, description }) => `
//   <li class="gallery__item">
//     <a class="gallery__link" href="${original}" data-original-img=${original}>
//       <img class="gallery__image" src="${preview}" alt="${description}" />
//     </a>
//   </li>
// `;

// galleryList.innerHTML = galleryItems.map(createGalleryItem).join("");

// // Store instances in an array
// const instances = [];

// // Show corresponding instance when image is clicked
// galleryList.addEventListener("click", (event) => {
//   event.preventDefault();
//   const original = event.target
//     .closest(".gallery__link")
//     .getAttribute("data-original-img");
//   const instance = basicLightbox.create(`
//     <img src="${original}" width="800" height="600">
//   `);
//   instances.push(instance); // Add instance to array
//   instance.show();
//   document.addEventListener("keydown", (event) => onEscPress(event, instance));
// });

// // Close instance on Esc key press
// const onEscPress = (event, instance) => {
//   const ESC_KEYCODE = "Escape";
//   if (event.code === ESC_KEYCODE) {
//     instance.close();
//     instances.splice(instances.indexOf(instance), 1); // Remove instance from array
//     document.removeEventListener("keydown", (event) =>
//       onEscPress(event, instance)
//     );
//   }
// };
