class Form{
    constructor(){

    }
display(){
    var title = createElement('h2');
    title.html("Vroom");
    title.position(100,20);

    var input=createInput('name');
    input.position(200, 50);

    var button=createButton('vroom');
    button.position(325, 26);

    var greeting=createElement("h3");
    greeting.position(200,200);

    button.mousePressed(function(){
        input.hide();
        button.hide();

        var name = input.value();

        playerCount=playerCount+1;
        playerCount.updateCount(playerCount);
        player.update(name);
        greeting.html("Vroom"+name);
        greeting.position(200,200);
    })
}

}