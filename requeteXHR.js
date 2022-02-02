function getXHR(){
    const max = 300;

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", "https://stwom.herokuapp.com/" + max);
    xhr.send();

    xhr.onload = function drawCircle(x,y){
    console.log(xhr.response.x);
    console.log(xhr.response.y);

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var centerX = xhr.response.x;
    var centerY = xhr.response.y;
    ctx.beginPath();
    ctx.arc(centerX,centerY,50,0, 2*Math.PI, false);
    ctx.lineWidth = 3;
    ctx.stroke();
    }
}

function exec(){
    setInterval(getXHR, 100);
}

