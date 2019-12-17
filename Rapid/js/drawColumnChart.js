var chart = am4core.create("columnChartdiv", am4charts.XYChart);
// Add data
var title = chart.titles.create();
title.text = "Another chart";
title.fontSize = 20;
title.fill = am4core.color("#fff")
title.fontWeight = 600;
title.marginTop = 20;
title.marginBottom = 20;

chart.data = [{"district": "Yuen Long",
"cases": 42.6},{"district": "Tuen Mun",
"cases": 38.3},{"district": "Kwai Tsing",
"cases": 23.3},{"district": "Southern",
"cases": 22.0},{"district": "Sham Shui Po",
"cases": 21.3},{"district": "Islands",
"cases": 21.0 },{"district": "Wong Tai Sin",
"cases": 20.1},{"district": "Wan Chai",
"cases": 18.7},{"district": "Eastern",
"cases": 18.2},{"district": "Sai Kung",
"cases": 17.8}];

// Create axes

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "district";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;

categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
    if (target.dataItem && target.dataItem.index & 2 == 2) {
        return dy + 25;
    }
    return dy;
});

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "cases";
series.dataFields.categoryX = "district";
series.name = "Cases";
series.labels.template.text = "{district}";
series.labels.template.fill = am4core.color("white");

series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
series.columns.template.fillOpacity = .8;

var columnTemplate = series.columns.template;
columnTemplate.strokeWidth = 2;
columnTemplate.strokeOpacity = 1;




// alert(chart.colors.getIndex(0));
// alert(chart.colors.getIndex(1));



