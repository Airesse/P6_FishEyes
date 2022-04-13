import {API} from "../api/get.js"
import {start} from "../pages/photographer.js"
import {allDatas} from "../models/factories.js";
import {onePhotographer, oneMedia} from "../models/constructors.js"
import {showSlide, changeSlide, currentSlide} from "../components/_lightbox.js"

//DOM ELEMENTS
const modalLightbox = document.querySelector(".modalLightbox")
const lightbox = document.getElementById("lightbox");
const lightboxMediaBox = document.querySelector(".lightbox__media");
const lightboxMediaUnit = document.querySelector("#lightbox__media-figure")

const btnClose = document.querySelector("#lightbox__button-close");
const btnPrevious= document.querySelector(".lightbox__button-previous");
const btnNext = document.querySelector(".lightbox__button-next");

const requestURL = "../js/json/FishEyeDataFR.json";
const pointUrl = new URL(window.location.href);//pointage URL



//FUNCTIONS

export function openLightbox() {
    modalLightbox.style.display= "block";
    body.classList.add("no-scroll");
    console.log("openlightbox ok")
}

export function closeLightbox() {
    modalLightbox.style.display = "none";
    body.classList.remove("no-scroll");
    console.log("closelightbox ok")
}

//EVENTS

export let startLightbox = async(listmedias) => {    
    console.log("startLightbox OK")
    //----recuperate lightbox datas

    let profilpage = new allDatas();
    let lightboxOneMediaHTML = await profilpage.displayProfilpageDataLightbox(id);
;   console.log("lightboxOneMediaHTML=" +lightboxOneMediaHTML)

    //----inject data in page photographer.html
    lightboxMediaUnit.innerHTML += lightboxOneMediaHTML;
    console.log(" lightboxMediaUnitL=" +lightboxMediaUnit)
    
    

    //----lightbox behaviour
    
    //--------open lightbox and fullsize media on click on media
    this.listmedias.forEach(media => {
        media.addEventListener("click", e => {
            e.preventDefault();
            openLightbox(lightboxModal);
            currentSlide(0)
            showSlide(slideIndex);
        });
    });

    
    //-------close lightbox on click on icone close
    btnClose.addEventListener("click", e => {
        e.preventDefault();
        closeLightbox(lightboxModal);
    });

    //-------lightbox navigation by click on previous/next buttons 
    btnPrevious.addEventListener("click", e => {
        e.preventDefault();
        changeSlide(-1);
    });

    btnNext.addEventListener("click", e => {
        e.preventDefault();
        changeSlide(1);
    });    
}