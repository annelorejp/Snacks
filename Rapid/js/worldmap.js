am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    
    // Set map definition
    chart.geodata = am4geodata_worldLow;
   
    // Set projection
    chart.projection = new am4maps.projections.Orthographic();
    chart.panBehavior = "rotateLongLat";
    chart.deltaLatitude = -20;
    chart.padding(20,20,20,20);
    
    
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;
      //polygonTemplate.propertyFields.fill = "fill";
    polygonSeries.heatRules.push({
        "property": "fill",
        "target": polygonSeries.mapPolygons.template,
        "min": am4core.color('"#ffffff"'),
        "max": am4core.color("#AAAA00")
      });
      
    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
     polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#C19A6B");
    polygonTemplate.stroke = am4core.color("#454a58");
    polygonTemplate.strokeWidth = 0.5;
    
    var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
    graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
    graticuleSeries.fitExtent = false;
    graticuleSeries.mapLines.template.line.stroke = chart.colors.getIndex(2);
    
    
    chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
     chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("brown");
    // Create hover state and set alternative fill color
     var hs = polygonTemplate.states.create("hover");
     hs.properties.fill = chart.colors.getIndex(2).brighten(-0.5);
    
    let animation;
    setTimeout(function(){
      animation = chart.animate({property:"deltaLongitude", to:100000}, 20000000);
    }, 3000)
    
    chart.seriesContainer.events.on("down", function(){
    if(animation){
      animation.stop();
    }
    })
   
    
    var circleSeries = chart.series.push(new am4maps.MapPolygonSeries())
    var circleTemplate = circleSeries.mapPolygons.template;
    circleTemplate.fill = am4core.color("brown");
    circleTemplate.strokeOpacity = 0;
    circleTemplate.fillOpacity = 0.75;
    
  
    
    }); // end am4core.ready()
    