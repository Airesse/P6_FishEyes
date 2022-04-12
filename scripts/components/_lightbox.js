import {API} from "../api/get.js";
import {oneMedia} from "../models/constructors.js";
import {allDatas} from "../models/factories.js";


let slideIndex = 1;//utile? voir portée variable suffisante dans fonction?



//Display slides from one photographer's medias
export function showSlide(n) {
  
  let slideIndex = 1;
  let mediaSlides = document.querySelectorAll(".slide");

  if (n > mediaSlides.length) {
      slideIndex = 1;
  }

  if (n < 1) {
      slideIndex = mediaSlides.length;
  }

  for (let i = 0; i < mediaSlides.length; i++) {
      mediaSlides[i].style.display = "none";
  }
    
   mediaSlides[slideIndex - 1].style.display = "block";
}



// Next/previous controls (go to one slide to another (=navigartion))

/*function changeSlides(n) {
    showSlides(slideIndex += n);
  }*/

//OR 
export function changeSlide(n) {
  showSlide(slideIndex += parseInt(n));
}
  
// Thumbnail image/video controls
export function currentSlide(n) {
  showSlides(slideIndex = n);
}




  