/////////////FORM DATA then FORM DATA ERROR



////////FORM DATA : Conditions for validating each field/Data of the form


//Regular Expressions (Regex)
const regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,'-]{2,20}$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexNumberOfCharacters = /^[a-zA-Z0-9]{2,250}$/; // letters and numbers; 2<lenght<250

//DOM elements
const firstName = document.querySelector("#contact-firstName");
const lastName = document.querySelector("#contact-lastName");
const email = document.querySelector("#contact-email");
const message = document.querySelector("#contact-message");


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
            //console.log("Prénom :" +firstName.value);
        }
     

    //--------Lastname : lenght> 1 letter
    
        if (!lastName.value.trim().match(regexName)){ 
            showTextError(lastName);
            validationData-- ;
        } else {
            hideTextError(lastName);
            //console.log("Nom :" +lastName.value);
        } 
    

    //--------Email: format valid

        if (!email.value.trim().match(regexEmail)){
            showTextError(email);
            validationData-- ;
        } else {
            hideTextError(email);
            //console.log("email :" +email.value);
        } 
    

     
    // --------Message: 2 <lenght< 250  
    
        if (message.value.trim().match(regexNumberOfCharacters)){
            hideTextError(message);
            //console.log("message :" +message.value);                              
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


//Functions

//----Show text error for each element
export function showTextError(el){

    // --------attribut data-error-visible="true"
    el.closest(".formData").dataset.errorVisible = true;
    //console.log("error");
};

//----Hide text error for each element
export function hideTextError(el){

    //-------attribut data-error-visible=null
    el.closest(".formData").dataset.errorVisible = null; 
    //console.log("no error");
};




