import { pubSub } from "./pubsub.js"
const peopleModule = (function () {
    const people = []
    // c r i b

    // cacheDOM
    const peopleBox = document.querySelector("#peopleModule")
    const inputEl = peopleBox.querySelector("input")
    const addBtn = peopleBox.querySelector("button")
    const ulEl = peopleBox.querySelector("ul")

    // render

    function render() {
        ulEl.textContent = ""
        people.forEach(name => {
            const newName = document.createElement("span")
            const newNameDel = document.createElement("button")
            const newNameLi = document.createElement("li")

            newName.textContent = name
            newNameDel.textContent = "❌"

            newNameLi.appendChild(newName)
            newNameLi.appendChild(newNameDel)
            ulEl.appendChild(newNameLi)
        })
        pubSub.pub("peopleChange", people.length)
    }

    //bind events
    addBtn.addEventListener("click", addPerson)
    ulEl.addEventListener("click", deletePerson)

    function addPerson(name) {
        const value = typeof name == "string" ? name : inputEl.value
        people.push(value)
        inputEl.value = ""
        render()
    }

    function deletePerson(event) {
        if (typeof event == "number") {
            people.splice(event, 1)
        } else {
            if (event.target.textContent == "❌") {
                const nameToRemove = event.target.closest("li").querySelector("span").textContent
                const indexToRemove = (() => {
                    for (let i = 0; i < people.length; i++) {
                        if (people[i] == nameToRemove) {
                            return i
                        }
                    }
                })()
                people.splice(indexToRemove, 1)
            }
        }
        render()
    }

    return { addPerson, deletePerson }
})()

peopleModule.addPerson("Akeem")
peopleModule.addPerson("Kareem")
peopleModule.addPerson("Jimoh")
peopleModule.deletePerson(0)