var sucesso=0;
function refresh(){
  if(sucesso==2){
      window.location.reload(true);
  }
}
var maior=0,menor=+Infinity;
function distribuicaoNYC(id){
  var distdataMes=[];
  databasetaxi.forEach(function(d,i){
    distdataMes.push(d[0][id]);
    if(maior<Number(d[0][id])){
      maior=d[0][id];
    }
    if(menor>Number(d[0][id])){
      menor=d[0][id];
    }
  });
  return distdataMes;
}

// PREPARA A DISTRUIBUICAO DE CADA ÁREA EM DIAS 365 PARA CADA ANO NO DATASET.
function distribuicaoAno(featurename){
  var distdataAno=[];
  var soma=0,soma1=0,soma2=0;
  if(mesSelecionado!=undefined){
    database.forEach(function(d,i){
      if (d.name==featurename && d.Ano==anoSelecionado && d.Mês==mesSelecionado){
        var dias=diasToArray(d);
        dias.forEach(function(d,i){
                    distdataAno.push(d);
                  });
      }
    });
  }else if(trimestreSelecionado!=undefined){
    database.forEach(function(d,i){
      if(trimestreSelecionado==1){
        if( d.Mês=='Jan'|| d.Mês=='Fev' || d.Mês=='Mar' ){
          if (d.name==featurename && d.Ano==anoSelecionado){
            var dias=diasToArray(d);
            dias.forEach(function(d,i){
              distdataAno.push(d);
            });
          }
        }
      }else if(trimestreSelecionado==2){
        if( d.Mês=='Abr'|| d.Mês=='Mai' || d.Mês=='Jun' ){
          if (d.name==featurename && d.Ano==anoSelecionado){
            var dias=diasToArray(d);
            dias.forEach(function(d,i){
              distdataAno.push(d);
            });
          }
        }
      }else if(trimestreSelecionado==3){
        if( d.Mês=='Jul'|| d.Mês=='Ago' || d.Mês=='Set' ){
          if (d.name==featurename && d.Ano==anoSelecionado){
            var dias=diasToArray(d);
            dias.forEach(function(d,i){
              distdataAno.push(d);
            });
          }
        }
      }else{
        if( d.Mês=='Out'|| d.Mês=='Nov' || d.Mês=='Dez' ){
          if (d.name==featurename && d.Ano==anoSelecionado){
            var dias=diasToArray(d);
            dias.forEach(function(d,i){
              distdataAno.push(d);
            });
          }
        }
      }
    });
  }else if(diaSelecionado!=undefined){
    database.forEach(function(d,i){
      if (d.name==featurename && d.Ano==anoSelecionado){
          distdataAno.push(d[diaSelecionado]);
      }
    });
  }else if(anoSelecionado!=null){
    database.forEach(function(d,i){
      if (d.name==featurename && d.Ano==anoSelecionado){
          distdataAno.push(SomaDias(d));
      }
    });
  }else{
    database.forEach(function(d,i){
      if (d.name==featurename) {
        if(d.Ano==2016){
          soma+=SomaDias(d);
        }else if (d.Ano==2017) {
          soma1+=SomaDias(d);
        }else{
          soma2+=SomaDias(d);
        }
      }
    });
    distdataAno.push(soma);
    distdataAno.push(soma1);
    distdataAno.push(soma2);
  }
  return distdataAno;
}
// PREPARA A DISTRUIBUICAO DE DIAS PARA MESES DE 365 PARA 12 POR ANO.
function SomaDias(d){
  var soma=0;
  if(d.Mês=='Abr'||d.Mês=='Jun'||d.Mês=='Set'||d.Mês=='Nov'){
    for (var i = 1; i < 31; i++) {
      soma=soma+Number(d[i]);
    }
  }else if(d.Mês=='Fev'){
    for (var i = 1; i < 29; i++) {
      soma+=Number(d[i]);
    }
  }else{
    for (var i = 1; i < 32; i++) {
      soma=soma+Number(d[i]);
    }
  }
  return soma;
}
// PREPARA A DISTRUIBUICAO PARA TRIMESTRES JUNTANDO MESES DE 12 PARA 3.
function distribuicaoTri(featurename){
  var distdataTrimestre=[];
  if(anoSelecionado!=undefined){
    database.forEach(function(d,i){
      if(trimestreSelecionado==1){
        if( d.Mês=='Jan'|| d.Mês=='Fev' || d.Mês=='Mar' ){
          if (d.name==featurename && d.Ano==anoSelecionado){
            distdataTrimestre.push(SomaDias(d));
          }
        }
      }else if(trimestreSelecionado==2){
        if( d.Mês=='Abr'|| d.Mês=='Mai' || d.Mês=='Jun' ){
          if (d.name==featurename && d.Ano==anoSelecionado){
            distdataTrimestre.push(SomaDias(d));
          }
        }
      }else if(trimestreSelecionado==3){
        if( d.Mês=='Jul'|| d.Mês=='Ago' || d.Mês=='Set' ){
          if (d.name==featurename && d.Ano==anoSelecionado){
            distdataTrimestre.push(SomaDias(d));
          }
        }
      }else{
        if( d.Mês=='Out'|| d.Mês=='Nov' || d.Mês=='Dez' ){
          if (d.name==featurename && d.Ano==anoSelecionado){
            distdataTrimestre.push(SomaDias(d));
          }
        }
      }
    });
  }else if(diaSelecionado!=undefined){
    database.forEach(function(d,i){
      if(trimestreSelecionado==1){
        if( d.Mês=='Jan'|| d.Mês=='Fev' || d.Mês=='Mar' ){
          if (d.name==featurename){
            distdataTrimestre.push(d[diaSelecionado]);
          }
        }
      }else if(trimestreSelecionado==2){
        if( d.Mês=='Abr'|| d.Mês=='Mai' || d.Mês=='Jun' ){
          if (d.name==featurename){
            distdataTrimestre.push(d[diaSelecionado]);
          }
        }
      }else if(trimestreSelecionado==3){
        if( d.Mês=='Jul'|| d.Mês=='Ago' || d.Mês=='Set' ){
          if (d.name==featurename){
            distdataTrimestre.push(d[diaSelecionado]);
          }
        }
      }else{
        if( d.Mês=='Out'|| d.Mês=='Nov' || d.Mês=='Dez' ){
          if (d.name==featurename){
            distdataTrimestre.push(d[diaSelecionado]);
          }
        }
      }
    });
    /*database.forEach(function(d,i){
      if (d.name==featurename && d.Mês==mesSelecionado){
          distdataTrimestre.push(SomaDias(d[diaSelecionado]));
      }
    });*/
  }else if(trimestreSelecionado!=undefined){
    database.forEach(function(d,i){
      if(trimestreSelecionado==1){
        if(d.Mês=='Jan'|| d.Mês=='Fev' || d.Mês=='Mar'){
          if (d.name==featurename){
            distdataTrimestre.push(SomaDias(d));
          }
        }
      }else if(trimestreSelecionado==2){
        if(d.Mês=='Abr'|| d.Mês=='Mai' || d.Mês=='Jun'){
          if (d.name==featurename){
            distdataTrimestre.push(SomaDias(d));
          }
        }
      }else if(trimestreSelecionado==3){
        if(d.Mês=='Jul'|| d.Mês=='Ago' || d.Mês=='Set'){
          if (d.name==featurename){
            distdataTrimestre.push(SomaDias(d));
          }
        }
      }else{
        if(d.Mês=='Out'|| d.Mês=='Nov' || d.Mês=='Dez'){
          if (d.name==featurename){
            distdataTrimestre.push(SomaDias(d));
          }
        }
      }
    });
  }else{
    database.forEach(function(d,i){
      if (d.name==featurename){
          distdataTrimestre.push(SomaDias(d));
      }
    });
  }
  return distdataTrimestre;
}
// PREPARA A DISTRUIBUICAO PARA MESES 12 POR ANO.
function distribuicaoMes(featurename){
  var distdataMes=[];
  if(anoSelecionado!=undefined){
    if (mesSelecionado==undefined) {
      database.forEach(function(d,i){
        if (d.name==featurename && d.Ano==anoSelecionado){
            distdataMes.push(SomaDias(d));
        }
      });  
    }else{
      database.forEach(function(d,i){
        if (d.name==featurename && d.Mês==mesSelecionado && d.Ano==anoSelecionado){
            distdataMes.push(SomaDias(d));
        }
      });
    }
  }else if(diaSelecionado!=undefined){
    database.forEach(function(d,i){
      if (d.name==featurename && d.Mês==mesSelecionado){
          distdataMes.push(SomaDias(d[diaSelecionado]));
      }
    });
  }else if(mesSelecionado!=undefined){
    database.forEach(function(d,i){
      if (d.name==featurename && d.Mês==mesSelecionado){
          distdataMes.push(SomaDias(d));
      }
    });
  }else{

    database.forEach(function(d,i){
      if(d.name==featurename){
          var m= SomaDias(d);
          distdataMes.push(Number(m.toFixed(2)));
      }
    });
  }
  return distdataMes;
}
// PREPARA A DISTRUIBUICAO DE DIAS PARA MESES DE 365 PARA 12 POR ANO.
function diasToArray(d){
  var diasArray=[];
  if(d.Mês=='Abr'||d.Mês=='Jun'||d.Mês=='Set'||d.Mês=='Nov'){
    for (var i = 1; i < 31; i++) {
      diasArray.push(d[i]);
    }
  }else if(d.Mês=='Fev'){
    for (var i = 1; i < 29; i++) {
      diasArray.push(d[i]);
    }
  }else{
    for (var i = 1; i < 32; i++) {
      diasArray.push(d[i]);
    }
  }
  return diasArray;
}
// PREPARA A DISTRUIBUICAO DE DIAS.
function distribuicaoDia(featurename){
  var distdataDia=[];
  if(anoSelecionado!=undefined){
    database.forEach(function(d,i){
      if (d.name==featurename && d.Ano==anoSelecionado){
        if(diaSelecionado==31){
          if(d.Mês=='Abr' || d.Mês=='Jun' || d.Mês=='Set' || d.Mês=='Nov' || d.Mês=='Fev'){

          }else{
            distdataDia.push(d[diaSelecionado]);
          }
        }else{
          distdataDia.push(d[diaSelecionado]);
        }
      }
    });
  }else if(trimestreSelecionado!=undefined){
    database.forEach(function(d,i){
      if(trimestreSelecionado==1 && d.name==featurename){
        if( d.Mês=='Jan'|| d.Mês=='Fev' || d.Mês=='Mar' ){
          if(diaSelecionado==31){
            if(d.Mês=='Abr' || d.Mês=='Jun' || d.Mês=='Set' || d.Mês=='Nov' || d.Mês=='Fev'){

            }else{
              distdataDia.push(d[diaSelecionado]);
            }
          }else{
            distdataDia.push(d[diaSelecionado]);
          }
        }
      }else if(trimestreSelecionado==2 && d.name==featurename){
        if( d.Mês=='Abr'|| d.Mês=='Mai' || d.Mês=='Jun' ){
          if(diaSelecionado==31){
            if(d.Mês=='Abr' || d.Mês=='Jun' || d.Mês=='Set' || d.Mês=='Nov' || d.Mês=='Fev'){

            }else{
              distdataDia.push(d[diaSelecionado]);
            }
          }else{
            distdataDia.push(d[diaSelecionado]);
          }
        }
      }else if(trimestreSelecionado==3 && d.name==featurename){
        if( d.Mês=='Jul'|| d.Mês=='Ago' || d.Mês=='Set' ){
          if(diaSelecionado==31){
            if(d.Mês=='Abr' || d.Mês=='Jun' || d.Mês=='Set' || d.Mês=='Nov' || d.Mês=='Fev'){

            }else{
              distdataDia.push(d[diaSelecionado]);
            }
          }else{
            distdataDia.push(d[diaSelecionado]);
          }
        }
      }else{
        if( d.Mês=='Out'|| d.Mês=='Nov' || d.Mês=='Dez' ){
          if (d.name==featurename){
            if(diaSelecionado==31){
              if(d.Mês=='Abr' || d.Mês=='Jun' || d.Mês=='Set' || d.Mês=='Nov' || d.Mês=='Fev'){

              }else{
                distdataDia.push(d[diaSelecionado]);
              }
            }else{
              distdataDia.push(d[diaSelecionado]);
            }
          }
        }
      }
    });
  }else if(mesSelecionado!=undefined){
    database.forEach(function(d,i){
      if (d.name==featurename && d.Mês==mesSelecionado){
        if(diaSelecionado==31){
          if(d.Mês=='Abr' || d.Mês=='Jun' || d.Mês=='Set' || d.Mês=='Nov' || d.Mês=='Fev'){

          }else{
            distdataDia.push(d[diaSelecionado]);
          }
        }else{
          distdataDia.push(d[diaSelecionado]);
        }
      }
    });
  }else if(diaSelecionado!=undefined){
    database.forEach(function(d,i){
      if (d.name==featurename) {
        if(diaSelecionado==31){
          if(d.Mês=='Abr' || d.Mês=='Jun' || d.Mês=='Set' || d.Mês=='Nov' || d.Mês=='Fev'){

          }else{
            distdataDia.push(d[diaSelecionado]);
          }
        }else{
          distdataDia.push(d[diaSelecionado]);
        }
      }
    });
  }else{
    database.forEach(function(d,i){
      if (d.name==featurename) {
        diasToArray(d).forEach(function(d,i){
          distdataDia.push(d);
        });
      }
    });
  }
  return distdataDia;
}
// PREPARA A DISTRUIBUICAO DE PONTOS PARA O MAP DE PONTOS.
function dotMapPrep(dist){
  var round=[];
  var uniqueArray;
  dist.forEach(function(d,i){
    round.push(Math.ceil(d/10)*10);
  });
  uniqueArray = round.filter(function(item, pos) {
      return round.indexOf(item) == pos;
  });
  var probs = {};
  round.forEach(function(x) {
    var num=(probs[x] || 0)+1;
    probs[x]=num;
  });
    for(var key in probs){
      probs[key] = probs[key] / round.length;
    }
  uniqueArray.forEach(function(d,i){
    uniqueArray[i]=[d,probs[d]];
  });
  return uniqueArray;
}
// PREPARA A INFORMAÇÃO DO MAPA COM BASE NO DATA SET E SE TIVER ALGUM FILTRO DE MES, TRIMESTRE, OU DIA ATIVADO.
function infoprops(props){
    if(featurename!=undefined){
      if(anoSelecionado!=undefined){
        if(mesSelecionado!=undefined){
          return '<h5>Information based on '+featurename+'.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Valores para '+mesSelecionado+'/'+anoSelecionado+'.');
        }else if(trimestreSelecionado!=undefined){
          if(diaSelecionado!=undefined){
            return '<h5>Information based on '+featurename+'.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+diaSelecionado+' days of '+trimestreSelecionado+'ºtrimestre/'+anoSelecionado+'.');
          }else{
            return '<h5>Information based on '+featurename+'.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Valores para o '+trimestreSelecionado+'º quarter of '+anoSelecionado+'.');
          }
        }else if(diaSelecionado!=undefined){
          return '<h5>Information based on '+featurename+'.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+diaSelecionado+' days of '+anoSelecionado+'.');
        }else{
          return '<h5>Information based on '+featurename+'.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Valores para '+anoSelecionado+'.');
        }
      }else if(trimestreSelecionado!=undefined){
        if(diaSelecionado!=undefined){
            return '<h5>Information based on '+featurename+'.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+diaSelecionado+' days of'+trimestreSelecionado+'º quarters in the period.');
        }else{
            return '<h5>Information based on '+featurename+'.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+trimestreSelecionado+' quarters in the period.');
        }
      }else if(mesSelecionado!=undefined){
        if(diaSelecionado!=undefined){
            return '<h5>Information based on '+featurename+'.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+diaSelecionado+' days of the month of'+mesSelecionado+' in the period.');
        }else{
            return '<h5>Information based on '+featurename+'.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for mês de '+mesSelecionado+' in the period.');
        }
      }else if(diaSelecionado!==undefined){
            return '<h5>Information based on '+featurename+'.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+diaSelecionado+' days of the month in the period.');
      }else{
          return '<h4> Information based on '+featurename+'.</h4>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Valores referentes a todo o período.');
      }
    }else{
      if(anoSelecionado!=undefined){

        if(mesSelecionado!=undefined){
          return '<h5>Information based on the state of PE Brazil.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Valores para '+mesSelecionado+'/'+anoSelecionado+'.');
        }else if(trimestreSelecionado!=undefined){
          if(diaSelecionado!=undefined){
            return '<h5>Information based on the state of PE Brazil.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+diaSelecionado+' days of '+trimestreSelecionado+'ºtrimestre/'+anoSelecionado+'.');
          }else{
            return '<h5>Information based on the state of PE Brazil.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Valores para o '+trimestreSelecionado+'º quarter of '+anoSelecionado+'.');
          }
        }else if(diaSelecionado!=undefined){
          return '<h5>Information based on the state of PE Brazil.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+diaSelecionado+' days of '+anoSelecionado+'.');
        }else{
          return '<h5>Information based on the state of PE Brazil.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Valores para '+anoSelecionado+'.');
        }

      }else if(trimestreSelecionado!=undefined){
        if(diaSelecionado!=undefined){
            return '<h5>Information based on the state of PE Brazil.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+diaSelecionado+' days of'+trimestreSelecionado+'º quarters in the period.');
        }else{
            return '<h5>Information based on the state of PE Brazil.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+trimestreSelecionado+' quarters in the period.');
        }
      }else if(mesSelecionado!=undefined){
        if(diaSelecionado!=undefined){
            return '<h5>Information based on the state of PE Brazil.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+diaSelecionado+' days of the month of'+mesSelecionado+' in the period.');
        }else{
            return '<h5>Information based on the state of PE Brazil.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for the month of '+mesSelecionado+' in the period.');
        }
      }else if(diaSelecionado!==undefined){
            return '<h5>Information based on the state of PE Brazil.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+diaSelecionado+' days of the month in the period.');
      }else{
          return '<h4> Information based on the state of PE Brazil.</h4>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for the entire period.');
      }
    }
}
// DESTACA O LAYER DE UM POLIGONO NOS MAPAS
function highlightFeature(e) {
  var layer = e.target;
  layer.setStyle({
    weight: 1.5,
    color: 'black',
    fillOpacity: 0.7
  });
  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
}
function resetHighlight(e) {
  GeoLayer.resetStyle(e.target);
}
// PREPARA A DISTRUIBUICAO DE ACORDO COM OS FILTROS ATIVADOS.
function getDis(featurename){
  if(anoSelecionado!=undefined){
    var dist= distribuicaoAno(featurename);
  }else if(trimestreSelecionado!=undefined){
    var dist= distribuicaoTri(featurename);
  }else if(mesSelecionado!=undefined){
    var dist= distribuicaoMes(featurename);
  }else if(diaSelecionado!=undefined){
    var dist= distribuicaoDia(featurename);
  }else{
    var dist= distribuicaoMes(featurename);
  }
  return dist;
}
function getDis2(featurename){
  if(trimestreSelecionado!=undefined){
    var dist= distribuicaoTri(featurename);
  }else if(mesSelecionado!=undefined){
    var dist= distribuicaoMes(featurename);
  }else if(diaSelecionado!=undefined){
    var dist= distribuicaoDia(featurename);
  }else{
    var dist= distribuicaoMes(featurename);
  }
  return dist;
};

