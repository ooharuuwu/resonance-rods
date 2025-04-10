// let rods = []
// const numrods = 7
// const rodspacing = 100
// const flickerduration = 30

// class Rod { //how each rod behaves
//     constructor(x) {
//         this.x = x  //where the rod is placed in ground, what position
//         this.y = windowHeight //vertical position 
//         this.length = 200 //how long rod is 
//         this.angle = 0 //initial upper angle zero
//         this.angularvelocity = 0 //
//         this.spring = 0.02 //how strong the rod is 
//         this.damping = 0.98 //damping
//         this.glow = 0 
//         this.flickerTimer = 0 
//     }

//     applyforce(force) { //this takes a force varible
//         this.angularvelocity = this.angularvelocity + force //increasing velocity with every force
//     }

//     update() { 
//         let restoringforce = -this.angle * this.spring
//         this.angularvelocity = this.angularvelocity + restoringforce
//         this.angularvelocity = this.angularvelocity * this.damping
//         this.angle = this.angle + this.angularvelocity 

//         if(this.flickerTimer>0){
//             this.flickerTimer--
//             this.glow = random(150,250) //setting a random glow value when they are touched, maybe change it to slowly reduce later
//             //change this effect later
//         }
//         else {
//             this.glow = 0
//         }
//     }

//     draw() {
//         tipX = this.x + sin(this.angle) * this.length //How far to the right the tip is (see diagram)
//         tipY = this.y - cos(this.angle) * this.length //How far to the up the tip is

//         stroke(255, 140, 0);  // Always warm orange
//         strokeWeight(5)
//         line(this.x,this.y, tipX, tipY) //basic syntax for p5js

//         if(this.glow>0) {
//             for(let i =0; i<15; i++) { //this line of code only affects the ellipse
//                 let radius = random(5, 25) //pixel values of each circle
//                 let alpha = map(i, 0, 15, 80, 0) //to control the opacity
//                 fill(255, 140, 0, alpha)
//                 noStroke()
//                 ellipse(tipX, tipY, radius)
//             }
//         }
//     }

//         getTipPosition() {
//             return {
//                 x: this.x + sin(this.angle) * this.length,
//                 y: this.y - cos(this.angle) * this.length
//             }
//         }
//     }


//     function setup() {
//         createCanvas(windowWidth, windowHeight)
//         for (let i= 0; i<numrods; i++) {
//             rods.push(new Rod((i+1) * rodspacing)) //stores each rod in an array
//         }
//     }
    
//         function draw() {
//             background(13,13,13,100);
//             for(let rod of rods){
//                 rod.update()
//                 rod.draw()
//             }

//         for( let i =0; i<rods.length; i++){
//             for( let j = i+1; j<rods.length; j++){
//                 let tipA = rods[i].getTipPosition()
//                 let tipB = rods[j].getTipPosition()
//                 let d = dist(tipA.x, tipA.y, tipB.x, tipB.y)
//                 if(d<20) {
//                     rods[i].flickerTimer = flickerduration //if there is flicker timer it glows 
//                     rods[j].flickerTimer = flickerduration
//                 }
//             }
//         }
//     }

//     function mousePressed() {
//         for (let rod of rods) {
//             rod.applyforce(random(-0.2,0.2))
//         }
//     }

