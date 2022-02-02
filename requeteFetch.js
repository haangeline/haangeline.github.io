
function getFetch() {
    const max = 300;

    fetch("https://stwom.herokuapp.com/" + max)
    .then (function(response){
        let coord = response.json();
        return coord;
    })
    .then (function(coord){
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        var centerX = coord.x;
        var centerY = coord.y;
        ctx.beginPath();
        ctx.arc(centerX,centerY,50,0, 2*Math.PI, false);
        ctx.lineWidth = 3;
        ctx.stroke();
    })    
}

function exec(){
    setInterval(getFetch, 100);
}