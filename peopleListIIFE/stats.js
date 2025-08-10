import { emit } from "./pubSub.js";
const stats = (function(){
    let people = 0;

    // cacheDOM
    const statsSection = document.querySelector("#statsSection")
    const statsSpan = statsSection.querySelector("span")

    // sunscribe to pubSub
    emit.sub("peopleChange", getPeople)

    //render
    function render(){
        statsSpan.textContent = people
    }

    function destroy(){
        statsSection.remove()
        emit.off("peopleChange", getPeople)
    }

    function getPeople(data){
        people = data
        render()
    }
    //bindEvents

    return {destroy}
})()

// stats.getPeople(5)