const imageUrls = [
  "https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg",
  "https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480",
  "https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg",
  "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/06/Batman-Slapping-Robin-Meme.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5",
  "https://img.buzzfeed.com/buzzfeed-static/static/2019-01/23/13/asset/buzzfeed-prod-web-06/sub-buzz-31148-1548266852-1.jpg",
  "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg",
];
const imageUrlInput = document.querySelector("input");
const addImageButton = document.querySelector("button");
const gallery = document.querySelector("main");

addImageButton.addEventListener("click", function () {
  if (imageUrlInput.value !== "") {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = "";
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = "";
  for (let i = 0; i < imageUrls.length; i++) {
    const imageElement = document.createElement("img");
    imageElement.className = "gallery-image";
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
