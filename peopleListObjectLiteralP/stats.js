const stats = {
    people : 0,

    init: function(){
        this.cacheDOM()
        this.render()
    },

    cacheDOM : function(){
        this.statsSection = document.querySelector("#statsSection")
        this.statsValue = this.statsSection.querySelector("span")
    },

    render: function(){
        this.statsValue.textContent = this.people
    },

    peopleCount: function(data){
        this.people = data
        this.render()
    },
}

stats.init()
// stats.peopleCount(3)

export {stats}