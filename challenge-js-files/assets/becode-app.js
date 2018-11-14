/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 

Your name : Caroline Lippens     
Date :  14/11/2018
Contact information : 

What does this script do ? 

créer des graphiques

*/

let emp = document.getElementById('table1');
let graph1 = document.createElement("div");
graph1.id="dimple1";
table1.parentNode.insertBefore(graph1, table1);

let svg = dimple.newSvg("#dimple1", 800, 600);
let data = [
{ "Année":"2002", "Nombre (en milliers)":1012.8, "Pays":"Belgique"},
{ "Année":"2003", "Nombre (en milliers)":1007.8, "Pays":"Belgique"},
{ "Année":"2004", "Nombre (en milliers)":1013.7, "Pays":"Belgique"},
{ "Année":"2005", "Nombre (en milliers)":999.4,  "Pays":"Belgique"},
{ "Année":"2006", "Nombre (en milliers)":1022.8, "Pays":"Belgique"},
{ "Année":"2007", "Nombre (en milliers)":1034.4, "Pays":"Belgique"},
{ "Année":"2008", "Nombre (en milliers)":1043.6, "Pays":"Belgique"},
{ "Année":"2009", "Nombre (en milliers)":1067.3, "Pays":"Belgique"},
{ "Année":"2010", "Nombre (en milliers)":1072.0, "Pays":"Belgique"},
{ "Année":"2011", "Nombre (en milliers)":1111.0, "Pays":"Belgique"},
{ "Année":"2012", "Nombre (en milliers)":1073.8, "Pays":"Belgique"},
];
let chart = new dimple.chart(svg, data);
chart.addCategoryAxis("x", "Année");
chart.addMeasureAxis("y", "Nombre (en milliers)");
chart.addSeries("Pays", dimple.plot.line);
chart.addLegend(60, 10, 500, 20, "right");
chart.draw();