function legendonAdd(map) {
  var div = L.DomUtil.create('div', 'info legend');
  for (var i = (grades.length-1); i >=0 ; i--) {
    div.innerHTML +='<i style="color:'+colorN(grades[i])+'; background:'+colorN(grades[i])+'"></i>'+">"+grades[i]+'</br>';
  }
  return div;
};

//ESCALA DE CORES PARA O MAPA DE PONTOS
function colorD(media){
  var cbf = palette('cb-BuGn', 9);
  //var cbf = palette('cb-BrBG', 11);
  var color;
  gradesDot.forEach(function(d,i){
    if(Number(media)>=d){
      color="#"+cbf[i];
    }
  });
  return color;
}
function colorR(prob){
  var cbf = palette('cb-BuGn', 9);
  var color;
  gradesR.forEach(function(d,i){
    if(Number(prob)>=d){
      color=cbf[i];
    }
  });
  return color;
}
//ESCALA DE CORES PARA PROBABILIDADE
function colorN(d){
  var cbf = palette('cb-BrBG', 11);
  cbf.reverse();
  if(d>=1.0){
    cor= cbf[10];   
  }else if (d>=0.9) {
    cor= cbf[9];  
  }else if(d>=0.8){
    cor= cbf[8];  
  }else if(d>=0.7){
    cor= cbf[7];  
  }else if(d>=0.6){
    cor= cbf[6];  
  }else if(d>=0.5){
    cor= cbf[5];  
  }else if(d>=0.4){
    cor= cbf[4];  
  }else if(d>=0.3){
    cor= cbf[3];  
  }else if(d>=0.2){
    cor= cbf[2];  
  }else if (d>=0.1) {
    cor= cbf[1];  
  }else{
    cor= cbf[0];  
  }
  return cor;
}
//ESCALA DE CORES PARA O MAPA DE MÉDIA
function colorM(media){
  var cbf = palette('cb-BuGn', 9);
  var color;
  grades.forEach(function(d,i){
    if(Number(media)>=d){
      color="#"+cbf[i];
    }
  });
  return color;
}
//COMPARA DOIS ARRAYS DE DISTRUIBUIÇÕES IGUAIS E RETORNA A PROBABILIDADE DO PRIMEIRO SER MENOR QUE O SEGUNDO.
function cmp(dist1,dist2){
  var count=0;
  dist1.forEach(function(d,i){
    if(dist2[i]<dist1[i]){
      count++;
    }
  });
  return (count/dist1.length);
}
// ALTERA A ORDEM DE OBJETOS EM UM ARRAY DE MODO ALEATÓRIO
function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
  }
  return array;
}
// QUANDO INVOCADA ESSA FUNÇÃO COMPARA DUAS ÁREAS RETORNA A PROBABILIDADE DE UMA SER MAIOR QUE A OUTRA.
function comparando(e){
  var exists=false;
    selecionados.forEach(function(d,i){
      if(e.target.feature.properties.name==d.target.feature.properties.name){
        exists=true;
      }
    });
    if(exists==false && selecionados.length<3){
      var layer = e.target;
      layer.setStyle({
        weight: 1.5,
        color: 'black',
        fillOpacity: 0.7
      });
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
      selecionados.push(e);
      if(selecionados.length==2){
        GeoLayer.clearLayers();
        var newdata=[];
        selecionados.forEach(function(d,i){
          newdata.push(d.target.feature);
        });
        compare(newdata);
      }
    }else if(exists==true && selecionados.length==2){
      selecionados=[];
      inicio(dataset);
    }else if(exists){
      var filtered = selecionados.filter(function(el) { return el.target.feature.properties.name != e.target.feature.properties.name; }); 
      selecionados=filtered;
      GeoLayer.resetStyle(e.target);
    }
}
// ENCONTRA UM OBJETO DENTRO DE UM ARRAY POR UMA CHAVE ID.
function findP(array,id){
  var p;
  array.forEach(function(d,i){
    if(d.id==id){
      p=d;
    }
  });
  return p;
}
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
//QUANDO INVOCADA ESSA FUNÇÃO COMPARA UMA AREA COM AS DEMAIS PARA TECNICA DE INTERVALO.
function whenClicked(e) {              
  var slider = $("#example_id").data("ionRangeSlider");
  var elem = document.getElementById("#example_id");
  if(featurename==e.target.feature.properties.name){
    featurename=undefined;
    inicio(dataset);
    if(elem!=null){
      slider.update({
        disable:false
      });
    }
  }else{
    featurename=e.target.feature.properties.name;
    compare(dataset);
    if(elem!=null){
      slider.update({
        disable:true
      });
    }
  }
}

