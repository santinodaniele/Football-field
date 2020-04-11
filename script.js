var scale = d3.scale.linear()
    .domain([0, 100])
    .range([0, 500]);

var campo = {
    width: 80,
    length: 100,
    centerCircleRadius: 10,
    areaDiRigore: {
        width: 36,
        height: 18
    },
    padding: {
        top: 2,
        right: 2,
        bottom: 2,
        left: 2
    },
    verniceLinee: "#FFF",
    verniceCampo: "#61a815",
};

var svg = d3.select("body").append("svg")
    .attr("width", scale(campo.width + campo.padding.left + campo.padding.right))
    .attr("height", scale(campo.length + campo.padding.top + campo.padding.bottom))
    .attr("style", "background:"+campo.verniceCampo+";margin-left:-" + 0.5 * scale(campo.width + campo.padding.left + campo.padding.right) + "px;margin-top:-" + 0.5*scale(campo.length + campo.padding.top + campo.padding.bottom));

var pitchElement = svg.append("g")
    .attr("transform", "translate(" +scale(campo.padding.left) + "," + scale(campo.padding.top) + ")")


var lineaRinvio = pitchElement.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", scale(campo.width))
    .attr("height", scale(campo.length))
    .attr("stroke", campo.verniceLinee)
    .attr("fill", "none")

var discoCentrocampo = pitchElement.append("circle")
    .attr("cx", scale(campo.width/2))
    .attr("cy", scale(campo.length/2))
    .attr("r", 1)
    .attr("fill", campo.verniceLinee)

var cerchioCentrocampo = pitchElement.append("circle")
    .attr("cx", scale(campo.width/2))
    .attr("cy", scale(campo.length/2))
    .attr("r", scale(campo.centerCircleRadius))
    .attr("fill", 'none')
    .attr("stroke", campo.verniceLinee)

var lineaMetaCampo = pitchElement.append("line")
    .attr("y1", scale(campo.length/2))
    .attr("y2", scale(campo.length/2))
    .attr("x1", 0)
    .attr("x2", scale(campo.width))
    .attr("stroke", campo.verniceLinee)

// angoli

function addPath(pathData, parentElement){
    parentElement.append("path")
        .attr("d", pathData)
        .attr("stroke", campo.verniceLinee)
        .attr("fill", "none")
}

var pathData = "M0," + scale(1) + "A " + scale(1) +" " + scale(1) + " 45 0 0" + scale(1) + ",0";
addPath(pathData, pitchElement);

var pathData = "M"+scale(campo.width - 1)+",0 A " + scale(1) +" " + scale(1) + " 45 0 0" + scale(campo.width) + ","+ scale(1);
addPath(pathData, pitchElement);

var pathData = "M0," + scale(campo.length-1) + "A " + scale(1) +" " + scale(1) + " 45 0 1" + scale(1) + "," + scale(campo.length);
addPath(pathData, pitchElement);

var pathData = "M"+scale(campo.width - 1)+","+scale(campo.length)+" A " + scale(1) +" " + scale(1) + " 45 0 1" + scale(campo.width) + ","+ scale(campo.length-1);
addPath(pathData, pitchElement);

var penaltyAreaTop = pitchElement.append("g");
var pathData = "M" + scale(campo.width/2 - 4 - 18) +",0L" + scale(campo.width/2 - 4 - 18) + "," + scale(18) + "h" + scale(44) + "V0";
addPath(pathData, penaltyAreaTop);

var pathData = "M" + scale(campo.width/2 - 4 - 6) +",0L" + scale(campo.width/2 - 4 - 6) + "," + scale(6) + "h" + scale(20) + "V0";
addPath(pathData, penaltyAreaTop);

var pathData = "M" + scale(campo.width/2 - 8) +","+scale(18)+"A "+scale(10)+" "+ scale(10) +" 5 0 0 " + scale(campo.width/2 + 8) +","+scale(18);
addPath(pathData, penaltyAreaTop);

