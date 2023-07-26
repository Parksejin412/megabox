//banner slider
const swiper = new Swiper('.slider', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


  //movie
  const swiper2 = new Swiper('.swiper-container2', {
    loop: true,
    slidesPerView :4,
    spaceBetween:10,
    breakpoints: {
      // 뷰포터의 넓이 >= 0px
      0: {
        slidesPerView: 1.4,
        spaceBetween: 24
      },
      // 뷰포터의 넓이 >= 600px
      600: {
        slidesPerView: 2,
        spaceBetween: 24
      },
      // 뷰포터의 넓이 >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 24
      },
      // 뷰포터의 넓이 >= 960px
      960: {
        slidesPerView: 4,
        spaceBetween: 24
      }
    }
    

  });

  //movie tab menu
  let movBtn=$('.movie_title ul li');
  let movCont=$('.movie_chart>div');

  movCont.hide().eq(0).show(); //모두다 안보이게 하고 첫번째 슬라이더만 보여라
 
  movBtn.click(function(e){
    e.preventDefault();
    let target=$(this); //내가 클릭한 그것 ->target 변수 선언
    let index=target.index(); //클릭한 li의 index번호 추출
    console.log(index);
    movCont.hide().eq(index).show();//모든 li를 지우고 해당 index번호의 슬라이더를 보여라
    movBtn.removeClass('active'); //모든 li에 active 클래스명을 지워라
    target.addClass('active') // 클릭한 li에 active 클래스를 추가해라
  });

  //notice
  let tabmenu = $('.notice');

  tabmenu.find('ul>li>ul').hide();
  tabmenu.find('ul>li.active>ul').show();

  tabmenu.find('ul>li>a').click(function(e){
      e.preventDefault();
      let target =$(this);
      //.next() -> jquery에서 나의 바로 아래 동생
      //.nextAll() -> jquery에서 나의 아래 동생들
      tabmenu.find('ul>li>a').next().hide();
      target.next().show();

      tabmenu.find('ul>li').removeClass('active')
      //.parent() ->jquery에서 상위요소(부모)부르기
      //.parents() ->jquery에서 상위요소들 부르기
      target.parent().addClass('active')
  })