(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".product-list").masonry();
        
    });

    $(".homepage-slides").owlCarousel({
        items: 1,
        loop:true,
        autoplay:false,
        dots:false,
        nav:true,
        navText:["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"]
    });

    $(".product-promotions").owlCarousel({
        items: 1,
        loop:true,
        autoplay:false,
        dots:true,
        nav:false,
    });

    $(".menu-trigger").on("click",function(){
        $(".off-canvas-menu,.off-canvas-overlay").addClass("active");
        return false;
    });

    $(".off-canvas-close,.off-canvas-overlay").on("click",function(){
        $(".off-canvas-menu,.off-canvas-overlay").removeClass("active");
        
    });
    
    jQuery(window).load(function(){


        
    });



}(jQuery));	