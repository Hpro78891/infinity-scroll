const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
let photosArray = [];

// Helper function to set Attributes on Dom Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements for links & photos , Add to DOM

function displayPhotos() {
  // Run function for each Object in Photos Array
  photosArray.forEach((photo) => {
    const item = document.createElement("a");

    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });

    // create <img> for Photo
    const img = document.createElement("img");

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    // put img inside <a>, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// get photos from Unsplash Api
const counts = 10;
const apiKey = "TGbZzExM_aIexLXRwSb2iQr62htfPq8Go0KhejLxi1s";

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${counts}`;

// get photos from unSplash Api

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // catch Error here
  }
}
// check to see if scorolling near bottom of page, load more photos.
window.addEventListener("scroll", () => {
  console.log("scrolled times");
});
// on load
getPhotos();
