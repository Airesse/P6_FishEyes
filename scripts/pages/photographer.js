////// PROFIL PAGE
  
import {API} from "../api/get.js";
//import {homepagePhotographerCard, profilpagePhotographerCard, profilpageMediaPhotoCard,profilpageMediaVideoCard, profilpageMediaCard} from "../models/templatesHTML.js";
import {onePhotographer, oneMedia} from "../models/constructors.js"
import {allDatas} from "../models/factories.js";
import { closeModalContact, openModalContact, openModalContactForm, startForm,} from "../modales/_modalContact.js";
import { formDataValidation, showTextError, hideTextError } from "../components/_contactForm.js";
import { startLightbox } from "../modales/_modalLightbox.js";
import {displayProfilpageWidget,widget,sortByTitle,sortByPopularity,sortByDate } from "../components/_widget.js"
//import {init} from "./index.js"


//DOM elements

const photographerSectionHeader = document.querySelector('.photographerCard') //profilpage


//Functions
//----Asynchrone initialisation (wait to get all datas before displays them)
export let start = async() => {
    //console.log ("start ok");
    
    const url = new URL(window.location.href); // pointage url
    let id = url.searchParams.get("id"); // productId = url + id

    let profilpage = new allDatas();
    let profilpageHtml = await profilpage.displayProfilpageDataPhotographer(id)
    //console.log(profilpageHtml)
    photographerSectionHeader.innerHTML = profilpageHtml;

     //----recuperate lightbox datas
    let lightboxAllMediasHTML = await profilpage.displayProfilpageAllDatasLightbox(id);
    console.log("lightboxAllMediasHTML=" +lightboxAllMediasHTML);
    let lightboxOneMediaHTML = await profilpage.displayProfilpageDataLightbox(id)
    console.log("lightboxOneMediaHTML="+lightboxOneMediaHTML)




    console.info('DOM loaded');

    
    // ----FORM OPENNING
    let photographerCardBtnContact = document.querySelector("#contact_button");
    //console.log(photographerCardBtnContact)
    photographerCardBtnContact.addEventListener("click", () => {
      //console.log("clic");
      openModalContact();
      openModalContactForm();
      startForm();
    });


    //----WIDGET filter
    let widgetFilterBtn = document.querySelector("#widget-filter");//button
    
    widgetFilterBtn.addEventListener("click", () => {
      console.log("widgetstart ok")
      displayProfilpageWidget();
    });

  //----LIGHTBOX OPENNING

    const modalLightbox = document.querySelector(".modalLightbox")
    console.log("modalLightbox="+modalLightbox)
    //const lightbox = document.getElementById("lightbox");
    const lightboxMediaCard = document.querySelector(".lightbox__media");
    console.log("lightboxMediaCard"+lightboxMediaCard)
    const lightboxAllMedias = document.querySelectorAll(".lightbox__media");
    console.log("lightboxAllMedias="+lightboxAllMedias)


    //----inject datas in page photographer.html

    lightboxMediaCard.innerHTML += lightboxOneMediaHTML;
    console.log("lightboxMediaCard="+lightboxMediaCard)
    let lightboxMediaUnit = document.querySelector("#lightbox__media-figure")
    console.log("lightboxMediaUnit="+lightboxMediaUnit)

    
    
    //----lightbox behaviour
    //--------open lightbox and fullsize media on click on media
    
    startLightbox()

    /*for (let media of lightboxAllMedias) {
        media.addEventListener("click", e => {
            e.preventDefault();
            
            openLightbox();
            currentSlide(0)
            showSlide(slideIndex);
        });
    };*/

    /*lightboxMediaUnit.addEventListener("click", e => {
      console.log("click lightbox ok")
      e.preventDefault();
      startLightbox()
      openLightbox();
      currentSlide(0)
      showSlide(slideIndex);
    });*/


    }



//Event : display page if DOM load finised
if(document.readyState === 'loading' ) { //loading hasn't finished yet
  document.addEventListener("DOMContentLoad", start);
  
  //document.addEventListener("DOMContentLoad", startLightbox);
}else{ // 'DOMContentLoad' has already fired
  start();
  
  //startLightbox();
};
  

//OR document.addEventListener("DOMContentLoad", start);





