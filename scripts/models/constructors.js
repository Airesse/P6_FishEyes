//constructors unitaires



// HOME PAGE : Create objet "Photographer Unitaire"
export class onePhotographer{
    

    constructor(data){
        this.name = data.name;
        this.id = data.id;
        this.city = data.city;
        this.country = data.country;
        this.tagline = data.tagline;
        this.price = data.price;
        
        //this.media = []; //utile ou que dans media? à revoir    
    }

    // ----HOMEPAGE card photographer
    homepagePhotographerCard(){
        let homepagePhotographerCardHTML = `
        <article>
            <div class="cardContainer">
                <a href="/photographer.html?id=${this.id}">
                <div class="card__media">
                    <img src=" ./assets/photographers/${this.name.replace(' ','').replace('-','')}.jpg" alt="${this.name}" class="photographer_section__image" />
                </div>
                <h2 class="photographer_section__name">${this.name}</h2>
                </a>
                <span class="photographer_section__location">${this.city}, ${this.country}</span>
                <p class="photographer_section__sentence">${this.tagline}</p>
                <span class="photographer_section__price">${this.price}&euro;/jour</span>
            </div>
        </article>`;

        return homepagePhotographerCardHTML;
    }

    // ----PHOTOGRAPHER PAGE card photographer

    profilpagePhotographerCard() {
        let profilpagePhotographerCardHTML = `

            <div class="photographerCard" id="photographerHeader>
                <h2 class="photographerCard__name">${this.name}</h2>
                <p class="photographerCard__location">${this.country}</p>
                <p class="photographerCard__sentence">${this.tagline}</p>
            </div>

            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            
            <div class="photographerCard">
                <img class="photographerCard__image" src="./assets/photographers/${this.name.replace(' ','').replace('-','')}.jpg" alt="${this.name}"/>
            </div>`;

        return profilpagePhotographerCardHTML;
    }


}


//PHOTOGRAPH PAGE : Create objet "Media spécifique d'un photographe"
export class oneMedia{

    constructor(data){
        this.id = data.id;
        this.photographer = {id: data.photographerId};
        this.title = data.title;
        this.image = data.image; //à faire image en pleine écran  + à revoir besoin de id?
        this.video = data.video; //à faire video en pleine écran `assets/photographers/${id}/mediaPhotogapher/${video}.mp4`;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.type = 'media'//image or video 
        //this.portrait
    }

        
    // ----PHOTOGRAPHER PAGE media-photo card

    profilpageMediaPhotoCard() {
        let profilpageMediaPhotoCardHTML = `
            <article class="mediaPhotoCard">
                <div class="mediaPhotoCard__image">
                    <img class="mediaPhotoCard__image" src="assets/photographers/${this.photographer}/mediaPhotographer/${this.image}" alt="${this.title}"/>
                </div>

                <div class="mediaCard__info">
                    <p class="mediaCard__title">${this.title}</h2>
                    <button class="mediaCard__button">${this.likes}</button>
                </div>               
            </article>`;
            
        return profilpageMediaPhotoCardHTML;
    }



    // ----PHOTOGRAPHER PAGE media-video card

    profilpageMediaVideoCard() {
        let profilpageMediaVideoCardHTML = `

            <article class="mediaVideoCard">
                <div class="mediaVideoCard__video">
                    <div class="mediaVideoCard__video-overlay"></div>
                    <video class="mediaVideoCard__video-video">
                        <source type="video/webm" src="assets/photographers/${this.photographer}/mediaPhotographer/${this.video}"/>
                    </video>
                </div>
                
                <div class="mediaCard__info">
                    <p class="mediaCard__title">${this.title}</h2>
                    <button class="mediaCard__button">${this.likes}</button>
                </div>               
            </article>`;

        return profilpageMediaVideoCardHTML;
    }





    // ----PHOTOGRAPHER PAGE card media (= card media-Photo + card media-Video)

    profilpageMediaCard() {
        return this.video ? this.profilpageMediaPhotoCard() : this.profilpageMediaVideoCard();
    }


};