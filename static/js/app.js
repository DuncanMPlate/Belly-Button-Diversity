d3.json("data/samples.json").then((data) => {
	var names_list = data.names;
	let dropdownMenu = d3.select("#selDataset");
	let names = dropdownMenu.property("value");
	names_list.array.forEach(names => {dropdownMenu.append("option").text(names).property('value', names);
		
	});
	let data_names = names_list[0];
	names_chart = data_names;
});
function names_chart(data_names) {
	d3.json('data/samples.json').then((data) => {
	let demos = data.metadata.filter((element) => element["id"]==data_names);
	let samples = data.samples.filter((element) => element["id"]==data_names);
	let samples_quantities = samples[0].samples_quantities;
	let otu_ids = samples[0].otu_ids;
	let id = [];
	for (i=0; i < otu_ids.length; i++) {
		id.push(`OTU_ID:${otu_ids[i]}`);
	};
	let otu_label = samples[0].otu_label.slice(0,10);
	let barCharts = {
		"id": id,
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
		title: "Bar Chart",
		yaxis: {"trickangle": -45},
		hovermode: 'closest'
	};
	let config = {
		responsive: true
	}
	Plotly.newPlot("bar", bar_trace, layout);
};
d3.selectAll("#selDataset").on("change", getData);


function getData() {
  let data_names = d3.select("#selDataset").node().value;
  // Assign the value of the dropdown menu option to a variable
  names_chart(data_names);
  // Initialize an empty array for the country's data
//  var data = [];

  //if (dataset == 'us') {
   //   data = us;
  //}
  //else if (dataset == 'uk') {
    //  data = uk;
  //}
  //else if (dataset == 'canada') {
    //  data = canada;
  //}
  // Call function to update the chart
  //updatePlotly(data);
//}

// Update the restyled plot's values
//function updatePlotly(newdata) {
  //Plotly.restyle("pie", "values", [newdata]);
}
