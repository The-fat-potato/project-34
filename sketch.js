//Create variables here
var database;
var dogImg1,dogImg,dog,happyDog;
var database;
var FoodS,foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  foodStock=database.ref("food")
  foodStock.on("value",readStock);
  
  dog = createSprite(250,250,50,50)
  dog.addImage(dogImg);
  dog.scale=0.2
  
}


function draw() {  
  
background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(FoodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  //add styles here
  textSize(20);
  fill("white");
  text("Now Press UP ARROW KEY to feed the dog Milk!"+FoodS,50,100)

}

function readStock(data){
  FoodS=data.val();
}


function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    food:x
  })


}
