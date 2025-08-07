const peopleModule = {
    people: [],

    init: function () {
        this.cacheDom()
        this.bindEvents()
    },

    cacheDom: function () {
        this.peopleSection = document.querySelector("#peopleSection")
        this.addBtn = peopleSection.querySelector("button")
        this.inputEl = peopleSection.querySelector("input")
        this.ulEl = peopleSection.querySelector("ul")
    },

    render: function(){
        this.ulEl.textContent = ""
        this.people.forEach((name)=>{
            const newName = document.createElement("span")
            const newNameDel = document.createElement("button")
            const newNameLi = document.createElement("li")

            newName.textContent = name
            newNameDel.textContent = "❌"

            newNameLi.appendChild(newName)
            newNameLi.appendChild(newNameDel)
            this.ulEl.appendChild(newNameLi)

        })
    },

    bindEvents: function(){
        this.addBtn.addEventListener("click", this.addPerson.bind(this))
    },

    addPerson: function(){
        this.people.push(this.inputEl.value)
        this.inputEl.value = ""
        this.render()
    },
}

peopleModule.init()