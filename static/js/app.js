data = d3.json("data/samples.json").then(data=>console.log(data));

let trace = {
	y: data.samples,
	x: data.names,
	type: "bar"

}
let layout = {
	title: "Bar Chart"
};

Plotly.newPlot("bar", trace, layout);

//d3.selectAll("#selDataset").on("change", getData);


//function getData() {
  //var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  //var dataset = dropdownMenu.property("value");
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
//}
