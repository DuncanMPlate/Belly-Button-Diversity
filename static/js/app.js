data = d3.json("data/samples.json").then(data=>console.log(data));

let trace = {
	y: data.samples,
	x: data.names,
	type: "bar"

}
let layout = {
	title: "Bar Chart"
};

Plotly.newPlot("plot", trace, layout);