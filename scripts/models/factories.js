import {API} from "../api/get.js";
import {onePhotographer, oneMedia} from "../models/constructors.js"







//Create factorie "allDatas" for recuperate data from API and give them to constructors (photographe or media)


export class allDatas extends API {
    dataOnePhotographer = null;
    dataOneMedia = null;
    dataLightbox = null;

    //----Display photographers Datas in Homepage
    async displayHomepageDataPhotographers () {
        let datasAllPhotographers = await this.getDataAllPhotographers()
        //console.log(datasAllPhotographers);

        //--------All Photographers Instanciation
        let instanciations = datasAllPhotographers.map (photographer => new onePhotographer(photographer))
        //console.log (instanciations);

        //--------HomePage Composition = Photographers Infos + Homepage card's recuperation
        let homepageComposition = ""
        for(let item of instanciations){
    
            homepageComposition += item.homepagePhotographerCard();
            //console.log(homepageComposition);
        }

        return homepageComposition;
        
    }




    //----Display one photographer Datas in profilpage
    async displayProfilpageDataPhotographer (id){
        //console.log ("idProfilpage=" +id)

        //------PHOTOGRAPHER header PART
        this.dataOnePhotographer = await this.getDataOnePhotographer(id)
        //console.log(this.dataOnePhotographer);
        

        //---------- one Photographer Instanciation
        let instanciation = new onePhotographer(this.dataOnePhotographer)
        //console.log (instanciation);

        //-----------ProfilPage photographer card = photographer Infos + photographercard's recuperation
        let photographerCardComposition = ""
        //for(let item of instanciation){
        photographerCardComposition = instanciation.profilpagePhotographerCard();
        //console.log(photographerCardComposition);
          if (!photographerCardComposition) this.getRedirectURLbyId() //REVOIR + dans factory?
        

        
        //------MEDIA PART
        this.dataOneMedia = await this.getDataMedia(id)
        //console.log(this.dataOneMedia);
        //---------- one Media (allmedia for one photographer) Instanciation
        
        let  position = -1; // no zero
        //console.log(position) Ok =-1
        let instanciationm = this.dataOneMedia.map (media => {
          

            position++
            //console.log (position); // =0 et pas à 1 en premier
            return new oneMedia(media, position)
        
        })
       //----------ProfilPage media card = media Infos + mediacard's recuperation
       let mediaCardComposition = ""
       for(let item of instanciationm){
           mediaCardComposition += item.profilpageMediaCard();
           //console.log (mediaCardComposition);
       }




       //---------ProfilPage likesbar = photographer numbers of likes + price
 
       let likesbar= "";
       
       const totalLikes = this.dataOneMedia.reduce((a, b) => +a + +b.likes, 0);
       console.log("totalLikes"+totalLikes); // just tot likes in number-no bar

       ///premiere version de la factory
       /*for(let item of instanciationm){
        likesbar += item.profilpagePhotographerLikesBar(totalLikes);
        console.log(likesbar);
        };*/


        let price = this.dataOnePhotographer.price;
        console.log("photographer price :"+price);// ok just number



        let instanciationL = new oneMedia(this.dataOneMedia)
        console.log(instanciationL);
        likesbar = instanciationL.profilpagePhotographerLikesBar(totalLikes);
        console.log(likesbar);//ok pour likes mais pas le price
        
        

       //--------ProfilPage Composition = photographer header card + mediacard + likes-bar
       let profilpageComposition = photographerCardComposition + mediaCardComposition + likesbar;


       return profilpageComposition;
          
       
    }






} 





    








