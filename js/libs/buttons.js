var arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],clicks=0,d1 = new Date(),stepper1,stepper2,stepper3,stepper4,d4,list,d2,diff,post_url,request_method,form_data,forms;
var novodataset;
var tempoinicial=new Date(),tempofinal,tempotutorial,duracaoPerguntas,duracaotutorial,duracao;
d3.json("./data/perguntas.json",function(error,data){
	novodataset=data;
});
$(document).ready(function () {
	perguntasT1=shuffle(perguntasT1);
	perguntasT2=shuffle(perguntasT2);
	perguntasT3=shuffle(perguntasT3);
	perguntasT4=shuffle(perguntasT4);
	//PREENCHE TODAS AS PERGUNTAS.
	arr=shuffle(arr);
	arr.forEach(function(d,i){
		switch(i) {
		  	case 0:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("21p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		  	case 1:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("22p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		  	case 2:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("23p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 3:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("24p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 4:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("25p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 5:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("26p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 6:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("27p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 7:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("28p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 8:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("29p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 9:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("30p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 10:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("31p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 11:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("32p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 12:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("33p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 13:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("34p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 14:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("35p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;	
		    case 15:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("36p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 16:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("37p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 17:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("38p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 18:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("39p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 19:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("40p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 20:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("41p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 21:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("42p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 22:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("43p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 23:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("44p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 24:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("45p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;
		    case 25:
		  		d4= geraperguntas(novodataset,d,3);
		  		list = document.getElementById("46p");
				list.insertBefore(d4, list.childNodes[0]);
		    break;		    		    		    		    	    		    
		  default:
		}
	});
	arr.forEach(function(d,i){
	    arr[i]=d+1;
	});
	//COLOCAR AS TABS DAS PERGUNTAS EM ORDEM ALEATÓRIA
	//var nv= $('#pills-tab > li');
   //	var nvf=nv.slice(4,5);
	//nv=nv.slice(0,4);
	//nv=shuffle(nv);
	//$('#pills-tab').empty();

	//nv.each(function(d,i){
	// 	$('#pills-tab').append(nv[d]);
	//});
	//$('#pills-tab').append(nvf);
	$('#pills-tab >li >a')[0].click();
	$('#pills-tab >li')[1].classList.add('disabled');
	//$('#pills-tab >li')[2].classList.add('disabled');
	//$('#pills-tab >li')[3].classList.add('disabled');
	//$('#pills-tab >li')[4].classList.add('disabled');
	// BLOCO PARA INICIAR OS STEPS DE CADA ETAPA DO SISTEMA 0 - TUTORIAL. 1- PROB. COM ALPHA. 2- PROB. COM INTERVALO. 3- PONTOS 4- MÉDIA ANIMADA. 
	stepper0 = new Stepper($('.bs-stepper')[0]);
	//stepper1 = new Stepper($('.bs-stepper')[1]);
	stepper2 = new Stepper($('.bs-stepper')[1]);
	//stepper3 = new Stepper($('.bs-stepper')[3]);
	//stepper4 = new Stepper($('.bs-stepper')[4]);
	//OCULTA A TELA INICIAL E EXIBE O TUTORIAL
	$('#iniciar').click(function(){
		if($('input[name ="inlineRadioOptions"]:checked').val()==undefined || $('input[name ="inlineRadioOptions"]:checked').val()=='No'){
			$('.alert').addClass("show");//alert('Você Precisa aceitar os termos para começar.');
		}else{
			$('.alert').removeClass("show");
	    	$('#header').css('display','none');
	    	$('#tutorial').css('display','');			
		}
    });
	// CONTA OS CLICKS PARA DEPOIS ENVIAR COM OS FORMULÁRIOS.
    $(document).on("click",function() {
        clicks+=1;
    });
    // REDUZ RESETA O NÚMERO DE CLICKS JÁ CONSIDERANDO O BOTÃO DE PASSAGEM (NEXT)
    $(".custom-control-input").click(function() {
    	clicks-=1;
    });
    // FUNÇÃO PARA GARANTIR QUE O VALOR ESCOLHIDO NO SLIDER SEJA COLOCADO NO INPUT CORRETO DO FORM.
    $(".ioRangerSlider").ionRangeSlider({
		min: 1,
        max: 5,
        skin: "big",
        grid: true,
        onChange: function (data) {
        	$('#'+data.input[0].id).value=data.input[0].value; 
        }
	});
    // ATUALIZA OS VALORES DO MAPA DE PROB COM ALPHA QUANDO O SLIDER MUDA NA ETAPA DE PERGUNTAS.
	$("#example_id").ionRangeSlider({
		min: 0,
        max: 300,
        skin: "big",
        grid: true,
        onChange: function (data) {
            alpha=data.from;
            inicio(dataset);
        }
	});
	// ATUALIZA OS VALORES DO MAPA DE PROB COM INTERVALO QUANDO O SLIDER MUDA NA ETAPA DE PERGUNTAS.
	$("#sliderrange2").ionRangeSlider({
		type: "double",
		min: 0,
        max: 842,
        from: 80,
        to: 400,
        step: 10,
        drag_interval: true,
        skin: "big",
        grid: true,
        onChange: function (data) {
        	interOn=true;
            left=data.from;
            right=data.to;
            inicioRange(dataset);
            interOn=false;
        }
	});
	$("#sliderrangetaxi").ionRangeSlider({
		type: "double",
		min: 0,
        max: 54470,
        from: 22000,
        to: 36000,
        step: 100,
        drag_interval: true,
        skin: "big",
        grid: true,
        onChange: function (data) {
        	interOn=true;
            leftTaxi=data.from;
            rightTaxi=data.to;
            inicioTaxi(dataset);
            interOn=false;
        }
	});
	// ATUALIZA OS VALORES DO MAPA DE PROB COM ALPHA QUANDO O SLIDER MUDA NA ETAPA DO TUTORIAL.
	$("#Vis01Tuto").ionRangeSlider({
		min: 0,
        max: 300,
        skin: "big",
        grid: true,
        onChange: function (data) {
        	opcoes=['Recife','Caruaru'];
            alpha=data.from;
            Vis01TutorialFunction(dataset,false);
        }
	});
	// ATUALIZA OS VALORES DO MAPA DE PROB COM INTERVALO QUANDO O SLIDER MUDA NA ETAPA DO TUTORIAL.
	$("#Vis02Tuto").ionRangeSlider({
		type: "double",
		min: 0,
        max: 842,
        from: 80,
        to: 400,
        step: 10,
        drag_interval: true,
        skin: "big",
        grid: true,
        onChange: function (data) {
        	opcoes=['Recife','Caruaru'];
            left=data.from;
            right=data.to;
            Vis02TutorialFunction(dataset,true);
        }
	});
	// PARA A ETAPA DE TUTORIAL CORRIGE O PROBLEMA DO TAMANHO DO MAPA POR CONTA DAS ANIMAÇÕES E INICIA OS MAPAS.
	$('.bs-stepper')[0].addEventListener('shown.bs-stepper', function (event) {
		/*if (event.detail.indexStep==1) {
			InicioDot();
		}*/
		if(event.detail.indexStep==4){
			mapVis02.invalidateSize();
		  	opcoes=['Recife','Caruaru'];
    		Vis02TutorialFunction(dataset,true);
    	}
			/*mapVis04.invalidateSize();
			opcoes=['Recife','Caruaru'];
    		Vis04TutorialFunction(dataset);
		}else if(event.detail.indexStep==7){
			mapVis01.invalidateSize();
		  	opcoes=['Recife','Caruaru'];
    		Vis01TutorialFunction(dataset,false);
		}else if(event.detail.indexStep==10){
			mapVis02.invalidateSize();
		  	opcoes=['Recife','Caruaru'];
    		Vis02TutorialFunction(dataset,true);
		}else if(event.detail.indexStep==13){
			mapVis03.invalidateSize();
		  	opcoes=['Recife','Caruaru'];
	        Vis03TutorialFunction(dataset);
		}*/
	});
	// PARA A ETAPA DE PERGUNTAS CORRIGE O PROBLEMA DO TAMANHO DO MAPA POR CONTA DAS ANIMAÇÕES E INICIA OS MAPAS QUANDO UMA TAB MUDA.
    $("a[href='#pills-profile']").on('shown.bs.tab', function(e) {
	    var id= $('#2Form > div.active > div > div > div > div>').siblings()[0].id;
	    var base=id.substring(3,4);
		id=id.substring(0, 4);
		var p=findP(novodataset,id);
		p=p.highlights;
		opcoes=[];
		p.forEach(function(d,i){
		    opcoes.push(d);
		});
		if(base=='C'){
			$('#chuvaview').show();
			$('#taxiview').hide();
	    	mapRange.invalidateSize();
			inicioRange(dataset);
		}else if(base=='T'){
			$('#taxiview').show();
			$('#chuvaview').hide();
			mapVistaxi.invalidateSize();
			inicioTaxi(datasettaxi);
		}
	});/*
	$("a[href='#pills-dotmap']").on('shown.bs.tab', function(e) {
	    mapDot.invalidateSize();
		var id= $('#3Form > div.active > div > div > div > div> input')[0].id;
		id=id.substring(0, 3);
		var p=findP(perguntasT3,id);
		p=p.slice(2,p.length);
		opcoes=[];
		p.forEach(function(d,i){
			opcoes.push(d);
		});
		inicioDotMap(dataset);
	});
	$("a[href='#pills-media']").on('shown.bs.tab', function(e) {
	    mapMedia.invalidateSize();
	    var id= $('#4Form > div.active > div > div > div > div> input')[0].id;
		id=id.substring(0, 3);
		var p=findP(perguntasT4,id);
		p=p.slice(2,p.length);
		opcoes=[];
		p.forEach(function(d,i){
		    opcoes.push(d);
		});
		inicioMedia(dataset);
	});*/
	/*$("a[href='#pills-home']").on('shown.bs.tab', function(e) {
		map.invalidateSize();
	    var id= $('#Form > div.active > div > div > div > div> input')[0].id;
	    id=id.substring(0, 3);
	    var p=findP(novodataset,id);
		p=p.highlights;//p.slice(2,p.length);
	    opcoes=[];
	    p.forEach(function(d,i){
	    	opcoes.push(d);
	    });
	    inicio(dataset);
	});*/
	// VALIDA AS RESPOSTAS DOS FORMS, DESTACA AS ÁREAS PERGUNTADAS E SETA OS VALORES DE TEMPO E CLICK PARA CADA PERGUNTA.
	$(".btn-next-form").click(function() {
		if($(this).hasClass('tutorial')==false){
			var ent= $(this).parent().find('.form-group > div > div> div >').siblings()[0].name;
			var entid= $(this).parent().find('.form-group > div > div> div >').siblings()[0].id;
			if($('input[name='+ent+']:checked').val()==undefined && $('input[name='+ent+']').hasClass('custom-control-input')==true){
				$(this).parent().parent()[0].classList.add('was-validated');
			}else if($('input[name='+ent+']').val()==""&& $('input[name='+ent+']').hasClass('custom-control-input')==false){
				$(this).parent().parent()[0].classList.add('was-validated');
			}else if($('#'+entid).val()==undefined && $('#'+entid).children().length>0){
				$(this).parent().parent()[0].classList.add('was-validated');
			}else{
			   	var formName=$(this).parent().parent()[0].id;
			   	if($(this).parent().parent().hasClass('was-validated')){
					$(this).parent().parent()[0].classList.remove("was-validated");
				}
			   	opcoes=[];
			   	/*if(formName=='Form'){
			   		stepper1.next();
			   		var id= $(this).parent().next().find('div >div > div> input')[0].id;
			    	id=id.substring(0, 3);
			   		var p=findP(novodataset,id);
			    	p=p.highlights;//p.slice(2,p.length);
			    	p.forEach(function(d,i){
			    		opcoes.push(d);
			    	});
			    	inicio(dataset);
			   	}else */if(formName=='2Form'){
			   		stepper2.next();
			   		var id= $(this).parent().next().find('div >div > div>').siblings()[0].id;
			   		var base=id.substring(3,4);
					id=id.substring(0, 4);
					var p=findP(novodataset,id);
			    	p=p.highlights;
			    	p.forEach(function(d,i){
			    		opcoes.push(d);
			    	});
					if(base=='C'){
						$('#chuvaview').show();
						$('#taxiview').hide();
				    	mapRange.invalidateSize();
						inicioRange(dataset);
					}else if(base=='T'){
						$('#taxiview').show();
						$('#chuvaview').hide();
						mapVistaxi.invalidateSize();
						inicioTaxi(datasettaxi);
					}
			   	}/*else if(formName=='4Form'){
			   		stepper4.next();
			   		var id= $(this).parent().next().find('div >div > div> input')[0].id;
			    	id=id.substring(0, 3);
			   		var p=findP(perguntasT4,id);
			    	p=p.slice(2,p.length);
			    	p.forEach(function(d,i){
			    		opcoes.push(d);
			    	});
			    	inicioMedia(dataset);
			   	}else{
			   		stepper3.next();
					var id= $('#3Form > div.active > div > div > div > div> input')[0].id;
				    id=id.substring(0, 3);
				    var p=findP(perguntasT3,id);
				    p=p.slice(2,p.length);
				    opcoes=[];
				    p.forEach(function(d,i){
				    	opcoes.push(d);
				    });
					inicioDotMap(dataset);
			   	}*/
				$(this).parent().find('.form-group > div >.clicks')[0].value = clicks;
				d2 = new Date();
				diff = Math.abs(d1-d2)/1000;
				$(this).parent().find('.form-group > div >.tempo')[0].value = (Math.round((diff/60)*100)/100);
				clicks=-1;
				d1 = new Date();		
			}
		}else{
			//VALIDA O FORM COM INFORMAÇÕES PESSOAIS
			if($(this)[0].id=='btuto1'){
				if($('#5Form')[0].checkValidity()==false){
					$('#5Form')[0].classList.add("was-validated");
				}else{
					stepper0.next();
				}
			// PREPARA E INICIA A ETAPA DE PERGUNTAS PÓS TUTORIAL
			}else if($(this)[0].id=='btuto10'){
				tempotutorial= new Date();
				duracaotutorial= tempotutorial-tempoinicial;
				duracaotutorial= math.round(((duracaotutorial/1000)/60)*100)/100;
				
				alpha=0;
				clicks=0;
				//if(pontos!= undefined){
				//	pontos.clearLayers();
				//}
				//hops=true;
				$('#tutorial').css('display','none');
	    		$('#vis').css('display','');
	    		/*if($('#Form').is(':visible')){
					map.invalidateSize();
					var id= $('Form > div.active > div > div > div > div> input')[0].id;
				    id=id.substring(0, 3);
				    var p=findP(novodataset,id);
			    	p=p.highlights;
				    opcoes=[];
				    p.forEach(function(d,i){
				    	opcoes.push(d);
				    });
				    inicio(dataset);
				}else */if($('#2Form').is(':visible')){
					mapRange.invalidateSize();
					mapVistaxi.invalidateSize();
					var id= $('#2Form > div.active > div > div > div > div>').siblings()[0].id;
				   	var base=id.substring(3,4);
					id=id.substring(0, 4);
				    var p=findP(novodataset,id);
			    	p=p.highlights;
				    opcoes=[];
				    p.forEach(function(d,i){
				    	opcoes.push(d);
				    });
					if(base=='C'){
						left=80;
						right=400;
						$('#chuvaview').show();
						$('#taxiview').hide();
				    	mapRange.invalidateSize();
						inicioRange(dataset);
					}else if(base=='T'){
						leftTaxi=22000;
						rightTaxi=36000;
						$('#taxiview').show();
						$('#chuvaview').hide();
						mapVistaxi.invalidateSize();
						inicioTaxi(datasettaxi);
					}
				}/*else if($('#4Form').is(':visible')){
					mapMedia.invalidateSize();
					var id= $('#4Form > div.active > div > div > div > div> input')[0].id;
				    id=id.substring(0, 3);
				    var p=findP(perguntasT4,id);
				    p=p.slice(2,p.length);
				    opcoes=[];
				    p.forEach(function(d,i){
				    	opcoes.push(d);
				    });
				    inicioMedia(dataset);
				}else{
					mapDot.invalidateSize();
					var id= $('#3Form > div.active > div > div > div > div> input')[0].id;
				    id=id.substring(0, 3);
				    var p=findP(perguntasT3,id);
				    p=p.slice(2,p.length);
				    opcoes=[];
				    p.forEach(function(d,i){
				    	opcoes.push(d);
				    });
					inicioDotMap(dataset);
				}*/
			}else{
				stepper0.next();
			}
		}
	});
	$('.btn-previous-form').click(function(){
		stepper0.previous();
	});
	$("#btn1,#2btn1,#3btn1,#4btn1,#btuto10").css('float','right');

	// PARA CADA BOTÃO DA ÚLTIMA PERGUNTA DE CADA TÉCNICA PREPARA A PRÓXIMA TAB PARA SER EXIBIDA.
	$("#btn1,#2btn1,#3btn1,#4btn1").click(function() {
		/*if($('input[name='+ent+']:checked').val()==undefined){
			$(this).parent().parent()[0].classList.add('was-validated');
		}*/
		var ent= $(this).parent().find('.form-group > div > div> div >').siblings()[0].name;
		if($('input[name='+ent+']:checked').val()==undefined && $('input[name='+ent+']').hasClass('custom-control-input')==true){
			$(this).parent().parent()[0].classList.add('was-validated');
		}else if($('input[name='+ent+']').val()==""&& $('input[name='+ent+']').hasClass('custom-control-input')==false){
			$(this).parent().parent()[0].classList.add('was-validated');
		}else{
			d2 = new Date();
			var ent= $(this).parent().find('.form-group > div >.clicks')[0].value = clicks;
			diff = Math.abs(d1-d2)/1000;
			var ent= $(this).parent().find('.form-group > div >.tempo')[0].value = (Math.round((diff/60)*100)/100);
			$('#pills-tab > li> a.active').parent().next()[0].classList.remove("disabled");
			$('#pills-tab > li> a.active').parent().next().find('a').click();
			$('#pills-tab > li> a.active').parent().prev()[0].classList.add("disabled");
			if($(this).parent().parent().hasClass('was-validated')){
				$(this).parent().parent()[0].classList.remove("was-validated");
			}
			clicks=-1;
			d1 = new Date();
		}
	});
	// SUBMETE OS FORMS PARA O GOOGLE SCRIPT WEB SERVICE PARA A API GRAVAR OS DADOS NO GOOGLE SHEETS.
    $('#Form,#2Form,#3Form,#4Form,#5Form').submit(function(){
    	var nameform=$(this)[0];
    		$.ajax({
		    	type: "POST",
			    url: $(this).attr('action'),
			    data : $(this).serialize(),
			    success: function(result, status, request){
			        console.log(nameform.id+" Estado atual ---\n" + status + "\nResultado: " + JSON.stringify(result));
			        sucesso++;
			    	refresh();
			        //end=true;
			    },
			    error: function (request, status, erro) {
			      	console.log(nameform.id+" Problema ocorrido: " + status + "\nDescrição: " + erro);
			      	$.ajax(this);
			      	return;
			      	//nameform.submit();
			    }
		    });
	    return false;
	});
	$('input[type=radio][name=inlineRadioOptions]').change(function() {
	    if (this.value == 'Yes') {
	        $('.alert').removeClass("show");
	    }
	});
});
