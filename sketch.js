const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg, hour, minutes;
var timeOfDay;

async function getBackgroundImg() {

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();

    // write code slice the datetime
    var datetime = responseJSON.datetime;
    hour = datetime.slice(11, 13);
    minutes = datetime.slice(11, 16)
    // console.log(hour);

    // add conditions to change the background images from sunrise to sunset
    if(hour >= 00 && hour <= 02) {
        bg = "sunset12.png";
    } else if(hour > 02 <= 04) {
        bg = "sunset11.png";
    } else if(hour > 04 <= 06) {
        bg = "sunset10.png";
    } else if(hour > 06 <= 08) {
        bg = "sunset9.png";
    } else if(hour > 08 <= 10) {
        bg = "sunset8.png";
    } else if(hour > 10 <= 12) {
        bg = "sunset7.png";
    } else if(hour > 12 <= 14) {
        bg = "sunrise6.png";
    } else if(hour > 14 <= 16) {
        bg = "sunrise5.png";
    } else if(hour > 16 <= 18) {
        bg = "sunrise4.png";
    } else if(hour > 18 <= 20) {
        bg = "sunrise3.png";
    } else if(hour > 20 <= 22) {
        bg = "sunset11.png";
    } else if(hour > 22 <= 0) {
        bg = "sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}

function preload() {
    // create getBackgroundImg() here
    getBackgroundImg();
}

function setup(){
    createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    // add condition to check if any background image is there to add
    if(backgroundImg)
        background(backgroundImg);
        Engine.update(engine);

        // write code to display time in correct format here
        console.log(hour)

        text("Time in hours: " + hour+":00", 50, 50);
        text("This is a 24 hour clock. The time above is India's time.", 50, 80);
}
