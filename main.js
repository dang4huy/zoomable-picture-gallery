const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const pageItemPrevious = document.querySelector('.page-item-previous');
const pageItemNext = document.querySelector('.page-item-next');
let index = 0;

const images = ["images/pexels1.jpg", "images/pexels2.jpg", "images/pexels3.jpg", "images/pexels4.jpg"];

initImageZoom();

images.forEach(initThumbnail);

function initThumbnail(e, i) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', e);
    newImage.setAttribute('class', 'col-3 img-thumbnail');
    thumbBar.appendChild(newImage);
    handleThumbnailClickEvent(newImage, i);
}

function handleThumbnailClickEvent(image, selectedIndex) {
    image.onclick = function (e) {
        index = selectedIndex;
        displayedImage.src = images[index];
        initImageZoom();
    }
}

function initImageZoom() {
    var options = {
        width: 700, // required
        zoomPosition: 'original'
    };
    new ImageZoom(document.getElementById("img-container"), options);
}

window.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        goPrevious();
    } else if (event.keyCode == 39) {
        goNext();
    }
});

pageItemNext.onclick = function() {
    goNext();
}

pageItemPrevious.onclick = function () {
    goPrevious();
}

function goPrevious() {
    index = index > 0 ? index - 1 : images.length - 1;
    displayedImage.setAttribute('src', images[index]);
}

function goNext() {
    index = index < images.length - 1 ? index + 1 : 0;
    displayedImage.setAttribute('src', images[index]);
}
