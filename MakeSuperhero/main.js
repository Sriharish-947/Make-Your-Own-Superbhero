var canvas = new fabric.Canvas("myCanvas");
var blockWidth = 30;
var blockHeight = 30;
var playerXValue = 10;
var playerYValue = 10;
var playerObject = "";
var blockObject = "";




function playerUpdate() 
{ fabric.Image.fromURL("player.png", function(Img) 
{ playerObject = Img; 
    playerObject.scaleToWidth(150); 
    playerObject.scaleToHeight(140); 
    playerObject.set({ 
        top:playerXValue, 
        left:playerYValue 
    }); 
    canvas.add(playerObject); 
});} 


function blockImage(get_image) 
{ 
    fabric.Image.fromURL(get_image, function(Img){ 
        blockObject = Img; 
        blockObject.scaleToWidth(blockWidth); 
        blockObject.scaleToHeight(blockHeight); 
        blockObject.set({ 
            top:playerXValue, 
            left:playerYValue 
        }); 
        canvas.add(blockObject); 
    }); }




