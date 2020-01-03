var filterbymouth,filterbytri,alpha=0,left=80,right=400,leftTaxi=22000,rightTaxi=36000,database,interOn,mesSelecionado,anoSelecionado,diaSelecionado,trimestreSelecionado,opcoes=[],GeoLayer,LayerRange,layerTuto1,layerTuto2,layerTuto3,layerTuto4,LayerTaxi,dataset,max,featurename,selecionados=[],selecionadosC=[],selecionadosT=[],medias=[],hops=true;
var mapRange = L.map('vis2',{ zoomControl: false }).setView([-8.305448,-37.822426], 8);
var mapVis02 = L.map('vis02',{ zoomControl: false }).setView([-8.305448,-37.822426], 8);
var mapVistaxi = L.map('vistaxi',{ zoomControl: false }).setView([40.752866,-73.986023], 13);
var gradesR=[0,0.12,0.24,0.36,0.48,0.60,0.72,0.84,1];
var databasetaxi,datasettaxi;
mapRange.doubleClickZoom.disable();
mapRange.scrollWheelZoom.disable();
mapVis02.doubleClickZoom.disable();
mapVis02.scrollWheelZoom.disable();
mapVistaxi.scrollWheelZoom.disable();
mapVistaxi.doubleClickZoom.disable();
// INICIA A BASE DE DADOS E O DATASET DE POLIGONOS.
d3.json("./data/dados.json",function(error,data){
  database=data;
  d3.json("./data/pe.json",function(error,dados){
    dataset=dados;
  });
});
d3.json("./data/pickup.json",function(error,data){
  databasetaxi=data;
  d3.json("./data/midtown.geojson",function(error,dados){
    datasettaxi=dados;
  });
  databasetaxi = Object.keys(databasetaxi).map(function(key) {
    return [databasetaxi[key]];
  });
});
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png?', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 18
}).addTo(mapRange);
//-- DIV INFO DO MAPA CONTROLADO -- 
var infoRange = L.control();
infoRange.onAdd = function (mymap) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
};
//-- DIV LEGENDA DO MAPA CONTROLADO --
var legendRange = L.control({position: 'bottomright'});
legendRange.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend'),grades=[],labels = [];
  for (var i = (gradesR.length-1); i >=0 ; i--) {
    if(i==0||i==8){
      div.innerHTML +='<i style="color:#'+colorR(gradesR[i])+'; background:#'+colorR(gradesR[i])+'"></i>'+(gradesR[i]*100)+'%</br>';
    }else{
      div.innerHTML +='<i style="color:#'+colorR(gradesR[i])+'; background:#'+colorR(gradesR[i])+'"></i></br>';
    }
  }
  return div;
};
legendRange.addTo(mapRange);
var cidades=[];
//-- FUNÇÃO QUE DESENHA E CONTROLA OS PONTOS NO MAPA --
function inicioRange(dataset){
  if(LayerRange!= null){
    LayerRange.clearLayers();
  }
  LayerRange =L.geoJson(dataset,
    {style: function(feature){
        var probArea= new distribuicaoIntervalo(getDis(feature.properties.name),left,right);
        var prob= probArea.cdfintervalo().toFixed(2);
        if(opcoes.includes(feature.properties.name)){
          if(opcoes[0]==feature.properties.name){
            return {
              weight: 3.5,
              opacity: 1,
              fillColor: "#"+colorR(prob),
              dashArray: '3',
              fillOpacity: 0.9,
              color: '#c51b7d'
            };
          }else{
            return {
              weight: 3.5,
              opacity: 1,
              fillColor: "#"+colorR(prob),
              dashArray: '3',
              fillOpacity: 0.9,
              color: '#053061'
            };            
          }
        }else{
          return {
              weight: 0.5,
              opacity: 1,
              fillColor: "#"+colorR(prob),
              color: 'black',
              fillOpacity: 0.9
            };
        }
      }
    ,onEachFeature: function (feature, layer) {
        var probArea= new distribuicaoIntervalo(getDis(feature.properties.name),left,right);
        var prob= probArea.cdfintervalo().toFixed(2);
        layer.bindPopup(""+feature.properties.name+": "+Math.floor(prob*100)+"%");
        layer.on({
          dblclick: whenClickedC
        });
        layer.on('mouseover', function (e) {
            highlightFeature(e);
            this.openPopup();
        });
        layer.on('mouseout', function (e) {
            LayerRange.resetStyle(e.target);
            this.closePopup();
            if(selecionadosC.filter(function(el) { return el.target.feature.properties.name === e.target.feature.properties.name; }).length>0){
              layer.setStyle({
                  weight: 3.5,
                  color: 'black',
                  fillOpacity: 0.9
              });
            }
        });
      }
    }).addTo(mapRange);
  infoRange.update = function (props) {
    this._div.innerHTML= infoprops(props);
  };
  infoRange.addTo(mapRange);
}
//----------- MAPA CHOROPLETH DE PROBABILIDADE EM UM INTERVALO DA ETAPA DE TUTORIAL DO USUÁRIO. --
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png?', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 18
}).addTo(mapVis02);
//-- DIV INFO DO MAPA CONTROLADO -- 
var infoVis02=L.control();
infoVis02.onAdd = function (mymap) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
};
//-- DIV LEGENDA DO MAPA CONTROLADO --
var legendVis02 = L.control({position: 'bottomright'});
legendVis02.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend'),grades=[],labels = [];
  for (var i = (gradesR.length-1); i >=0 ; i--) {
    if(i==0||i==8){
      div.innerHTML +='<i style="color:#'+colorR(gradesR[i])+'; background:#'+colorR(gradesR[i])+'"></i>'+(gradesR[i]*100)+'%</br>';
    }else{
      div.innerHTML +='<i style="color:#'+colorR(gradesR[i])+'; background:#'+colorR(gradesR[i])+'"></i></br>';
    }
  }
  return div;
};
legendVis02.addTo(mapVis02);
//-- FUNÇÃO QUE DESENHA E CONTROLA AS AREAS NO MAPA --
function Vis02TutorialFunction(dataset,interOn){
  if(layerTuto2!= null){
      layerTuto2.clearLayers();
    }
    layerTuto2=L.geoJson(dataset,
      {style: function(feature){
          //Style para definir configurações dos polígonos a serem desenhados e colorir com base na escala criada.
          if(interOn==true){
            var probArea= new distribuicaoIntervalo(getDis(feature.properties.name),left,right);
            var prob= probArea.cdfintervalo().toFixed(2);
          }else{
              var probArea= new distribuicaoTeste(getDis(feature.properties.name),alpha);
              var prob= probArea.cdf().toFixed(2);
          }
      if(opcoes.includes(feature.properties.name)){
          if(opcoes[0]==feature.properties.name){
            return {
              weight: 3.5,
              opacity: 1,
              fillColor: "#"+colorR(prob),
              dashArray: '3',
              fillOpacity: 0.9,
              color: '#c51b7d'
            };
          }else{
            return {
              weight: 3.5,
              opacity: 1,
              fillColor: "#"+colorR(prob),
              dashArray: '3',
              fillOpacity: 0.9,
              color: '#053061'
            };            
          }
        }else{
            return {
                weight: 0.5,
                opacity: 1,
                fillColor: "#"+colorR(prob),
                color: 'black',
                fillOpacity: 0.9
              };
          }
    },
    onEachFeature: function (feature, layer) {
        if(interOn==true){
          var probArea= new distribuicaoIntervalo(getDis(feature.properties.name),left,right);
          var prob= probArea.cdfintervalo().toFixed(2);
        }else{
            var probArea= new distribuicaoTeste(getDis(feature.properties.name),alpha);
            var prob= probArea.cdf().toFixed(2);
        }
        //Criação do Popup de cada feature/polígono contendo o nome do proprietário e o cep de localização do edíficio/lote.
        layer.bindPopup(""+feature.properties.name+": "+Math.floor(prob*100)+"%");
        layer.on({
          dblclick: whenClicked
        });
        layer.on('mouseover', function (e) {
            highlightFeature(e);
            this.openPopup();
        });
        layer.on('mouseout', function (e) {
            layerTuto2.resetStyle(e.target);
            this.closePopup();
            if(selecionados.filter(function(el) { return el.target.feature.properties.name === e.target.feature.properties.name; }).length>0){
              layer.setStyle({
                  weight: 3.5,
                  color: 'black',
                  fillOpacity: 0.9
              });
            }
        });
      }
  }).addTo(mapVis02);;
  infoVis02.update = function (props) {
      this._div.innerHTML= infoprops(props);
  };
  infoVis02.addTo(mapVis02);
}
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png?', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 18
}).addTo(mapVistaxi);
//-- DIV INFO DO MAPA CONTROLADO -- 
var infoTaxi = L.control();
infoTaxi.onAdd = function (mymap) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
};
//-- DIV LEGENDA DO MAPA CONTROLADO --
var legendTaxi = L.control({position: 'bottomright'});
legendTaxi.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend'),grades=[],labels = [];
  for (var i = (gradesR.length-1); i >=0 ; i--) {
    if(i==0||i==8){
      div.innerHTML +='<i style="color:#'+colorR(gradesR[i])+'; background:#'+colorR(gradesR[i])+'"></i>'+(gradesR[i]*100)+'%</br>';
    }else{
      div.innerHTML +='<i style="color:#'+colorR(gradesR[i])+'; background:#'+colorR(gradesR[i])+'"></i></br>';
    }
  }
  return div;
};
legendTaxi.addTo(mapVistaxi);
//-- FUNÇÃO QUE DESENHA E CONTROLA OS PONTOS NO MAPA --
function inicioTaxi(dataset){
  if(LayerTaxi!= null){
    LayerTaxi.clearLayers();
  }
  LayerTaxi =L.geoJson(datasettaxi,
    {style: function(feature){
        var probArea= new distribuicaoIntervalo(distribuicaoNYC(feature.properties.OBJECTID),leftTaxi,rightTaxi);
        var prob= probArea.cdfintervalo().toFixed(2);
        if(opcoes.includes(feature.properties.OBJECTID)){
          if(opcoes[0]==feature.properties.OBJECTID){
            return {
              weight: 3.5,
              opacity: 1,
              fillColor: "#"+colorR(prob),
              dashArray: '3',
              fillOpacity: 0.9,
              color: '#c51b7d'
            };
          }else{
            return {
              weight: 3.5,
              opacity: 1,
              fillColor: "#"+colorR(prob),
              dashArray: '3',
              fillOpacity: 0.9,
              color: '#053061'
            };            
          }
        }else{
          return {
              weight: 0.5,
              opacity: 1,
              fillColor: "#"+colorR(prob),
              color: 'black',
              fillOpacity: 0.9
            };
        }
      }
    ,onEachFeature: function (feature, layer) {
        var probArea= new distribuicaoIntervalo(distribuicaoNYC(feature.properties.OBJECTID),leftTaxi,rightTaxi);
        var prob= probArea.cdfintervalo().toFixed(2);
        layer.bindPopup(""+feature.properties.zone+": "+Math.floor(prob*100)+"%");
        layer.on({
          dblclick: whenClickedT
        });
        layer.on('mouseover', function (e) {
            highlightFeature(e);
            this.openPopup();
        });
        layer.on('mouseout', function (e) {
            LayerTaxi.resetStyle(e.target);
            this.closePopup();
            if(selecionadosT.filter(function(el) { return el.target.feature.properties.OBJECTID === e.target.feature.properties.OBJECTID; }).length>0){
              layer.setStyle({
                  weight: 3.5,
                  color: 'black',
                  fillOpacity: 0.9
              });
            }
        });
      }
    }).addTo(mapVistaxi);
  infoTaxi.update = function (props) {
    this._div.innerHTML= infopropsTaxi(props);
  };
  infoTaxi.addTo(mapVistaxi);
}