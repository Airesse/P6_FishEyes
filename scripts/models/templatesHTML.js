//DOM elements
let homepagePhotographerCardHTML;
let profilpagePhotographerCardHTML;
let profilpageMediaPhotoCardHTML;
let profilpageMediaVideoCardHTML;
//let profilpageMediaCardHTML

//Functions

//---- HOME PAGE card photographer
export function homepagePhotographerCard() {
    homepagePhotographerCardHTML = `
        <article>
            <div class="cardContainer">
                <a href="/photographer.html?id=${this.id}">
                <div class="card__media">
                    <img src="${this.portrait}" alt="${this.name}" class="photographer_section__image" />
                </div>
                <h2 class="photographer_section__name">${this.name}</h2>
                </a>
                <span class="photographer_section__location">${this.country}</span>
                <p class="photographer_section__sentence">${this.tagline}</p>
                <span class="photographer_section__price">${this.price}&euro;/jour</span>
            </div>
        </article>`;

    return homepagePhotographerCardHTML;
}



// ----PHOTOGRAPHER PAGE card photographer

export function profilpagePhotographerCard() {
    profilpagePhotographerCardHTML = `

        <div class="photographerCard">
            <h2 class="photographerCard__name">${this.name}</h2>
            <p class="photographerCard__location">${this.country}</p>
            <p class="photographerCard__sentence">${this.tagline}</p>
        </div>

        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        
        <div class="photographerCard">
            <img class="photographerCard__image" src="${this.portrait}" alt="${this.name}"/>
        </div>`;

    return profilpagePhotographerCardHTML;
}





// ----PHOTOGRAPHER PAGE card media-photo

export function profilpageMediaPhotoCard() {
    profilpageMediaPhotoCardHTML = `
        <article class="mediaPhotoCard">
            <div class="mediaPhotoCard__image">
                <img class="mediaPhotoCard__image" src="${this.image}" alt="${this.title}"/>
            </div>

            <div class="mediaCard__info">
                <p class="mediaCard__title">${this.title}</h2>
                <button class="mediaCard__button">${this.likes}</button>
            </div>               
        </article>`;
        
    return profilpageMediaPhotoCardHTML;
}



// ----PHOTOGRAPHER PAGE card media-video

export function profilpageMediaVideoCard() {
    profilpageMediaVideoCardHTML = `

        <article class="mediaVideoCard">
            <div class="mediaVideoCard__video">
                <div class="mediaVideoCard__video-overlay"></div>
                <video class="mediaVideoCard__video-video">
                    <source type="video/webm" src="${this.video}"/>/>
                </video>
            </div>
            
            <div class="mediaCard__info">
                <p class="mediaCard__title">${this.title}</h2>
                <button class="mediaCard__button">${this.likes}</button>
            </div>               
        </article>`;

    return profilpageMediaVideoCardHTML;
}





// ----PHOTOGRAPHER PAGE card media (=card media-Photo + card media-Video)

export function profilpageMediaCard() {
    return this.video ? this.profilpageMediaPhotoCard() : this.profilpageMediaVideoCard();
}