import {API} from "../api/get.js"
import {showSlide, changeSlide, currentSlide} from "../components/_lightbox.js"

//DOM ELEMENTS
const modalLightbox = document.querySelector(".modallightbox")
const lightbox = document.getElementById("lightbox");
const lightboxMediaBox = document.querySelector(".lightbox__media");
const lightboxMediaUnit = document.querySelector("#lightbox__media_figure")

const btnClose = document.querySelector(".lightbox__button-close");
const btnPrevious= document.querySelector(".lightbox__button-previous");
const btnNext = document.querySelector(".lightbox__button-next");

const requestURL = "../js/json/FishEyeDataFR.json";
const pointUrl = new URL(window.location.href);//pointage URL



//FUNCTIONS

export function openLightbox() {
    modalLightbox.style.display= "block";
    body.classList.add("no-scroll");
}

export function closeLightbox() {
    modalLightbox.style.display = "none";
    body.classList.remove("no-scroll");
}

//EVENTS

export let startLightbox = async(listmedias) => {    
    
    //----recuperate lightbox datas
    const url = new URL(window.location.href); // pointage url
    let id = url.searchParams.get("id"); // productId = url + id
    let profilpage = new allDatas();
    let lightboxHtml = await profilpage.displayProfilpageDataLightbox(id)
    console.log(lightboxHtml);

    //----inject datas in page photographer.html
    lightboxMediaUnit.innerHTML += lightboxHtml;

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

    
    //-------close lightbox on click on button close
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