

// $(function firstAnimation() {
//     $('.inview').on('inview', function (event, isInview) {
//       if(isInview) {
//         $(this).addClass('animate__animated animate__flip animate__infinite');
//       } else {
//         $(this).removeClass('animate__animated animate__flip animate__infinite');
//         $(this).removeClass('inview');
//       }
//     });
  
//   });


//   $(function(){
//     if(firstAnimation) {
//         $(this).addClass(second-inview);
//     } else {
//         $(this).removeClass();
//     }
//   })


//   whenとdoneを使ってみたい

// $(function() {
    // $.when(

        $(function firstAnimation() {
            $('.inview').on('inview', function (event, isInview) {
              if(isInview) {
                $(this).removeClass('inview');
                $(this).addClass('animate__animated animate__fadeInDown');
              } else {
                $(this).removeClass('animate__animated animate__fadeInDown');


                // ????
                $(this).addClass(inview);
              }
            });
          
          })    
          
          

    // ) .done(function() {

        // $(this).addClass(second-inview);


//     })
// })

  


// $(function() {
//     $('.second-inview').on('inview', function(event, isInview) {
//         if(isInview) {
//             $(this).removeClass(second-inview);

//         } else {
//              $(this).addClass(second-inview);
//         }
//     })
// });

// teratail
$(function () {
  $(".row > div").on("inview", function (event, isInview) {
    if (isInview) {
      $(this).removeClass("second-inview");
    } else {
      $(this).addClass("second-inview");
    }
  });
});




// quizlet flashcard 入ってくるアニメーション

$('#quizlet').on('inview', function(event, isInView) {
  if (isInView) {
    $('.flashcard1').addClass('animate__animated animate__fadeInUp ');
  } else {
    $('.flashcard1').removeClass(' animate__animated animate__fadeInUp ');
  }
});

$('#quizlet').on('inview', function(event, isInView) {
  if (isInView) {
    $('.flashcard2').addClass('animate__animated animate__fadeInUp ');
  } else {
    $('.flashcard2').removeClass(' animate__animated animate__fadeInUp ');
  }
});

$('#quizlet').on('inview', function(event, isInView) {
  if (isInView) {
    $('.flashcard3').addClass('animate__animated animate__fadeInUp ');
  } else {
    $('.flashcard3').removeClass(' animate__animated animate__fadeInUp');
  }
});

$('#quizlet').on('inview', function(event, isInView) {
  if (isInView) {
    $('.flashcard4').addClass('animate__animated animate__fadeInUp');
  } else {
    $('.flashcard4').removeClass(' animate__animated animate__fadeInUp');
  }
});


// lengthyすぎる！🤔🤔🤔🤔
// let flashNum = $('.flashcard' + Number);

// flashNum(1);







// flashcard2 flip

$('.flashcard2').click(function() {
  // $(this).addClass('animate_animated animate__flipInY animate__faster');

  $(this).toggleClass('animate_animated animate__flipInY animate__faster');
  
  if($('.flashcard2').text() === 'Fraternity / Sorority') {
  $(this).text('男子・女子の社交クラブ');



} else {

  $(this).text('Fraternity / Sorority');

}
  // $('.head').toggle();
  // $('.tail-opaci').toggle();


});

// flashcard 3 flip

$('.flashcard3').click(function() {
  // $(this).addClass('animate_animated animate__flipInY animate__faster');
  
  var initializeAnime = $(this).addClass('animate_animated animate__flipInY animate__faster');

if($('.flashcard3').text() == `Corn → "I have a foot corn on my left foot."`) {
  $(this).text('魚の目');

} else {
  $(this).text(`Corn → "I have a foot corn on my left foot."`);

}

  setTimeout(initializeAnime, 1000);


});

// できたバージョン
// "Corn 'I have a foot corn on my left foot.'"










// podcast

// スマホ

$(document).ready(function() {
	$('.three-lines-menu').on('click', function() {	
		$('#menu ul').toggleClass('menu-responsive');
	});
});








// netflix
// TOGGLE BUTTON

$('#toggle').click(function() {

  // var text = $('.english').text();

if($('.english p').html() == 'Netflix is not only for entertainment, but also an appropriate material to learn real English. \<br> With a Chrome extension "Language Reactor", you\'re gonna immerse yourself into lively and latest world. Moreover, you can take a note on right side of the screen. Let\'s improve vocabulary and learn practical usage which isn\'t taught in school!') {
  $('.english p').html('Netflixはエンターテイメントとしてだけでなく、本物の英語を学ぶための適切な教材でもあります。<br> Chrome拡張機能「Language Reactor」を使えば、生き生きとした最新の英語の世界に浸ることができます。また、画面右側にはメモを取ることができます。語彙を増やして、学校では学べない実用的な使い方を身につけましょう！');

} else //if ($('.english').text() == 'この文は日本語です')//
 {
  $('.english p').html('Netflix is not only for entertainment, but also an appropriate material to learn real English. \<br> With a Chrome extension "Language Reactor", you\'re gonna immerse yourself into lively and latest world. Moreover, you can take a note on right side of the screen. Let\'s improve vocabulary and learn practical usage which isn\'t taught in school!');

}

// $(function() {
//   $('.toggle-switch').click(function() {
//     $('.english').toggleClass('japanese')
//   })
//   });
  

});

// -------------------------
// $('.flashcard2').click(function() {
//   // $(this).addClass('animate_animated animate__flipInY animate__faster');

//   $(this).addClass('animate_animated animate__flipInY animate__faster');

// if($('.flashcard2').text() === 'Fraternity / Sorority') {
//   $(this).text('男子・女子の社交クラブ');


// } else {

//   $(this).text('Fraternity / Sorority');

// }
//   // $('.head').toggle();
//   // $('.tail-opaci').toggle();


// });



// $(function() {
// $('.toggle-switch').click(function() {
//   $('.japanese').toggle();
// })
// });



// JavaScript超入門コース 合併版【JavaScriptの超基本的な部分をたった1時間で学べます】【プログラミング初心者向け入門講座】
// 1:06:00

class Student {
  constructor(name) {
    this.name = name;
  }

  // クラス①
  cal_avg(data) {
    let sum = 0;
    for(let i = 0; i < data.length; i++) {
      // sum += i; 間違え
      sum += data[i];
    }
// 書いてなかったとこ
let avg = sum / data.length;
return avg;
  }



  // クラス②
  judge(avg) {
    // 🤬
    let result;
    if (60 <= avg) {
     result = 'passed';
    } else //if (data <= avg)//
     {
     result = 'failed';
    }

    // 🤬
    return result;
  }
}

let a001 = new Student('sato');
let data = [70, 65, 50, 90, 30];
let avg = a001.cal_avg(data);
//🤬// 
let result = a001.judge(avg);


console.log(data.length);
console.log(a001.name);
console.log(avg);
console.log(result);




