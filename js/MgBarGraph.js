/*******************************************************************************
File: central_fundsBarGraph.js
See google style guide on JavaScript code sytle if needed.
*******************************************************************************/
if (typeof(Storage) !== "undefined") {
    // Retrieve
    var url = localStorage.getItem("url");
    console.log("from server");
    console.log(url);
} else {
    console.log("Sorry, your browser does not support Web Storage...");
}

var margin = {top: 20, right: 10, bottom: 100, left: 100 },
    width = 800 - margin.right - margin.left,
    height = 500 - margin.top - margin.bottom;
var tempColor; 
var chart2 = d3.select("#MNREGS2")
    .append("svg")
      .attr ({
        "width": width + margin.right + margin.left,
        "height": height + margin.top + margin.bottom
      })
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.right + ")");


var fundsdata=[];
var statedata=[];

var xScale = d3.scale.ordinal()
    .rangeRoundBands([0,width], 0.2, 0.2);

var yScale = d3.scale.linear()
    .rangeRound([height, 0]);

// define x axis and y axis
var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

d3.csv(url, function(error,data) {
  if(error) console.log("Error: data not loaded!");
  
  var flag1 = true,flag2 = true;
  var k , l;
  for (var key in data[0]) {
    if(flag1 && isFinite(String(data[0][key]))){
       flag1 = false;
       continue;
    }else{
    if(flag2){
      k=key;
      flag2=false;
      flag1=false;
      console.log(k);
    }else{
      l=key;
      console.log(l);
    }
    }
  }
  
  data.forEach(function(d) {
    d[k] = d[k];
    statedata.push(d[k]);
    d[l] = +d[l];       // try removing the + and see what the console prints
    fundsdata.push(d[l]);
    //console.log(d[l]);   // use console.log to confirm
  });

  // sort the central_funds values
 /* data.sort(function(a,b) {
    return b[l] - a[l];
  });*/

  // Specify the domains of the x and y scales
  xScale.domain(data.map(function(d) { return d[k]; }) );
  yScale.domain([0, d3.max(data, function(d) { return d[l]; } ) ]);

  var colores2  = d3.scale.linear()
    .domain([0, fundsdata.length*0.3, fundsdata.length])
    .range(['red','green','blue']);

  //scala de colores en función del valor (d) 
  var colores = d3.scale.linear()
    .domain([0, d3.max(data, function(d) { return d[l]; } ) ] )
    .range(['yellow', 'red']);


  var tooltip = d3.select('body').append('div')
      .style('position', 'absolute')
      .style('padding', '10px')
      .style('background', 'white')
      .style('opacity', '0')
      .style('border-radius', '6px');

  chart2.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr("height", 0)
    .attr("y", height)
    .on("mouseover", function(d, i){
            //console.log(nombres[i]);
            //var nombre = nombres[i];
            tooltip.transition().delay(100)
                    .style('opacity', .8)
            tooltip.html('<h4 class="text-primary"><small class="text-info">'+ k +':</small><span class="text-success"><strong>'+ d[k] +' </strong></span><br/><small class="text-info">'+l+':</small><strong>'+ d[l] +'</strong></h4>')
                     .style('left', (d3.event.pageX+20)+'px')
                     .style('top', (d3.event.pageY-60)+'px')

          tempColor = this.style.fill;
          d3.select(this)
                .transition()
                .style('opacity', .5)
                .style('fill', 'yellow');
        })
    .on("mouseout", function(d){
          tooltip.transition()
                  .style('opacity', 0)
          d3.select(this)
                .transition()
                .delay(200)
                .duration(300)
                .style('opacity', 1)
                .style('fill', tempColor);
        })
    .transition().duration(3000)
    .delay( function(d,i) { return i * 200; })
    // attributes can be also combined under one .attr
    .attr({
      "x": function(d) { return xScale(d[k]); },
      "y": function(d) { return yScale(d[l]); },
      "width": xScale.rangeBand(),
      "height": function(d) { return  height - yScale(d[l]); }
    })
    .style("fill", function(d,i) { return colores2(i); } );       

    
    // Draw xAxis and position the label
    chart2.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .attr("dx", "-.8em")
        .attr("dy", ".25em")
        .attr("transform", "rotate(-60)" )
        .style("text-anchor", "end")
        .attr("font-size", "7px");


    // Draw yAxis and postion the label
    chart2.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height/2)
        .attr("dy", "-6em")
        .style("text-anchor", "middle")
        .text("");
});