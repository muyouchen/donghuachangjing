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
		    colors: [ '#76c076','#eb7d97',"#efa3a8","#7cb7fb"],
		    series: [{
		        data: [
			        ['短标',v1],		        
			        ['长标',v4],
			        ['中长',v3],
			        ['中标',v2]		        
		        ],
		  		colors: [ '#76c076','#eb7d97',"#efa3a8","#7cb7fb"],
		        innerSize: '85%',
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
					format: '{point.y:.2f}%<br>{point.name}',
	                style: {
		                fontSize: '20px',
		                fontFamily: '微软雅黑',
//		                color: '#f1736a',
						color: '#593f2c',

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
			$('.mo-a1a').removeClass('moam-n1');
			$('.mo-a1a').removeClass('moam-n2');
			$('.mo-a1a').removeClass('moam-n3');
			huan1(v1,v2,v3,v4);
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
				$('.mo-a2b').removeClass('mo-map-b');
				$('.shuju2').removeClass('jianxian');
				$('.mo-a2a').addClass('mo-map-b');
				setTimeout(function () { 
			    $('.shuju1').addClass('jianxian');
			    }, 1000);
			}
			
			if($('.mo-a2b').css("display")==='list-item'){
				$('.mo-a2a').removeClass('mo-map-b');
				$('.shuju1').removeClass('jianxian');
				$('.mo-a3a').removeClass('mo-news-b');
				$('.mo-a3a').removeClass('mo-news-b2');
				$('.mo-a2b').addClass('mo-map-b');
				setTimeout(function () { 
			    $('.shuju2').addClass('jianxian');
			    }, 1000);
			}
			
			if($('.mo-a3a').css("display")==='list-item'){
				$('.mo-a2b').removeClass('mo-map-b');
				$('.shuju2').removeClass('jianxian');
				$('.mo-a3b').removeClass('mo-news-b');
				$('.mo-a3b').removeClass('mo-news-b2');
				$('.mo-a3a').addClass('mo-news-b');
				setTimeout(function () { 
			    $('.mo-a3a').addClass('mo-news-b2');
			    }, 1000);
			}
			if($('.mo-a3b').css("display")==='list-item'){
				$('.mo-a3a').removeClass('mo-news-b');
				$('.mo-a3a').removeClass('mo-news-b2');
				$('.mo-a3c').removeClass('mo-news-b');
				$('.mo-a3c').removeClass('mo-news-b2');
				$('.mo-a3b').addClass('mo-news-b');
				setTimeout(function () { 
			    $('.mo-a3b').addClass('mo-news-b2');
			    }, 1000);
			}
			if($('.mo-a3c').css("display")==='list-item'){
				$('.mo-a3b').removeClass('mo-news-b');
				$('.mo-a3b').removeClass('mo-news-b2');
				$('.mo-a3d').removeClass('mo-news-b');
				$('.mo-a3d').removeClass('mo-news-b2');
				$('.mo-a3c').addClass('mo-news-b');
				setTimeout(function () { 
			    $('.mo-a3c').addClass('mo-news-b2');
			    }, 1000);
			}
			if($('.mo-a3d').css("display")==='list-item'){
				$('.mo-a3c').removeClass('mo-news-b');
				$('.mo-a3c').removeClass('mo-news-b2');
				$('.mo-a3d').addClass('mo-news-b');
				setTimeout(function () { 
			    $('.mo-a3d').addClass('mo-news-b2');
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
		 
		    colors:[
		        '#efa3a8','#76c076','#7cb7fb','#eb7d97','#c3b2d0','#9bbd9e',
		        ],
		    series: [{
		    	borderWidth: 0,
		    	innerSize: '85%',
		    	startAngle: 200,
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
		        '#efa3a8','#76c076','#7cb7fb','#eb7d97','#c3b2d0','#9bbd9e',
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
					format: '{point.y:.2f}%<br>{point.name}', 
		            style: {
		                fontSize: '26px',
		                color: '#593f2c',
		                fontWeight:'normal',
		                lineHeight:'32px',
		            }
		        }
		    }]
		})
		}
		
		//数据条
		$('.mo-next a').click(function() {
			if($('.mo-a2').css("display")==='list-item'){
				sjt();
				$('.mo-a2a').removeClass('mo-map-b');
				$('.shuju1').removeClass('jianxian');
				$('.mo-a1c').removeClass('moam-n1');
				$('.mo-a1c').removeClass('moam-n2');
				$('.mo-a1c').removeClass('moam-n3');
			}
	    })	
		$('.mo-prev a').click(function() {
			if($('.mo-a2').css("display")==='list-item'){
				sjt();
				$('.mo-a2a').removeClass('mo-map-b');
				$('.shuju1').removeClass('jianxian');
				$('.mo-a1c').removeClass('moam-n1');
				$('.mo-a1c').removeClass('moam-n2');
				$('.mo-a1c').removeClass('moam-n3');
			}
	    })

})