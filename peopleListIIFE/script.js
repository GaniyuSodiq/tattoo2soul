const peopleModule = (function(){
    const people = []

    //cacheDOM
    const peopleSection = document.querySelector("#peopleSection")
    const inputEl = peopleSection.querySelector("input")
    const addBtn = peopleSection.querySelector("button")
    const ulEl = peopleSection.querySelector("ul")

    // render
    const render = ()=>{
        ulEl.textContent = ""
        people.forEach((name)=>{
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

    // bindEvents
    addBtn.addEventListener("click", addPerson)
    ulEl.addEventListener("click", deletePerson)


    function addPerson(){
        people.push(inputEl.value)
        inputEl.value = ""
        render()
    }

    function deletePerson(event){
        if (event.target.textContent == "❌"){
            console.log("Delete btn in UL is clicked")
        } else {
            return
        }
    } 
})()