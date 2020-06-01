var canvas = document.querySelector("canvas");
//console.log(canvas);
var w = canvas.width = 500;
var h = canvas.height = 500;

var c = canvas.getContext('2d');

/*
//rekt
c.fillStyle = "skyblue"
c.fillRect(100,250,100,100);

//Line
c.beginPath();
c.moveTo(100,200);
c.lineTo(300,200);
c.moveTo(200,200);
c.lineTo(200,100);

c.strokeStyle = "darkblue";
c.stroke();

//arc
for (x=0;100-2*x;x++)
{
    var r=parseInt(Math.random()*256);
    var g=parseInt(Math.random()*256);
    var b=parseInt(Math.random()*256);

    c.beginPath();
    c.arc(350+10*x,350+5*x,100-2*x,0,2*Math.PI,false);
    c.strokeStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
    c.stroke();  
}
*/

var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

function Circle(x, y, dx, dy, r, color) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.dx = dx;
    this.r = r;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        c.fillStyle = color;
        c.fill();
    }

    this.update = function () {
        if (this.x + this.r > w || this.x - this.r < 0) {
            this.dx *= -1;
        }
        if (this.y + this.r > h || this.y - this.r < 0) {
            this.dy *= -1;
        }

        this.x += this.dx;
        this.y += this.dy;

        //interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && this.r < 20 &&
            mouse.y - this.y < 50 && mouse.y - this.y > -50 && this.r < 20) {
            this.r += 1;
        } else if (this.radius > 2) {
            this.r -= 1;
        }

        this.draw();
    }
}

var circleArray = [];

for (var i = 0; i < 50; i++) {
    var r = 10;
    var x = Math.random() * (w - r * 2) + r;
    var dx = 3 * (Math.random() - 0.5);
    var y = Math.random() * (h - r * 2) + r;
    var dy = 3 * (Math.random() - 0.5);
    var color = 'rgb(' + parseInt(Math.random() * 256) + ',' + parseInt(Math.random() * 256) + ',' + parseInt(Math.random() * 256) + ')';
    circleArray.push(new Circle(x, y, dx, dy, r, color));
}

function animate() {

    requestAnimationFrame(animate);
    c.clearRect(0, 0, w, h);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();