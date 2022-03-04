////// HOME PAGE
  
import {API} from "../api/get.js";
import {homepagePhotographerCard, profilpagePhotographerCard, profilpageMediaPhotoCard,
  profilpageMediaVideoCard, profilpageMediaCard} from "../models/templatesHTML.js";
import {onePhotographer, oneMedia,} from "../models/constructors.js"
import {allDatas} from "../models/factories.js";


//DOM elements

const photographerSection = document.querySelector(".photographer_section") //home page


//Functions
//----Asynchrone initialisation (wait to get all datas before displays them)
let init = async() => {
    console.log ("init ok");

    let api = new API;
    let datasAllPhotographers = await api.getDataAllPhotographers();
    console.log (dataAllPhotographers);

    let homepage = new allDatas;
    let homepageHtml = homepage.displayHomepageDataPhotographers //await ?
    photographerSection.innerHTML = homepageHtml;

}

//Events
// ----when DOM content load
document.addEventListener("DOMContentLoad", init);

