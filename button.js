var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){e.target.classList.remove('animate');},700);};
    
    var classname = document.getElementsByClassName("menu-nav__link");
    
    for (var i = 0; i < classname.length; i++) {classname[i].addEventListener('click', animateButton, false);
    
    }

    var animateButton = function(e) {

        e.preventDefault;
        //reset animation
        e.target.classList.remove('animate');
        
        e.target.classList.add('animate');
        setTimeout(function(){e.target.classList.remove('animate');},700);};
        
        var classname = document.getElementsByClassName("menu-nav__link_2");
        
        for (var i = 0; i < classname.length; i++) {classname[i].addEventListener('click', animateButton, false);
        
        }