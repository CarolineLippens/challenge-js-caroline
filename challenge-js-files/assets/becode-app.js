/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 

Your name : Caroline Lippens     
Date :  14/11/2018
Contact information : 

What does this script do ? 

créer des graphiques

*/

//création emplacement 3eme graphique





//création du tableau
let x = document.getElementById("mw-content-text"); //ligne 616 parent le plus proche du tableau
let emp = document.getElementById('table1');
let graph1 = document.createElement("div");
graph1.id="dimple1";
table1.parentNode.insertBefore(graph1, table1);
//
//récupération des données
        //source des données
            let tbody = table1.getElementsByTagName("tbody"); //prend les element tbody
            let tr = tbody[0].getElementsByTagName("tr"); //prend les tr dans le tbody 0
        //tableau de données:
            let donnees=[]; //tableau vide ou on va push les données
            let fonctionTableau=()=>{
                for (i=1;i<tr.length;i++){ // la boucle commence à 1 car ballek de la première collonne qui introduit juste le tableau
                    let pays=[]; //tableau vide ou on va push les données des pays
                    let th = tr[i].getElementsByTagName("th"); //prend chaque th dans le tableau
                    let div = th[0].getElementsByTagName("div"); //prend l'element 0 de chaque div
                    let number = div[0].innerHTML; //inner.html prend les données à l'interieur de la div[0]
                    pays.push(number); //on push le nom du pays dans le tableau 
                    let td = tr[i].getElementsByTagName("td");
                        for (y=0;y<td.length;y++){ //seconde boucle qui push les données des chiffres
                            let contenu = td[y].innerHTML; //push le contenu des td grace à inner html
                            pays.push(contenu); 
                        }
                    donnees.push(pays);
                }
            }
            fonctionTableau();
            console.log(donnees);

let data = [];
let chiffres;
for(p=0; p<donnees.length;p++){
    for(k=2; k<13;k++){
    let  chiffres={"Année":k+2000, "crimes":donnees[p][k], "Pays":donnees[p][1]};

    if (chiffres.crimes!=":"){
        data.push(chiffres);
    }
}
}

//tjs faire container -> puis section row -> puis colonne

let svg = dimple.newSvg("#dimple1", 800, 800);

let chart = new dimple.chart(svg, data);
chart.addCategoryAxis("x", "Année");
chart.addMeasureAxis("y", "crimes");
chart.addSeries("Pays", dimple.plot.line);
chart.addLegend(0,10, 1000, 250);
chart.draw();

let tuto = document.createElement("p");
        tuto.innerHTML = "Cliquez sur les pays que vous désirez comparer dans la légende du graphique pour les afficher sur le graphique ou les effacer.";
        x.insertBefore(tuto,table1);
        //création de "boutons" sur base de la légende dimple.
        let btn = document.querySelectorAll("g.dimple-legend");
        for (i=0;i<btn.length;i++){
            btn[i].setAttribute("onclick","afficher("+ i +")");
        }
        //définir les courbes a afficher sur le graphique et les effacer de base
        let courbe = document.querySelectorAll("g.dimple-series-group-0 path");
        for (i=0;i<courbe.length;i++){
            courbe[i].style.visibility = "hidden";
        }
        //création de la fonction afficher (ou pas)
        let afficher = (i) =>{
            if (courbe[i].style.visibility == "visible"){
                courbe[i].style.visibility = "hidden";
            } else {
                courbe[i].style.visibility = "visible";
            }
        }


//création du tableau
let emp2 = document.getElementById('table2');
let graph2 = document.createElement("div");
graph2.id="dimple2";
table2.parentNode.insertBefore(graph2, table2);
//
//prendre données
let tbody2 = table2.getElementsByTagName("tbody"); //prend les element tbody
let tr2 = tbody2[0].getElementsByTagName("tr"); //prend les tr dans le tbody 0

//console.log(tr2)
//tableau de données
let donnees2=[]; //tableau vide ou on va push les données
let fonctionTableau2=()=>{
    for (ii=1;ii<tr2.length;ii++){ // la boucle commence à 1 car ballek de la première collonne qui introduit juste le tableau
        let pays2=[]; //tableau vide ou on va push les données des pays
        let th2 = tr2[ii].getElementsByTagName("th"); //prend chaque th dans le tableau
        let div2 = th2[0].getElementsByTagName("div"); //prend l'element 0 de chaque div
        let number2 = div2[0].innerHTML; //inner.html prend les données à l'interieur de la div[0]
        pays2.push(number2); //on push le nom du pays dans le tableau 
        let td2 = tr2[ii].getElementsByTagName("td");
            for (yy=0;yy<td2.length;yy++){ //seconde boucle qui push les données des chiffres
                let contenu2 = td2[yy].innerHTML; //push le contenu des td grace à inner html
                pays2.push(contenu2); 
            }
        donnees2.push(pays2);
    }
}
fonctionTableau2();
console.log(donnees2);
//push les données dans le tableau
let data2 = [];
let chiffres2;
for(pp=0; pp<donnees2.length;pp++){
    for(kk=2; kk<4;kk++){
    let  chiffres2={"Année":kk+2000, "population_carcérale":donnees2[pp][kk], "Pays":donnees2[pp][1]};

    if (chiffres2.crimes!=":"){
        data2.push(chiffres2);
    }
}
}





//créa graph
let svg2 = dimple.newSvg("#dimple2", 800, 600);
let chart2 = new dimple.chart(svg2, data2);
chart2.addCategoryAxis("x", "Année");
chart2.addMeasureAxis("y", "population_carcérale");
chart2.addSeries("Pays", dimple.plot.bar);
chart2.addLegend(60,0, 800, 80);
chart2.draw();









//placer le graph3
let graph3 = document.createElement("div");
graph3.id="dimple3";
bodyContent.parentNode.insertBefore(graph3, bodyContent);
let databecode =[];
let data5 = [];
function loadDoc() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
databecode = JSON.parse(this.responseText);

function updateChart() {
        svg10.remove()
        xhttp.open("GET", "https://inside.becode.org/api/v1/data/random.json", true);
        xhttp.send();
        data10.push(y)
        data5 = data5.concat(databecode)
     
       //console.log(data5)
}

setTimeout(function(){updateChart()}, 5000);

    var svg10 = dimple.newSvg("#dimple3", 800, 600);
    var data10 = []; 
    for (let i = 0; i < data5.length; i++) {
        let y = {"Nombre":data5[i][0], "Value":data5[i][1]};
        data10.push(y);  
        console.log(data10)
           
    }
    

    var chart = new dimple.chart(svg10, data10);
    var x = chart.addCategoryAxis("x", "Nombre");
    var y1 = chart.addMeasureAxis("y", "Valeur" );
    var y2 = chart.addMeasureAxis("y", "Value");
    y1.overrideMin = -30;
    y1.overrideMax = 30;
    y2.overrideMin = -30;
    y2.overrideMax = 30;
    y2.hidden = true;
    chart.addSeries(null, dimple.plot.bar, [x, y2]);
    chart.draw();
          }
        };

xhttp.open("GET", "https://inside.becode.org/api/v1/data/random.json", true);
xhttp.send();

}
loadDoc();