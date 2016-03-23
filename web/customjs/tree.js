$(document).ready(
		function() {

			var canvas = d3.select("#noOfHost").append("svg").attr("width", 600)
					.attr("height", 450).append("g").attr("transform",
							"translate(50, 50)");

			// Create Tree Layout.
			var tree = d3.layout.tree().size([ 400, 400 ]);

			d3.json("customjs/treedata.json", function(data) {

				var nodes = tree.nodes(data);
				var links = tree.links(nodes);

				var node = canvas.selectAll(".node").data(nodes).enter()
						.append("g").attr("class", "node").attr(
								"transform",
								function(d) {
									return "translate(" + d.y + ", " + d.x
											+ ")";
								}); // swap d.x and d.y for vertical.

				node.append("circle").attr("r", 5).attr("fill", "steelblue");

				node.append("text").attr("fill", "black").attr("y",
						function(d, i) {
							return i + 15;
						}).text(function(d) {
					return d.name;
				})

				var diagonal = d3.svg.diagonal().projection(function(d) {
					return [ d.y, d.x ];
				}); // swap d.x and d.y for vertical.

				canvas.selectAll(".link").data(links).enter().append("path")
						.attr("class", "link").attr("fill", "none").attr(
								"stroke", "#ADADAD").attr("d", diagonal);
			});

		});