(function(window){
    let callJsomeNames = function (){
        for(let list in names){
            if(names[list].charAt(0) === "J" || names[list].charAt(0) === "j"){
                console.log("Good Bye " + names[list] + "!")
            }
        } 
    }
    window.callJsomeNames = callJsomeNames;
})(window);
