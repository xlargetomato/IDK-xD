"use strict";
let galleryxd = document.querySelector(".gallery");
let back = document.querySelector("#NEXT");
let next = document.querySelector("#BACK");
let img = document.querySelectorAll(".gallery div");
let imgindex = img.length;
let currentslide = 1;
console.log(imgindex);

galleryxd.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  galleryxd.scrollLeft += evt.deltaY;
});

back.addEventListener("click", function (sus) {
  galleryxd.scrollLeft += 1000;
});
next.addEventListener("click", function (sus) {
  galleryxd.scrollLeft -= 1000;
}); //# sourceMappingURL=template.js.map
