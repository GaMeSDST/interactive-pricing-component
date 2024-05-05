const sliderEl = document.querySelector("#range");
const views = document.querySelector("#view");
const views2 = document.querySelector("#price2");
const price = document.querySelector("#price");
const toggle = document.querySelector("#toggle");

function progressScript() {
    const sliderValue = parseInt(sliderEl.value) ;
    sliderEl.style.background = `linear-gradient(to right, #acefe8 ${sliderValue}%, #edf0f9 ${sliderValue}%)`;
    
    let options = [["10k", 8], ["50k", 12], ["100k", 16], ["500k", 24], ["1M", 36]]
    let choice = Math.floor(sliderValue / 25)
    views.innerHTML = options[choice][0]
    if (toggle.checked == true) {
        price.innerHTML = "$" + options[choice][1] * 0.75 + ".00"
        views2.innerHTML = "$" + options[choice][1] * 0.75 + ".00"
    } else {
        price.innerHTML = "$" + options[choice][1] + ".00"
        views2.innerHTML = "$" + options[choice][1] + ".00"
    }
}

progressScript()