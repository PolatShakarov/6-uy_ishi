var elBody = document.querySelector("body")
var elForm = document.querySelector(".subject")
var elInput = document.querySelector(".celsius__input")
var elInputtwo = document.querySelector(".fahrenheit__input")

elForm.addEventListener("submit", function(evt){
    evt.preventDefault()
})

elInput.addEventListener("change", function(){
    var inputValue = elInput.value.trim()
    elBody.style.backgroundColor = inputValue
    
    
    if (inputValue <= 16) {
        elBody.style.backgroundColor = "#ABF0FF";
    }
    
    else if (inputValue > 16 && inputValue <=35) {
        elBody.style.backgroundColor = "yellow";
    }
    
    else if (inputValue > 35) {
        elBody.style.backgroundColor = "red"
    }
    
    var elInputtwoValue = elInput.value.trim()
    elInputtwoValue = inputValue
})

elInput.oninput = function(){
    var result = (elInput.value)*9/5+32;
    elInputtwo.value = parseFloat(result.toFixed(2))
}

//-------VALYUTA----------------//

var elInput2 = document.querySelector(".sum")
var elInputtwo2 = document.querySelector(".sum2")
var elInput3 = document.querySelector(".sum3")
var elInput4 = document.querySelector(".sum4")

elInput2.oninput = function() {
    var sure = (elInput2.value)*633.65;
    var nice = (elInput2.value)*10907.30;
    var qwerty = (elInput2.value)*11023.90;
    elInputtwo2.value = parseFloat(sure.toFixed(2))
    elInput3.value = parseFloat(nice.toFixed(2))
    elInput4.value = parseFloat(qwerty.toFixed(2))
}

