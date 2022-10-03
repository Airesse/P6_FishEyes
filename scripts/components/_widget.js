import {API} from "../api/get.js";
import {oneMedia} from "../models/constructors.js";
import {allDatas} from "../models/factories.js";

//DOM ELEMENT
 
  const widgetBtn = document.querySelector("#widget-filter")//Btn
  const widgetContainer= document.querySelector("#widget-container_textVisible");//div of btn
  const selected = document.querySelector("#optionSelected");//p
  //console.log(selected);
  const listLi = document.querySelectorAll(".widget-listbox_option");
  //console.log(listLi);
  const listUl = document.querySelector(".widget-listbox")
  const popularity = document.getElementById("widget-popularity");//li
  //console.log(popularity.innerHTML);
  const date = document.getElementById("widget-date");//li
  const title = document.getElementById("widget-title");//li
 
  const widgetList = document.querySelector("#widget");//label"trier par"

  const arrow = document.querySelector("#widget-container_arrow");
    
  
  let allArticles = null;

//DISPLAY WIDGET 

export let organizedMediasBySelection = async() => {
  
//-----get datas   
  allArticles= [...document.querySelectorAll("article")];// transform in array
  //console.log (allArticles); // object Node plein


  //----EVENTS :on click on option"popularity", organize media photographer by numbers of likes
  listLi.forEach(element => {

    element.addEventListener("click", (e) => {
      //console.log("click")
      //console.log(e.target.id);
      //console.log(e.target.innerHTML);
      if (e.target.id==="widget-popularity"){
        //console.log("click on popularity");
        selected.innerHTML=e.target.innerHTML;

        allArticles.sort(function(a, b){
        return  b.dataset.likes - a.dataset.likes;
  
        });
      }
  
      if (e.target.id==="widget-date"){
        //console.log("click on date");
        selected.innerHTML=e.target.innerHTML
        allArticles.sort(function(a, b){
        return  new Date(b.dataset.date) - new Date(a.dataset.date);
  
        });
      }
  
  
      if (e.target.id==="widget-title"){
        //console.log("click title");
        selected.innerHTML=e.target.innerHTML
        allArticles.sort(function(a, b){
        return  a.dataset.title.localeCompare(b.dataset.title);
  
        });
      }
      
      else {
        //console.log(allArticles);
        allArticles.sort(function(a, b) {
        return  b.dataset.likes - a.dataset.likes;
        });
      
      }
  
     
    
      /*allArticles.sort((a,b) =>{
        switch (e.target.value){
          case "Popularité" :
            return a.dataset.likes.localCompare(b.dataset.likes);
            break
          
          case "Date":
            return a.dataset.date.localCompare(b.dataset.date);
            break
  
          case "Titre":
            return a.dataset.title.localCompare(b.dataset.title);
            break
  
          default:
            throw new Error ("Sort selection not defined")
        }
  
      });*/
  
       // inject tri result in HTML
    
      console.log(allArticles);//ok trié
      //console.log(allArticles.map(b => b.outerHTML));
      const photographerSectionMedias = document.querySelector("#mediaCards");
      photographerSectionMedias.innerHTML= allArticles.map(b => b.outerHTML).join('');
      //outer pour avoir la balise html + contenu et garder mise en page
  
    });
  
    
  });



}

//reste events au clavier à faire

//-----function :display expand widget 
export function widgetExpand(e) {

  if (!listUl.getAttribute("style") || listUl.getAttribute("style") === "display: none;") {
    
    listUl.style.display = "flex";
    arrow.classList.add("arrow-move");
    widgetList.setAttribute("aria-expanded", "true");
    widgetContainer.style.display = "none";
    

  } else {
   
    listUl.style.display = "none";
    widgetList.focus();
    arrow.classList.remove("arrow-move");
    widgetList.setAttribute("aria-expanded", "false");
    widgetContainer.style.display = "flex";
    
    
  }
}


//----function : Hide the selected option (li)
// reste à metre le choix selectionné en position 1 ou juste position 1?
export const selectedChoiceHidden = () => {

  if (selected.innerHTML == popularity.innerHTML) {
    popularity.classList.remove("widget-listbox_option");
    popularity.innerHTML = "";
    popularity.removeAttribute("tabindex", "0");
  } else {
    popularity.innerHTML = "Popularité";
    popularity.classList.add("widget-listbox_option");
    popularity.setAttribute("tabindex", "0");
  }

  if (selected.innerHTML === date.innerHTML) {
    date.classList.remove("widget-listbox_option");
    date.innerHTML = "";
    date.removeAttribute("tabindex", "0");
  } else {
    date.innerHTML = "Date";
    date.classList.add("widget-listbox_option");
    date.setAttribute("tabindex", "0");
  }

  if (selected.innerHTML === title.innerHTML) {
    title.classList.remove("widget-listbox_option");
    title.innerHTML = "";
    title.removeAttribute("tabindex", "0");
  } else {
    title.innerHTML = "Titre";
    title.classList.add("widget-listbox_option");
    title.setAttribute("tabindex", "0");
  }
};





