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
            <div id="photographerHeader">
                <div class="photographerInfo" >
                    <h2 class="photographerCard__name">${this.name}</h2>
                    <h3 class="photographerCard__location">${this.country}</h3>
                    <p class="photographerCard__sentence">${this.tagline}</p>
                </div>

                <button class="contact_button">Contactez-moi</button>
                
                <div class="photographerCard">
                    <img class="photographerCard__image" src="./assets/photographers/${this.name.replace(' ','').replace('-','')}.jpg" alt="${this.name}"/>
                </div>
            </div>`;
        return profilpagePhotographerCardHTML;
    }

}


//PHOTOGRAPH PAGE : Create objet "Media spécifique d'un photographe"
export class oneMedia{

    constructor(data){
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.type = 'media'//image or video 
        this.image = data.image ? `assets/photographers/${data.photographerId}/mediaPhotographer/${data.image}` : null
        this.video = data.video ? `assets/photographers/${data.photographerId}/mediaPhotographer/${data.video}` : null
        this.fullImage = data.image ? `assets/photographers/${data.photographerId}/mediaPhotographer/${data.image}` : null
        this.fullVideo = data.video ? `assets/photographers/${data.photographerId}/mediaPhotographer/${data.video}` : null //`assets/photographers/${id}/mediaPhotogapher/${video}.mp4`;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
      
        //this.portrait
    }

        
    // ----PHOTOGRAPHER PAGE media-photo card

    profilpageMediaPhotoCard() {
        let profilpageMediaPhotoCardHTML = `
            <article class="mediaPhotoCard">
                <div class="mediaPhotoCard__image">
                    <img class="mediaPhotoCard__image" src="${this.image}" alt="${this.title}"/>
                </div>

                <div class="mediaCard__info">
                    <h3 class="mediaCard__title">${this.title}</h3>
                    <span class="mediaCard__Likes>
                        <h3 class="mediaCard__numberLikes">${this.likes}</h3>
                        <i class="fas fa-heart full" aria-label="likes" ></i>
                    </span>
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
                        <source type="video/webm" src="${this.video}"/>
                    </video>
                </div>
                
                <div class="mediaCard__info">
                    <h3 class="mediaCard__title">${this.title}</h3>
                    <span class="mediaCard__Likes>
                        <h3 class="mediaCard__numberLikes">${this.likes}</h3>
                        <i class="fas fa-heart full" aria-label="likes" ></i>
                    </span>
                </div>               
            </article>`;

        return profilpageMediaVideoCardHTML;
    }





    // ----PHOTOGRAPHER PAGE card media (= card media-Photo + card media-Video)

    //-------- Conditionnal operator : if condition=true, return videoCard else return photocard
    profilpageMediaCard=() => {
        return this.video ? this.profilpageMediaVideoCard() : this.profilpageMediaPhotoCard();
    }

    // ----PHOTOGRAPHER PAGE likes bar
    profilpagePhotographerLikesBar(totalLikes){
        let profilpagePhotographerLikesBarHTML = `
        <div class=boxLikes-bar>
            <div class="likes-bar">
                <p class="totalLikes">${totalLikes}</p>
                <div class="fas fa-heart full"></div>
            </div>
            <div class="price-bar">
                <p class="price">${this.price}&euro; / jour</p>
            </div>
        </div>
        `;

        return profilpagePhotographerLikesBarHTML;
    }


};