import { pubSub } from "./pubsub.js"
const statsModule = (function(){
    // crib

    let count = 0

    const statsBox = document.querySelector("#statsModule")
    const statsSpan = statsBox.querySelector("span")

    pubSub.sub("peopleChange", getCount)

    function render(){
        statsSpan.textContent = count
    }

    function getCount(data){
        count = data
        render()
    }

    function destroy(){
        statsBox.remove()
        pubSub.off("peopleChange", getCount)
    }

    return {destroy}
})()

// export {statsModule}
// statsModule.destroy()