//import {onePhotographer, oneMedia, allDatas} from "../models/factories.js";


//DOM elements
let datasAllPhotographers = [];
let dataOnePhotographer = [];
let dataMedia = [];

//Class
export class API{

  dataUrl = "./data/photographers.json"

  //----Get photographers Datas only
  getDataAllPhotographers = async () =>{
    await fetch(this.dataUrl)
      .then((res) => res.json())
      .then((data) => datasAllPhotographers = data.photographers)
      .catch((err) => console.log("error" + err))

    console.log(datasAllPhotographers[0])
    //--------return only once array 
    return datasAllPhotographers;
  };

  //----Get data of only one photographer
  getDataOnePhotographer = async () =>{
    await fetch(this.dataUrl)
    .then((res) => res.json())
    .then((data) => dataOnePhotographer = data.photographers.filter(e => e.photographerId ))//===photographerId
    .catch((err) => console.log("error" + err))

    console.log(dataOnePhotographer[0])
    //--------return only once array 
    return dataOnePhotographer;
  }

  //----Get Medias Datas only
  getDataMedia = async () =>{
    await fetch(this.dataUrl)
    .then((res) => res.json())
    .then((data) => dataMedia = data.media)
    .catch((err) => console.log("error" + err))

  console.log(dataMedia[0])
  //--------return only once array 
  return dataMedia;
  }
 
}