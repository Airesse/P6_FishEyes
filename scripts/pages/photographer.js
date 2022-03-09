////// PROFIL PAGE
  
import {API} from "../api/get.js";
//import {homepagePhotographerCard, profilpagePhotographerCard, profilpageMediaPhotoCard,profilpageMediaVideoCard, profilpageMediaCard} from "../models/templatesHTML.js";
import {onePhotographer, oneMedia,} from "../models/constructors.js"
import {allDatas} from "../models/factories.js";
//import {init} from "./index.js"


//DOM elements

const photographerSectionHeader = document.querySelector(".photographerCard") //profilpage


//Functions
//----Asynchrone initialisation (wait to get all datas before displays them)
let start = async() => {
    console.log ("start ok");

    //let api = new API;
    //let datasAllPhotographers = await api.getDataAllPhotographers();
    //console.log (dataAllPhotographers);

    let profilpage = new allDatas();
    let profilpageHtml = await profilpage.displayProfilpageDataPhotographer()
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

