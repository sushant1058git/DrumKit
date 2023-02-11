no_of_drum_button=document.querySelectorAll(".drum").length; /**find the length of button having class drum */

for (var i=0; i<no_of_drum_button; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", handleclick)  /**finds first button in document and add event listener */

function handleclick(){
    alert("got clicked")
}
}