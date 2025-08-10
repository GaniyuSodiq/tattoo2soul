import { emit } from "./pubSub.js"
const peopleModule = (function () {
    const people = ["Estavo", "Tosin", "Palmer"]

    //cacheDOM
    const peopleSection = document.querySelector("#peopleSection")
    const inputEl = peopleSection.querySelector("input")
    const addBtn = peopleSection.querySelector("button")
    const ulEl = peopleSection.querySelector("ul")

    render()

    // render
    function render() {
        ulEl.textContent = ""
        people.forEach((name) => {
            const newName = document.createElement("span")
            const newNameDel = document.createElement("button")
            const newNameLi = document.createElement("li")

            newName.textContent = name
            newNameDel.textContent = "❌"

            newNameLi.appendChild(newName)
            newNameLi.appendChild(newNameDel)
            ulEl.appendChild(newNameLi)
        })
        emit.pub("peopleChange", people.length)
    }


    // // bindEvents
    addBtn.addEventListener("click", addPerson)
    ulEl.addEventListener("click", deletePerson)

    // addPerson
    function addPerson(name) {
        if (typeof name == "string") {
            people.push(name)
        } else {
            people.push(inputEl.value)
            inputEl.value = ""
        }
        render()
    }

    // delete Person
    function deletePerson(event) {
        if (typeof event == "number") {
            people.splice(event, 1)
        } else {
            if (event.target.textContent == "❌") {
                const nameToRemove = event.target.closest("li").querySelector("span").textContent
                let indexToRemove;
                for (let i = 0; i < people.length; i++) {
                    if (people[i] == nameToRemove) {
                        indexToRemove = i
                        break
                    }
                }
                people.splice(indexToRemove, 1)

            } else {
                return
            }
        }
        render()
    }


    return { addPerson, deletePerson }
})()

// console.log(peopleModule)
// peopleModule.addPerson("Ajadi")
// console.log(peopleModule.people)
// peopleModule.deletePerson(0)