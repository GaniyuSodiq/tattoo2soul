const peopleModule = {
    people: ["Sodiq"],

    init: function () {
        this.cacheDom()
        this.bindEvents()
    },

    cacheDom: function () {
        this.peopleSection = document.querySelector("#peopleSection")
        this.addBtn = peopleSection.querySelector("button")
        this.inputEl = peopleSection.querySelector("input")
        this.ulEl = peopleSection.querySelector("ul")
        this.delName = peopleSection.querySelector(".delName")
    },

    render: function(){
        this.ulEl.textContent = ""
        this.people.forEach((name)=>{
            const newName = document.createElement("span")
            const newNameDel = document.createElement("button")
            const newNameLi = document.createElement("li")

            newName.textContent = name
            newNameDel.textContent = "❌"
            newNameDel.classList.add("delName")

            newNameLi.appendChild(newName)
            newNameLi.appendChild(newNameDel)
            this.ulEl.appendChild(newNameLi)

        })
    },

    bindEvents: function(){
        this.addBtn.addEventListener("click", this.addPerson.bind(this))
        this.delName.addEventListener("click", this.deletePerson.bind(this))
    },

    addPerson: function(){
        this.people.push(this.inputEl.value)
        this.inputEl.value = ""
        this.render()
    },

    deletePerson: function(event){
        const nameToRemove = event.target.closest("li")
        nameToRemove.remove()
        console.log("hello test")
    },
}

peopleModule.init()