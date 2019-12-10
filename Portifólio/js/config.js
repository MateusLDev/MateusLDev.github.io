        $(document).ready(function(){

/* ---------- ---------- ---------- ---------- Menu ---------- ---------- ---------- ---------- */

            $('#icon').click(function(){
                $('ul').toggleClass('show');
            });

            $('#icon2').click(function(){
                $('ul').toggleClass('show');
            });

            $('#icon').click(function(){
                $('#button').hide();
                $('#icon').hide();
                $('#icon2').show();
            });

            $('#icon2').click(function(){
                $('#button').show();
                $('#icon2').hide();
                $('#icon').show();
            });

            $('#icon2').click(function(){
                $('#button').show();
            });

            $('i').click(function(){
                $('#icon').toggleClass('active');
            });

            $('a').click(function(){
                $('.item').toggleClass('active');
            });

/* ---------- ---------- ---------- ---------- Fim Menu ---------- ---------- ---------- ---------- */


/* ---------- ---------- ---------- ---------- Botao Top ---------- ---------- ---------- ---------- */

            $(window).scroll(function(){
                if($(this).scrollTop() > 350){
                    $('#topBtn').fadeIn();
                }else{
                    $('#topBtn').fadeOut();
                }
            });

/* ---------- ---------- ---------- ---------- Fim Botao Top ---------- ---------- ---------- ---------- */

/* ---------- ---------- ---------- ---------- Servicos ---------- ---------- ---------- ---------- */

            $('.contact').click(function(){
                $('.contact').delay("fast").fadeOut();
                $('.email').delay("slow").fadeIn();
            });

            $('.email').click(function(){
                $('.contact').delay("slow").fadeIn();
                $('.email').delay("fast").fadeOut();
            });

            $('.contact1').click(function(){
                $('.contact1').delay("fast").fadeOut();
                $('.email1').delay("slow").fadeIn();
            });

            $('.email1').click(function(){
                $('.contact1').delay("slow").fadeIn(); 
                $('.email1').delay("fast").fadeOut();
            });
            
        });

/* ---------- ---------- ---------- ---------- Fim Servicos ---------- ---------- ---------- ---------- */