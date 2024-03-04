'use strict';

// for scroll animation
(function ($) {
	AOS.init({
		ease: 'slide',
		once: true
	});
	
	// for perloader 
	$(window).on('load', function () {
    $('.preloader').fadeOut();   
  });

  if ($('.preloader').length > 0) {
    $('.preloaderCls').each(function () {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.preloader').css('display', 'none');
      })
    });
  };
   
	// service slider
    $(".service-slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 3,
		lazyLoad:true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
				nav:true
            },
			670: {
                items: 2,
				nav:true
            },
            768: {
                items: 2,
				nav:true
            },
            992: {
                items: 3,
				nav:true
            },
            1200: {
                items: 3,
				nav:true
            }
        }
    });
	
	//loog slider
    $(".logo-showcase-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 3,
        dots: false,
       
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            0: {
                items: 4,
            },
            768: {
                items: 4,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        }
    });
	
	// portfolio slider
	$(".gallery-carousel").owlCarousel({
		stagePadding: 50,
        loop: true,
        margin: 18,
        nav: false,
        items: 3,		
        dots: false,
    
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    });


})(jQuery);

//  on mouse hover cursor animation
   
const cursor = document.createElement('div')
const child = document.createElement('div')

const cursorDefaultStyle = `
    width: 40px;
    height: 40px;
    border-radius: 9999px;
    border: 2px solid #d97448;
    position: fixed;
    transform: translate(-50%, -50%);
    top: 0; left: '0';
    transition: 300ms ease-out;
    pointer-events: none;
`

const childDefaultStyle = `
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #d97448;
    position: fixed;
    top: 0; left: '0';
    transform: translate(-50%, -50%);
    pointer-events: none;
`

cursor.style.cssText = cursorDefaultStyle
child.style.cssText = childDefaultStyle

document.body.appendChild(cursor)
document.body.appendChild(child)

let isActived = false

window.addEventListener('mousemove', (event) => {
    if (isActived) return

    cursor.style.top = child.style.top = `${event.clientY}px`
    cursor.style.left = child.style.left = `${event.clientX}px`
})

const onHover = document.querySelectorAll('.onHover')
const fixed = (event, getTransition) => {
    event.stopPropagation()
    isActived = true
    const element = event.currentTarget
    const { width, height, top, left } = element.getBoundingClientRect()

    const style = window.getComputedStyle(element)
    const borderRadius = style.getPropertyValue('border-radius')
    const transition = style.getPropertyValue('transition')

    cursor.style.cssText = `
            ${cursorDefaultStyle}
            width: ${width}px;
            height: ${height}px;
            border-radius: ${borderRadius};
            top: ${top}px;
            left: ${left}px;
            transform: translate(0, 0);
            border-color: white;
            ${(getTransition) ? `transition: ${transition};`: ''}
        `

    child.style.cssText = `
            ${childDefaultStyle}
            display: none
        `
}

for (const hover of onHover) {
    hover.addEventListener('mousedown', (event) => fixed(event, true))
    hover.addEventListener('mouseup', (event) => fixed(event, true))
    hover.addEventListener('mouseover', (event) => fixed(event, false))
    hover.addEventListener('mouseleave', (event) => {
        isActived = false
        
        cursor.style.cssText = cursorDefaultStyle
        child.style.cssText = childDefaultStyle
    })
}   
 

 