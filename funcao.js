$(function () {

	$('.btn-cor').on('click', function(){

			let cores = ['red', 'green', 'lightray', 'darkred', 'purple', 'pink', 'yellow'];
			let numeroAleatorio = Math.floor(Math.random() * cores.length);
			let corAtual = cores[numeroAleatorio];
			$('#div-'+$(this).attr('id')).css('background',corAtual);
	});

});