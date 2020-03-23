class Form {
    constructor(){
this.input=createInput("name")
this.button=createButton("Play")
this.greeting=createElement('h3')
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
        var title=createElement('h2')
        title.html("cars")
        title.position(450,50)
      this.input.position(450,160)
        this.button.position(450,300)
        this.button.mousePressed( ()=> {
         this.input.hide()
           this.button.hide()
            player.name =input.value()
            playerCount++
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            greeting.html("hello"+player.name)
            greeting.position(450,160)
        })
    }
}