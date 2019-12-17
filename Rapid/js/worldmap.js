am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("globeChartdiv", am4maps.MapChart);
    
    // Set map definition
    chart.geodata = am4geodata_worldLow;
   
    // Set projection
    chart.projection = new am4maps.projections.Orthographic();
    chart.panBehavior = "rotateLongLat";
    chart.deltaLatitude = -20;
    chart.padding(20,20,20,20);
    
    
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    // Make map load polygon data from GeoJSON
    polygonSeries.useGeodata = true;
   
      //Colour gradient
      polygonSeries.heatRules.push({
        "property": "fill",
        "target": polygonSeries.mapPolygons.template,
        "min": am4core.color('#F5D0A9'),
        "max": am4core.color("#DFAD74")
      });

      // Set custom data
      polygonSeries.data = 
[ 
  {"name": 'Åland Islands', "id": 'AX'}, 
  {"name": 'Albania', "id": 'AL', "value": 60.2}, 
  {"name": 'Algeria', "id": 'DZ', "value": 790.6}, 
  {"name": 'American Samoa', "id": 'AS'}, 
  {"name": 'Andorra', "id": 'AD'}, 
  {"name": 'Angola', "id": 'AO', "value": 777.9}, 
  {"name": 'Anguilla', "id": 'AI'}, 
  {"name": 'Antarctica', "id": 'AQ'}, 
  {"name": 'Antigua and Barbuda', "id": 'AG'}, 
  {"name": 'Argentina', "id": 'AR'}, 
  {"name": 'Armenia', "id": 'AM', "value": 53.7}, 
  {"name": 'Aruba', "id": 'AW'}, 
  {"name": 'Australia', "id": 'AU', "value": 1501.9}, 
  {"name": 'Austria', "id": 'AT', "value": 385.2}, 
  {"name": 'Azerbaijan', "id": 'AZ', "value": 147.3}, 
  {"name": 'Bahamas', "id": 'BS'}, 
  {"name": 'Bahrain', "id": 'BH'}, 
  {"name": 'Bangladesh', "id": 'BD', "value": 1405.1}, 
  {"name": 'Barbados', "id": 'BB'}, 
  {"name": 'Belarus', "id": 'BY', "value": 226.2}, 
  {"name": 'Belgium', "id": 'BE', "value": 369.0}, 
  {"name": 'Belize', "id": 'BZ', "value": 7.6}, 
  {"name": 'Benin', "id": 'BJ', "value": 94.9}, 
  {"name": 'Bermuda', "id": 'BM'}, 
  {"name": 'Bhutan', "id": 'BT', "value": 2.4}, 
  {"name": 'Bolivia', "id": 'BO', "value": 282.0}, 
  {"name": 'Bosnia and Herzegovina', "id": 'BA', "value": 65.7}, 
  {"name": 'Botswana', "id": 'BW', "value": 54.2}, 
  {"name": 'Bouvet Island', "id": 'BV'}, 
  {"name": 'Brazil', "id": 'BR', "value": 1145.2}, 
  {"name": 'British Indian Ocean Territory', "id": 'IO'}, 
  {"name": 'Brunei Darussalam', "id": 'BN', "value": 13.6}, 
  {"name": 'Bulgaria', "id": 'BG', "value": 202.6}, 
  {"name": 'Burkina Faso', "id": 'BF', "value": 205.0}, 
  {"name": 'Burundi', "id": 'BI', "value": 5.0}, 
  {"name": 'Cambodia', "id": 'KH', "value": 165.0}, 
  {"name": 'Cameroon', "id": 'CM', "value": 294.2}, 
  {"name": 'Canada', "id": 'CA', "value": 3635.1}, 
  {"name": 'Cape Verde', "id": 'CV', "value": 100.0}, 
  {"name": 'Cayman Islands', "id": 'KY'}, 
  {"name": 'Central African Republic', "id": 'CF'}, 
  {"name": 'Chad', "id": 'TD', "value": 129.2}, 
  {"name": 'Chile', "id": 'CL', "value": 683.50}, 
  {"name": 'China', "id": 'CN', "value": 7718.5}, 
  {"name": 'Christmas Island', "id": 'CX'}, 
  {"name": 'Cocos (Keeling) Islands', "id": 'CC'}, 
  {"name": 'Colombia', "id": 'CO', "value": 1101.8}, 
  {"name": 'Comoros', "id": 'KM'}, 
  {"name": 'Congo', "id": 'CG', "value": 11.1}, 
  {"name": 'Congo, The Democratic Republic of the', "id": 'CD', "value": 11.1}, 
  {"name": 'Cook Islands', "id": 'CK'}, 
  {"name": 'Costa Rica', "id": 'CR', "value": 161.5}, 
  {"name": 'Cote D\'Ivoire', "id": 'CI', "value": 39.6}, 
  {"name": 'Croatia', "id": 'HR', "value": 137.2}, 
  {"name": 'Cuba', "id": 'CU', "value": 170.3}, 
  {"name": 'Cyprus', "id": 'CY', "value": 48.8}, 
  {"name": 'Czech Republic', "id": 'CZ', "value": 374.1}, 
  {"name": 'Denmark', "id": 'DK', "value": 511.5}, 
  {"name": 'Djibouti', "id": 'DJ'}, 
  {"name": 'Dominica', "id": 'DM'}, 
  {"name": 'Dominican Republic', "id": 'DO', "value": 177.5}, 
  {"name": 'Ecuador', "id": 'EC', "value": 327.3}, 
  {"name": 'Egypt', "id": 'EG', "value": 1488.8}, 
  {"name": 'El Salvador', "id": 'SV', "value": 122.6}, 
  {"name": 'Equatorial Guinea', "id": 'GQ', "value": 133.0}, 
  {"name": 'Eritrea', "id": 'ER'}, 
  {"name": 'Estonia', "id": 'EE', "value": 98.9}, 
  {"name": 'Ethiopia', "id": 'ET', "value": 772.4}, 
  {"name": 'Falkland Islands (Malvinas)', "id": 'FK'}, 
  {"name": 'Faroe Islands', "id": 'FO'}, 
  {"name": 'Fiji', "id": 'FJ', "value": 20.3}, 
  {"name": 'Finland', "id": 'FI', "value": 370.1}, 
  {"name": 'France', "id": 'FR', "value": 2393.0}, 
  {"name": 'French Guiana', "id": 'GF'}, 
  {"name": 'French Polynesia', "id": 'PF'}, 
  {"name": 'French Southern Territories', "id": 'TF'}, 
  {"name": 'Gabon', "id": 'GA', "value": 45.6}, 
  {"name": 'Gambia', "id": 'GM'}, 
  {"name": 'Georgia', "id": 'GE', "value": 61.3}, 
  {"name": 'Germany', "id": 'DE', "value": 2652.2}, 
  {"name": 'Ghana', "id": 'GH', "value": 525.3}, 
  {"name": 'Gibraltar', "id": 'GI'}, 
  {"name": 'Greece', "id": 'GR', "value": 455.5}, 
  {"name": 'Greenland', "id": 'GL'}, 
  {"name": 'Grenada', "id": 'GD'}, 
  {"name": 'Guadeloupe', "id": 'GP'}, 
  {"name": 'Guam', "id": 'GU'}, 
  {"name": 'Guatemala', "id": 'GT', "value": 589.3}, 
  {"name": 'Guernsey', "id": 'GG'}, 
  {"name": 'Guinea', "id": 'GN', "value": 133.0}, 
  {"name": 'Guinea-Bissau', "id": 'GW'}, 
  {"name": 'Guyana', "id": 'GY', "value": 3.5}, 
  {"name": 'Haiti', "id": 'HT', "value": 78.5}, 
  {"name": 'Heard Island and Mcdonald Islands', "id": 'HM'}, 
  {"name": 'Holy See (Vatican City State)', "id": 'VA'}, 
  {"name": 'Honduras', "id": 'HN', "value": 155.1}, 
  {"name": 'Hong Kong', "id": 'HK', "value": 452}, 
  {"name": 'Hungary', "id": 'HU', "value": 394.4}, 
  {"name": 'Iceland', "id": 'IS', "value": 34.2}, 
  {"name": 'India', "id": 'IN', "value": 5253.8}, 
  {"name": 'Indonesia', "id": 'ID', "value": 645}, 
  {"name": 'Iran, Islamic Republic Of', "id": 'IR', "value": 2235}, 
  {"name": 'Iraq', "id": 'IQ', "value": 616.2}, 
  {"name": 'Ireland', "id": 'IE', "value": 266.1}, 
  {"name": 'Isle of Man', "id": 'IM'}, 
  {"name": 'Israel', "id": 'IL', "value": 549.9}, 
  {"name": 'Italy', "id": 'IT', "value": 2169.2}, 
  {"name": 'Jamaica', "id": 'JM', "value": 69.3}, 
  {"name": 'Japan', "id": 'JP', "value": 8958.8}, 
  {"name": 'Jersey', "id": 'JE'}, 
  {"name": 'Jordan', "id": 'JO', "value": 172.3}, 
  {"name": 'Kazakhstan', "id": 'KZ', "value": 574.6}, 
  {"name": 'Kenya', "id": 'KE', "value": 848.1}, 
  {"name": 'Kiribati', "id": 'KI'}, 
  {"name": 'Korea, Democratic People\'S Republic of', "id": 'KP', "value": 2771.4}, 
  {"name": 'Korea, Republic of', "id": 'KR'}, 
  {"name": 'Kuwait', "id": 'KW', "value": 211.2}, 
  {"name": 'Kyrgyzstan', "id": 'KG', "value": 60.3}, 
  {"name": 'Lao People\'S Democratic Republic', "id": 'LA', "value": 22.7}, 
  {"name": 'Latvia', "id": 'LV', "value": 105.5}, 
  {"name": 'Lebanon', "id": 'LB', "value": 245.2}, 
  {"name": 'Lesotho', "id": 'LS', "value": 17.2 }, 
  {"name": 'Liberia', "id": 'LR'}, 
  {"name": 'Libyan Arab Jamahiriya', "id": 'LY'}, 
  {"name": 'Liechtenstein', "id": 'LI'}, 
  {"name": 'Lithuania', "id": 'LT', "value": 77.4}, 
  {"name": 'Luxembourg', "id": 'LU', "value": 47.8}, 
  {"name": 'Macao', "id": 'MO'}, 
  {"name": 'Macedonia, The Former Yugoslav Republic of', "id": 'MK', "value": 14.6}, 
  {"name": 'Madagascar', "id": 'MG', "value": 86.3}, 
  {"name": 'Malawi', "id": 'MW', "value": 198.7}, 
  {"name": 'Malaysia', "id": 'MY', "value": 386.5}, 
  {"name": 'Maldives', "id": 'MV'}, 
  {"name": 'Mali', "id": 'ML'}, 
  {"name": 'Malta', "id": 'MT', "value": 20.8}, 
  {"name": 'Marshall Islands', "id": 'MH'}, 
  {"name": 'Martinique', "id": 'MQ'}, 
  {"name": 'Mauritania', "id": 'MR'}, 
  {"name": 'Mauritius', "id": 'MU', "value": 42.6}, 
  {"name": 'Mayotte', "id": 'YT'}, 
  {"name": 'Mexico', "id": 'MX', "value": 384.1}, 
  {"name": 'Micronesia, Federated States of', "id": 'FM'}, 
  {"name": 'Moldova, Republic of', "id": 'MD', "value": 63.1}, 
  {"name": 'Monaco', "id": 'MC'}, 
  {"name": 'Mongolia', "id": 'MN', "value": 41.7}, 
  {"name": 'Montserrat', "id": 'MS'}, 
  {"name": 'Morocco', "id": 'MA', "value": 534.7}, 
  {"name": 'Mozambique', "id": 'MZ', "value": 208.3}, 
  {"name": 'Myanmar', "id": 'MM', "value": 372.9}, 
  {"name": 'Namibia', "id": 'NA', "value": 45.7}, 
  {"name": 'Nauru', "id": 'NR'}, 
  {"name": 'Nepal', "id": 'NP', "value": 249.7}, 
  {"name": 'Netherlands', "id": 'NL', "value": 967.5}, 
  {"name": 'Netherlands Antilles', "id": 'AN'}, 
  {"name": 'New Caledonia', "id": 'NC'}, 
  {"name": 'New Zealand', "id": 'NZ', "value": 330.9}, 
  {"name": 'Nicaragua', "id": 'NI', "value":65.7}, 
  {"name": 'Niger', "id": 'NE', "value": 166.9}, 
  {"name": 'Nigeria', "id": 'NG', "value": 3459.0},
  {"name": 'Niue', "id": 'NU'}, 
  {"name": 'Norfolk Island', "id": 'NF'}, 
  {"name": 'Northern Mariana Islands', "id": 'MP'}, 
  {"name": 'Norway', "id": 'NO', "value": 340.9}, 
  {"name": 'Oman', "id": 'OM', "value": 119.7}, 
  {"name": 'Pakistan', "id": 'PK', "value": 1886.1}, 
  {"name": 'Palau', "id": 'PW'}, 
  {"name": 'Palestinian Territory, Occupied', "id": 'PS'}, 
  {"name": 'Panama', "id": 'PA', "value": 130.0}, 
  {"name": 'Papua New Guinea', "id": 'PG', "value": 2.1}, 
  {"name": 'Paraguay', "id": 'PY', "value": 110.4}, 
  {"name": 'Peru', "id": 'PE', "value": 855.6}, 
  {"name": 'Philippines', "id": 'PH', "value": 367.1}, 
  {"name": 'Pitcairn', "id": 'PN'}, 
  {"name": 'Poland', "id": 'PL', "value": 590.6}, 
  {"name": 'Portugal', "id": 'PT', "value": 367.9}, 
  {"name": 'Puerto Rico', "id": 'PR'}, 
  {"name": 'Qatar', "id": 'QA', "value": 82.8},
  {"name": 'Reunion', "id": 'RE'}, 
  {"name": 'Romania', "id": 'RO', "value": 687.2}, 
  {"name": 'Russian Federation', "id": 'RU', "value": 3426.4}, 
  {"name": 'RWANDA', "id": 'RW', "value": 104.4}, 
  {"name": 'Saint Helena', "id": 'SH'}, 
  {"name": 'Saint Kitts and Nevis', "id": 'KN'}, 
  {"name": 'Saint Lucia', "id": 'LC'}, 
  {"name": 'Saint Pierre and Miquelon', "id": 'PM'}, 
  {"name": 'Saint Vincent and the Grenadines', "id": 'VC'}, 
  {"name": 'Samoa', "id": 'WS'}, 
  {"name": 'San Marino', "id": 'SM'}, 
  {"name": 'Sao Tome and Principe', "id": 'ST'}, 
  {"name": 'Saudi Arabia', "id": 'SA', "value": 986.1}, 
  {"name": 'Senegal', "id": 'SN', "value": 144.1}, 
  {"name": 'Serbia and Montenegro', "id": 'CS', "value": 167.2}, 
  {"name": 'Seychelles', "id": 'SC'}, 
  {"name": 'Sierra Leone', "id": 'SL', "value": 50.6}, 
  {"name": 'Singapore', "id": 'SG', "value": 100.0}, 
  {"name": 'Slovakia', "id": 'SK', "value": 117.7}, 
  {"name": 'Slovenia', "id": 'SI', "value": 47.2}, 
  {"name": 'Solomon Islands', "id": 'SB'}, 
  {"name": 'Somalia', "id": 'SO'}, 
  {"name": 'South Africa', "id": 'ZA', "value": 1386.4}, 
  {"name": 'South Georgia and the South Sandwich Islands', "id": 'GS'}, 
  {"name": 'Spain', "id": 'ES', "value": 2715.1}, 
  {"name": 'Sri Lanka', "id": 'LK', "value": 233.4}, 
  {"name": 'Sudan', "id": 'SD', "value": 819.8}, 
  {"name": 'Suriname', "id": 'SR', "value": 11.4}, 
  {"name": 'Svalbard and Jan Mayen', "id": 'SJ'}, 
  {"name": 'Swaziland', "id": 'SZ'}, 
  {"name": 'Sweden', "id": 'SE', "value": 574.9}, 
  {"name": 'Switzerland', "id": 'CH', "value": 459.9}, 
  {"name": 'Syrian Arab Republic', "id": 'SY'}, 
  {"name": 'Taiwan, Province of China', "id": 'TW'}, 
  {"name": 'Tajikistan', "id": 'TJ', "value": 64.4}, 
  {"name": 'Tanzania, United Republic of', "id": 'TZ', "value": 51.2}, 
  {"name": 'Thailand', "id": 'TH', "value": 136.6}, 
  {"name": 'Timor-Leste', "id": 'TL', "value": 2.0}, 
  {"name": 'Togo', "id": 'TG', "value": 74.4}, 
  {"name": 'Tokelau', "id": 'TK'}, 
  {"name": 'Tonga', "id": 'TO'}, 
  {"name": 'Trinidad and Tobago', "id": 'TT'}, 
  {"name": 'Tunisia', "id": 'TN', "value": 162.6}, 
  {"name": 'Turkey', "id": 'TR', "value": 2456.6}, 
  {"name": 'Turkmenistan', "id": 'TM', "value": 29.3}, 
  {"name": 'Turks and Caicos Islands', "id": 'TC'}, 
  {"name": 'Tuvalu', "id": 'TV'}, 
  {"name": 'Uganda', "id": 'UG', "value": 243.7}, 
  {"name": 'Ukraine', "id": 'UA', "value": 558.8}, 
  {"name": 'United Arab Emirates', "id": 'AE', "value": 615.0}, 
  {"name": 'United Kingdom', "id": 'GB', "value": 4550.0}, 
  {"name": 'United States', "id": 'US', "value": 66847.0}, 
  {"name": 'United States Minor Outlying Islands', "id": 'UM'}, 
  {"name": 'Uruguay', "id": 'UY', "value": 195.2}, 
  {"name": 'Uzbekistan', "id": 'UZ', "value": 71.6}, 
  {"name": 'Vanuatu', "id": 'VU'}, 
  {"name": 'Venezuela', "id": 'VE'}, 
  {"name": 'Viet Nam', "id": 'VN', "value": 404.2}, 
  {"name": 'Virgin Islands, British', "id": 'VG'}, 
  {"name": 'Virgin Islands, U.S.', "id": 'VI'}, 
  {"name": 'Wallis and Futuna', "id": 'WF'}, 
  {"name": 'Western Sahara', "id": 'EH'}, 
  {"name": 'Yemen', "id": 'YE'}, 
  {"name": 'Zambia', "id": 'ZM', "value": 169.9}, 
  {"name": 'Zimbabwe', "id": 'ZW', "value": 204.2} 
];
    
    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    // label properties
    polygonTemplate.tooltipText = "{name} {value}";
    polygonTemplate.fill = am4core.color("#F6E3CE");
    polygonTemplate.strokeWidth = 0.5;
    
    var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
    graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
    graticuleSeries.fitExtent = false;
    graticuleSeries.mapLines.template.line.stroke = chart.colors.getIndex(2);
    
    // default background color (important for the data with no value)
    chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
    chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("brown");
   
    // hovering and its color 
    var hs = polygonTemplate.states.create("hover");
     hs.properties.fill = am4core.color("#2A1B0A");
    
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
    