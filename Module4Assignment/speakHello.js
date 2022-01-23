    (function(window){
        let callNonJsomeNames = function(){
            for(let list in names){
                if(names[list].charAt(0) !== "J" && names[list].charAt(0) !== "j"){
                    console.log("Hello " + names[list] + "!")
                }
            }
        }
        window.callNonJsomeNames = callNonJsomeNames;
    })(window);
    
    
