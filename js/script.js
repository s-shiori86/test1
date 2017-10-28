
//ナビゲーションバーの出現について//

var menuHeight = $("#navBar").height();
var startPos = 0;
$(window).scroll(function(){
  var currentPos = $(this).scrollTop();
  if (currentPos > startPos) {
    if($(window).scrollTop() >= 200) {
      $("#navBar").css("top", "-" + 70 + "px");
    }
  } else {
    $("#navBar").css("top", 0 + "px");
  }
  startPos = currentPos;
});

// スムーズにトップへ戻る設定 //

$(function(){
   $('a[href^="#"]').click(function() {
      var speed = 600;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});


// 子どもの写真ホバーの設定（仮） //

/*$(function() {
  $("#case").css("border", "5px solid #f60");
});
*/


// フェードin//
$(window).on('load',function(){

	// fade-in
    $(window).scroll(function (){
        $('.fade-in').each(function(){
            var POS = $(this).offset().top;  //fade-inがついている要素の位置
            var scroll = $(window).scrollTop();  //スクロール一
            var windowHeight = $(window).height();  //ウィンドウの高さ

            if (scroll > POS - windowHeight + windowHeight/3){
                $(this).css("opacity","1" );
            } else {
                $(this).css("opacity","0" );
            }
        });
    });
});



// ふわっと //

//$(function() {
//$('.box').css('opacity', 0);
//$('.box').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
//	if (isInView) {
//		if (visiblePartY == 'both') {
//			$(this).stop().animate({opacity:1}, 300);
//		}
//	}
//	else {
//		$(this).stop().animate({opacity: 0}, 300);
//	}
//});
//});

$(function() {
	$('.list-mv07').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('mv07');
		}
		else{
			$(this).stop().removeClass('mv07');
		}
	});
});
