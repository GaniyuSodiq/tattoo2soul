const peopleModule = {
    people: [],

    init: function () {
        this.cacheDOM()
        this.bindEvents()
    },

    cacheDOM: function () {
        this.peopleBox = document.querySelector("#peopleModule")
        this.inputEl = this.peopleBox.querySelector("input")
        this.addBtn = this.peopleBox.querySelector("button")
        this.ulel = this.peopleBox.querySelector("ul")
    },

    bindEvents: function () {
        this.addBtn.addEventListener("click", this.addPerson.bind(this))
        this.ulel.addEventListener("click", this.deletePerson.bind(this))
    },

    render: function () {
        this.ulel.textContent = ""
        this.people.forEach(name => {
            const newName = document.createElement("span")
            const newNameDel = document.createElement("button")
            const newNameLi = document.createElement("li")

            newName.textContent = name
            newNameDel.textContent = "❌"

            newNameLi.appendChild(newName)
            newNameLi.appendChild(newNameDel)

            this.ulel.appendChild(newNameLi)
        })
    },

    addPerson: function (name) {
        const value = typeof name == "string" ? name : this.inputEl.value
        this.people.push(value)
        this.inputEl.value = ""
        this.render()
    },

    deletePerson: function (event) {
        if (typeof event == "number") {
            this.people.splice(event, 1)
        } else {
            if (event.target.textContent == "❌") {
                const nameToRemove = event.target.closest("li").querySelector("span").textContent
                let indexToRemove;
                for (let i = 0; i < this.people.length; i++) {
                    if (this.people[i] == nameToRemove) {
                        indexToRemove = i
                        break
                    }
                }
                this.people.splice(indexToRemove, 1)                
            }
        }
        this.render()
    },
}

peopleModule.init()