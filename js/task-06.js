const inputText = document.querySelector("#validation-input");

inputText.addEventListener('blur', (event) => {

    const { value } = event.currentTarget;
    const dataLengthAtr = parseInt(inputText.getAttribute("data-length"));

    if (value.trim().length === dataLengthAtr){
        inputText.classList.add("valid")
        inputText.classList.remove("invalid")
    } else {
        inputText.classList.remove("valid")
        inputText.classList.add("invalid")
    } 
});
