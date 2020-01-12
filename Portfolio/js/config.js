/*---------- ---------- ---------- MENU ---------- ---------- ----------*/
    function menuShow() {
        var nav = document.getElementById('menu-overlay');
        var card = document.querySelector('.card');

        nav.classList.toggle('active');
        card.classList.toggle('hide')
    }

    $(document).ready(function(){

    $('#show-menu').click(function() {
        $('#show-menu').css("display", "none");
        $('#close-menu').css("display", "block");
    });

    $('#close-menu').click(function() {
        $('#close-menu').hide();
        $('#show-menu').show();
    });

    $('li').click(function(){
        $('#menu-overlay').css("transform", "scale(0)");
        $('#close-menu').hide();
        $('#show-menu').show();
                
    });

/*---------- ---------- ----------  FIM MENU ---------- ---------- ----------*/  

    $('.cont').click(function(){
        $('.cont').delay("fast").fadeOut();
        $('.mail').delay("slow").fadeIn();
    });

    $('.mail').click(function(){
        $('.mail').delay("fast").fadeOut();
        $('.cont').delay("slow").fadeIn();
    });

    $('.cont2').click(function(){
        $('.cont2').delay("fast").fadeOut();
        $('.mail2').delay("slow").fadeIn();
    });

    $('.mail2').click(function(){
        $('.mail2').delay("fast").fadeOut();
        $('.cont2').delay("slow").fadeIn();
    });

});