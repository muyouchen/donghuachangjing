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
	            enabled:true
			},
		    colors: [ '#75bf58','#f1736a',"#5b9fe2","#ff9630"],
		    series: [{
		        data: [
			        ['短标',v1],		        
			        ['长标',v4],
			        ['中长',v3],
			        ['中标',v2]		        
		        ],
		  		colors: [ '#75bf58','#f1736a',"#5b9fe2","#ff9630"],
		        innerSize: '50%',
		        startAngle: 0,
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
	
	//圆环
	function buyProgress(ele,v1,v2,v3,v4){
	
	Highcharts.wrap(Highcharts.seriesTypes.pie.prototype, 'animate', function (proceed, init) {
	    this.startAngleRad += Math.PI * 2;
	    proceed.call(this, init);
	});
	
	
	//圆环1
	$('.mo-next a').click(function() {
		if($('.mo-a1').css("display")==='list-item'){
			huan1(v1,v2,v3,v4);
		}
	})	
	$('.mo-prev a').click(function() {
		if($('.mo-a1').css("display")==='list-item'){
			huan1(v1,v2,v3,v4);
			$('.mo-a1a').removeClass('moam-n1');
			$('.mo-a1a').removeClass('moam-n2');
			$('.mo-a1a').removeClass('moam-n3');
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
			delay: 0,
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
	 		$('.mo-a3a').removeClass("mo-news-b");
			$('.mo-a3a').removeClass("mo-news-b2");
			moSlider.aaa(10);
			$('.mo-a3a').addClass('mo-news-b');
			setTimeout(function () { 
		    $('.mo-a3a').addClass('mo-news-b2');
		    }, 1000);
	 	})
	 	
	 	//滚动数字
		var options = {
		useEasing : true, 
		useGrouping : true, 
		separator : '', 
		decimal : '.', 
		prefix : '', 
		suffix : '' 
		};
		var dd1=176;
		var dd2=2290;
		var dd3=5008;
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
				$('.mo-a1b').removeClass('moam-n1');
				$('.mo-a1b').removeClass('moam-n2');
				$('.mo-a1b').removeClass('moam-n3');
				$('.mo-a1a').addClass('moam-n1');
			setTimeout(function () { 
			    $('.mo-a1a').addClass('moam-n2');
			    }, 1000);
			setTimeout(function () { 
			    $('.mo-a1a').addClass('moam-n3');
			    }, 2000);
			}
			
			if($('.mo-a1b').css("display")==='list-item'){
				$('.mo-a1a').removeClass('moam-n1');
				$('.mo-a1a').removeClass('moam-n2');
				$('.mo-a1a').removeClass('moam-n3');
				$('.mo-a1c').removeClass('moam-n1');
				$('.mo-a1c').removeClass('moam-n2');
				$('.mo-a1c').removeClass('moam-n3');
				$('.mo-a1b').addClass('moam-n1');
			setTimeout(function () { 
			    $('.mo-a1b').addClass('moam-n2');
			    }, 1000);
			setTimeout(function () { 
			    $('.mo-a1b').addClass('moam-n3');
			    }, 2000);					
			}
			
			if($('.mo-a1c').css("display")==='list-item'){
				$('.mo-a1b').removeClass('moam-n1');
				$('.mo-a1b').removeClass('moam-n2');
				$('.mo-a1b').removeClass('moam-n3');
				$('.mo-a1c').addClass('moam-n1');
			setTimeout(function () { 
			    $('.mo-a1c').addClass('moam-n2');
			    }, 1000);
			setTimeout(function () { 
			    $('.mo-a1c').addClass('moam-n3');
			    }, 2000);					
			}
			
			
			if($('.mo-a2a').css("display")==='list-item'){
				$('.mo-a2b').removeClass("mo-map-b");
				$('.mo-a2b').removeClass("mo-map-b2");
				$('.mo-a2a').addClass('mo-map-b');
				setTimeout(function () { 
			    $('.mo-a2a').addClass('mo-map-b2');
			    }, 1000);
			}
			
			if($('.mo-a2b').css("display")==='list-item'){
				$('.mo-a2a').removeClass("mo-map-b");
				$('.mo-a2a').removeClass("mo-map-b2");
				$('.mo-a3a').removeClass("mo-news-b");
				$('.mo-a3a').removeClass("mo-news-b2");
				$('.mo-a2b').addClass('mo-map-b');
				setTimeout(function () { 
			    $('.mo-a2b').addClass('mo-map-b2');
			    }, 1000);
			}
			
			if($('.mo-a3a').css("display")==='list-item'){
				$('.mo-a2b').removeClass("mo-map-b");
				$('.mo-a2b').removeClass("mo-map-b2");
				$('.mo-a3a').addClass('mo-news-b');
				setTimeout(function () { 
			    $('.mo-a3a').addClass('mo-news-b2');
			    }, 1000);
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
		    yAxis: {
		  		max:50,
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
		        pointFormat: '投资金额占比: <b>{point.y:1f}%</b>'
		    },
		    plotOptions:{
		    	column:{
		    		colorByPoint:true    	
		    	}
		    },
		    series: [{
		        name: 'Population',
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
		            align: 'center',
					format: '{point.y:1f}%', 
					x:5,
		            style: {
		                fontSize: '15px',
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
				sjt();
				$('.mo-a1c').removeClass('moam-n1');
				$('.mo-a1c').removeClass('moam-n2');
				$('.mo-a1c').removeClass('moam-n3');
				$('.mo-a2a').removeClass("mo-map-b");
				$('.mo-a2a').removeClass("mo-map-b2");
			}
	    })	
		$('.mo-prev a').click(function() {
			if($('.mo-a2').css("display")==='list-item'){
				sjt();
				$('.mo-a1c').removeClass('moam-n1');
				$('.mo-a1c').removeClass('moam-n2');
				$('.mo-a1c').removeClass('moam-n3');
				$('.mo-a2a').removeClass("mo-map-b");
				$('.mo-a2a').removeClass("mo-map-b2");
			}
	    })	

})