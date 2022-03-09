////// HOME PAGE
  
import {API} from "../api/get.js";
//import {homepagePhotographerCard, profilpagePhotographerCard, profilpageMediaPhotoCard,profilpageMediaVideoCard, profilpageMediaCard} from "../models/templatesHTML.js";
import {onePhotographer, oneMedia} from "../models/constructors.js"
import {allDatas} from "../models/factories.js";


//DOM elements

const photographerSection = document.querySelector(".photographer_section") //home page


//Functions
//----Asynchrone initialisation (wait to get all datas before displays them)
let init = async() => {
  console.log ("init ok");

  //let api = new API;
  //let datasAllPhotographers = await api.getDataAllPhotographers();
  //console.log (datasAllPhotographers);

  let homepage = new allDatas();
  let homepageHtml = await homepage.displayHomepageDataPhotographers()
  console.log (homepageHtml)
  photographerSection.innerHTML = homepageHtml;
  console.info('DOM loaded');

}

//Events
// ----when DOM content load
if(document.readyState === 'loading' ) { //loading hasn't finished yet
  document.addEventListener("DOMContentLoad", init);
}else{ // 'DOMContentLoad' has already fired
  init();
};




//OR document.addEventListener("DOMContentLoad", init);

