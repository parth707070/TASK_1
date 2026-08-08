    // const lightboxContainer= document.querySelector('#litbox');
// const galleryIamges= document.querySelectorAll('.gallery-container img');
// const lightimage = document.querySelector('#litbox img')

// galleryIamges.forEach(function(image){
//     image.addEventListener('click', function() {
//         const clickedImageSrc =image.getAttribute('src')
//         lightimage.setAttribute('src', clickedImageSrc);
//         lightboxContainer.style.display = 'flex';
//     });
// });

// const closeButton = document.querySelector('.close-btn')
// closeButton.addEventListener('click',function(){
//     lightboxContainer.style.display='none';
// })


const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
galleryImages.forEach(function (image) {
    image.addEventListener("click", function () {

        lightbox.style.display = 'flex';
        lightboxImage.src = image.src;

    });

});

const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
});

let currentIndex = 0;
galleryImages.forEach(function (image, index) {

    image.addEventListener("click", function () {

        currentIndex = index;

        // Your existing code
        lightbox.style.display = "flex";
        lightboxImage.src = image.src;

    });

});

const nextBtn = document.querySelector("#next");
nextBtn.addEventListener("click", function () {

    if (currentIndex < galleryImages.length - 1) {

        currentIndex++;

    }
    else {
        currentIndex = 0;
    }

    lightboxImage.src = galleryImages[currentIndex].src;
});


const prevBtn = document.querySelector("#prev");

prevBtn.addEventListener("click", function () {

    // Check if the current image is NOT the first image
    if (currentIndex > 0) {

        // Move to the previous image
        currentIndex--;

    } else {

        // If it's the first image, go to the last image
        currentIndex = galleryImages.length - 1;
    }

    // Update the lightbox image
    lightboxImage.src = galleryImages[currentIndex].src;
});