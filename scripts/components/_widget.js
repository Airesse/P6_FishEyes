import {API} from "../api/get.js";
import {oneMedia} from "../models/constructors.js";
import {allDatas} from "../models/factories.js";

//DOM ELEMENT
  const selected = document.querySelector("#optionSelected");//p
  const popularity = document.getElementById("widget-popularity");//li
  const date = document.getElementById("widget-date");//li
  const title = document.getElementById("widget-title");//li
  const listUl = document.querySelector(".widget-listbox");//ui
  const widgetList = document.querySelector("#widget");

  const arrow = document.querySelector("#widget-container_arrow");
    
  const photographersPortfolio = document.querySelectorAll(".mediaCard");// class de l'article


//DISPLAY WIDGET 

export let displayProfilpageWidget = async() => {
  let dataOneMedia = null;
// get datas   

  const url = new URL(window.location.href); // pointage url
  let id = url.searchParams.get("id"); // productId = url + id
 
  let profilpage = new allDatas();
  let profilpageHtml = await profilpage.displayProfilpageDataPhotographer(id)
  //-----insertion defaut option's title in widget
  selected.innerHTML = "Popularité";
 


//-----function : display widget 
  function widget() {
    if (!listUl.getAttribute("style") || listUl.getAttribute("style") === "display: none;") {
      listUl.style.display = "block";
      arrow.classList.add("arrow-move");
      widgetList.setAttribute("aria-expanded", "true");
    } else {
      listUl.style.display = "none";
      widgetList.focus();
      arrow.classList.remove("arrow-move");
      widgetList.setAttribute("aria-expanded", "false");
    }
  }
//-----EVENT : open widjet navigation on click
  widgetList.addEventListener("click", (e) => {
    e.preventDefault();
    widget();
  });

//----Display only the selected option
  const selectedChoiceHidden = () => {
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


//----Organize media photographer item by popularity (numbers of likes)
  function sortByPopularity() {
    selected.innerHTML = "Popularité";
    selectedChoiceHidden();
    this.dataOneMedia.sort((a, b) => b.likes - a.likes);
    this.dataOneMedia.forEach((media) => {
      const mediaCard = document.getElementById(media.id);
      photographersPortfolio.appendChild(mediaCard);
    });
  }
//----EVENTS :on click on option"popularity", organize media photographer by numbers of likes
  popularity.addEventListener("click", () => {
    sortByPopularity();
  });

//-----EVENTS :when user press key"enter"with popularity option selected,organize media photographer by numbers of likes
  popularity.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sortByPopularity();
    }
  });



//----Organize media photographer item by date
  function sortByDate() {
    selected.innerHTML = "Date";
    selectedChoiceHidden();
    this.dataOneMedia.sort((a, b) => new Date(b.date) - new Date(a.date));
    this.dataOneMedia.forEach((media) => {
      const mediaCard = document.getElementById(media.id);
      photographersPortfolio.appendChild(mediaCard);
    });
  }

  //----EVENTS :on click on option"date", organize media photographer by date
  date.addEventListener("click", () => {
    sortByDate();
  });

  //-----EVENTS :when user press key"enter"with date option selected,organize media photographer by date
  date.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sortByDate();
    }
  });



//----Organize media photographer item by media title
  function sortByTitle() {
    selected.innerHTML = "Titre";

    selectedChoiceHidden();
    function compare(a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    }
    this.dataOneMedia.sort(compare);

    this.dataOneMedia.forEach((media) => {
      const mediaCard = document.getElementById(media.id);
      photographersPortfolio.appendChild(mediaCard);
    });
  }

  //----EVENTS :on click on option"title", organize media photographer by media's title
  title.addEventListener("click", () => {
    sortByTitle();
  });

 //-----EVENTS :when user press key"enter"with title option selected,organize media photographer by media's titles
  title.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sortByTitle();
    }
  });

  sortByLike();
  selectedChoiceHidden();
}