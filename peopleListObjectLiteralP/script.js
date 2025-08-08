import { stats } from "./stats"

const peopleModule = {
    people: [],

    init: function () {
        this.cacheDom()
        this.bindEvents()
    },

    cacheDom: function () {
        this.peopleSection = document.querySelector("#peopleSection")
        this.addBtn = this.peopleSection.querySelector("button")
        this.inputEl = this.peopleSection.querySelector("input")
        this.ulEl = this.peopleSection.querySelector("ul")
    },

    render: function () {
        this.ulEl.textContent = ""
        this.people.forEach((name) => {
            const newName = document.createElement("span")
            const newNameDel = document.createElement("button")
            const newNameLi = document.createElement("li")

            newName.textContent = name
            newNameDel.textContent = "❌"
            //  newNameDel.classList.add("delName")
            //  this.delName = this.peopleSection.querySelector(".delName")

            newNameLi.appendChild(newName)
            newNameLi.appendChild(newNameDel)
            this.ulEl.appendChild(newNameLi)
            stats.peopleCount(this.people.length)
        })
    },

    bindEvents: function () {
        this.addBtn.addEventListener("click", this.addPerson.bind(this))
        // this.delName.addEventListener("click", this.deletePerson.bind(this))
        this.ulEl.addEventListener("click", this.deletePerson.bind(this))
    },

    addPerson: function () {
        this.people.push(this.inputEl.value)
        this.inputEl.value = ""
        this.render()
    },

    deletePerson: function (event) {
        if (event.target.textContent == "❌") {
            const nameToRemove = event.target.closest("li").querySelector("span").textContent
            console.log(nameToRemove)
            // the code below messed with me. it has to be IIFE. just decaration wont execute the fn, u knw that
            // const indexToRemove = (()=>{
            //     for (let i = 0; i < this.people.length; i++){
            //         if (this.people[i] == nameToRemove){
            //             console.log(this.people[i])
            //             return i
            //         }
            //     }
            // })() .SEE ANOTHER WAY BELOW
            let indexToRemove ;
            for (i = 0; i < this.people.length; i++){
                if (this.people[i] == nameToRemove){
                    indexToRemove = i
                }
            }
            this.people.splice(indexToRemove, 1)
            this.render()
        } else { return }
    },
}

peopleModule.init()