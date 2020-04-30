var note1,note2,note3,note4,note5;
var note1Image,note2Image,note3Image,note4Image,note5Image; 
var note1Group,note2Group,note3Group,note4Group,note5Group;
function preload(){
  note1Image  = loadImage("note1.jpg");
  note2Image  = loadImage("note2.jpg");
  note3Image  = loadImage("note3.jpg"); 
  note4Image  = loadImage("note4.jpg");
  note5Image  = loadImage("note5.jpg");
  note6Image  = loadImage("note6.jpg");
  note7Image  = loadImage("note7.jpg");
  note8Image  = loadImage("note8.jpg");
 note9Image  = loadImage("note9.jpg");
 note10Image  = loadImage("note10.jpg");
note11Image  = loadImage("note11.jpg");
 note12Image  = loadImage("note12.jpg");
 note13Image  = loadImage("note13.jpg");
 note14Image  = loadImage("note14.jpg");
 note15Image  = loadImage("note15.jpg");

}




function setup() {
  createCanvas(800,400);
  note1Group = new Group();
   note2Group = new Group();
   note3Group = new Group();
   note4Group = new Group();
   note5Group = new Group();
}

function draw() {
  background(255,255,255);
 
  if(frameCount%30===0){
    var randomNote = Math.round(random(1,5));
    if(randomNote === 1){
      spawnNote1();  
    }
    else if(randomNote===2){
      spawnNote2();
    } else if(randomNote===3){
      spawnNote3();
    } 
    else if(randomNote===4){
      spawnNote4();
    } 
    else if(randomNote===5){
      spawnNote5();
    } 
    
  }
  drawSprites();
}

function spawnNote1 (){
var note1 = createSprite(0,0,40,40);
note1.x = Math.round(random(20,780));
note1.scale = 0.3;
note1.addImage(note1Image);
note1.velocityY = 15;
note1Group.add(note1);
}

  function spawnNote2 (){
    var note2 = createSprite(0,0,40,40);
    note2.x = Math.round(random(20,780));
    note2.scale = 0.3;
    note2.addImage(note2Image);
    note2.velocityY = 15;
    note2Group.add(note2);
    }
    function spawnNote3 (){
      var note3 = createSprite(0,0,40,40);
      note3.x = Math.round(random(20,780));
      note3.scale = 0.3;
      note3.addImage(note3Image);
      note3.velocityY = 15;
      note3Group.add(note3);
      }
      function spawnNote4 (){
        var note4 = createSprite(0,0,40,40);
        note4.x = Math.round(random(20,780));
        note4.scale = 0.3;
        note4.addImage(note4Image);
        note4.velocityY = 15;
        note4Group.add(note4);
        }
        function spawnNote5 (){
          var note5 = createSprite(0,0,40,40);
          note5.x = Math.round(random(20,780));
          note5.scale = 0.3;
          note5.addImage(note5Image);
          note5.velocityY = 15;
          note5Group.add(note5);
          }