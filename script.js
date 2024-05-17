const newList_Slides = document.querySelectorAll(".slide");
let pos_center = 3;


newList_Slides.forEach(slide => {

    if (slide.classList.contains("img_left")) {
        slide.addEventListener('click', leftMove)
    }

    if (slide.classList.contains("img_right")) {
        slide.addEventListener('click',  rightMove)
    }

})

function rightMove () {
    const newList_Slides = document.querySelectorAll(".slide");
    const container = document.querySelector('.container_sliders');

    newList_Slides[pos_center - 2].classList.remove("img_leftmost");
    newList_Slides[pos_center - 2].classList.add("hidden");

    newList_Slides[pos_center - 1].removeEventListener('click', leftMove);
    newList_Slides[pos_center - 1].classList.remove("img_left");
    newList_Slides[pos_center - 1].classList.add("img_leftmost");

    newList_Slides[pos_center].addEventListener('click', leftMove);
    newList_Slides[pos_center].classList.remove("img_center");
    newList_Slides[pos_center].classList.add("img_left");

    newList_Slides[pos_center + 1].removeEventListener('click', rightMove)
    newList_Slides[pos_center + 1].classList.remove("img_right");
    newList_Slides[pos_center + 1].classList.add("img_center");

    newList_Slides[pos_center + 2].addEventListener('click', rightMove)
    newList_Slides[pos_center + 2].classList.remove("img_rightmost");
    newList_Slides[pos_center + 2].classList.add("img_right");

    newList_Slides[pos_center + 3].classList.add("img_rightmost");
    newList_Slides[pos_center + 3].classList.remove("hidden");

    if (pos_center + 3 == newList_Slides.length - 1) {
        container.appendChild(creatSlide());
    }

    pos_center++;
}

function leftMove () {
    const newList_Slides = document.querySelectorAll(".slide");
    const container = document.querySelector('.container_sliders');

    newList_Slides[pos_center - 3].classList.add("img_leftmost");
    newList_Slides[pos_center - 3].classList.remove("hidden");

    newList_Slides[pos_center - 2].addEventListener('click', leftMove);
    newList_Slides[pos_center - 2].classList.add("img_left");
    newList_Slides[pos_center - 2].classList.remove("img_leftmost");

    newList_Slides[pos_center - 1].removeEventListener('click', leftMove);
    newList_Slides[pos_center - 1].classList.add("img_center");
    newList_Slides[pos_center - 1].classList.remove("img_left");

    newList_Slides[pos_center].addEventListener('click', rightMove);
    newList_Slides[pos_center].classList.remove("img_center");
    newList_Slides[pos_center].classList.add("img_right");

    newList_Slides[pos_center + 1].removeEventListener('click', rightMove);
    newList_Slides[pos_center + 1].classList.remove("img_right");
    newList_Slides[pos_center + 1].classList.add("img_rightmost");

    newList_Slides[pos_center + 2].classList.remove("img_rightmost");
    newList_Slides[pos_center + 2].classList.add("hidden");

    if (pos_center - 3 == 0) {
        container.insertBefore(creatSlide(), container.firstChild);
    } else {
        pos_center--;
    }
}

function creatSlide () {
    const img_options = ["beach", "fruits", "animals", "fish", "rain", "food", "landscape"];
    const typeImg = img_options[Math.floor(Math.random() * img_options.length)];
    const randomParam = Math.floor(Math.random() * 1000000); 
    
    const newDiv = document.createElement('div');
    newDiv.classList.add('slide', 'hidden');

    const newImg = document.createElement('img');
    newImg.src  = 'https://source.unsplash.com/random/500x500/?' + typeImg + '&unique=' + randomParam;
    newImg.alt = typeImg + 'Image';

    newDiv.appendChild(newImg);
    return newDiv;
}


 
