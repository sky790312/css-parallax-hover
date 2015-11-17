$('.wrap').mousemove(function(e) {
    var x = (e.pageX * -1 / 20), y = (e.pageY * -1 / 20);

    $(this).css('background-position',
			'calc(50% - ' + x + 'px)' + 'calc(20% - ' + y+ 'px), ' +
			'calc(80% - ' + x + 'px)' + 'calc(50% - ' + y+ 'px), ' +
			'calc(50% - ' + x + 'px)' + 'calc(80% - ' + y+ 'px), ' +
			'calc(20% - ' + x + 'px)' + 'calc(50% - ' + y+ 'px)');
		});