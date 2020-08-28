 var hour, minute
function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  getTime();
if(hour==8){
  text('its 8 am, please wake up ',200,10)
} 
if(hour==8,minute==50){
  text('its time for school, get ready',200,10)
}
if(hour==1){
  text('its 1 pm, please eat lunch ',200,10)
} 
if(hour==4){
  text('its 4 pm, time to do your homework! ',200,10)
} 
if(hour==6){
  text('its 6 pm, time for class ',200,10)
} 
if(hour==7,minute==30){
  text('its 7;30 am, time for dinner ',200,10)
} 
if(hour==10){
  text('its 10 pm, time to go to bed ',200,10)
} 
}
async function getTime(){
var api = await fetch('http://worldtimeapi.org/api/timezone/Asia/kolkata')
 var apijson = await api.json()
 var datetime  = apijson.datetime   
  hour = datetime.slice(11,13)
  minute = datetime.slice(14,16)
console.log (hour );
 
 
}






