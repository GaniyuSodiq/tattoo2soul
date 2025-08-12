const stats = {
    count: 0,
    init: function(){
        this.cacheDOM()
    },
    bindEvents: function(){},
    cacheDOM: function(){
        this.statsModule = document.querySelector("#statsModule")
        this.statsSpan = this.statsModule.querySelector("span")
    },
    render: function(){
        this.statsSpan.textContent = this.count
    },
    getCount: function(data){
        this.count = data
        this.render()
    },
}
stats.init()
export {stats}