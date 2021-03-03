var form = document.getElementById("login_form");
var inputName = document.getElementById("name");
var inputEmail = document.getElementById("email");
var inputInformation = document.getElementById("information");
var labelName = document.getElementById("label_name");
var labelInformation = document.getElementById("label_information");
var labelEmail = document.getElementById("label_email");
var formButton = document.getElementById("form_buttom")



var showErrorMessage = function(message){
    var messageContainer = document.getElementById("message_danger");
    var messageText = document.getElementById("message_danger_text");
    if (messageContainer.className.indexOf("visible") === -1) {
        messageContainer.className += " visible";
    }
    messageText.textContent = message;
}
var showCorrectMessage = function(message){
    var messageContainer = document.getElementById("message_danger");
    var messageText = document.getElementById("message_danger_text");
    if (messageContainer.className.indexOf("visible") === -1) {
        messageContainer.className += " visible";
    }
    messageText.textContent = message;
    messageContainer.className = messageContainer.className.replace("danger ","info");
}

var disableFormButton = function() {
    if (formButton.className.indexOf("disabled") === -1) {
        formButton.className += "disabled";
    }
    
    formButton.disabled = true;
}

var validatAndSend = function(e){
    e.preventDefault();
    var name = inputName.value;
    var email = inputEmail.value;
    var information = inputInformation.value;

    if(name === "" || email ==="" || information === ""){

        if (name === ""){
            if(inputName.className.indexOf("danger-color") === -1){
                inputName.className += "danger-color";
                labelName.className += "red-label";
            }
        }
        if(email ===""){
            if(inputEmail.className.indexOf("danger-color") === -1){
                inputEmail.className += "danger-color";
                labelEmail.className += "red-label";
            }
        }
        if(information === ""){
            if(inputInformation.className.indexOf("danger-color") === -1){
                inputInformation.className += "danger-color";
                labelInformation.className += "red-label";
            }
        }
        showErrorMessage("Por favor introduce los datos requeridos.");
        return;
    }

    
    
    disableFormButton();
    setTimeout(function() {
        showCorrectMessage("La información se envío correctamente");
        
            
        
    }, 1500);
}

form.addEventListener("submit", validatAndSend);