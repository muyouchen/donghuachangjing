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
			    if(swiper.activeIndex==11){
			  		$(".sdo-up").hide();
			  	}else{
			  		$(".sdo-up").show();
			  	}
			  	if(swiper.activeIndex==0){
			  		$('.qiu').addClass('xialuo');					
				}
			  	if(swiper.activeIndex==1){
			  		$('.qiu').removeClass('xialuo');
					demo.start();
					demo2.start();
					demo3.start();
					huan1();
					
									
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
					    $('.shuju1').addClass('jianxian');
					}, 1000);
					
			  	}
			  	if(swiper.activeIndex==7){

			  		$('.sdo8').addClass('mo-map-b');
			  		setTimeout(function () { 
					    $('.shuju2').addClass('jianxian');
					}, 1000);
					
			  	}
			  	if(swiper.activeIndex==8){
				  	$('.sdo9').addClass('mo-news-b');
					
				}
				if(swiper.activeIndex==9){
				  	$('.sdo12').addClass('mo-news-b');
				  	setTimeout(function () { 
				    	$('.sdo12').addClass('mo-news-b2');
				    }, 500);
				  	
				}
				if(swiper.activeIndex==10){
				  	$('.sdo13').addClass('mo-news-b');
				  	setTimeout(function () { 
				    	$('.sdo13').addClass('mo-news-b2');
				    }, 500);
				  	
				}
				if(swiper.activeIndex==11){
				  	$('.sdo14').addClass('mo-news-b');
				}


			  // 	if(swiper.activeIndex==9){
			  		
			  		
			  		
			  // 		$('.sdo9').addClass('mo-news-b');
			  		
					// setTimeout(function () { 
				 //    	$('.sdo9').addClass('mo-news-b2');
				 //    }, 1000);
			  		
			  // 	}



			 //  	if(swiper.activeIndex==9){
				//   	$('.sdo10').addClass('mo-news-b');
				// 	setTimeout(function () { 
				//     	$('.sdo10').addClass('mo-news-b2');
				//     }, 1000);
				// }
			  	
			  
			}
		    
		
		});
		
		
		
	 	//滚动数字
		var options = {
		useEasing : true, 
		useGrouping : true, 
		separator : '', 
		decimal : '.', 
		prefix : '', 
		suffix : '' 
		};
		var dd1=179;
		var dd2=7544;
		var dd3=5684;
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
			    colors: [ '#76c076','#7cb7fb',"#efa3a8","#eb7d97"],
			    series: [{
			        data: [
			        	 ['长标',13.80],
			        	  ['中长标',20.55],
			        	   ['中标',24.69],
				        ['短标',40.96]	        
				       
				       
				       		        
			        ],
			  		colors: [ "#eb7d97","#efa3a8",'#7cb7fb','#76c076'],
			        innerSize: '85%',
			        startAngle: -150,
			        name:'占总标的',
					tooltip: {
				        pointFormat: '投资金额占比: <b>{point.y:.2f}%</b>'
				    },
			        dataLabels: {
			        	softConnector: true,   // 是否使用曲线 
		                connectorPadding: 10,
						format: '{point.y:.2f}%<br>{point.name}',
		                style: {
			                fontSize: '15px',
			                color: '#593f2c',
			                fontWeight:'normal',
			                lineHeight:'20px',
			                
			            }
		            }
			    }]
			})
		}
		//数据条函数
		function sjt(){
			Highcharts.chart('age-group', {
		    chart: {
		        type: 'pie'
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
		 //    xAxis: {
		 //        type: 'category',
		 //        lineWidth:0, 
		 //        tickWidth:0,
		 //        labels: {		        	
		 //            rotation:0,
		 //           	y:5,
		 //            align: 'right',		            
		 //            style: {
		 //            	fontWeight:'bold',
		 //                fontSize: '0.26rem',
		 //                fontFamily: '-apple-system,"Helvetica Neue",HelveticaNeue,"Helvetica-Neue",Helvetica, Verdana,"Microsoft YaHei", "SimHei", "SimSun"'
		 //            }
		 //        }
		 //    },
		 //  	yAxis: {
		 //  		max:43,
		 //  		min:0,
			//     gridLineWidth:0,

			//     labels:{
			//     	enabled:false
			//     }			    
			// },
		 //    legend: {
		 //        enabled: false
		 //    },
		 //    tooltip: {
		 //        pointFormat: '投资金额占比: <b>{point.y:.2f}%</b>'
		 //    },
		 //    plotOptions:{
		 //    	bar:{
		 //    		colorByPoint:true    	
		 //    	}
		    	
		 //    },
		 	colors:[
		        '#efa3a8','#76c076','#7cb7fb','#eb7d97','#c9c9c9','#9bbd9e',
		        ],
		    series: [{
		    	borderWidth: 0,
		    	innerSize: '85%',
		    	startAngle: 100,
		        name: 'age',
		        data: [
		       
		            ['90后', 8.17],
		            ['80后', 38.38],
		            ['70后', 24.65],
		            ['60后', 17.31],
		            ['50后', 9.29],
		            ['其他', 2.20]
		            
		        ],
		        colors:[
		        '#efa3a8','#76c076','#7cb7fb','#eb7d97','#c9c9c9','#9bbd9e',
		        ],


		       tooltip: {
		            pointFormat: '投资金额占比: <b>{point.y:.2f}%</b>'
		       },

		       plotOptions:{
				   	bar:{
				     		colorByPoint:true    	
				     	}
				    	
				},
				legend: {
		        enabled: false
		    },
		        dataLabels: {
		            enabled: true,
		            rotation: 0,		            
		            
		            align: 'right',
					format: '{point.y:1f}%<br>{point.name}', 
		            style: {
		                fontSize: '15px',
		                color: '#593f2c',
		                fontWeight:'normal',
		                lineHeight:'20px',
		            }
		        }
		    }]
		})
		}
		
		

	



		
		
		

})