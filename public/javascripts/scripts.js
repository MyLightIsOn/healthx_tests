myApp = {
    init: function(){
        myApp.navOn();
        myApp.primaryNav();
    },

    //Handle navigation animation
    navOn: function(){
        $('.menu-button').click(function(){
            $('.primary-nav').toggleClass('nav-active');
        });
    },

    primaryNav: function(){
        $('.primary-nav-button').click(function(){
            var selected = $(this);
            /*console.log(selected[0].outerText)*/
        });
    }
};

myApp.init();