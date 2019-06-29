// 轮播图逻辑代码

var $turnPageLeft = $('.site-navbar .viewport .turnPage i.left');
var $turnPageRight = $('.site-navbar .viewport .turnPage i.right');
var $imgSign = $('.site-navbar .img-sign em');
var $scrollImgs = $('.site-navbar .scroll-img > a');
var $viewport = $('.site-navbar .viewport');

var curImgIndex = 0;    //当前显示图片的下标
var scrollImgTimer = setInterval(turnPage, 5000);   //开启定时器轮播
$viewport.hover(    //鼠标移入关闭定时器，移出启动定时器
  function(){
    clearInterval(scrollImgTimer);
    // console.log('轮播关闭');
  },
  function(){
    scrollImgTimer = setInterval(turnPage, 5000);
    // console.log('轮播开启');
  }
);

// 点击左右图标翻页
$turnPageLeft.click(function(){
  turnPage(curImgIndex-1);
});
$turnPageRight.click(function(){
  turnPage();
});

// 点击下面小圈圈翻到指定页
$imgSign.click(function(){
  let index = $(this).index();
  turnPage(index);
})

// 封装轮播图片翻页的函数
function turnPage(newImgIndex=1+curImgIndex) {
  if(newImgIndex===curImgIndex) return;
  newImgIndex = (newImgIndex+5) % 5;
  // console.log('从第'+(curImgIndex+1)+'张图片翻到第'+(newImgIndex+1)+'张图片');
  $scrollImgs.eq(curImgIndex).stop().fadeOut();
  $scrollImgs.eq(newImgIndex).stop().fadeIn();
  $imgSign.eq(curImgIndex).removeClass('cur');
  $imgSign.eq(newImgIndex).addClass('cur');
  curImgIndex = newImgIndex;
}