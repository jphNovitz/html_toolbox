const sprite = document.getElementById('decoration')
const width = document.getElementById('width')
const height = document.getElementById('height')
const bgWidth = document.getElementById('bg_width')
const color_input_1 = document.getElementById('color_1')
const color_input_2 = document.getElementById('color_2')
const pc_input_1 = document.getElementById('pc_1')
const pc_input_2 = document.getElementById('pc_2')

var color_1 = 'black';
var color_2 = 'transparent';

var pc_1 = 27;
var pc_2 = 5;

width.value = sprite.clientWidth
height.value = sprite.clientHeight

function changeGradient() {
    console.log("radial-gradient(circle, " + color_1 + " "+ pc_1+"%, " + color_2 + " "+ pc_2+"%)")
    sprite.style.backgroundImage = "radial-gradient(circle, " + color_1 + " "+ pc_1+"%, " + color_2 + " "+ pc_2+"%)";
    return true;
}


width.addEventListener('change', e => {
    let w = e.target
    sprite.style.width = w.value + "px"
    sprite.style.maxWidth = w.value + "px"
    console.log(sprite.clientWidth)
})

height.addEventListener('change', e => {
    let h = e.target
    sprite.style.height = h.value + "px"
})

bgWidth.addEventListener('change', e => {
    let w = e.target
    sprite.style.backgroundSize = w.value + "px " + w.value + "px"
})

color_input_1.addEventListener('change', e => {
    color_1 = e.target.value
    changeGradient()

})

color_input_2.addEventListener('change', e => {
    color_2 = e.target.value
    changeGradient()

})

pc_input_1.addEventListener('change', e => {
    pc_1 = e.target.value
    changeGradient()

})
pc_input_2.addEventListener('change', e => {
    pc_2 = e.target.value
    changeGradient()

})


