$(function() {
	$('#Main img')
		.hover(
		function(){
			$(this).stop().animate({
				'width':'870px',//拡大で表示させておくサイズ
				'height':'540px',
				'marginTop':'0px'//トップのマージンをマイナスで指定す事で底辺を起点としています
			},'fast');
		},
		function () {
			$(this).stop().animate({
				'width':'850px',//デフォルトで表示させておくサイズ
				'height':'520px',
				'marginTop':'0px'
			},'fast');
		}
	);
	$('#Artwork img')
		.hover(
		function(){
			$(this).stop().animate({
				'width':'410px',//拡大で表示させておくサイズ
				'height':'410px',
				'marginTop':'0px'//トップのマージンをマイナスで指定す事で底辺を起点としています
			},'fast');
		},
		function () {
			$(this).stop().animate({
				'width':'400px',//デフォルトで表示させておくサイズ
				'height':'400px',
				'marginTop':'0px'
			},'fast');
		}
	);
	$('#mainte img')
		.hover(
		function(){
			$(this).stop().animate({
				'width':'410px',//拡大で表示させておくサイズ
				'height':'410px',
				'marginTop':'0px'//トップのマージンをマイナスで指定す事で底辺を起点としています
			},'fast');
		},
		function () {
			$(this).stop().animate({
				'width':'400px',//デフォルトで表示させておくサイズ
				'height':'400px',
				'marginTop':'0px'
			},'fast');
		}
	);
	$('#Backup img')
		.hover(
		function(){
			$(this).stop().animate({
				'width':'410px',//拡大で表示させておくサイズ
				'height':'410px',
				'marginTop':'0px'//トップのマージンをマイナスで指定す事で底辺を起点としています
			},'fast');
		},
		function () {
			$(this).stop().animate({
				'width':'400px',//デフォルトで表示させておくサイズ
				'height':'400px',
				'marginTop':'0px'
			},'fast');
		}
	);
});	
$(function() {
	$('#Logo_Title img').mouseover(function(){
		$(this).css('opacity', '.4').animate({'opacity': '1'}, 'slow');
	});
});
