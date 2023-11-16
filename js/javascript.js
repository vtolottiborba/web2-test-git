let spriteList = []

window.addEventListener("load", () => {

    spriteList.push(new Alien("alien"))
    
    tick()


})

const tick = () => {

    for (let i = 0; i < spriteList.length; i++) {
        const node = spriteList[i]
        node.tick()
    }

    window.requestAnimationFrame(tick)
}


