d3.json("./data/samples.json").then((data) => {
	var names_list = data.names;
	let dropdownMenu = d3.select("#selDataset");
	let names = dropdownMenu.property("value");
	names_list.forEach(name => {dropdownMenu.append("option").text(name).property('value', name);
		
	});
	let data_names = names_list[0];
	fill_charts = data_names;
});
function fill_charts(data_names) {
	d3.json('./data/samples.json').then((data) => {
	//let demo_data = data.metadata.filter((demo) => demo["id"]==data_names);
	let samples_names = data.samples.filter((sample) => sample["id"]==data_names);
	let samples_quantities = samples_names[0].samples_quantities;
	let otu_ids = samples_names[0].otu_ids;
	let id_call = [];
	for (i=0; i < otu_ids.length; i++) {
		id_call.push(`OTU_ID:${otu_ids[i]}`);
	};
	let otu_label = samples_names[0].otu_label.slice(0,10);
	let barCharts = {
		"id": id_call,
		"quantities": samples_quantities,
		"hovertext": otu_label
	};
	barChart(barCharts);
})};
function barChart(barCharts) {
	let bar_trace = {
		x: barCharts.id.slice(0,10).reverse(),
		y: barCharts.quantities.slice(0,10).reverse(),
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
d3.selectAll("#selDataset").on("change", optionChanged);


function optionChanged() {
  let data_names = d3.select("#selDataset").node().value;
 
  fill_charts(data_names);
  updatePlotly(barCharts);
 
}
