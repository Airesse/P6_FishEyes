//constructors unitaires


//DOM elements
let photographerUnit =[];
let mediaUnit= [];

// HOME PAGE : Create objet "Photographer Unitaire"
export class onePhotographer{
    constructor(data){
        this.name = data.name;
        this.id = data.id;
        this.city = data.city;
        this.country = data.country;
        this.tagline = data.tagline;
        this.price = data.price;
        this.portrait = "./assets/photographers/${portrait}";
        //this.media = []; //utile ou que dans media? à revoir

        return photographerUnit
    } 

}


//PHOTOGRAPH PAGE : Create objet "Media  spécifique d'un photographe"
export class oneMedia{
    constructor(data){
        this.id = data.id;
        this.photographer = {id: data.photographerId};
        this.title = data.title;
        this.image = data.image; //à faire + image en pleine écran
        this.video = data.video; //à faire + video en pleine écran
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;

        return mediaUnit
    }
}