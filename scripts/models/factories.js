import {API} from "../api/get.js";
import {homepagePhotographerCard, profilpagePhotographerCard, profilpageMediaPhotoCard,profilpageMediaVideoCard, profilpageMediaCard} from "../models/templatesHTML.js";
import {onePhotographer, oneMedia} from "../models/constructors.js"



//DOM elements
let dataOnePhotographer = null;
let dataOneMedia = null;

//Create factorie "allDatas" for recuperate data from API and give them to constructors (photographe or media)


export class allDatas extends API {


    //----Display photographers Datas in Homepage
    displayHomepageDataPhotographers = async () => {
        let datasAllPhotographers = await this.getDataAllPhotographers()
        console.log(datasAllPhotographers);

        //--------All Photographers Instanciation
        let instanciations = datasAllPhotographers.map (photographer => new onePhotographer(photographer))
        console.log (instanciations);

        //--------HomePage Composition = Photographers Infos + Homepage card's recuperation
        let homepageComposition = ""
        for(let item of instanciation){
            homepageComposition += item.homepagePhotographerCard();
        }

        return homepageComposition;
        
    }




    //----Display one photographer Datas in profilpage
    displayProfilpageDataPhotographer = async (id) => {


        //------PHOTOGRAPHER header PART
        this.dataOnePhotographer = await this.getDataOnePhotographer(id)
        console.log(this.dataOnePhotographer);

        //---------- one Photographer Instanciation
        let instanciation = dataOnePhotographer.map (photographer => new onePhotographer(photographer))
        console.log (instanciation);
       //-----------ProfilPage photographer card = photographer Infos + photographercard's recuperation
       let photographerCardComposition = ""
       for(let item of instanciation){
           photographerCardComposition += item.profilpagePhotographerCard();
       }


       //------MEDIA PART
        this.dataOneMedia = await this.getDataMedia(id)
        console.log(this.dataOneMedia);
        //---------- one Media (allmedia for one photographer) Instanciation
        let instanciationm = this.dataOneMedia.map (media => new oneMedia(media))
        console.log (instanciationm);
        
       //----------ProfilPage media card = media Infos) + mediacard's recuperation
       let mediaCardComposition = ""
       for(let item of instanciationm){
           mediaCardComposition += item.profilpageMediaCard();
       }

       //--------ProfilPage Composition = photographer header card + mediacard
       let profilpageComposition = photographerCardComposition + mediaCardComposition;


       return profilpageComposition; 
       
    }

 


} 




