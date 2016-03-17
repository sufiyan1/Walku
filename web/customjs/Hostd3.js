$(document).ready(function(){

//alert("inside");
 var dataset =  [ {label: 'Host up', value: '3000'},
 		    {label: 'Host Down', value: '100'},
 		    {label: 'SSH Able', value: '2500'},
 		    {label: 'No SSH', value: '500'}];
 var width=500;
 var height=300;
 radius=Math.min(width,height)/2;
 
 var color=d3.scale.category20();
 
 var pie=d3.layout.pie().value(function(d){return d.value;}).sort(null);
 
 var arc=d3.svg.arc().innerRadius(radius-100).outerRadius(radius-50);
 
 var svg = d3.select("#HostUpDown-container").append("svg")
     .attr("width", width)
     .attr("height", height)
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
 
 var path = svg.selectAll("path")
     .data(pie(dataset))
   .enter().append("path")
     .attr("fill", function(d, i) { return color(d.data.label); })
    .attr("d", arc);
    
    
   // bar chart
   
   var dataHost = [{'center':'NDC', 'value':'1000'},
   {'center':'EDC', 'value':'500'},
   {'center':'DFW', 'value':'800'},
   {'center':'DAL', 'value':'200'}];
   
   var margin = {top: 20, right: 20, bottom: 30, left: 40},
       width1 = 960 - margin.left - margin.right,
    height1 = 500 - margin.top - margin.bottom;
   
       
   var x = d3.scale.ordinal()
    .rangeRoundBands([0, width1],0.1);    
   
   var y = d3.scale.linear()
             .range([height1, 0]);
             
    var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg1 = d3.select("#hostContainer").append("svg")
    .attr("width", width1 + margin.left + margin.right)
    .attr("height", height1 + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
   
   var chart = d3.select(".chart")
       .attr("width", width1)
       .attr("height", height1 );
       
    x.domain(dataHost.map(function(d) { return d.center; }));
    y.domain([0, d3.max(dataHost, function(d) { return d.value; })]);    
       
  
   
   svg1.append("g")
         .attr("class", "x axis")
         .attr("transform", "translate(0," + height1 + ")")
         .call(xAxis);
   
     svg1.append("g")
         .attr("class", "y axis")
         .call(yAxis)
       .append("text")
         .attr("transform", "rotate(-90)")
         .attr("y", 6)
         .attr("dy", ".71em")
         .style("text-anchor", "end")
         .text("No of Hosts");
   
     svg1.selectAll(".bar")
         .data(dataHost)
       .enter().append("rect")
         .attr("class", "bar")
         .attr("x", function(d) { return x(d.center); })
         .attr("width", x.rangeBand())
         .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height1 - y(d.value); });
});