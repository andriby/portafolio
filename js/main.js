$(function(){
    
    //Menu Movil
    $('.menu-movil').on('click', function(){
        $('.navegacion-principal').slideToggle();
    });

    //Lettering
    $('h1.titulo-principal').lettering();

    // Scroll Suave
    $('a.inside').click(function(e){				
		e.preventDefault();		//evitar el eventos del enlace normal
		var strAncla=$(this).attr('href'); //id del ancla
			$('body,html').stop(true,true).animate({				
				scrollTop: $(strAncla).offset().top
			},1000);
		
	});

    //Menu Fijo
    var windowHeight = $(window).height();
    var barraAltura = $('.barra').innerHeight();

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        
        if(scroll > windowHeight){
            $('.barra').addClass('fixed');
            $('body').css({'margin-top': barraAltura+'px'});
        

        } else{
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top': '0px'});

        }

    });

    //Slider
    $(".bxslider").bxSlider();

    //Formulario

    $('#miFormulario').submit(function(event) {
        

        // Obtener los valores de los campos
        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();
        var correo = $('#correo').val();

        // Obtener los valores seleccionados de los checkboxes
        var intereses = [];
        $('input[name="intereses"]:checked').each(function() {
            intereses.push($(this).val());
        });

        // Hacer algo con los valores obtenidos
        console.log('Nombre:', nombre);
        console.log('Apellido:', apellido);
        console.log('Correo electrónico:', correo);
        console.log('Intereses:', intereses);
    });

    $('#miFormulario').submit(function(event) {
        var checkboxes = $('input[type="checkbox"]');
        var isChecked = false;
  
        checkboxes.each(function() {
          if ($(this).is(':checked')) {
            isChecked = true;
            return false; // Termina el bucle each
          }
        });
  
        if (!isChecked) {
          event.preventDefault();
          alert('Debes seleccionar al menos una opción');
        }
      });



});

//Cambiar proporcion de imagen
const aspectRatio1to1 = document.querySelectorAll('.perfil-div img');

function resizeForSquareAppearance(event) {
    aspectRatio1to1.forEach((element) => {
        element.style.height = `${element.clientWidth}px`;
    })
}

window.addEventListener('resize', resizeForSquareAppearance);
document.addEventListener('DOMContentLoaded', resizeForSquareAppearance);
