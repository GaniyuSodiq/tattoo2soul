const peopleModule = (function(){
    const people = []
    
    // c r i b

    // cacheDOM
    const peopleBox = document.querySelector("#peopleModule")
    const inputEl = peopleBox.querySelector("input")
    const addBtn = peopleBox.querySelector("button")
    const ulEl = peopleBox.querySelector("ul")

    // render

    function render (){
        ulEl.textContent = ""
        people.forEach(name=>{
            const newName = document.createElement("span")
            const newNameDel = document.createElement("button")
            const newNameLi = document.createElement("li")

            newName.textContent = name
            newNameDel.textContent = "❌"

            newNameLi.appendChild(newName)
            newNameLi.appendChild(newNameDel)
            ulEl.appendChild(newNameLi)
        })
    }

    //bind events
    addBtn.addEventListener("click", addPerson)
    ulEl.addEventListener("click", deletePerson)

    function addPerson(){
        people.push(inputEl.value)
        inputEl.value = ""
        render()
    }

    function deletePerson(event){
        if (event.target.textContent == "❌"){
            const nameToRemove = event.target.closest("li").querySelector("span").textContent
            const indexToRemove = (()=>{
                for (let i=0; i<people.length; i++){
                    if (people[i] == nameToRemove){
                        return i
                    }
                }
            })()
            people.splice(indexToRemove, 1)
        }
        render()
    }
})()