(function(window){
    let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    let callJsomeNames = function (){
        for(let list in names){
            if(names[list].charAt(0) === "J" || names[list].charAt(0) === "j"){
                console.log("Hello " + names[list] + "!")
            }
        } 
    }
    window.callJsomeNames = callJsomeNames;
})(window);
