////// PROFIL PAGE
  
import {API} from "../api/get.js";

import {onePhotographer, oneMedia} from "../models/constructors.js"
import {allDatas} from "../models/factories.js";
import { closeModalContact, openModalContact, openModalContactForm, startForm,} from "../modales/_modalContact.js";
import { formDataValidation, showTextError, hideTextError } from "../components/_contactForm.js";
import { startLightbox, closeLightbox } from "../modales/_modalLightbox.js";
import {displayProfilpageWidget,widgetExpand, selectedChoiceHidden } from "../components/_widget.js"
//import {init} from "./index.js"


//DOM elements

const photographerSectionHeader = document.querySelector('.photographerCard') //profilpage


//Functions
//----Asynchrone initialisation (wait to get all datas before displays them)
export let start = async() => {
    //console.log ("start ok");
    
    //----loading profilpage Datas and inject them in page html
    const url = new URL(window.location.href); // pointage url
    let id = url.searchParams.get("id"); // productId = url + id
    let profilpage = new allDatas();
    let profilpageHtml = await profilpage.displayProfilpageDataPhotographer(id)
    //console.log(profilpageHtml)
    photographerSectionHeader.innerHTML = profilpageHtml;
    console.info('DOM loaded');


    //----increment likes on click
    let heartIcone = document.querySelectorAll(".fa-heart");
    //console.log(heartIcone);
    let numberLikes = document.querySelectorAll(".mediaCard__numberLikes")
    //console.log(numberLikes); 
    const totalLikes = document.querySelector(".totalLikes");
    

    const LikeIncrementation = (element) => {
      const numberLikes = element.previousSibling.previousSibling; //h3
      const toggle = numberLikes.classList.toggle("heartIcone");

      //console.log(numberLikes);
      console.log(totalLikes);
      
      if (toggle) {
        let number = parseInt(numberLikes.innerHTML)+1;
        numberLikes.innerHTML = number ;
        let total = parseInt(totalLikes.innerHTML)+1;
        totalLikes.innerHTML = total ;
        
        element.style.color = "#db8876";
        
      } else {
        let number = parseInt(numberLikes.innerHTML)-1;
        numberLikes.innerHTML = number ;
        let total = parseInt(totalLikes.innerHTML)-1;
        totalLikes.innerHTML = total;
        
        element.style.color = "#901c1c";
        
      }
    };
    
    heartIcone.forEach((element) => {
      element.addEventListener("click", () => {
        LikeIncrementation(element);
      });
    });
  
    heartIcone.forEach((element) => {
      element.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          LikeIncrementation(element);
        }
      });
    });
    
    



    
    // ----open FORM after click
    let photographerCardBtnContact = document.querySelector("#contact_button");
    //console.log(photographerCardBtnContact)
    photographerCardBtnContact.addEventListener("click", () => {
      //console.log("clic");
      openModalContact();
      openModalContactForm();
      startForm();
    });


    //----open WIDGET filter after click with option selected "popularity"
    let widgetFilterBtn = document.querySelector("#widget-filter");//button
    let selected = document.querySelector("#optionSelected");//p
    let popularity = document.getElementById("widget-popularity");//li
    
    selected.innerHTML = popularity.innerHTML
    
    widgetFilterBtn.addEventListener("click", () => {
      console.log("widgetstart ok")
      displayProfilpageWidget();
    });

    //----LIGHTBOX preload
    startLightbox()
    closeLightbox()// lightbox ne s'affiche pas au chargement de la page (à ameliorer)
  

  
  }



//Event : display page if DOM load finised
if(document.readyState === 'loading' ) { //loading hasn't finished yet
  document.addEventListener("DOMContentLoad", start);
}else{ // 'DOMContentLoad' has already fired
  start(); 
};
  

//OR document.addEventListener("DOMContentLoad", start);





