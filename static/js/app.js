d3.json("./data/samples.json").then((data) => {
	var names_list = data.names;
	let dropdownMenu = d3.select("#selDataset");
	let names = dropdownMenu.property("value");
	names_list.forEach(name => {dropdownMenu.append("option").text(name).property('value', name);
		
	});
	let chart_data = names_list[0];
	//fill_charts = chart_data;
});
function fill_charts(chart_data) {
	d3.json('./data/samples.json').then((data) => {
	let demo_data = data.metadata.filter((demo) => demo["id"]==chart_data);
	console.log(demo_data);
	let samples_names = data.samples.filter((sample) => sample["id"]==chart_data);
	console.log(samples_names);
	let samples_quantities = samples_names[0].samples_quantities;
	console.log(samples_quantities);
	let otu_ids = samples_names[0].otu_ids;
	let id_call = [];
	for (i=0; i < otu_ids.length; i++) {
		id_call.push(`OTU_ID:${otu_ids[i]}`);
	};
	let otu_labels = samples_names[0].otu_labels.slice(0,10);
	console.log(otu_labels);
	let allCharts = {
		"id": id_call,
		"quantities": samples_quantities,
		"hovertext": otu_labels
	};
	barChart(allCharts);
})};
function barChart(allCharts) {
	let bar_trace = {
		x: allCharts.id.slice(0,10).reverse(),
		y: allCharts.quantities.slice(0,10).reverse(),
		orientation: "h",
		text: barCharts.hovertext.slice(0,10).reverse(),
		type: "bar"

	}
	let layout = {
		title: "Belly Button Data",
		yaxis: {"trickangle": -45},
		hovermode: 'closest'
	};
	let config = {
		responsive: true
	}
	Plotly.newPlot("bar", bar_trace, layout);
};
//function bubbleChart(allCharts) {
	//let bubble_trace = {
		//x: allCharts.id,
		//y: allCharts.quantities,
		//text: allCharts.hovertext,
		//mode: 'markers',
		//marker: {size: allCharts.quantities, color: allCharts.id}
	//};
	//let layout = {
		//title: " IDs and Sample Values",

//	}
//};
d3.selectAll("#selDataset").on("change", optionChanged);


function optionChanged() {
  let chart_data = d3.select("#selDataset").node().value;
 
  fill_charts(chart_data);
  //updatePlotly(barCharts);
 
}
