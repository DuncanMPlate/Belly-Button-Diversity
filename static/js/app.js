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
	//console.log(demo_data);
	let samples_names = data.samples.filter((sample) => sample["id"]==chart_data);
	//console.log(samples_names);
	let samples_quantities = samples_names[0];
	//console.log(samples_quantities);
	let otu_ids = samples_quantities.otu_ids;
	console.log(otu_ids);
	//let id_call = [];
	//for (i=0; i < otu_ids.length; i++) {
		//id_call.push(`OTU_ID:${otu_ids[i]}`);
	//};
	let otu_labels = samples_quantities.otu_labels;
	console.log(otu_labels);
	//let allCharts = {
		//"id": id_call,
		//"quantities": samples_quantities,
		//"hovertext": otu_labels
	//};
	let sample_values = samples_quantities.sample_values;
	console.log(sample_values);
	let bar_trace = [{
		x: sample_values.slice(0,10).reverse(),
		y: otu_ids.slice(0,10).map(otu_ids=>`otu${otu_ids}`).reverse(),
		text: otu_labels.slice(0,10).reverse(),
		orientation: "h",
		type: "bar"

	}];
	let layout = {
		title: "Belly Button Data",
		yaxis: {"trickangle": -45},
		hovermode: 'closest'
	};
	//let config = {
		//responsive: true
	//};
	Plotly.newPlot("bar", bar_trace, layout);

	let bubble_data = [{
		x: otu_ids,
		y: sample_values,
		text: otu_labels,
		mode: "markers",
		marker: {size: sample_values, color: otu_ids},


	}];
	Plotly.newPlot("bubble", bubble_data);
	})};
//function bubbleChart(allCharts) {
	//let bubble_trace = {
		//x: allCharts.id,
		//y: allCharts.quantities,
		//text: allCharts.hovertext,
		//mode: 'markers',
		//
	//};
	//let layout = {
		//title: " IDs and Sample Values",

//	}
//};
//d3.selectAll("#selDataset").on("change", optionChanged);
function getMetaData(chart_data) {
	d3.json('./data/samples.json').then((data) => {
	let demo_data = data.metadata.filter((demo) => demo["id"]==chart_data);
	let demographic = demo_data[0];
	let display = d3.select("#sample-metadata");
	display.html("");
	Object.entries(demographic).forEach(([key,value])=>{
		//console.log(key,value);
		display.append("h6").text(`${key},${value}`);
	});

})};

function optionChanged(chart_data) {
  //let chart_data = d3.select("#selDataset").node().value;
 	//console.log(chart_data);
  fill_charts(chart_data);
  getMetaData(chart_data);
  //updatePlotly(barCharts);
 
};
