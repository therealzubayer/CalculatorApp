const display = document.getElementById("display");

/* We have 3 functions. Display, clear display, and calculate */


function appendToDisplay(input){
    display.value += input;

}

function clearDisplay(){
    display.value = "";

}

function calculate(){

    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = "Error!";
    }
    
    // evaluate function, evaluate the value within display



}