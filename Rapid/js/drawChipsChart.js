am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("chipsChartdiv", am4charts.PieChart);
    var title = chart.titles.create();
    title.text = "Chips Love";
    title.fontSize = 20;
    title.fill = am4core.color("#fff")
    title.fontWeight = 600;
    title.marginTop = 20;
    title.marginBottom = 20;
   // title.marginBottom = 30;
    // Add data
    chart.data = [{

        "country": "Lithuania",
        "litres": 501.9
    }, {
        "country": "Czechia",
        "litres": 301.9
    }, {
        "country": "Ireland",
        "litres": 201.1
    }, {
        "country": "Germany",
        "litres": 165.8
    }, {
        "country": "Australia",
        "litres": 139.9
    }, {
        "country": "Austria",
        "litres": 128.3
    }, {
        "country": "UK",
        "litres": 99
    }, {
        "country": "Belgium",
        "litres": 60
    }, {
        "country": "The Netherlands",
        "litres": 50

    }];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.ticks.template.disabled = true;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    //modify labels 
    pieSeries.labels.template.text = "{category}";
    pieSeries.labels.template.fill = am4core.color("white");
    
      
    
    
    
    
}); // end am4core.ready()