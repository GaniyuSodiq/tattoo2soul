const stats = (function(){
    let people = 0;

    // cacheDOM
    const statsSection = document.querySelector("#statsSection")
    const statsSpan = statsSection.querySelector("span")

    //render
    function render(){
        statsSpan.textContent = people
    }

    function getPeople(data){
        people = data
        render()
    }
    //bindEvents

    return {getPeople}
})()

stats.getPeople(5)