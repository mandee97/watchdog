
if (typeof(Storage) !== "undefined") {
    // Retrieve
    var url = localStorage.getItem("url");
    console.log(url);
} else {
    document.writeln("Sorry, your browser does not support Web Storage...");
}

var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x0 = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.1);

var x1 = d3.scaleBand()
    .padding(0.05); 

var y = d3.scaleLinear()
    .rangeRound([height, 0]);

var z = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

d3.csv(url, function(d, i, columns) {
  for (var i = 1, n = columns.length; i < n; ++i) d[columns[i]] = +d[columns[i]];
    console.log(d);
  return d;
}, function(error, data) {
  if (error) throw error;
  
  
  var main = data.columns[0];
  var keys = data.columns.slice(1);
  
 x0.domain(data.map(function(d) { return d[main]; }));
  x1.domain(keys).rangeRound([0, x0.bandwidth()]);
  y.domain([0, d3.max(data, function(d) { return d3.max(keys, function(key) { return d[key]; }); })]).nice();

  var colores2  = d3.scaleLinear()
    .domain([0, keys.length*0.3, keys.length])
    .range(['red','blue','yellow']);

  var div = d3.select("body").append("div") 
    .attr("class", "tooltip")       
    .style("opacity", 0);

  g.append("g")
    .selectAll("g")
    .data(data)
    .enter().append("g")
      .attr("transform", function(d) { return "translate(" + x0(d[main]) + ",0)"; })
    .selectAll("rect")
    .data(function(d) { return keys.map(function(key) { return {key: key, value: d[key]}; }); })
    .enter().append("rect")
      .attr("x", function(d) { return x1(d.key); })
      .attr("y", function(d) { return y(d.value); })
      .on("mouseover", function(d, i){
            //console.log(nombres[i]);
            //var nombre = nombres[i];
            div.transition().delay(100)
                    .style('opacity', .8)
            div.html('<h6>'+d.key+'</h6><h6>'+d.value+'</h6>')
                     .style('left', (d3.event.pageX+20)+'px')
                     .style('top', (d3.event.pageY-60)+'px')

          tempColor = this.style.fill;
          d3.select(this)
                .transition()
                .style('opacity', .5)
                .style('fill', 'yellow');
        })
    .on("mouseout", function(d){
          div.transition()
                  .style('opacity', 0)
          d3.select(this)
                .transition()
                .delay(200)
                .duration(300)
                .style('opacity', 1)
                .style('fill', tempColor);
        })
      .transition().duration(5000)
      .delay( function(d,i) { return i * 100; })
      .attr("width", x1.bandwidth())
      .attr("height", function(d) { return height - y(d.value); })
      .attr("fill", function(d,i) { return colores2(i); });     

      

  g.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x0));

    g.append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(y).ticks(null, "s"))
    .append("text")
      .attr("x", 2)
      .attr("y", y(y.ticks().pop()) + 0.5)
      .attr("dy", "0.32em")
      .attr("fill", "#000")
      .attr("font-weight", "bold")
      .attr("text-anchor", "start")
      .text("");

  var legend = g.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "end")
    .selectAll("g")
    .data(keys.slice().reverse())
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", width - 19)
      .attr("width", 19)
      .attr("height", 19)
      .attr("fill", function(d,i){ return colores2(i); });

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9.5)
      .attr("dy", "0.32em")
      .text(function(d) { return d; });
});
