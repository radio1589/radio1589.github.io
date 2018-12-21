$(function(){
    var elems = {
        'd': $('.timer .timer-d span').eq(0),
        'd_s': $('.timer .timer-d span').eq(1),
        'h': $('.timer .timer-h span').eq(0),
        'h_s': $('.timer .timer-h span').eq(1),
        'm': $('.timer .timer-m span').eq(0),
        'm_s': $('.timer .timer-m span').eq(1),
        's': $('.timer .timer-s span').eq(0),
        's_s': $('.timer .timer-s span').eq(1),
     };
 
     var t = new Timer(parseInt($('.timer').data('time')), function(data){
         for(k in elems){
             elems[k].html(data[k]);
     }
     });
 
     t.start();
     t.render();
     
     $('.timer').show();
});