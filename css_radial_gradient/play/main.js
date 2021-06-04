const sprite = document.getElementById('decoration')
console.log(sprite.clientWidth)
console.log(getComputedStyle(sprite).width)
const width = document.getElementById('width')
const height = document.getElementById('height')
const bgWidth = document.getElementById('bg_width')

width.value = sprite.clientWidth
console.log(width.value)
width.addEventListener('change', e=> {
    let w = e.target
    console.log(w.value)
    sprite.style.width = w.value+"px"
   // sprite.clientWidth = w.value
    //sprite.style.maxWidth = getComputedStyle(sprite).width
    sprite.style.maxWidth = w.value+"px"
    console.log(sprite.clientWidth)
})

height.addEventListener('change', e=> {
    let h = e.target
    console.log(h.value)
    sprite.style.height = h.value+"px"
   // sprite.style.maxidth = w.value+"vw"
})

bgWidth.addEventListener('change', e=> {
    let w = e.target
    console.log(sprite)
    sprite.style.backgroundSize = w.value+"px " + w.value+"px"
})
