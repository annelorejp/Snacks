am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("pretzelChartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    let title = chart.titles.create();
    title.text = "Pretzel chart";
    title.fontSize = 20;
    title.fill = am4core.color("#fff")
    title.fontWeight = 600;
    title.marginTop = 20;
    title.marginBottom = 20;

    
    chart.data = [
      {
        country: "Lithuania",
        litres: 501.9
      },
      {
        country: "Czech Republic",
        litres: 301.9
      },
      {
        country: "Ireland",
        litres: 201.1
      },
      {
        country: "Germany",
        litres: 165.8
      },
      {
        country: "Australia",
        litres: 139.9
      },
      {
        country: "Austria",
        litres: 128.3
      }
    ];
    
    chart.innerRadius = am4core.percent(40);
    chart.depth = 120;
    
    
    var series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.depthValue = "litres";
    series.dataFields.category = "country";
    series.slices.template.cornerRadius = 5;
    series.colors.step = 3;
    
    }); // end am4core.ready()