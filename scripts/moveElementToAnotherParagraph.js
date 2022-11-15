// contact sales form
// combining error message with paragraph 

let errMessage = document.querySelectorAll('.error.no-label')
let targetElement = document.querySelectorAll('.form-field.error')
for (let i = 0; i < errMessage.length; i++) {
    targetElement[i].appendChild(errMessage[i]);
}