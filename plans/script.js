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

var data = [{
    "country": "Dummy",
    "disabled": true,
    "litres": 707,
    "color": am4core.color("#dadada"),
    "opacity": 0.3,
    "strokeDasharray": "4,4"
}, {
    "country": "Անորոշ",
    "litres": 319,
     color: "#9d54ab"
}, {
    "country": "Մնալու են",
    "litres": 94,
  color: "#AB7254"
}, {
    "country": "Վերադառնալու են",
    "litres": 98,
  color: "#62AB54"
}, {
    "country": "Կվերադառնան, պայմանով*",
    "litres": 196,
  color: "#548DAB"
}];


// cointainer to hold both charts
var container = am4core.create("chartdiv", am4core.Container);
container.width = am4core.percent(100);
container.height = am4core.percent(100);
container.layout = "horizontal";

container.events.on("maxsizechanged", function () {
    chart1.zIndex = 0;
    
})

var chart1 = container.createChild(am4charts.PieChart);
chart1.fontSize = 13;
chart1.hiddenState.properties.opacity = 0; // this makes initial fade in effect
chart1.data = data;
chart1.radius = am4core.percent(70);
chart1.innerRadius = am4core.percent(40);
chart1.zIndex = 1;

var series1 = chart1.series.push(new am4charts.PieSeries());
series1.dataFields.value = "litres";
series1.dataFields.category = "country";
//series1.colors.step = 5;
series1.alignLabels = false;
series1.labels.template.bent = true;
series1.labels.template.radius = 10;
series1.labels.template.padding(0,0,0,0);

var sliceTemplate1 = series1.slices.template;
sliceTemplate1.cornerRadius = 5;
sliceTemplate1.draggable = true;
sliceTemplate1.inert = true;
sliceTemplate1.propertyFields.fill = "color";
sliceTemplate1.propertyFields.fillOpacity = "opacity";
sliceTemplate1.propertyFields.stroke = "color";
sliceTemplate1.propertyFields.strokeDasharray = "strokeDasharray";
sliceTemplate1.strokeWidth = 1;
sliceTemplate1.strokeOpacity = 1;

var zIndex = 5;

sliceTemplate1.events.on("down", function (event) {
    event.target.toFront();
    // also put chart to front
    var series = event.target.dataItem.component;
    series.chart.zIndex = zIndex++;
})

series1.ticks.template.disabled = true;

sliceTemplate1.states.getKey("active").properties.shiftRadius = 0;

sliceTemplate1.events.on("dragstop", function (event) {
    handleDragStop(event);
})

// separator line and text





series1.events.on("datavalidated", function () {
    var dummyDataItem = series1.dataItems.getIndex(0);
    dummyDataItem.hide(0);
    dummyDataItem.slice.draggable = false;
    dummyDataItem.slice.tooltipText = undefined;
})