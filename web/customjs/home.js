$(document)
		.ready(
				function() {

					var pie = new d3pie(
							"pieChart",
							{
								"header" : {
									"title" : {
										"text" : "Configuration Management Running",
										"color" : "#000000",
										"fontSize" : 24,
										"font" : "Arial"
									},
									"subtitle" : {
										"text" : "A full pie chart to show off Configuration Management Running.",
										"color" : "#999999",
										"fontSize" : 12,
										"font" : "Arial"
									},
									"titleSubtitlePadding" : 9
								},
								"footer" : {
									// "text": "Walmart",
									"color" : "#3200ff",
									"fontSize" : 10,
									"font" : "open sans",
									"location" : "bottom-left"
								},
								"size" : {
									"canvasWidth" : 2200,
									"canvasHeight" : 400,
									"pieOuterRadius" : "100%"
								},
								"data" : {
									"sortOrder" : "value-desc",
									"content" : [ {
										"label" : "Chef",
										"value" : 78327,
										"color" : "#2081c1"
									}, {
										"label" : "Puppet",
										"value" : 67706,
										"color" : "#64a61f"
									}, {
										"label" : "Ansible",
										"value" : 36344,
										"color" : "#7b6688"
									}, {
										"label" : "Salt",
										"value" : 32170,
										"color" : "#a05c56"
									} ]
								},
								"labels" : {
									"outer" : {
										"pieDistance" : 25
									},
									"inner" : {
										"hideWhenLessThanPercentage" : 3
									},
									"mainLabel" : {
										"color" : "#080707",
										"fontSize" : 11
									},
									"percentage" : {
										"color" : "#ffffff",
										"decimalPlaces" : 0
									},
									"value" : {
										"color" : "#b81a1a",
										"fontSize" : 11
									},
									"lines" : {
										"enabled" : true
									},
									"truncation" : {
										"enabled" : true
									}
								},
								"tooltips" : {
									"enabled" : true,
									"type" : "placeholder",
									"string" : "{label}: {value}, {percentage}%",
									"styles" : {
										"fadeInSpeed" : 829,
										"backgroundOpacity" : 0.63
									}
								},
								"effects" : {
									"pullOutSegmentOnClick" : {
										"effect" : "elastic",
										"speed" : 400,
										"size" : 8
									}
								},
								"misc" : {
									"gradient" : {
										"enabled" : true,
										"percentage" : 100
									}
								},
								"callbacks" : {}
							});

					var pie = new d3pie("donutChart", {
						"header" : {
							"title" : {
								"text" : "HOST Up/Down",
								"color" : "#000000",
								"fontSize" : 24,
								"font" : "Arial"
							},
							"subtitle" : {
								"text" : "HOST Up/Down",
								"color" : "#999999",
								"fontSize" : 12,
								"font" : "Arial"
							},
							"titleSubtitlePadding" : 9
						},
						"footer" : {
							"color" : "#999999",
							"fontSize" : 10,
							"font" : "open sans",
							"location" : "bottom-right"
						},
						"size" : {
							"canvasWidth" : 590,
							"pieInnerRadius" : "60%",
							"pieOuterRadius" : "79%"
						},
						"data" : {
							"sortOrder" : "value-desc",
							"smallSegmentGrouping" : {
								"enabled" : true,
								"value" : 0
							},
							"content" : [ {
								"label" : "Hostup",
								"value" : 78327,
								"color" : "#49FF0D"
							}, {
								"label" : "Host down",
								"value" : 67706,
								"color" : "#8A9AF2"
							}, {
								"label" : "SSH able",
								"value" : 36344,
								"color" : "#FF8000"
							}, {
								"label" : "No SSh",
								"value" : 32170,
								"color" : "#248838"
							} ]
						},
						"labels" : {
							"outer" : {
								"pieDistance" : 32
							},
							"inner" : {
								"hideWhenLessThanPercentage" : 3
							},
							"mainLabel" : {
								"fontSize" : 11
							},
							"percentage" : {
								"color" : "#ffffff",
								"decimalPlaces" : 0
							},
							"value" : {
								"color" : "#adadad",
								"fontSize" : 11
							},
							"lines" : {
								"enabled" : true
							},
							"truncation" : {
								"enabled" : true
							}
						},
						"effects" : {
							"pullOutSegmentOnClick" : {
								"speed" : 400,
								"size" : 8
							}
						},
						"misc" : {
							"gradient" : {
								"enabled" : true,
								"percentage" : 100
							}
						}
					});

				});