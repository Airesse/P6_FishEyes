////// PROFIL PAGE
  
import {API} from "../api/get.js";
//import {homepagePhotographerCard, profilpagePhotographerCard, profilpageMediaPhotoCard,profilpageMediaVideoCard, profilpageMediaCard} from "../models/templatesHTML.js";
import {onePhotographer, oneMedia} from "../models/constructors.js"
import {allDatas} from "../models/factories.js";
import { closeModalContact, openModalContact, openModalContactForm, startForm,} from "../modales/_modalContact.js";
import { formDataValidation, showTextError, hideTextError } from "../components/_contactForm.js";
import { startLightbox } from "../modales/_modalLightbox.js";
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
    console.info('DOM loaded');

    
    // ----FORM OPENNING
    let photographerCardBtnContact = document.querySelector("#contact_button");
    console.log(photographerCardBtnContact)
    photographerCardBtnContact.addEventListener("click", () => {
      console.log("clic");
      openModalContact();
      openModalContactForm();
      startForm();
    });

  //----LIGHTBOX OPENNING
    

}



//Event : display page if DOM load finised
if(document.readyState === 'loading' ) { //loading hasn't finished yet
  document.addEventListener("DOMContentLoad", start);
  //document.addEventListener("DOMContentLoad", startForm);
  document.addEventListener("DOMContentLoad", startLightbox);
}else{ // 'DOMContentLoad' has already fired
  start();
  //startForm();
  startLightbox();
};
  

//OR document.addEventListener("DOMContentLoad", start);


//CONTACT FORM : actions to be taken when submitting the form




//DOM element
//const modalForm = document.querySelector(".modalContact-box");

// Form validity event




