'Canvas and basic items'
    var keys = {UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39};
    document.addEventListener("keydown", keyType);
    var c = document.getElementById("canvas");
    cContext = c.getContext("2d");
'starting point'
    var x = 0, y = 0

    function keyType(event)
    {
        switch (event.keyCode)
        {
            case keys.UP:
                console.log("UP funciona");
                break;
            
            case keys.DOWN:
                console.log("DOWN funciona");
                break;
            
            case keys.LEFT:
                console.log("LEFT funciona");
                break;
        
            case keys.RIGHT:
                console.log("RIGHT funciona");
                break;

            default:
            console.log("otra tecla");
            break;
        }
    }

    function pigMove(x_i, y_i, x_f, y_f, canvas)
    {

    }