$(function(){
		var swiper = new Swiper('.sd-box', {
		    pagination: '.swiper-pagination',
//		    paginationClickable: true,
		    direction: 'vertical',
//		    followFinger:false,
		    longSwipesRatio: 0.1,
			touchRatio:0.5,
			observer:true,
			observeParents:true,  
		    onSlideChangeStart:function(swiper,even){
			    if(swiper.activeIndex==8){
			  		$(".sdo-up").hide();
			  	}else{
			  		$(".sdo-up").show();
			  	}
			  	if(swiper.activeIndex==1){
					demo.start();
					demo2.start();
					demo3.start();
					huan1();
					$('.mo-listbtn').css('display','block');
									
				}
			  	if(swiper.activeIndex==0){
			  		$('.mo-listbtn').css('display','none');	
			  	}
			  	if(swiper.activeIndex==2){
					$('.sdo3').addClass('moam-n1');
					setTimeout(function () { 
					    $('.sdo3').addClass('moam-n2');
					    }, 1000);
					setTimeout(function () { 
					    $('.sdo3').addClass('moam-n3');
					    }, 2000);
				}
			  	if(swiper.activeIndex==3){
					$('.sdo4').addClass('moam-n1');
					setTimeout(function () { 
					    $('.sdo4').addClass('moam-n2');
					    }, 1000);
					setTimeout(function () { 
					    $('.sdo4').addClass('moam-n3');
					    }, 2000);
				}
			  	if(swiper.activeIndex==4){
					$('.sdo5').addClass('moam-n1');
					setTimeout(function () { 
					    $('.sdo5').addClass('moam-n2');
					    }, 1000);
					setTimeout(function () { 
					    $('.sdo5').addClass('moam-n3');
					    }, 2000);
				}
			  	if(swiper.activeIndex==5){
			  		sjt()
			  	}
			  	if(swiper.activeIndex==6){
			  		$('.sdo7').addClass('mo-map-b');
			  		setTimeout(function () { 
					    $('.sdo7').addClass('mo-map-b2');
					}, 1000);
					setTimeout(function () { 
					    $('.sdo7').addClass('mo-map-b3');
					}, 2000);
					setTimeout(function () { 
					    $('.sdo7').addClass('mo-map-b4');
					}, 2000);
			  	}
			  	if(swiper.activeIndex==7){

			  		$('.sdo8').addClass('mo-map-b');
			  		setTimeout(function () { 
					    $('.sdo8').addClass('mo-map-b2');
					}, 1000);
					setTimeout(function () { 
					    $('.sdo8').addClass('mo-map-b3');
					}, 2000);
					setTimeout(function () { 
					    $('.sdo8').addClass('mo-map-b4');
					}, 2000);
			  	}
			  	if(swiper.activeIndex==8){
			  		
			  		
			  		
			  		$('.sdo9').addClass('mo-news-b');
			  		
					setTimeout(function () { 
				    	$('.sdo9').addClass('mo-news-b2');
				    }, 1000);
			  		
			  	}
			 //  	if(swiper.activeIndex==9){
				//   	$('.sdo10').addClass('mo-news-b');
				// 	setTimeout(function () { 
				//     	$('.sdo10').addClass('mo-news-b2');
				//     }, 1000);
				// }
			  	
			  	$('.mo-a1btn').click(function(){				
					swiper.slideTo(1, 1000, false);
					demo.start();
					demo2.start();
					demo3.start();
					huan1();
					$('.mo-listbtn').css('display','block');
			  	})
			  	$('.mo-a2btn').click(function(){				
					swiper.slideTo(5, 1000, false);
					sjt()
			  	})
			  	$('.mo-a3btn').click(function(){				
					swiper.slideTo(8, 1000, false);
					huan2();
			  		$('.sdo9').addClass('mo-man-b');
			  	})
			}
		    
		
		});
		$('.mo-listbtn').click(function() {
			if($('.mo-listo').css("display")==='block'){
				$('.mo-listo').hide();
			}else{
				$('.mo-listo').show();
			}
					
	  	})
		
		$('.mo-lbtn').click(function() {
			$('.mo-listo').hide();		
	  	})
	 	//滚动数字
		var options = {
		useEasing : true, 
		useGrouping : true, 
		separator : ',', 
		decimal : '.', 
		prefix : '', 
		suffix : '' 
		};
		var dd1=174;
		var dd2=6607;
		var dd3=4256;
		var demo = new CountUp("mo-data1", 0, dd1, 0, 2.5, options);
		var demo2 = new CountUp("mo-data2", 0, dd2, 0, 2.5, options);
		var demo3 = new CountUp("mo-data3", 0,dd3 , 0, 2.5, options);
		//圆环1函数
		function huan1(v1,v2,v3,v4){
			var chart1 = new Highcharts.Chart({
			    chart: {
			        renderTo: 'moquan',
			        type: 'pie'
			    },
			    credits:{
				     enabled:false
				},
				title: {
					text: '',				
				},
				exporting: {
		            enabled:false
				},
			    colors: [ '#75bf58','#ff9630',"#5b9fe2","#f1736a"],
			    series: [{
			        data: [
			        	 ['长标',25.01],
			        	  ['中长标',19.97],
			        	   ['中标',26.45],
				        ['短标',28.57]	        
				       
				       
				       		        
			        ],
			  		colors: [ "#f1736a","#5b9fe2",'#ff9630','#75bf58'],
			        innerSize: '50%',
			        startAngle: 85,
			        name:'占总标的',
					tooltip: {
				        pointFormat: '投资金额占比: <b>{point.y:.2f}%</b>'
				    },
			        dataLabels: {
			        	softConnector: false,   // 是否使用曲线 
		                connectorPadding: 10,
						format: '{point.y:.2f}%',
		                style: {
			                fontSize: '0.3rem',
			                color: '#f1736a',
			                fontWeight:'normal'
			            }
		            }
			    }]
			})
		}
		//数据条函数
		function sjt(){
			Highcharts.chart('age-group', {
		    chart: {
		        type: 'bar'
		    },
		    credits:{
			     enabled:false
			},			
			exporting: {
	            enabled:false
			},
		    title: {
		        text: ''
		    },
		    xAxis: {
		        type: 'category',
		        lineWidth:0, 
		        tickWidth:0,
		        labels: {		        	
		            rotation:0,
		           	y:5,
		            align: 'right',		            
		            style: {
		            	fontWeight:'bold',
		                fontSize: '0.26rem',
		                fontFamily: '-apple-system,"Helvetica Neue",HelveticaNeue,"Helvetica-Neue",Helvetica, Verdana,"Microsoft YaHei", "SimHei", "SimSun"'
		            }
		        }
		    },
		  	yAxis: {
		  		max:43,
		  		min:0,
			    gridLineWidth:0,
			    labels:{
			    	enabled:false
			    }			    
			},
		    legend: {
		        enabled: false
		    },
		    tooltip: {
		        pointFormat: '投资金额占比: <b>{point.y:.2f}%</b>'
		    },
		    plotOptions:{
		    	bar:{
		    		colorByPoint:true    	
		    	}
		    },
		    series: [{
		        name: 'age',
		        data: [
		            ['00后', 3.11],
		            ['90后', 6.90],
		            ['80后', 37.17],
		            ['70后', 28.02],
		            ['60后', 15.98],
		            ['50后', 7.19],
		            ['其他', 1.62]
		            
		        ],
		        colors:[
		        '#f1736a','#ff9630','#ffd447','#75bf58','#5b9fe2','#00bdcc','#e889ee'
		        ],
		        dataLabels: {
		            enabled: true,
		            rotation: 0,		            
		            colors:['#f1736a','#ff9630','#ffd447','#75bf58','#5b9fe2','#00bdcc','#e889ee'],
		            align: 'right',
					format: '{point.y:1f}%', 
					x:55,
					y:10,
		            style: {
		                fontSize: '0.26rem',
		                fontFamily: '-apple-system,"Helvetica Neue",HelveticaNeue,"Helvetica-Neue",Helvetica, Verdana,"Microsoft YaHei", "SimHei", "SimSun"',
		                color: '#f1736a',
		                stroke:'none',
		                textAlign:'center'
		            }
		        }
		    }]
		})
		}
		//圆环2函数
		function huan2(v1,v2,v3,v4){
			var chart2 = new Highcharts.Chart({
			    chart: {
			        renderTo: 'moquan2',
			        type: 'pie'	        
			    },
			    credits:{
				     enabled:false
				},
				title: {
					text: '',				
				},
				exporting: {
		            enabled:false
				},
				yAxis : {
				    gridLineWidth: 0
				},
			    colors: [ '#f1736a','#75bf58',"#ff9630"],
			    series: [{
			        data: [
				        ['APP',76.27],		        
				        ['PC',20.52],
				        ['微网站',3.20],	        
			        ],
			  		colors: [ '#f1736a','#75bf58',"#5b9fe2"],
			        innerSize: '50%',
			        startAngle: 120,
			        name:'占总标的',
					tooltip: {
				        pointFormat: '各平台用户占比: <b>{point.y:.1f}%</b>'
				    },
			        dataLabels: {
			        	softConnector: false,   // 是否使用曲线
		                connectorPadding: 10,
						format: '{point.y:.2f}%',
		                style: {
			                fontSize: '0.3rem',
			                fontFamily: '-apple-system,"Helvetica Neue",HelveticaNeue,"Helvetica-Neue",Helvetica, Verdana,"Microsoft YaHei", "SimHei", "SimSun"',
			                color: '#f1736a',
			                fontWeight:'normal'
			            }
		           }
			    }]
			})
		}
		
		
		
		
		

})