var penaltySpotTop = penaltyAreaTop.append("circle")
    .attr("cx", scale(campo.width/2))
    .attr("cy", scale(12))
    .attr("r", 1)
    .attr("fill", campo.verniceLinee)
    .attr("stroke", campo.verniceLinee)

penaltyAreaBottom = pitchElement.append("g");
penaltyAreaBottom.html(penaltyAreaTop.html());
penaltyAreaBottom.attr("transform", "rotate(180) translate(-" + scale(campo.width)+",-"+scale(campo.length)+")")

var posizioneGiocatori = {
    "442": [
        {x:25, y:20},
        {x:55, y:20},
        {x:10, y:45},
        {x:30, y:45},
        {x:50, y:45},
        {x:70, y:45},
        {x:10, y:75},
        {x:30, y:75},
        {x:50, y:75},
        {x:70, y:75},
    ],
    "352": [
        {x:25, y:20},
        {x:55, y:20},
        {x:10, y:45},
        {x:40, y:40},
        {x:50, y:60},
        {x:70, y:45},
        {x:10, y:75},
        {x:30, y:60},
        {x:40, y:75},
        {x:70, y:75},
    ],
    "541": [
        {x:40, y:20},
        {x:50, y:45},
        {x:10, y:40},
        {x:30, y:45},
        {x:55, y:75},
        {x:70, y:40},
        {x:10, y:70},
        {x:25, y:75},
        {x:40, y:77},
        {x:70, y:70},
    ],
    "433": [
        {x:25, y:20},
        {x:55, y:20},
        {x:40, y:15},
        {x:25, y:45},
        {x:55, y:45},
        {x:40, y:52},
        {x:10, y:75},
        {x:30, y:75},
        {x:50, y:75},
        {x:70, y:75},
    ],
    "343": [
        {x:20, y:20},
        {x:60, y:20},
        {x:40, y:20},
        {x:10, y:45},
        {x:30, y:45},
        {x:50, y:45},
        {x:70, y:45},
        {x:20, y:75},
        {x:40, y:75},
        {x:60, y:75},
    ],
    "4321": [
        {x:25, y:25},
        {x:55, y:25},
        {x:40, y:15},
        {x:25, y:45},
        {x:55, y:45},
        {x:40, y:52},
        {x:10, y:75},
        {x:30, y:75},
        {x:50, y:75},
        {x:70, y:75},
    ],
    "4231": [
        {x:25, y:25},
        {x:55, y:25},
        {x:40, y:15},
        {x:40, y:30},
        {x:30, y:50},
        {x:50, y:50},
        {x:10, y:75},
        {x:30, y:75},
        {x:50, y:75},
        {x:70, y:75},
    ],
    "424": [
        {x:15, y:25},
        {x:30, y:25},
        {x:45, y:25},
        {x:60, y:25},
        {x:30, y:50},
        {x:50, y:50},
        {x:10, y:75},
        {x:30, y:75},
        {x:50, y:75},
        {x:70, y:75},
    ],
}

var contenitoreGiocatori = pitchElement.append("g")
    .attr("class", "players")

contenitoreGiocatori.selectAll("circle")
    .data(posizioneGiocatori["442"])
    .enter()
    .append("circle")
    .attr("cx", function(d){
        return scale(d.x);
    })
    .attr("cy", function(d){
        return scale(d.y);
    })
    .attr("r", 5)
    .attr("fill", "black")

function cambioModulo(formation){
    contenitoreGiocatori.selectAll("circle")
        .data(posizioneGiocatori[formation])
        .transition()
        .attr("cx", function(d){
            return scale(d.x);
        })
        .attr("cy", function(d){
            return scale(d.y);
        })
        .attr("r", 5)
        .attr("fill", "black")
}

$(".js-change-formation").change(function(){
    cambioModulo($(this).val());
})