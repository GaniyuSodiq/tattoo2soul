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

    bindEvents: function(){
        this.addBtn.addEventListener("click", this.addPerson.bind(this))
    },

    addPerson: function(){
        this.people.push(this.inputEl.value)
        this.inputEl.value = ""
    },
}

peopleModule.init()