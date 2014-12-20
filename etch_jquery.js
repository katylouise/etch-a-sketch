
function createGrid(n) {
	for (j = 0; j < n; j++) {
		for (i = 0; i < n; i++) {
		var square = $('<div>').width(960/n).height(960/n);
		square.addClass('square');
		var container = $('#container')
		square.appendTo(container);
		}
	}
}

function colorButtons() {
	
	$('.default').click(function() {
		
		$('.square').css({'background':"#ffffff"});
		$('.button').removeClass('selected')
		$('.default').addClass('selected');
		$('.square').mouseenter(function() {
			$(this).css({'background':'#ff0000'});
		});
	});

	$('.monochrome').click(function() {
		
		$('.square').css({'background':"#ffffff"});
		$('.button').removeClass('selected')
		$('.monochrome').addClass('selected');
		$('.square').mouseenter(function() {
			var c = Math.floor(Math.random() * 255);
			$(this).css({'background':'rgb(' + c +',' + c +',' + c +')'});
		});
	});
	
	$('.rainbow').click(function() {
		
		$('.square').css({'background':"#ffffff"});
		$('.button').removeClass('selected')
		$('.rainbow').addClass('selected');
		$('.square').mouseenter(function() {
			var r = Math.floor(Math.random() * 255);
			var g = Math.floor(Math.random() * 255);
			var b = Math.floor(Math.random() * 255);

			$(this).css({'background':'rgb('+r+','+g+','+b+')'});
		});
	});
}

function settingsButtons() {		
	$('.px_size').click(function() {
		$('.square').remove()
		$('.button').removeClass('selected')
		var n_2 = Number(prompt('Choose a number of pixels between 1 and 100'));

		if (n_2 > 100) {
			n_2 = Number(prompt('Your number is too big!  Choose a number of pixels between 1 and 100'));
		} 			
		createGrid(n_2);
	});

	$('.trail').click(function() {
		$('.trail').addClass('selected');
		$('.square').css({'background':"#ffffff"});
		$('.square').mouseleave(function() {
			$(this).fadeTo('3000', 0);
		});

		$('.square').mouseenter(function() {
			$(this).fadeTo('fast', 1);
		});
		
	});

	$('.reset').click(function() {
		$('.square').remove();
		$('.button').removeClass('selected');
		$('.button_special').removeClass('selected')
		createGrid(16);
	});
}

$(document).ready(function() {
	createGrid(16);
	colorButtons();
	settingsButtons();
});