// ESSA FUNÇÃO EMBARALHA AS PERGUNTAS CONTIDAS NO ARRAY DE PERGUNTAS E PREENCHE AUTOMATICAMENTO O HTML COM A NOVA ORDEM.
function geraperguntas(perguntas,index,vis){
  var d1= document.createElement("div");
  var d2= document.createElement("div");
  d2.setAttribute('class','card');
  var pergunta= perguntas[index];
  var label = document.createElement("label");//label antes com a pergunta
  label.setAttribute('style',"font-weight:bold;");
  label.setAttribute('for',"pergunta1");
  label.setAttribute('id',"pergunta1");
  label.innerText= pergunta.question_text//[0];//"Pergunta 1 ?";

  var select = document.createElement("select");
  select.setAttribute('id',""+pergunta.id+vis);
  select.setAttribute('name',""+pergunta.id+vis);
  select.setAttribute('class',"form-control");
  select.required=true;
  var opt= document.createElement("option");
  opt.value='';
  opt.disabled=true;
  opt.selected=true;
  opt.innerHTML = 'Pick one';
  select.appendChild(opt);
  var nQ=pergunta.id;
  if (nQ!='004C'&&nQ!='011C'&&nQ!='012C'&&nQ!='017T'&&nQ!='024T'&&nQ!='025T') {
      var div1 = document.createElement("div");
      div1.setAttribute('class','col-sm-4 col-md-4 col-lg-4 col-xl-4');

      var input1= document.createElement("input");
      input1.setAttribute('type','hidden');
      input1.setAttribute('id','CLC'+pergunta.id+vis);
      input1.setAttribute('name','CLC'+pergunta.id+vis);
      input1.setAttribute('value','');

      var input2= document.createElement("input");
      input2.setAttribute('type','hidden');
      input2.setAttribute('id','TMP'+pergunta.id+vis);
      input2.setAttribute('name','TMP'+pergunta.id+vis);
      input2.setAttribute('value','');

      var inputR= document.createElement("input");
      inputR.setAttribute('type','hidden');
      inputR.setAttribute('id','ANS'+pergunta.id+vis);
      inputR.setAttribute('name','ANS'+pergunta.id+vis);
      inputR.setAttribute('value',''+pergunta.answer);

      if(pergunta.size.length>0){
        var inputS= document.createElement("input");
        inputS.setAttribute('type','hidden');
        inputS.setAttribute('id','CDC'+pergunta.id+vis);
        inputS.setAttribute('name','CDC'+pergunta.id+vis);
        inputS.setAttribute('value','SIZE:'+pergunta.size);
      }else if(pergunta.variance.length>0){
        var inputS= document.createElement("input");
        inputS.setAttribute('type','hidden');
        inputS.setAttribute('id','CDC'+pergunta.id+vis);
        inputS.setAttribute('name','CDC'+pergunta.id+vis);
        inputS.setAttribute('value','VARIANCE:'+pergunta.variance);
      }else if(pergunta.distance.length>0){
        var inputS= document.createElement("input");
        inputS.setAttribute('type','hidden');
        inputS.setAttribute('id','CDC'+pergunta.id+vis);
        inputS.setAttribute('name','CDC'+pergunta.id+vis);
        inputS.setAttribute('value','DISTANCE:'+pergunta.distance);
      }else{
        var inputS= document.createElement("input");
        inputS.setAttribute('type','hidden');
        inputS.setAttribute('id','CDC'+pergunta.id+vis);
        inputS.setAttribute('name','CDC'+pergunta.id+vis);
        inputS.setAttribute('value','');
      }

      var label2 = document.createElement("label");
      label2.setAttribute('for','CNFC'+pergunta.id+vis);
      label2.setAttribute('style',"font-weight:bold;");
      label2.innerText='From 1 to 5 being 1 little confident and 5 very confident, how confident are you of your answer?';

      var input3= document.createElement("input");
      input3.setAttribute('type','text');
      input3.setAttribute('class','ioRangerSlider');
      input3.setAttribute('id','CNFC'+pergunta.id+vis);
      input3.setAttribute('name','CNFC'+pergunta.id+vis);
      input3.setAttribute('value','');
      input3.required=true;

      var input8= document.createElement("input");
      input8.setAttribute('type','text');
      input8.setAttribute('id',""+pergunta.id+vis);
      input8.setAttribute('name',"pergunta"+pergunta.id+vis);
      input8.setAttribute('class','form-control');
      input8.setAttribute('value','');
      if(pergunta.id=="004C"||pergunta.id=="011C"||pergunta.id=="012C"||pergunta.id=="017T"||pergunta.id=="024T"||pergunta.id=="025T"){
        input8.setAttribute('placeholder','E.g. Caruaru');
      }else{
        input8.setAttribute('placeholder','E.g. 50');
      }
      input8.required=true;
        var input4= document.createElement("div");
        var input7= document.createElement("br");
        var input6= document.createElement("p");
        input4.setAttribute('class','invalid-feedback');
        input6.innerText='You have to type one value.';
        input4.appendChild(input7);
        input4.appendChild(input6);
      div1.appendChild(input8);
      div1.appendChild(input4);
      d2.appendChild(label);
      d1.appendChild(div1);
      d2.appendChild(d1);
  }else{
    for (var i = 0; i < pergunta.op.length; i++) {
      var div1 = document.createElement("div");
      div1.setAttribute('class',"form-group col-md-4");
      var input1= document.createElement("input");
      input1.setAttribute('type','hidden');
      input1.setAttribute('id','CLC'+pergunta.id+vis);
      input1.setAttribute('name','CLC'+pergunta.id+vis);
      input1.setAttribute('value','');

      var input2= document.createElement("input");
      input2.setAttribute('type','hidden');
      input2.setAttribute('id','TMP'+pergunta.id+vis);
      input2.setAttribute('name','TMP'+pergunta.id+vis);
      input2.setAttribute('value','');

      var inputR= document.createElement("input");
      inputR.setAttribute('type','hidden');
      inputR.setAttribute('id','ANS'+pergunta.id+vis);
      inputR.setAttribute('name','ANS'+pergunta.id+vis);
      inputR.setAttribute('value',''+pergunta.answer);

      if(pergunta.size.length>0){
        var inputS= document.createElement("input");
        inputS.setAttribute('type','hidden');
        inputS.setAttribute('id','CDC'+pergunta.id+vis);
        inputS.setAttribute('name','CDC'+pergunta.id+vis);
        inputS.setAttribute('value','SIZE:'+pergunta.size);
      }else if(pergunta.variance.length>0){
        var inputS= document.createElement("input");
        inputS.setAttribute('type','hidden');
        inputS.setAttribute('id','CDC'+pergunta.id+vis);
        inputS.setAttribute('name','CDC'+pergunta.id+vis);
        inputS.setAttribute('value','VARIANCE:'+pergunta.variance);
      }else if(pergunta.distance.length>0){
        var inputS= document.createElement("input");
        inputS.setAttribute('type','hidden');
        inputS.setAttribute('id','CDC'+pergunta.id+vis);
        inputS.setAttribute('name','CDC'+pergunta.id+vis);
        inputS.setAttribute('value','DISTANCE:'+pergunta.distance);
      }else{
        var inputS= document.createElement("input");
        inputS.setAttribute('type','hidden');
        inputS.setAttribute('id','CDC'+pergunta.id+vis);
        inputS.setAttribute('name','CDC'+pergunta.id+vis);
        inputS.setAttribute('value','');
      }

      var label2 = document.createElement("label");
      label2.setAttribute('for','CNFC'+pergunta.id+vis);
      label2.setAttribute('style',"font-weight:bold;");
      label2.innerText='From 1 to 5 being 1 little confident and 5 very confident, how confident are you of your answer?';

      var input3= document.createElement("input");
      input3.setAttribute('type','text');
      input3.setAttribute('class','ioRangerSlider');
      input3.setAttribute('id','CNFC'+pergunta.id+vis);
      input3.setAttribute('name','CNFC'+pergunta.id+vis);
      input3.setAttribute('value','');
      input3.required=true;
      var option= document.createElement("option");
      option.value = pergunta.op[i];
      option.innerHTML = pergunta.op[i];
      select.appendChild(option);
      if(i==pergunta.op.length-1){
        var input4= document.createElement("div");
        var input7= document.createElement("br");
        var input6= document.createElement("p");
        input4.setAttribute('class','invalid-feedback');
        input6.innerText='You must pick one.';
        input4.appendChild(input7);
        input4.appendChild(input6);
        div1.appendChild(select);
        div1.appendChild(input4);
        d2.appendChild(label);
        d1.appendChild(div1);
        d2.appendChild(d1);
      }
    }
  }

  d2.appendChild(label2);
  d2.appendChild(input3);
  var input5= document.createElement("div");
  input5.setAttribute('class','invalid-feedback');
  input5.innerText='You must pick one.';
  d2.appendChild(input5);
  d2.appendChild(input1);
  d2.appendChild(input2);
  d2.appendChild(inputR);
  d2.appendChild(inputS);
  return d2;
}
// QUANDO O RECPATHCA É COMPLETADO SUBMETE OS FORMS.
function recaptcha_callback(){
  $('#5Form').submit();
  $('#feedback').val($('#feedback2').val());
  $('#ordem').val(arr.join());
  $('#2Form').submit();
  $('#vis').css('display','none');
  $('#footer').css('display','');
  //$('#Form').submit();
  //$('#3Form').submit();
  //$('#4Form').submit();
  //$('#captchaError').hide();
}

