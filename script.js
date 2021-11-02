//path=sequence of triangle
let cs= document.getElementById('c2').getContext('2d');
cs.beginPath();
cs.moveTo(100, 20);
cs.lineTo(10, 70);
cs.lineTo(90, 70);
cs.fill();
cs.stroke();
//lines
let cx= document.getElementById("c2").getContext("2d");
cx.beginPath();
for (let y = 10; y < 100; y += 10) {
    cx.moveTo(10, y);
    cx.lineTo(90, y);
  }
  cx.stroke();

  //curve
  let cc = document.getElementById("c2").getContext("2d");
  cc.beginPath();
  cc.moveTo(200, 100);
  cc.quadraticCurveTo(150, 100, 130, 50);
  cc.lineTo(150,100);
  cc.closePath,
  cc.stroke();

  let ch = document.getElementById("c2").getContext("2d");
function branch (length, angle, scale) {
  ch.fillRect(0, 0, 1, length);
  if (length < 8) return;
  ch.save();
  ch.translate(0, length);
  ch.rotate(-angle);
  branch(length * scale, angle, scale);
  ch.rotate(2*angle);
  branch(length*scale, angle, scale);
  ch.restore
}
ch.translate(300,0);
branch(60, 0.5, 0.8);