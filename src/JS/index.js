const buttonscarousel = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");
const information = document.querySelectorAll(".information")


buttonscarousel.forEach((button,index) =>{
button.addEventListener('click', () =>{
   
    desableSelectedButton();    
  
    markSelectedButton(button);

    hideActiveImage();
    
    showBackgroundImage(index);


    hidingActiveInformation();

    showInformation(index);

})
    
})

function markSelectedButton(button) {
    button.classList.add("selected");
}

function showInformation(index) {
    information[index].classList.add("active");
}

function hidingActiveInformation() {
    const informationAcitive = document.querySelector(".information.active");
    informationAcitive.classList.remove("active");
}

function showBackgroundImage(index) {
    images[index].classList.add("active");
}

function hideActiveImage() {
    const imageActive = document.querySelector(".active");
    imageActive.classList.remove("active");
}

function desableSelectedButton(){

    const buttonSelected = document.querySelector(".selected");
    buttonSelected.classList.remove("selected");
}
