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
    infinite: true,
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



$('.video-container').slick({
    infinite: true,
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
    infinite: true,
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
    infinite: true,
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


$('.dropdown-box').on('click',function(){
     $(this).next($('.dropdown-text')).slideToggle()
})


$(".dropdown-box").on("click", function () {
    $(this)
      .find($("svg"))
      .toggleClass("rotate");
  });

  $(".dropdown-box").on("click", function () {
    $(this).toggleClass('dropdown-active')
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

$(".reg-button").click(function () {
    $(".registration").css("display", "block");
});

$(".reg-button").click(function () {
    $(".auth-form").css("display", "none");
});

$(".auth-button").click(function () {
    $(".auth-form").css("display", "block");
});

$(".auth-button").click(function () {
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


