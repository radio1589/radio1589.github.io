$(function(){

    // scroll menu

    $('.main-nav ul li a').on('click', function(e){
        e.preventDefault();

        let attr = $(this).attr('href');
        let h = $(attr);

        $('html, body').animate({
            scrollTop: h.offset().top
        }, 500);
    });

    // scroll btn
    let scrollBtn = $('.scroll-btn');

    $(document).scroll(function(){
        let distance = $(this).scrollTop();

        if (distance > 400) {
            scrollBtn.show();
        } else if (distance < 400) {
            scrollBtn.hide();
        }
    });

    scrollBtn.on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // FAQ 

   let faqQuestion = $('.faq .question');

   faqQuestion.on('click', function(){
    $(this).next().slideToggle(400);
    $('.answer:visible').not($(this).next()).slideUp(400);
   });

    // First Slider

    let firstSlider = new Slider({
        images: $('.first-slider img'),
        nextBtn: $('.first-slider .slider-next-btn'),
        prevBtn: $('.first-slider .slider-prev-btn')
    });

    firstSlider.nextBtn.on('click', function(e){
        e.preventDefault();
        firstSlider.next();
    });
    
    firstSlider.prevBtn.on('click', function(e){
        e.preventDefault();
        firstSlider.prev();
    });

    // Second Slider

    let secondSlider = new Slider({
        images: $('.second-slider img'),
        nextBtn: $('.second-slider .slider-next-btn'),
        prevBtn: $('.second-slider .slider-prev-btn'),
        auto: false,
        freq: 5000
    });

    secondSlider.nextBtn.on('click', function(e){
        e.preventDefault();
        secondSlider.next();
    });
    
    secondSlider.prevBtn.on('click', function(e){
        e.preventDefault();
        secondSlider.prev();
    });

    function Slider(obj) {
        let slider = this;

        slider.images = obj.images;
        slider.nextBtn = obj.nextBtn;
        slider.prevBtn = obj.prevBtn;
        slider.freq = 2000 || obj.freq;
        slider.auto = false || obj.auto;

        let i = 0;

        this.next = function() {
            $(slider.images).eq(i).removeClass('active-slide');
            i++;

            if (i > slider.images.length -1) {
                i = 0;
            }
            $(slider.images).eq(i).addClass('active-slide');
        }

        this.prev = function() {
            $(slider.images).eq(i).removeClass('active-slide');
            i--;

            if (i < 0) {
                i = slider.images.length -1;
            }
            $(slider.images).eq(i).addClass('active-slide');
        }

        if (slider.auto) {
            setInterval(function(){
                slider.next();
            }, slider.freq)
        }

    }
});