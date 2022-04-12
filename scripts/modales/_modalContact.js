import {API} from "../api/get.js"
import {formDataValidation} from "../components/_contactForm.js"
import {start} from "../pages/photographer.js"
import {allDatas} from "../models/factories.js";
import {onePhotographer, oneMedia} from "../models/constructors.js"

//const photographerSectionHeader = document.querySelector('.photographerCard') //profilpage
const formPhotographerName = document.querySelector("#modalContact-name")

export let startForm = async() => {

    console.log ("startForm ok");
    try{

      
      //-----research by id
      
        const pointUrl = new URL(window.location.href); // pointage url
        let photographerId = pointUrl.searchParams.get("id"); // productId = url + id
      
        const newapi = new API()
        let photographer= await newapi.getDataOnePhotographer(photographerId);

        console.log(photographer)
        console.log(formPhotographerName)
        formPhotographerName.innerHTML = photographer.name
        //console.log(photographerCard__name)
    }
    catch(err){
        console.log("error=" +err)
      }
};


document.addEventListener("DOMContentLoad", startForm);

  







////////MODAL EVENTS : Open/Close on click

//DOM elements 
let bodyScroll = document.querySelector(".bodyScroll"); // body element
let widget = document.querySelector("#widget-aside");
let modalContactContainer = document.querySelector("#modalContact"); //windows with form
let modalContactForm = document.querySelector(".modalContact-box"); //form elementv+ header
let modalCongrats = document.querySelector(".congrats"); // congrats element

let photographerCardBtnContact = document.querySelector("#contact_button");//button "Contact me" on card photographer
console.log ("contactbutton =" +photographerCardBtnContact)
let modalCloseX = document.querySelector(".close");//"icone" X on form and lightbox
let modalBtnGo = document.querySelector("#submit-form_button");//button "Envoyer" on form 
let CongratsBtnClose = document.querySelector("#close-congrats_button");//button "Close" on Congrats



//Functions
export function openModalContact(){
    
    widget.style.opacity = "0.8";
    modalContactContainer.style.display = "block";
    modalContactContainer.focus();
    console.log("openModal OK");
};

export function closeModalContact(){
    modalContactContainer.style.display = "none";
    modalContactForm.style.display = "";
    widget.style.opacity = "1";
    
    bodyScroll.style.overflow = "scroll"
    console.log("closeModal OK");
};

export function openModalContactForm(){
    bodyScroll.style.overflow = "hidden"
    modalContactForm.style.display = "flex";
    
    //modalContactForm.reset(); //clear all previous form data and error or other method
    console.log("openModalForm OK");
};

export function openModalCongrats(){
    modalContactForm.style.display = "none";
    modalCongrats.style.display = "flex";
    console.log ("openModalCongrats OK");
};







//Events on click
 
//----Modal"Contact" with form

    //----------CONTACT modal : open/close
    //let modalCloseX = this.modal.querySelector(".close")
    //let modalContactForm = this.modal.querySelector(".modalContact-box");
    
    /*photographerCardBtnContact.addEventListener("click", () => {
      console.log("clic");
      openModalContact();
      openModalContactForm();
    });*/
    modalCloseX.addEventListener("click", closeModalContact);   
    //modalContactForm.addEventListener ("submit", submitForm)


    //----------CONTACT FORM : actions to be taken when submitting the form
    modalContactForm.addEventListener("submit", e => {
        console.log("go ok")
        e.preventDefault();//stop form refresh by navigator
      
        if (formDataValidation()) {
          console.log("formData validation true")
          openModalContact(); 
          openModalCongrats();
            
        } else{
          console.log("formData validation false")
          return false;
        }
        return false
      }
    ) 
  
  
  //----Modal with Congrats
  
  modalBtnGo.addEventListener("click", openModalContact, openModalCongrats);
  CongratsBtnClose.addEventListener("click", closeModalContact);
      
  
