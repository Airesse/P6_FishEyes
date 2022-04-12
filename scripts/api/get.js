//import {onePhotographer, oneMedia, allDatas} from "../models/factories.js";


//Var elements
//let datasAllPhotographers = [];
//let dataOnePhotographer = [];
let dataMedia = [];

//Class API : 
/* (before displaying datas in pages)
* if response of dataURL (try method)
* wait for response and recuperation of datas  (fetch method)
* then wait for datas transformation in json format
* then return them in the dedicaced variable
* else  (catch method) display error in console : console.log (err)
*/
export class API{

  // all datas localisation
  dataUrl = "./data/photographers.json"

  //----Get photographers Datas only
  getDataAllPhotographers = async () =>{
    try{ 
      let response = await fetch(this.dataUrl)
      let data = await response.json()
      let datasAllPhotographers = data.photographers
    //--------return only once array 
      return datasAllPhotographers;
    }
    catch(err){
      console.log("error=" +err)
    }
  };

  // ----Function redirect to URl with photographerId
  getRedirectURLbyId = () => {
    window.location.href = "/"
  }

  //----Get data of only one photographer
  getDataOnePhotographer = async (id) =>{
    //console.log("id1Photographer=" +id)
    try{ 
      let response = await fetch(this.dataUrl);
      let data = await response.json();
      let dataOnePhotographer= data.photographers.filter(e => e.id == id )[0];
      //console.log(dataOnePhotographer)
      //--------return only once array 
      return dataOnePhotographer
    }
    catch(err){
      console.log("error=" +err)
    }
  }

  //----Get Medias Datas only
  getDataMedia = async (id) =>{
    //console.log("idMedia="+id)
    try{ 
      let response = await fetch(this.dataUrl);
      let data = await response.json();
      let dataMedia = data.media.filter((m) => m.photographerId == id);
      //console.log("dataMedia="+dataMedia)
    //--------return only once array 
      return dataMedia;
    }
    catch(err){
    console.log("error=" +err)
    }
  }
 
}