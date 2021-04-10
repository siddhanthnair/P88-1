var canvas=new fabric.Canvas("myCanvas");
// creating fabric type canvas
playerx=10;
playery=10;
// default player location
blockwidth=30;
blockheight=30;
// default width and height for the blocks
var playerobjects,blockobject;
function add_player(){
console.log("insedeaddplayerfunction");
fabric.Image.fromURL("player.png",function(img){
    playerobjects=img;
    playerobjects.scaleToWidth(150);
    playerobjects.scaleToHeight(150);
playerobjects.set({
    top:playery,
    left:playerx
});
canvas.add(playerobjects);

});
}

    function add_block(blockimage){
        fabric.Image.fromURL(blockimage,function(img){
            blockobject=img;
            blockobject.scaleToWidth(blockwidth);
            blockobject.scaleToHeight(blockheight);
            blockobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(blockobject);
        
        });
        }
    
    window.addEventListener("keydown" ,mykeydown);
    function mykeydown(e){
    code=e.keyCode;
    console.log(code);
    
    if (code==68){
    console.log("D is pressed");
    add_block("spiderman_face.png");
    
    }
    if (code==72){
        console.log("H is pressed");
        add_block("ironman_body.png");
        
        }
        if (code==65){
            console.log("A is pressed");
            add_block("captain_america_left_hand.png");
            
            }
            if (code==66){
                console.log("B is pressed");
                add_block("thor_right_hand.png");
                
                }
                if (code==67){
                    console.log("C is pressed");
                    add_block("hulk_legs.png");
                    
                    }                                     
                                        if (code==80 && e.shiftKey==true){
                                            blockwidth=blockwidth+10
                                            blockheight=blockheight+10
                                            document.getElementById("width").innerHTML=blockwidth;
                                            document.getElementById("height").innerHTML=blockheight;
    
                                        }
                                        if (code==77 && e.shiftKey==true){
                                            blockwidth=blockwidth-10
                                            blockheight=blockheight-10
                                            document.getElementById("width").innerHTML=blockwidth;
                                            document.getElementById("height").innerHTML=blockheight;
                                        }
                                
                                    if(code==38){
                                    up();
                                    }
                                    if(code==40){
                                        down();
                                        }
                                        if(code==37){
                                            left();
                                            }
                                            if(code==39){
                                                right();
                                                }
                                }
                                    function up() {
                                        console.log("insideupfunction")
                                        if(playery>0){
                                            playery=playery-10;
                                            canvas.remove(playerobjects);
                                             add_player();
                                        }
                                    }
                                    function down() {
                                        console.log("insidedownfunction")
                                        if(playery<500){
                                            playery=playery+10;
                                            canvas.remove(playerobjects);
                                             add_player();
                                        }
                                    }
                                    function right() {
                                        console.log("insiderightfunction")
                                        if(playerx<850){
                                            playerx=playerx+10;
                                            canvas.remove(playerobjects);
                                             add_player();
                                        }
                                    }function left() {
                                        console.log("insideleftfunction")
                                        if(playerx>0){
                                            playerx=playerx-10;
                                            canvas.remove(playerobjects);
                                             add_player();
                                        }
                                    }