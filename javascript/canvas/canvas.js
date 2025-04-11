// const canvas = document.querySelector("canvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// const c = canvas.getContext("2d");
// // // c.fillRect(x, y, width, height); //x and y coordinates are relative to top left corner in browser window
// // // we can change color of each rectangle by putting c.fillstyle just before it
// // // c.fillStyle = "rgba(255,0,0,0.5)";
// // // c.fillRect(100, 100, 100, 100);
// // // c.fillStyle = "blue";
// // // c.fillRect(300, 100, 100, 100);
// // // c.fillStyle = "violet";
// // // c.fillRect(400, 500, 100, 100);

// // // c.beginPath();
// // // c.moveTo(50, 300);
// // // c.lineTo(300, 100);
// // // c.lineTo(400, 300);
// // // c.strokeStyle = "pink";
// // // c.stroke();

// // // creating arc or circle //
// // // c.beginPath();
// // // c.arc(300, 300, 30, 0, Math.PI * 2, false);
// // // c.strokeStyle = "black";
// // // c.stroke();
// // // for (let i = 0; i < 400; i++) {
// // //   let x = Math.random() * window.innerWidth;
// // //   let y = Math.random() * window.innerHeight;
// // //   c.beginPath();
// // //   c.arc(x, y, 30, 0, Math.PI * 2, false);
// // //   c.strokeStyle = `rgba(${x},${y},0,${Math.random()})`;
// // //   c.stroke();
// // // }
// // // for (let i = 0; i < 100; i++) {
// // //   let x = Math.random() * window.innerWidth;
// // //   let y = Math.random() * window.innerHeight;
// // //   c.beginPath();
// // //   c.moveTo(x, y);
// // //   c.lineTo(500, 600);
// // //   c.strokeStyle = `rgba(${x + 1},${y + 2},0,${Math.random() + 1})`;
// // //   c.stroke();
// // // }
// let mouse = {
//   x: undefined,
//   y: undefined,
// };
// const maxradius = 40;
// const minradius = 2;
// const colorsarray = ["#2C3E50", "#E74C3C", "#ECF0F1", "#3498DB", "#2980B9"];
// window.addEventListener("mousemove", function (e) {
//   mouse.x = e.x;
//   mouse.y = e.y;
// });
// window.addEventListener("resize", function () {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   Init();
// });
// function Circle(x, y, dx, dy, radius) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.minradius = radius;
//   this.radius = radius;
//   this.color = colorsarray[Math.floor(Math.random() * colorsarray.length)];
//   this.draw = function () {
//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     c.fillStyle = this.color;
//     c.fill();
//   };
//   this.update = function () {
//     if (this.x + this.radius > innerWidth || this.x - this.radius < 0)
//       this.dx = -this.dx;
//     if (this.y + this.radius > innerHeight || this.y - this.radius < 0)
//       this.dy = -this.dy;
//     this.x += this.dx; //if we put dx -ve then circle will move in -ve x direction
//     this.y += this.dy;
//     if (
//       mouse.x - this.x < 50 &&
//       mouse.x - this.x > -50 &&
//       mouse.y - this.y < 50 &&
//       mouse.y - this.y > -50 &&
//       this.radius < maxradius
//     )
//       this.radius++;
//     else if (this.radius > this.minradius) this.radius--;
//     this.draw();
//   };
// }

// // animate function is calling requestAnimateFrame and requestAnimateFrame is inturn calling animate thus forming a loop
// let circlearray = [];
// function Init() {
//   circlearray = [];
//   for (let i = 0; i < 800; i++) {
//     let radius = Math.trunc(Math.random() * 4) + 1;
//     let x = Math.random() * (innerWidth - radius * 2) + radius;
//     let y = Math.random() * (innerHeight - radius * 2) + radius;
//     let dx = Math.random() - 0.5;
//     let dy = Math.random() - 0.5;

//     circlearray.push(new Circle(x, y, dx, dy, radius));
//   }
// }
// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, innerWidth, innerHeight);

//   for (let i = 0; i < circlearray.length; i++) {
//     circlearray[i].update();
//   }
// }
// Init();
// animate();

// // How to code gravity //
