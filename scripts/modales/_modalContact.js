////////MODAL EVENTS : Open/Close on click

//DOM elements 
//let bodyScroll = document.querySelector(".bodyScroll"); // body element
let modalContactContainer = document.querySelector("#modalContact"); //windows with form
let modalContactForm = document.querySelector(".modalContact-box"); //form elementv+ header
//let modalCongrats = document.querySelector(".congrats"); // congrats element

let photographerCardBtnContact = document.querySelector(".contact_button");//button "Contact me" on card photographer
let modalCloseX = document.querySelector(".close");//"icone" X on form and lightbox
let modalBtnGo = document.querySelector("#submit-form_button");//button "Envoyer" on form 
//let modalBtnClose = document.querySelector(".congratsBtnClose");//button "Close" on Congrats



//Functions
export function openModalContact(){
    modalContactContainer.style.display = "block";
    console.log("openModal OK");
};

export function closeModalContact(){
    modalContactContainer.style.display = "none";
    //bodyScroll.style.overflow = "scroll"
    console.log("closeModal OK");
};

export function openModalContactForm(){
    //bodyScroll.style.overflow = "hidden"
    modalContactForm.style.display = "block";
    //modalCongrats.style.display = "none";
    modalContactForm.reset(); //clear all previous form data and error or other method
    console.log("openModalForm OK");
};

/*export function openModalCongrats(){
    modalForm.style.display = "none";
    modalCongrats.style.display = "flex";
    //console.log ("openModalCongrats OK");
};*/


//Events on click
 
//----Modal"Contact" with form

/*photographerCardBtnContact.addEventListener("click",() =>{
    openModalContact();
    openModalContactForm();   
});



modalCloseX.addEventListener("click", closeModalContact);
*/
//----Modal with Congrats

//modalBtnGo.addEventListener("click", openModal, openModalCongrats);
//modalBtnClose.addEventListener("click", closeModal);
