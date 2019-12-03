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

      polygonSeries.data = 
[ 
  {"name": 'Afghanistan', "id": 'AF', "value": 100}, 
  {"name": 'Åland Islands', "id": 'AX', "value": 100}, 
  {"name": 'Albania', "id": 'AL', "value": 100}, 
  {"name": 'Algeria', "id": 'DZ', "value": 100}, 
  {"name": 'American Samoa', "id": 'AS', "value": 100}, 
  {"name": 'AndorrA', "id": 'AD', "value": 100}, 
  {"name": 'Angola', "id": 'AO', "value": 100}, 
  {"name": 'Anguilla', "id": 'AI', "value": 100}, 
  {"name": 'Antarctica', "id": 'AQ', "value": 100}, 
  {"name": 'Antigua and Barbuda', "id": 'AG', "value": 100}, 
  {"name": 'Argentina', "id": 'AR', "value": 633.9}, 
  {"name": 'Armenia', "id": 'AM', "value": 100}, 
  {"name": 'Aruba', "id": 'AW', "value": 100}, 
  {"name": 'Australia', "id": 'AU', "value": 100}, 
  {"name": 'Austria', "id": 'AT', "value": 100}, 
  {"name": 'Azerbaijan', "id": 'AZ', "value": 100}, 
  {"name": 'Bahamas', "id": 'BS', "value": 100}, 
  {"name": 'Bahrain', "id": 'BH', "value": 100}, 
  {"name": 'Bangladesh', "id": 'BD', "value": 100}, 
  {"name": 'Barbados', "id": 'BB', "value": 100}, 
  {"name": 'Belarus', "id": 'BY', "value": 100}, 
  {"name": 'Belgium', "id": 'BE', "value": 100}, 
  {"name": 'Belize', "id": 'BZ', "value": 7.6}, 
  {"name": 'Benin', "id": 'BJ', "value": 100}, 
  {"name": 'Bermuda', "id": 'BM', "value": 100}, 
  {"name": 'Bhutan', "id": 'BT', "value": 100}, 
  {"name": 'Bolivia', "id": 'BO', "value": 282.0}, 
  {"name": 'Bosnia and Herzegovina', "id": 'BA', "value": 100}, 
  {"name": 'Botswana', "id": 'BW', "value": 100}, 
  {"name": 'Bouvet Island', "id": 'BV', "value": 100}, 
  {"name": 'Brazil', "id": 'BR', "value": 1145.2}, 
  {"name": 'British Indian Ocean Territory', "id": 'IO', "value": 100}, 
  {"name": 'Brunei Darussalam', "id": 'BN', "value": 100}, 
  {"name": 'Bulgaria', "id": 'BG', "value": 100}, 
  {"name": 'Burkina Faso', "id": 'BF', "value": 100}, 
  {"name": 'Burundi', "id": 'BI', "value": 100}, 
  {"name": 'Cambodia', "id": 'KH', "value": 100}, 
  {"name": 'Cameroon', "id": 'CM', "value": 100}, 
  {"name": 'Canada', "id": 'CA', "value": 3635.1}, 
  {"name": 'Cape Verde', "id": 'CV', "value": 100}, 
  {"name": 'Cayman Islands', "id": 'KY', "value": 100}, 
  {"name": 'Central African Republic', "id": 'CF', "value": 100}, 
  {"name": 'Chad', "id": 'TD', "value": 100}, 
  {"name": 'Chile', "id": 'CL', "value": 683.50}, 
  {"name": 'China', "id": 'CN', "value": 100}, 
  {"name": 'Christmas Island', "id": 'CX', "value": 100}, 
  {"name": 'Cocos (Keeling) Islands', "id": 'CC', "value": 100}, 
  {"name": 'Colombia', "id": 'CO', "value": 1101.8}, 
  {"name": 'Comoros', "id": 'KM', "value": 100}, 
  {"name": 'Congo', "id": 'CG', "value": 100}, 
  {"name": 'Congo, The Democratic Republic of the', "id": 'CD', "value": 100}, 
  {"name": 'Cook Islands', "id": 'CK', "value": 100}, 
  {"name": 'Costa Rica', "id": 'CR', "value": 161.5}, 
  {"name": 'Cote D\'Ivoire', "id": 'CI', "value": 100}, 
  {"name": 'Croatia', "id": 'HR', "value": 100}, 
  {"name": 'Cuba', "id": 'CU', "value": 170.3}, 
  {"name": 'Cyprus', "id": 'CY', "value": 100}, 
  {"name": 'Czech Republic', "id": 'CZ', "value": 100}, 
  {"name": 'Denmark', "id": 'DK', "value": 100}, 
  {"name": 'Djibouti', "id": 'DJ', "value": 100}, 
  {"name": 'Dominica', "id": 'DM', "value": 100}, 
  {"name": 'Dominican Republic', "id": 'DO', "value": 177.5}, 
  {"name": 'Ecuador', "id": 'EC', "value": 327.3}, 
  {"name": 'Egypt', "id": 'EG', "value": 100}, 
  {"name": 'El Salvador', "id": 'SV', "value": 122.6}, 
  {"name": 'Equatorial Guinea', "id": 'GQ', "value": 100}, 
  {"name": 'Eritrea', "id": 'ER', "value": 100}, 
  {"name": 'Estonia', "id": 'EE', "value": 100}, 
  {"name": 'Ethiopia', "id": 'ET, "value": 100'}, 
  {"name": 'Falkland Islands (Malvinas)', "id": 'FK', "value": 100}, 
  {"name": 'Faroe Islands', "id": 'FO', "value": 100}, 
  {"name": 'Fiji', "id": 'FJ', "value": 100}, 
  {"name": 'Finland', "id": 'FI', "value": 100}, 
  {"name": 'France', "id": 'FR', "value": 2393.0}, 
  {"name": 'French Guiana', "id": 'GF', "value": 100}, 
  {"name": 'French Polynesia', "id": 'PF', "value": 100}, 
  {"name": 'French Southern Territories', "id": 'TF', "value": 100}, 
  {"name": 'Gabon', "id": 'GA', "value": 100}, 
  {"name": 'Gambia', "id": 'GM', "value": 100}, 
  {"name": 'Georgia', "id": 'GE', "value": 100}, 
  {"name": 'Germany', "id": 'DE', "value": 100}, 
  {"name": 'Ghana', "id": 'GH', "value": 100}, 
  {"name": 'Gibraltar', "id": 'GI', "value": 100}, 
  {"name": 'Greece', "id": 'GR', "value": 100}, 
  {"name": 'Greenland', "id": 'GL', "value": 100}, 
  {"name": 'Grenada', "id": 'GD', "value": 100}, 
  {"name": 'Guadeloupe', "id": 'GP', "value": 100}, 
  {"name": 'Guam', "id": 'GU', "value": 100}, 
  {"name": 'Guatemala', "id": 'GT', "value": 589.3}, 
  {"name": 'Guernsey', "id": 'GG', "value": 100}, 
  {"name": 'Guinea', "id": 'GN', "value": 100}, 
  {"name": 'Guinea-Bissau', "id": 'GW', "value": 100}, 
  {"name": 'Guyana', "id": 'GY', "value": 3.5}, 
  {"name": 'Haiti', "id": 'HT', "value": 78.5}, 
  {"name": 'Heard Island and Mcdonald Islands', "id": 'HM', "value": 100}, 
  {"name": 'Holy See (Vatican City State)', "id": 'VA', "value": 100}, 
  {"name": 'Honduras', "id": 'HN', "value": 155.1}, 
  {"name": 'Hong Kong', "id": 'HK', "value": 100}, 
  {"name": 'Hungary', "id": 'HU', "value": 100}, 
  {"name": 'Iceland', "id": 'IS', "value": 34.2}, 
  {"name": 'India', "id": 'IN', "value": 100}, 
  {"name": 'Indonesia', "id": 'ID', "value": 100}, 
  {"name": 'Iran, Islamic Republic Of', "id": 'IR', "value": 100}, 
  {"name": 'Iraq', "id": 'IQ', "value": 100}, 
  {"name": 'Ireland', "id": 'IE', "value": 100}, 
  {"name": 'Isle of Man', "id": 'IM', "value": 100}, 
  {"name": 'Israel', "id": 'IL', "value": 100}, 
  {"name": 'Italy', "id": 'IT', "value": 100}, 
  {"name": 'Jamaica', "id": 'JM', "value": 69.3}, 
  {"name": 'Japan', "id": 'JP', "value": 100}, 
  {"name": 'Jersey', "id": 'JE', "value": 100}, 
  {"name": 'Jordan', "id": 'JO', "value": 100}, 
  {"name": 'Kazakhstan', "id": 'KZ', "value": 100}, 
  {"name": 'Kenya', "id": 'KE', "value": 100}, 
  {"name": 'Kiribati', "id": 'KI', "value": 100}, 
  {"name": 'Korea, Democratic People\'S Republic of', "id": 'KP', "value": 100}, 
  {"name": 'Korea, Republic of', "id": 'KR', "value": 100}, 
  {"name": 'Kuwait', "id": 'KW', "value": 100}, 
  {"name": 'Kyrgyzstan', "id": 'KG', "value": 100}, 
  {"name": 'Lao People\'S Democratic Republic', "id": 'LA', "value": 100}, 
  {"name": 'Latvia', "id": 'LV', "value": 100}, 
  {"name": 'Lebanon', "id": 'LB', "value": 100}, 
  {"name": 'Lesotho', "id": 'LS', "value": 100}, 
  {"name": 'Liberia', "id": 'LR', "value": 100}, 
  {"name": 'Libyan Arab Jamahiriya', "id": 'LY', "value": 100}, 
  {"name": 'Liechtenstein', "id": 'LI', "value": 100}, 
  {"name": 'Lithuania', "id": 'LT', "value": 100}, 
  {"name": 'Luxembourg', "id": 'LU', "value": 100}, 
  {"name": 'Macao', "id": 'MO', "value": 100}, 
  {"name": 'Macedonia, The Former Yugoslav Republic of', "id": 'MK', "value": 100}, 
  {"name": 'Madagascar', "id": 'MG', "value": 100}, 
  {"name": 'Malawi', "id": 'MW', "value": 100}, 
  {"name": 'Malaysia', "id": 'MY', "value": 100}, 
  {"name": 'Maldives', "id": 'MV', "value": 100}, 
  {"name": 'Mali', "id": 'ML', "value": 100}, 
  {"name": 'Malta', "id": 'MT', "value": 100}, 
  {"name": 'Marshall Islands', "id": 'MH', "value": 100}, 
  {"name": 'Martinique', "id": 'MQ', "value": 100}, 
  {"name": 'Mauritania', "id": 'MR', "value": 100}, 
  {"name": 'Mauritius', "id": 'MU', "value": 100}, 
  {"name": 'Mayotte', "id": 'YT', "value": 100}, 
  {"name": 'Mexico', "id": 'MX', "value": 384.1}, 
  {"name": 'Micronesia, Federated States of', "id": 'FM', "value": 100}, 
  {"name": 'Moldova, Republic of', "id": 'MD', "value": 100}, 
  {"name": 'Monaco', "id": 'MC', "value": 100}, 
  {"name": 'Mongolia', "id": 'MN', "value": 100}, 
  {"name": 'Montserrat', "id": 'MS', "value": 100}, 
  {"name": 'Morocco', "id": 'MA', "value": 534.7}, 
  {"name": 'Mozambique', "id": 'MZ', "value": 100}, 
  {"name": 'Myanmar', "id": 'MM', "value": 100}, 
  {"name": 'Namibia', "id": 'NA', "value": 100}, 
  {"name": 'Nauru', "id": 'NR', "value": 100}, 
  {"name": 'Nepal', "id": 'NP', "value": 100}, 
  {"name": 'Netherlands', "id": 'NL', "value": 100}, 
  {"name": 'Netherlands Antilles', "id": 'AN', "value": 100}, 
  {"name": 'New Caledonia', "id": 'NC', "value": 100}, 
  {"name": 'New Zealand', "id": 'NZ', "value": 100}, 
  {"name": 'Nicaragua', "id": 'NI', "value":65.7}, 
  {"name": 'Niger', "id": 'NE', "value": 100}, 
  {"name": 'Nigeria', "id": 'NG', "value": 100}, 
  {"name": 'Niue', "id": 'NU', "value": 100}, 
  {"name": 'Norfolk Island', "id": 'NF', "value": 100}, 
  {"name": 'Northern Mariana Islands', "id": 'MP', "value": 100}, 
  {"name": 'Norway', "id": 'NO', "value": 100}, 
  {"name": 'Oman', "id": 'OM', "value": 100}, 
  {"name": 'Pakistan', "id": 'PK', "value": 100}, 
  {"name": 'Palau', "id": 'PW', "value": 100}, 
  {"name": 'Palestinian Territory, Occupied', "id": 'PS', "value": 100}, 
  {"name": 'Panama', "id": 'PA', "value": 130.0}, 
  {"name": 'Papua New Guinea', "id": 'PG', "value": 100}, 
  {"name": 'Paraguay', "id": 'PY', "value": 110.4}, 
  {"name": 'Peru', "id": 'PE', "value": 855.6}, 
  {"name": 'Philippines', "id": 'PH', "value": 100}, 
  {"name": 'Pitcairn', "id": 'PN', "value": 100}, 
  {"name": 'Poland', "id": 'PL', "value": 100}, 
  {"name": 'Portugal', "id": 'PT', "value": 100}, 
  {"name": 'Puerto Rico', "id": 'PR', "value": 100}, 
  {"name": 'Qatar', "id": 'QA', "value": 100}, 
  {"name": 'Reunion', "id": 'RE', "value": 100}, 
  {"name": 'Romania', "id": 'RO', "value": 100}, 
  {"name": 'Russian Federation', "id": 'RU', "value": 100}, 
  {"name": 'RWANDA', "id": 'RW', "value": 100}, 
  {"name": 'Saint Helena', "id": 'SH', "value": 100}, 
  {"name": 'Saint Kitts and Nevis', "id": 'KN', "value": 100}, 
  {"name": 'Saint Lucia', "id": 'LC', "value": 100}, 
  {"name": 'Saint Pierre and Miquelon', "id": 'PM', "value": 100}, 
  {"name": 'Saint Vincent and the Grenadines', "id": 'VC', "value": 100}, 
  {"name": 'Samoa', "id": 'WS', "value": 100}, 
  {"name": 'San Marino', "id": 'SM', "value": 100}, 
  {"name": 'Sao Tome and Principe', "id": 'ST', "value": 100}, 
  {"name": 'Saudi Arabia', "id": 'SA', "value": 100}, 
  {"name": 'Senegal', "id": 'SN', "value": 144.1}, 
  {"name": 'Serbia and Montenegro', "id": 'CS', "value": 100}, 
  {"name": 'Seychelles', "id": 'SC', "value": 100}, 
  {"name": 'Sierra Leone', "id": 'SL', "value": 50.6}, 
  {"name": 'Singapore', "id": 'SG', "value": 100}, 
  {"name": 'Slovakia', "id": 'SK', "value": 100}, 
  {"name": 'Slovenia', "id": 'SI', "value": 100}, 
  {"name": 'Solomon Islands', "id": 'SB', "value": 100}, 
  {"name": 'Somalia', "id": 'SO', "value": 100}, 
  {"name": 'South Africa', "id": 'ZA', "value": 100}, 
  {"name": 'South Georgia and the South Sandwich Islands', "id": 'GS', "value": 100}, 
  {"name": 'Spain', "id": 'ES', "value": 100}, 
  {"name": 'Sri Lanka', "id": 'LK', "value": 100}, 
  {"name": 'Sudan', "id": 'SD', "value": 100}, 
  {"name": 'Suriname', "id": 'SR', "value": 11.4}, 
  {"name": 'Svalbard and Jan Mayen', "id": 'SJ', "value": 100}, 
  {"name": 'Swaziland', "id": 'SZ', "value": 100}, 
  {"name": 'Sweden', "id": 'SE', "value": 100}, 
  {"name": 'Switzerland', "id": 'CH', "value": 100}, 
  {"name": 'Syrian Arab Republic', "id": 'SY', "value": 100}, 
  {"name": 'Taiwan, Province of China', "id": 'TW', "value": 100}, 
  {"name": 'Tajikistan', "id": 'TJ', "value": 100}, 
  {"name": 'Tanzania, United Republic of', "id": 'TZ', "value": 100}, 
  {"name": 'Thailand', "id": 'TH', "value": 100}, 
  {"name": 'Timor-Leste', "id": 'TL', "value": 100}, 
  {"name": 'Togo', "id": 'TG', "value": 100}, 
  {"name": 'Tokelau', "id": 'TK', "value": 100}, 
  {"name": 'Tonga', "id": 'TO', "value": 100}, 
  {"name": 'Trinidad and Tobago', "id": 'TT', "value": 100}, 
  {"name": 'Tunisia', "id": 'TN', "value": 100}, 
  {"name": 'Turkey', "id": 'TR', "value": 100}, 
  {"name": 'Turkmenistan', "id": 'TM', "value": 100}, 
  {"name": 'Turks and Caicos Islands', "id": 'TC', "value": 100}, 
  {"name": 'Tuvalu', "id": 'TV', "value": 100}, 
  {"name": 'Uganda', "id": 'UG', "value": 100}, 
  {"name": 'Ukraine', "id": 'UA', "value": 100}, 
  {"name": 'United Arab Emirates', "id": 'AE', "value": 100}, 
  {"name": 'United Kingdom', "id": 'GB', "value": 100}, 
  {"name": 'United States', "id": 'US', "value": 66847.0}, 
  {"name": 'United States Minor Outlying Islands', "id": 'UM', "value": 100}, 
  {"name": 'Uruguay', "id": 'UY', "value": 195.2}, 
  {"name": 'Uzbekistan', "id": 'UZ', "value": 100}, 
  {"name": 'Vanuatu', "id": 'VU', "value": 100}, 
  {"name": 'Venezuela', "id": 'VE', "value": 100}, 
  {"name": 'Viet Nam', "id": 'VN', "value": 100}, 
  {"name": 'Virgin Islands, British', "id": 'VG', "value": 100}, 
  {"name": 'Virgin Islands, U.S.', "id": 'VI', "value": 100}, 
  {"name": 'Wallis and Futuna', "id": 'WF', "value": 100}, 
  {"name": 'Western Sahara', "id": 'EH', "value": 100}, 
  {"name": 'Yemen', "id": 'YE', "value": 100}, 
  {"name": 'Zambia', "id": 'ZM', "value": 100}, 
  {"name": 'Zimbabwe', "id": 'ZW', "value": 100} 
];
    
    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
     polygonTemplate.tooltipText = "{name}:{value}";
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
    