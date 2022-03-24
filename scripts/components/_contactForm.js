
////////FORM DATA : Conditions for validating each field/Data of the form


//Regular Expressions (Regex)
const regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,'-]{2,20}$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexNumberOfCharacters = /^[A-Z]{1,250}$/;

//DOM elements
const firstName = document.querySelector("#contact-firstName");
const lastName = document.querySelector("#contact-lastName");
const email = document.querySelector("#contact-email");

const message = document.querySelector("#contact-message");



//----Collect User Data

let validationData;


//Functions

//----Test FormData validity
export function formDataValidation(){ 
    let validationData = 0;       

    //--------Firstname : lenght> 1 letter
    
        if (!firstName.value.trim().match(regexName)){ 
            showTextError(firstName);
            validationData-- ;
        } else {
            hideTextError(firstName);
        }
     

    //--------Lastname : lenght> 1 letter
    
        if (!lastName.value.trim().match(regexName)){ 
            showTextError(lastName);
            validationData-- ;
        } else {
            hideTextError(lastName);
        } 
    

    //--------Email: format valid

        if (!email.value.trim().match(regexEmail)){
            showTextError(email);
            validationData-- ;
        } else {
            hideTextError(email);
        } 
    

     
    // --------Number of Games : 0-250  
    
        if (message.value.trim().match(regexNumberOfCharacters)){
            hideTextError(message);                              
        } else {
            showTextError(message);
            validationData-- ;        
        } 

    
    //--------Result after testing each fields validity  

        //console.log(validationData);
        if (validationData == 0){
            return true;
        }else{
            return false;
        };
    
}













////////FORM DATA ERROR : actions to be performed when there are (or not) errors in the filling of fields by the user 


//DOM elements
//const modalForm = document.querySelector("#modalContact-form");


//Functions

//----Show text error for each element
export function showTextError(el){

    // attribut data-error-visible="true"
    el.closest(".formData").dataset.errorVisible = true;
    console.log("error");
};

//----Hide text error for each element
export function hideTextError(el){

    // attribut data-error-visible=null
    el.closest(".formData").dataset.errorVisible = null; 
    console.log("no error");
};