function StartHOPS(){
  hops=true;
}
function StopHOPS(){
  hops=false;
}

function infopropsTaxi(props){
    if(featurename!=undefined){
      if(anoSelecionado!=undefined){
        if(mesSelecionado!=undefined){
          return '<h5>Information based on '+featurename+'.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Valores para '+mesSelecionado+'/'+anoSelecionado+'.');
        }else if(trimestreSelecionado!=undefined){
          if(diaSelecionado!=undefined){
            return '<h5>Information based on '+featurename+'.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+diaSelecionado+' days of '+trimestreSelecionado+'ºtrimestre/'+anoSelecionado+'.');
          }else{
            return '<h5>Information based on '+featurename+'.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Valores para o '+trimestreSelecionado+'º quarter of '+anoSelecionado+'.');
          }
        }else if(diaSelecionado!=undefined){
          return '<h5>Information based on '+featurename+'.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+diaSelecionado+' days of '+anoSelecionado+'.');
        }else{
          return '<h5>Information based on '+featurename+'.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Valores para '+anoSelecionado+'.');
        }
      }else if(trimestreSelecionado!=undefined){
        if(diaSelecionado!=undefined){
            return '<h5>Information based on '+featurename+'.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+diaSelecionado+' days of'+trimestreSelecionado+'º quarters in the period.');
        }else{
            return '<h5>Information based on '+featurename+'.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+trimestreSelecionado+' quarters in the period.');
        }
      }else if(mesSelecionado!=undefined){
        if(diaSelecionado!=undefined){
            return '<h5>Information based on '+featurename+'.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+diaSelecionado+' days of the month of'+mesSelecionado+' in the period.');
        }else{
            return '<h5>Information based on '+featurename+'.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for mês de '+mesSelecionado+' in the period.');
        }
      }else if(diaSelecionado!==undefined){
            return '<h5>Information based on '+featurename+'.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+diaSelecionado+' days of the month in the period.');
      }else{
          return '<h4> Information based on '+featurename+'.</h4>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Valores referentes a todo o período.');
      }
    }else{
      if(anoSelecionado!=undefined){

        if(mesSelecionado!=undefined){
          return '<h5>Based information in Manhattan island - NYC/USA.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Valores para '+mesSelecionado+'/'+anoSelecionado+'.');
        }else if(trimestreSelecionado!=undefined){
          if(diaSelecionado!=undefined){
            return '<h5>Based information in Manhattan island - NYC/USA.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+diaSelecionado+' days of '+trimestreSelecionado+'ºtrimestre/'+anoSelecionado+'.');
          }else{
            return '<h5>Based information in Manhattan island - NYC/USA.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Valores para o '+trimestreSelecionado+'º quarter of '+anoSelecionado+'.');
          }
        }else if(diaSelecionado!=undefined){
          return '<h5>Based information in Manhattan island - NYC/USA.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+diaSelecionado+' days of '+anoSelecionado+'.');
        }else{
          return '<h5>Based information in Manhattan island - NYC/USA.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Valores para '+anoSelecionado+'.');
        }

      }else if(trimestreSelecionado!=undefined){
        if(diaSelecionado!=undefined){
            return '<h5>Based information in Manhattan island - NYC/USA.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+diaSelecionado+' days of'+trimestreSelecionado+'º quarters in the period.');
        }else{
            return '<h5>Based information in Manhattan island - NYC/USA.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+trimestreSelecionado+' quarters in the period.');
        }
      }else if(mesSelecionado!=undefined){
        if(diaSelecionado!=undefined){
            return '<h5>Based information in Manhattan island - NYC/USA.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+diaSelecionado+' days of the month of'+mesSelecionado+' in the period.');
        }else{
            return '<h5>Based information in Manhattan island - NYC/USA.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for the month of '+mesSelecionado+' in the period.');
        }
      }else if(diaSelecionado!==undefined){
            return '<h5>Based information in Manhattan island - NYC/USA.</h5>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for '+diaSelecionado+' days of the month in the period.');
      }else{
          return '<h4> Based information in Manhattan island - NYC/USA.</h4>' +  (props ?'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>': ' Values for the entire period.');
      }
    }
}