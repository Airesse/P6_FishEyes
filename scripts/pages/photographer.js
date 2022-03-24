////// PROFIL PAGE
  
import {API} from "../api/get.js";
//import {homepagePhotographerCard, profilpagePhotographerCard, profilpageMediaPhotoCard,profilpageMediaVideoCard, profilpageMediaCard} from "../models/templatesHTML.js";
import {onePhotographer, oneMedia} from "../models/constructors.js"
import {allDatas} from "../models/factories.js";
import { closeModalContact, openModalContact, openModalContactForm,} from "../modales/_modalContact.js";
import { formDataValidation, showTextError, hideTextError } from "../components/_contactForm.js";
//import {init} from "./index.js"


//DOM elements

const photographerSectionHeader = document.querySelector('.photographerCard') //profilpage


//Functions
//----Asynchrone initialisation (wait to get all datas before displays them)
let start = async() => {
    //console.log ("start ok");

    //let api = new API;
    //let datasAllPhotographers = await api.getDataAllPhotographers();
    //console.log (dataAllPhotographers);
    

    const url = new URL(window.location.href); // pointage url
    let id = url.searchParams.get("id"); // productId = url + id


    let profilpage = new allDatas();
    let profilpageHtml = await profilpage.displayProfilpageDataPhotographer(id)
    console.log(profilpageHtml)
    photographerSectionHeader.innerHTML = profilpageHtml;
    console.info('DOM loaded');

}



//Event : display page if DOM load finised
if(document.readyState === 'loading' ) { //loading hasn't finished yet
  document.addEventListener("DOMContentLoad", start);
}else{ // 'DOMContentLoad' has already fired
  start();
};
  

//OR document.addEventListener("DOMContentLoad", start);


//CONTACT FORM : actions to be taken when submitting the form




//DOM element
const modalForm = document.querySelector(".modalContact-box");

// Form validity event
modalForm.addEventListener("submit", e => {
  console.log("go ok")
  e.preventDefault();//stop form refresh by navigator

  if (formDataValidation()) {
    console.log("formData validation true")
    openModal(); 
    //openModalCongrats();
      
  } else{
    console.log("formData validation false")
    return false;
  }
  return false
});
  



