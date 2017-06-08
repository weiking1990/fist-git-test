// var lunbo =function(){
// 	var olunbowrap = document.getElementById('lunbowrap'),
//     oimg = olunbowrap.getElementsByTagName('img'),
//     olunbobtns = document.getElementById('lunbobtns'),
//     oa = olunbobtns.getElementsByTagName('a'),
//     olunbolist = document.getElementById('lunbolist'),
//     ospan = olunbolist.getElementsByTagName('span'),
//     index = 0,
//     num ,
//     timer,
//     play;
//     play();
//     for(var i=0;i<ospan.length;i++){
//     	ospan[i].I=i;
//     	ospan[i].onclick = function(){
//     		ospan[index].className="";
//     	    oimg[index].style.opacity = 0;
//             index = this.I;
//     		this.className = "on";
//     		oimg[index].style.opacity = 1;
//     	}
//     }
//     for(var i=0;i<oa.length;i++){
//     	oa[i].I = i;
//     	oa[i].onclick = function(){
//     	    ospan[index].className="";
//     	    oimg[index].style.opacity = 0;
//             num = this.I;	
//             if(num){
//             	index ++;if(index>5){index=0;}
            	
//             }else {
//             	index --;if(index<0){index=5;}
//             }
//             ospan[index].className="on";
//     	    oimg[index].style.opacity = 1;
//     	}
//     }
//     function play(){
//         timer = setInterval(function(){
//         ospan[index].className="";
//     	oimg[index].style.opacity = 0;
//     	index ++;
//     	if(index>5){
//     		index =0;
//     	}
//     	ospan[index].className = "on";
//     	oimg[index].style.opacity = 1;
//         },3000)
//     }
//     olunbowrap.onmouseover = function(){
//     	clearInterval(timer);
//     }
//     olunbowrap.onmouseout =function(){
//     	play();
//     }
//  } 
$('#dailynew .itm2img').hover(function(){
    $(this).animate({left:"-10px"},200);
},function(){
    $(this).animate({left:"0px"},200);
}) 



;(function($){
    $.fn.extend({
        "autoPlay":function(){
            var Ul = this.find($('.bsmid_rul')) ,
                Span = this.find($('.bsmid_rp4 span')),
                len = Span.length,
                timer,
                i =0;            
                // ShowTime();
                Show(i);
                function Show(){
                    Ul.hide().eq(i).show();
                    Span.eq(i).addClass('current').siblings().removeClass('current');
                };
                // function ShowTime(){
                //     timer = setInterval(function(){
                //         Show(i);
                //         i++;
                //         if (i==len) {                            
                //              i=0;
                //         }
                //     },2000)
                // };
                // Span.hover(function(){
                //     clearInterval(timer);
                //     i= $(this).index();
                //     Show(i);                    
                // },function(){
                //     ShowTime();
                // });
        }
    });

})(jQuery);
$('#mombaby').autoPlay();
$('#beautymakeup').autoPlay();
$('#dressbag').autoPlay();
$('#homecare').autoPlay();
gggggg