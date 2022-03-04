//import {onePhotographer, oneMedia, allDatas} from "../models/factories.js";

let datasAllPhotographers = [];
let dataOnePhotographer = [];
let dataMedia = [];

export class API{

  dataUrl = "./data/photographers.json"

  //----Get photographers Datas only
  getDataAllPhotographers = async () =>{
    await fetch(DataUrl)
      .then((res) => res.json())
      .then((data) => datasAllPhotographers = data.photographers)
      .catch((err) => console.log("error" + err))

    console.log(datasAllPhotographers[0])
    //--------return only once array 
    return datasAllPhotographers;
  };


  getDataOnePhotographer = async () => {
    await fetch(DataUrl)
    .then((res) => res.json())
    .then((data) => dataOnePhotographer = datasAllPhotographers.filter(element => element.photographerId))
    .catch((err) => console.log("error" + err))

  console.log(dataOnePhotographer[0])
  //--------return only once array 
  return dataOnePhotographer;
  }


  getDataMedia = async () => {
    await fetch(DataUrl)
    .then((res) => res.json())
    .then((data) => dataMedia = data.media)
    .catch((err) => console.log("error" + err))

  console.log(dataMedia[0])
  //--------return only once array 
  return dataMedia;
  }
 
}