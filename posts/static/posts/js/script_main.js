// 0. a 클릭시 새로고침되는 이벤트 제거

// on 그룹 이벤트 메소드 붙임 -> a의 속성값 href="#" click 했을 때
// -> function(e) 함수 실행 (매개변수 e로 줌)
// -> e에 기본값 preventDefault 스크립트 호출
// e 는 a의 속성값 #인 대상 -> 클릭했을 때 -> 이벤트 초기화
$(document).on("click", 'a[href="#"]', function (e) {
  e.preventDefault();
});

// 1. synopsis 영역

// $:이벤트 불러오는 메소드 window 메소드 불러옴 에 on(이벤트)!
// scroll 사이즈 resize 할 때 다음의 함수 실행
$(window).on("scroll resize", function () {
  let scrollPos = 0; // 초기값 0
  scrollPos = $(document).scrollTop(); // html document의 scrollTop의 위치 값이 변수 scrollPos에 담김
  fix(); // fix 함수 호출 (아래에 함수 만들어 줌)
  fixHeader();
  fixList();

  function fix() {
    // 스크롤 위치값 1800보다 클 경우 (밑으로 내려갈 수록 숫자 큼) on 클래스 붙임
    // -> .fix .text 위치 bottom:10% 에서 위로 올라오면서 position fix로 바뀜
    if (scrollPos > 1800) {
      $(".fix .text").addClass("on");
    } else {
      // fix 시켜둔 on 클래스 지움 -> bottom:10%로 돌아감
      $(".fix .text").removeClass("on");
    }
    if (scrollPos > 3600) {
      // scroll 위치값 2700으로 많이 내려오면 fix되었던 것 해제
      $(".fix .text").removeClass("on");
    }
  }

  // header 첫번째 화면만 두께 넓게, 스크롤 내리면 얇게
  function fixHeader() {
    if (scrollPos > 20) {
      $("header").addClass("on"); // header에 on클래스 더해짐
    } else {
      $("header").removeClass("on"); // header에 on클래스 제거
    }
  }

  function fixList() {
    $("section.synopsis .inner .list li a").removeClass("on");
    if (scrollPos > 2000) {
      $("section.synopsis .inner .list li a").removeClass("on");
      $("section.synopsis .inner .list li:eq(0) a").addClass("on");
      // scrollPos > 2000 일때, .list li a 에 붙은 on클래스 제거 list의 0번째 인덱스에 on클래스 더함.
      // eq() : 인덱스 값 사용해서 원하는 위치의 요소 선택해서 가져올 수 있는 선택자 메소드
    }
    if (scrollPos > 2400) {
      $("section.synopsis .inner .list li a").removeClass("on");
      $("section.synopsis .inner .list li:eq(1) a").addClass("on");
    }
    // scrollPos > 2400 일때, .list li a 에 붙은 다른 on클래스 제거 list의 1번째 인덱스에 on클래스 더함.

    if (scrollPos > 2800) {
      $("section.synopsis .inner .list li a").removeClass("on");
      $("section.synopsis .inner .list li:eq(2) a").addClass("on");
    }
    if (scrollPos > 3200) {
      $("section.synopsis .inner .list li a").removeClass("on");
      $("section.synopsis .inner .list li:eq(3) a").addClass("on");
    }
    if (scrollPos > 3700) {
      $("section.synopsis .inner .list li a").removeClass("on");
    }
  }

  // 2. 스크롤 이벤트
  $(function () {
    $(".animate").scrolla({
      mobile: true, // 모바일 사용 여부
      once: false, // 스크롤시 한번만 사용할경우 true 계속 스크롤 될때마다 사용될거면 false
    });
  });

  // 3. 텍스트 애니메이션
  $(function () {
    Splitting();
  });
});

/* gnb 메뉴 */
$(function () {
  $("header .gnbBtn").on("click", function () {
    $("header nav.gnb").toggleClass("on");
  });
  $(".contents").on("click", function () {
    $("header nav.gnb").removeClass("on");
  });
});
/* header의 .gnbBtn 클릭할 경우 nav.gnb에 on클래스 붙음.
  contents 클릭할 때 nav.gnb에 붙은 on클래스 제거.
*/
