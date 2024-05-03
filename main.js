const sliderEl = document.querySelector("#range")

function progressScript() {
    const sliderValue = parseInt(sliderEl.value) ;
    console.log(sliderValue)
    sliderEl.style.background = `linear-gradient(to right, #acefe8 ${sliderValue}%, #edf0f9 ${sliderValue}%)`;
}
progressScript()