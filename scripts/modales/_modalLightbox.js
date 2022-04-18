import {API} from "../api/get.js"
import {start} from "../pages/photographer.js"
import {allDatas} from "../models/factories.js";
import {onePhotographer, oneMedia} from "../models/constructors.js"
//import {showSlide, changeSlide, currentSlide} from "../components/_lightbox.js"

//DOM ELEMENTS
const modalLightbox = document.querySelector(".modalLightbox")
const lightbox = document.getElementById("lightbox");
let lightboxAllMedias = null;
let slideIndex = 0; 
const lightboxMedias = document.querySelector(".lightbox__media");
const lightboxMediaUnit = document.querySelector("#lightbox__media-figure")

const btnClose = document.querySelector("#lightbox__button-close");
console.log(btnClose);
const btnPrevious= document.querySelector(".lightbox__button-previous");
const btnNext = document.querySelector(".lightbox__button-next");

const requestURL = "../js/json/FishEyeDataFR.json";
const pointUrl = new URL(window.location.href);//pointage URL



//FUNCTIONS

export function openLightbox(e) {
    console.log("openlightbox ok")
    modalLightbox.style.display= "flex";
    document.body.classList.add("no-scroll");
    

    //----media select by click: position in lightbox
    
    //method1: index by indeOf
    let figure = e.target.parentNode.parentNode
    console.log(figure)
    //position=[...figure.parentNode.children].indexOf(figure)
    //console.log("position="+position)

    //method2: index each media
    slideIndex = parseInt(figure.dataset.position);
    console.log(figure.dataset.position);
    

    //----to display in HTML (utile? voir photographer.js)
    lightboxInject(figure.dataset.position);
   
}

export function closeLightbox() {
    modalLightbox.style.display = "none";
    document.body.classList.remove("no-scroll");
   
    console.log("closelightbox ok")
}

export let lightboxInject= (position)=>{
    console.log(lightboxMedias);
    console.log(lightboxAllMedias)
    console.log(position)
    lightboxMedias.innerHTML = lightboxAllMedias[position].innerHTML
    
   
    console.log("lightboxInjectOK")
    
}

// Lightbox EVENTS Listeners

export let startLightbox = () => {    
    console.log("startLightbox OK")
    
    

    //----lightbox behaviour
    
    //--------open lightbox and fullsize media on click on media
    lightboxAllMedias = document.querySelectorAll("article");
    console.log(lightboxAllMedias);
    
    for (let media of lightboxAllMedias) {
        media.addEventListener("click", e => {
            e.preventDefault();
            console.log("click")
            openLightbox(e);
            
            showSlide(slideIndex);
        });
    };

    
    //-------close lightbox on click on button X
    btnClose.addEventListener("click", e => {
        e.preventDefault();
        closeLightbox();
    });

    //-------lightbox navigation by click on previous/next buttons 
    btnPrevious.addEventListener("click", e => {
        e.preventDefault();
        showSlide(-1);
    });

    btnNext.addEventListener("click", e => {
        e.preventDefault();
        showSlide(+1);
    });    
}





//Display slides from one photographer's medias
export function showSlide(n) {

    slideIndex += n;
    console.log(slideIndex)
    console.log(lightboxAllMedias.length);

 if (slideIndex >= lightboxAllMedias.length) {
     //console.log(lightboxAllMedias.length);
      slideIndex = 0;
  }

  if (slideIndex < 0) {
      slideIndex = lightboxAllMedias.length;
  }

  lightboxInject(slideIndex)


 
}








  