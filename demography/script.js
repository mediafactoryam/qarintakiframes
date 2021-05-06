/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var mainContainer = am4core.create("chartdiv", am4core.Container);
mainContainer.width = am4core.percent(100);
mainContainer.height = am4core.percent(100);
mainContainer.layout = "horizontal";

var usData = [
  {'age': '0-ից 10 տ','male': 49,'female': 57},
{'age': '10-ից 20 տ','male': 50,'female': 56},
{'age': '20-ից 30 տ','male': 70,'female': 52},
{'age': '30-ից 40 տ','male': 54,'female': 47},
{'age': '40-ից 50 տ','male': 39,'female': 47},
{'age': '50-ից 60 տ','male': 33,'female': 20},
{'age': '60-ից 70 տ','male': 34,'female': 38},
{'age': '70-ից 80 տ','male': 17,'female': 12},
{'age': '80-ից 90 տ','male': 13,'female': 4},
{'age': '90-ից 100 տ','male': 2,'female': 2}
];

var maleChart = mainContainer.createChild(am4charts.XYChart);
maleChart.paddingRight = 0;
maleChart.data = JSON.parse(JSON.stringify(usData));

// Create axes
var maleCategoryAxis = maleChart.yAxes.push(new am4charts.CategoryAxis());
maleCategoryAxis.dataFields.category = "age";
maleCategoryAxis.renderer.grid.template.location = 0;
//maleCategoryAxis.renderer.inversed = true;
maleCategoryAxis.renderer.minGridDistance = 15;

var maleValueAxis = maleChart.xAxes.push(new am4charts.ValueAxis());
maleValueAxis.renderer.inversed = true;
maleValueAxis.min = 0;
maleValueAxis.max = 20;
maleValueAxis.strictMinMax = true;

maleValueAxis.numberFormatter = new am4core.NumberFormatter();
maleValueAxis.numberFormatter.numberFormat = "#.#'%'";

// Create series
var maleSeries = maleChart.series.push(new am4charts.ColumnSeries());
maleSeries.dataFields.valueX = "male";
maleSeries.dataFields.valueXShow = "percent";
maleSeries.calculatePercent = true;
maleSeries.dataFields.categoryY = "age";
maleSeries.interpolationDuration = 100;
maleSeries.columns.template.tooltipText = "  {valueX} տղամարդ ({valueX.percent.formatNumber('#.0')}%)";
maleSeries.sequencedInterpolation = true;


var femaleChart = mainContainer.createChild(am4charts.XYChart);
femaleChart.paddingLeft = 0;
femaleChart.data = JSON.parse(JSON.stringify(usData));

// Create axes
var femaleCategoryAxis = femaleChart.yAxes.push(new am4charts.CategoryAxis());
femaleCategoryAxis.renderer.opposite = true;
femaleCategoryAxis.dataFields.category = "age";
femaleCategoryAxis.renderer.grid.template.location = 0;
femaleCategoryAxis.renderer.minGridDistance = 100;

var femaleValueAxis = femaleChart.xAxes.push(new am4charts.ValueAxis());
femaleValueAxis.min = 0;
femaleValueAxis.max = 20;
femaleValueAxis.strictMinMax = true;
femaleValueAxis.numberFormatter = new am4core.NumberFormatter();
femaleValueAxis.numberFormatter.numberFormat = "#.#'%'";
femaleValueAxis.renderer.minLabelPosition = 0.01;

// Create series
var femaleSeries = femaleChart.series.push(new am4charts.ColumnSeries());
femaleSeries.dataFields.valueX = "female";
femaleSeries.dataFields.valueXShow = "percent";
femaleSeries.calculatePercent = true;
femaleSeries.fill = femaleChart.colors.getIndex(4);
femaleSeries.stroke = femaleSeries.fill;
//femaleSeries.sequencedInterpolation = true;
femaleSeries.columns.template.tooltipText = " {valueX} կին ({valueX.percent.formatNumber('#.0')}%)";
femaleSeries.dataFields.categoryY = "age";
femaleSeries.interpolationDuration = 10;