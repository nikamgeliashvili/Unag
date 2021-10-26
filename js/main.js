// main-page slider
$('.main-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false,

    responsive:[
        
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        },
    
    
        ]

});


$('.review-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:false,
    arrows:true,


    responsive:[
        
        {
            breakpoint: 992,
            settings: "unslick"
            
        },
    
    
        ]

});



$('.video-container').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:false,
    arrows:true,

    responsive:[
        
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        },
    
    
        ]

});


$('.about-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:false,
    arrows:true,

    responsive:[
        
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        },
    
    
        ]

});

$('.donor-slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots:false,
    arrows:true,

    responsive:[
        
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        },
    
    
        ]

});


$('.course-page-slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots:false,
    arrows:true,

    responsive:[
        
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true,
            arrows:false,
            }
        },
    
    
        ]

});



$('.category-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:false,
    arrows:true,

    responsive:[
        
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true,
            }
        },
    
    
        ]

});






$('#nav-icon1').on('click',function(){
    $('.header-left, .header-right').toggleClass('header-active')
})


$('.dropdown-box').on('click',function(){
     $(this).next($('.dropdown-text')).slideToggle()
})





$('.tablinks').on('click',function(){
    $(this).next($('.button-content')).slideToggle()
})

$('.tablinks').on('click',function(){
    $(this).children().toggleClass('tab-active')
})

$(".tablinks").on("click", function () {
    $(this).toggleClass('b-button')
  });


 











$(".dropdown-box").on("click", function () {
    $(this)
      .find($("svg"))
      .toggleClass("rotate");
  });

  $(".dropdown-box").on("click", function () {
    $(this).toggleClass('dropdown-active')
  });

  $(".filter").on("click", function () {
    $('.filter-box').slideToggle()
  });

  $(".close").click(function () {
    $(this).parent().css('display','none');
    
});

$(".see-more span").on("click", function () {
    $('.tab-pane p').toggleClass('hide')
  });

  $(".see-more span").on("click", function () {
    $('.see-more').css('display','none')
  });



  $(".user-name").on("click", function () {
    $('.user-dropdown').toggleClass('rotate')

  });

  
  $(".user-name").on("click", function () {
    $('.user-drop').slideToggle()

  });


  




function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});





$(".close").click(function () {
    $(".registration, .auth-form").css("display", "none");
});

$("#registration-form").click(function () {
    $(".registration").css("display", "block");
});

$("#registration-form").click(function () {
    $(".auth-form").css("display", "none");
});


$(".course-button a").click(function () {
    $(".auth-form2").css("display", "block");
});

$(".pas-restore").click(function () {
    $(".password-restore").css("display", "block");
    $(".auth-form").css("display", "none");
});


$("#auth-form").click(function () {
    $(".auth-form").css("display", "block");
});

$("#auth-form").click(function () {
    $(".registration").css("display", "none");
});





// form-dropdown
$(".form-select").on("click", function () {
	$(this)
	  .find($("img"))
	  .toggleClass("rotate");
  });


  $(document).on('keypress', ':input[type="number"]', function (e) {
    if (isNaN(e.key)) {
        return false;
    }
});



$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});

});


document.querySelector(".your_class").addEventListener("keypress", function (evt) {
    if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});






/* mobile-menu-js */


