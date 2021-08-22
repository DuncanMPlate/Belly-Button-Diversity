data = d3.json("data/samples.json").then(data=>console.log(data));

let trace = {
	x: data.samples,
	y: data.names

}
let layout = {
	title: "Bar Chart"
};

Plotly.newPlot("plot", trace, layout);