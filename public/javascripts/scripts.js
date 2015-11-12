myApp = {
    init: function(){
        var nav1Test = document.getElementById('nav1-test');

        myApp.navOn(nav1Test);
        myApp.primaryNav(nav1Test);
    },

    //Handle navigation animation
    navOn: function(nav1Test){

        //Checks to see if nav configuration 1 is being tested
        if(nav1Test != null){
            $('.menu-button').click(function(){
                $('.primary-nav').toggleClass('nav-active');
            });

            $('.primary-nav .nav-back').click(function(){
                $('.primary-nav').toggleClass('nav-active');
            });

            $('.secondary-nav .nav-back').click(function(){
                $('.secondary-nav').toggleClass('nav-active');
            });
        }
    },

    primaryNav: function(nav1Test){

        //Checks to see if nav configuration 1 is being tested
        if(nav1Test != null){
            $('.primary-nav-button').click(function(){
                var selected = $(this),
                    subNavTitle = selected[0].outerText,
                    secondaryHeader = $('.secondary-header');



                for(var i = 0; i < secondaryHeader.length; ++i){
                    if(secondaryHeader[i].innerText != subNavTitle){
                        $(secondaryHeader[i]).css('display', 'none');
                        $(secondaryHeader[i]).parent().css('display', 'none');

                    } else {
                        console.log($(secondaryHeader[i]))
                        $(secondaryHeader[i]).css('display', 'block');
                        $(secondaryHeader[i]).parent().css('display', 'block');

                    }
                }

                $('.secondary-nav').addClass('nav-active');
            });
        }
    }
};

myApp.init();