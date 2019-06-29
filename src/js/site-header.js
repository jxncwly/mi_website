
var $form = $('.site-header form');
var $search = $('.site-header .search');
var $searchBtn = $('.site-header .search-btn');
var $hotWords = $('.site-header .hotWords');
var $hotWordsList = $('.site-header .hotWords-list');

// 表单事件和样式
$form.hover(function(){
  $('.site-header input').toggleClass('inputHover');
})

$search.focus(function(){
  $hotWords.css('display','none');
  $(this).addClass('inputFocus');
  $searchBtn.addClass('inputFocus');
  $hotWordsList.css('display','block');
}).blur(function(){
  $hotWords.css('display','block');
  $hotWordsList.css('display','none');
  $(this).removeClass('inputFocus');
  $searchBtn.removeClass('inputFocus');
})

$searchBtn.hover(
  function(){
    $(this).toggleClass('btnHover')
  }
)



// nav-list下拉菜单
var $navList = $('.site-header .nav-list');
var $navListMenu = $('.site-header .nav-list-menu');
var $navListLi = $('.site-header .nav-list ul li');
var $listItem = $('.site-header .nav-list-menu .list-item');

var curNavListIndex = 0;

$navList.hover(
  function(){
    $navListMenu.stop().slideDown();
  },
  function(){
    $navListMenu.stop().slideUp();
  }
);

$navListLi.mouseenter(function(){
  let newNavListIndex = $(this).index();
  if (curNavListIndex != newNavListIndex) {
    $listItem.eq(curNavListIndex).css('display','none');
    $listItem.eq(newNavListIndex).css('display','block');
    curNavListIndex = newNavListIndex;
  }
});




