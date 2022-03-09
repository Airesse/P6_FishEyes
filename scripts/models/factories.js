import {API} from "../api/get.js";
//import {homepagePhotographerCard, profilpagePhotographerCard, profilpageMediaPhotoCard,profilpageMediaVideoCard, profilpageMediaCard} from "../models/templatesHTML.js";
import {onePhotographer, oneMedia} from "../models/constructors.js"





//Create factorie "allDatas" for recuperate data from API and give them to constructors (photographe or media)


export class allDatas extends API {
    dataOnePhotographer = null;
    dataOneMedia = null;

    //----Display photographers Datas in Homepage
    async displayHomepageDataPhotographers () {
        let datasAllPhotographers = await this.getDataAllPhotographers()
        console.log(datasAllPhotographers);

        //--------All Photographers Instanciation
        let instanciations = datasAllPhotographers.map (photographer => new onePhotographer(photographer))
        console.log (instanciations);

        //--------HomePage Composition = Photographers Infos + Homepage card's recuperation
        let homepageComposition = ""
        for(let item of instanciations){
    
            homepageComposition += item.homepagePhotographerCard();
            console.log(homepageComposition);
        }

        return homepageComposition;
        
    }




    //----Display one photographer Datas in profilpage
    async displayProfilpageDataPhotographer (id){


        //------PHOTOGRAPHER header PART
        let dataOnePhotographer = await this.getDataOnePhotographer(id)
        console.log(dataOnePhotographer);

        //---------- one Photographer Instanciation
        let instanciation = dataOnePhotographer.map (photographer => new onePhotographer(photographer))
        console.log (instanciation);
        //-----------ProfilPage photographer card = photographer Infos + photographercard's recuperation
        let photographerCardComposition = ""
        for(let item of instanciation){
           photographerCardComposition += item.profilpagePhotographerCard();
           console.log(photographerCardComposition);
        };


       //------MEDIA PART
        let dataOneMedia = await this.getDataMedia(id)
        console.log(dataOneMedia);
        //---------- one Media (allmedia for one photographer) Instanciation
        let instanciationm = this.dataOneMedia.map (media => new oneMedia(media))
        console.log (instanciationm);
        
       //----------ProfilPage media card = media Infos) + mediacard's recuperation
       let mediaCardComposition = ""
       for(let item of instanciationm){
           mediaCardComposition += item.profilpageMediaCard();
           console.log (mediaCardComposition);
       };

       //--------ProfilPage Composition = photographer header card + mediacard
       let profilpageComposition = photographerCardComposition + mediaCardComposition;


       return profilpageComposition; 
       
    }

 


} 




