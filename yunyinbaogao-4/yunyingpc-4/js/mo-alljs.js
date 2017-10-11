$(function(){
	
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
			exporting: {
	            enabled:false
			},
		    colors: [ '#f1736a','#75bf58',"#ff9630","#5b9fe2"],
		    series: [{
		        data: [
			        ['短标',v1],		        
			        ['中标',v2],
			        ['中长',v3],
			        ['长标',v4]		        
		        ],
		  		colors: [ '#f1736a','#75bf58',"#ff9630","#5b9fe2"],
		        innerSize: '50%',
		        startAngle: 180,
		        name:'占总标的',
				tooltip: {
			        pointFormat: '投资金额占比: <b>{point.y:.2f}%</b>'
			   },			   	
		        dataLabels: {
		        	softConnector: false,   // 是否使用曲线
//	                connectorColor: 'red',  
	                connectorPadding: 10,
//	                formatter: function () {
//	                    return this.y > 1 ?  + this.y + '%'  : null;
//	                },
					distance:30,
					format: '{point.y:.2f}%',
	                style: {
		                fontSize: '20px',
		                fontFamily: '微软雅黑',
//		                color: '#f1736a',
						color: '#f1736a',
		                fontWeight:'normal'
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
//	                connectorColor: 'red',  
	                connectorPadding: 10,
//	                formatter: function () {
//	                    return this.y > 1 ?  + this.y + '%'  : null;	                    
//	                },
					distance:30,
					format: '{point.y:.2f}%',
	                style: {
		                fontSize: '20px',
		                fontFamily: '微软雅黑',
		                color: '#f1736a',
		                fontWeight:'normal'
		            }
	           }
		    }]
		})
	}
	
	//圆环
	function buyProgress(ele,v1,v2,v3,v4){
	
	Highcharts.wrap(Highcharts.seriesTypes.pie.prototype, 'animate', function (proceed, init) {
	    this.startAngleRad += Math.PI * 2;
	    proceed.call(this, init);
	});
	
	
	//圆环1
	$('.mo-next a').click(function() {
		if($('.mo-a1').css("display")==='list-item'){
			huan1(v1,v2,v3,v4)
		}
	})	
	//圆环2
	$('.mo-next a').click(function() {
		if($('.mo-a3').css("display")==='list-item'){
			huan2(76.27,20.52,3.20)
		}
	})
	
	}
	var count1=parseFloat($(".mo-sj1").html());
	      var count2=parseFloat($(".mo-sj2").html());
	      var count3=parseFloat($(".mo-sj3").html());
	      var count4=parseFloat($(".mo-sj4").html());
	 $(function(){
	      
	     
	      count1=count1>100?100:count1;
	      count2=count2>100?100:count2;  
	      count3=count3>100?100:count3;
	      count4=count4>100?100:count4;
	
	      if(count1==0&&count2==0&&count3==0&&count4==0){
	     	 buyProgress($(".mc-alltz .buyprocss"),100/4,100/4,100/4);
	      }else{
	      	 buyProgress($(".mc-alltz .buyprocss"),count1,count2,count3,count4);
	      }
	    })
	 	
	 	//切换
	 	var moSlider = new Slider($('#mo-qhcontento'), {
			time: 5000,
			delay: 400,
			event: 'click',
			auto: false,
			mode: 'fade',
			controller: $('.mo-a1-on'),
			activeControllerCls: 'dep-g-cur'
		});
		$('.mo-prev a').click(function() {
			moSlider.prev();
			$('.mo-qh00').removeClass('downNext')
			if($('.mo-qh00').hasClass('downNext')){
				$('.mo-qh00').removeClass('downNext')
			}
		});
		$('.mo-next a').click(function() {
			moSlider.next();			
			$('.mo-qh00').addClass('downNext');
			if($('.mo-qh00').hasClass('downNext')){
				$('.mo-qh00').removeClass('downNext')
			}			  	    
		});
		$('.mo-movedown').click(function() {
			moSlider.next();
			$('.mo-qh00').addClass('downNext');
//			if($('.mo-qh00').hasClass('downNext')){
//				$('.mo-qh00').removeClass('downNext')
//			}
		});
	 	$('.mo-a1-on').click(function(){			
			moSlider.aaa(3);			
			huan1(count1,count2,count3,count4);
			if($('.mo-a1').css("display")==='list-item'){
				demo.start();
				demo2.start();
				demo3.start();
			}
			
	 	});
	 	$('.mo-a2-on').click(function(){
			moSlider.aaa(7);
			sjt()
	 	})
	 	$('.mo-a3-on').click(function(){
			moSlider.aaa(10);
			huan2(76.27,20.52,3.20);
			$('.mo-a3').addClass('mo-man-b')
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
		$('.mo-next a').click(function() {
			if($('.mo-a1').css("display")==='list-item'){
				demo.start();
				demo2.start();
				demo3.start();
			}
		})	
		//动画函数
		function donghua(){
			if($('.mo-a1a').css("display")==='list-item'){
				$('.mo-a1a').addClass('moam-n1');
			setTimeout(function () { 
			    $('.mo-a1a').addClass('moam-n2');
			    }, 1000);
			setTimeout(function () { 
			    $('.mo-a1a').addClass('moam-n3');
			    }, 2000);
			}
			
			if($('.mo-a1b').css("display")==='list-item'){
				$('.mo-a1b').addClass('moam-n1');
			setTimeout(function () { 
			    $('.mo-a1b').addClass('moam-n2');
			    }, 1000);
			setTimeout(function () { 
			    $('.mo-a1b').addClass('moam-n3');
			    }, 2000);					
			}
			
			if($('.mo-a1c').css("display")==='list-item'){
				$('.mo-a1c').addClass('moam-n1');
			setTimeout(function () { 
			    $('.mo-a1c').addClass('moam-n2');
			    }, 1000);
			setTimeout(function () { 
			    $('.mo-a1c').addClass('moam-n3');
			    }, 2000);					
			}
			
			
			if($('.mo-a2a').css("display")==='list-item'){
				$('.mo-a2a').addClass('mo-map-b');
				setTimeout(function () { 
			    $('.mo-a2a').addClass('mo-map-b2');
			    }, 1000);
			}
			
			if($('.mo-a2b').css("display")==='list-item'){
				$('.mo-a2b').addClass('mo-map-b');
				setTimeout(function () { 
			    $('.mo-a2b').addClass('mo-map-b2');
			    }, 1000);
			}
			
			if($('.mo-a3a').css("display")==='list-item'){
				$('.mo-a3a').addClass('mo-news-b');
				setTimeout(function () { 
			    $('.mo-a3a').addClass('mo-news-b2');
			    }, 1000);
			}
			
			if($('.mo-a3').css("display")==='list-item'){
				$('.mo-a3').addClass('mo-man-b');				
			}
		}
		
		
		//动画调用
		$('.mo-next a').click(function() {
			donghua()
		})
		$('.mo-prev a').click(function() {
			donghua()
		})
		//数据条函数
		function sjt(){
			Highcharts.chart('age-group', {
		    chart: {
		        type: 'column'
		    },
		    credits:{
			     enabled:false
			},
			exporting: {
	            enabled:false
			},
		    title: {
		        text: '各年龄段用户投资金额占比'
		    },
		    xAxis: {
		        type: 'category',
		        labels: {
		            rotation: 0,
		            style: {
		                fontSize: '26px',
		                fontFamily: '微软雅黑'
		            }
		        }
		    },
		    
		    legend: {
		        enabled: false
		    },
		    tooltip: {
		        pointFormat: '投资金额占比: <b>{point.y:.1f}%</b>'
		    },
		    plotOptions:{
		    	column:{
		    		colorByPoint:true    	
		    	}
		    },
		    series: [{
		        name: 'Population',
		        data: [
		            ['90后', 6],
		            ['80后', 34],
		            ['70后', 28],
		            ['60后', 20],
		            ['50后', 9],
		            ['40后', 2],
		            ['其他', 1]
		            
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
					x:4,
		            style: {
		                fontSize: '26px',
		                fontFamily: '微软雅黑',
		                color: '#f1736a',
		                stroke:'none',
		                textAlign:'center'
		            }
		        }
		    }]
		})
		}
		
		//数据条
		$('.mo-next a').click(function() {
		if($('.mo-a2').css("display")==='list-item'){
			sjt()
		}
	})	
		

})