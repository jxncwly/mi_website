var $appliancesMenu = $('.page-content .culumn-appliances .culumn-title .menu span');
var $appliancesItem = $('.page-content .culumn-appliances .culumn-right ul');
var $intelligenceMenu = $('.page-content .culumn-intelligence .culumn-title .menu span');
var $intelligenceItem = $('.page-content .culumn-intelligence .culumn-right ul');
var $collocationMenu = $('.page-content .culumn-collocation .culumn-title .menu span');
var $collocationItem = $('.page-content .culumn-collocation .culumn-right ul');
var $partsMenu = $('.page-content .culumn-parts .culumn-title .menu span');
var $partsItem = $('.page-content .culumn-parts .culumn-right ul');
var $peripheryMenu = $('.page-content .culumn-periphery .culumn-title .menu span');
var $peripheryItem = $('.page-content .culumn-periphery .culumn-right ul');



//鼠标移入家电栏目菜单触发事件
var curAppliancesIndex = 0;
$appliancesMenu.mouseenter(function(){
  let newAppliancesIndex = $(this).index();
  if(curAppliancesIndex===newAppliancesIndex) return;
  $appliancesMenu.eq(curAppliancesIndex).removeClass('cur');
  $appliancesItem.eq(curAppliancesIndex).removeClass('cur');
  $appliancesMenu.eq(newAppliancesIndex).addClass('cur');
  $appliancesItem.eq(newAppliancesIndex).addClass('cur');
  curAppliancesIndex = newAppliancesIndex;
});

//鼠标移入智能栏目菜单触发事件
var curIntelligenceIndex = 0;
$intelligenceMenu.mouseenter(function(){
  let newIntelligenceIndex = $(this).index();
  if(curIntelligenceIndex===newIntelligenceIndex) return;
  $intelligenceMenu.eq(curIntelligenceIndex).removeClass('cur');
  $intelligenceItem.eq(curIntelligenceIndex).removeClass('cur');
  $intelligenceMenu.eq(newIntelligenceIndex).addClass('cur');
  $intelligenceItem.eq(newIntelligenceIndex).addClass('cur');
  curIntelligenceIndex = newIntelligenceIndex;
});

//鼠标移入搭配栏目菜单触发事件
var curCollocationIndex = 0;
$collocationMenu.mouseenter(function(){
  let newCollocationIndex = $(this).index();
  if(curCollocationIndex===newCollocationIndex) return;
  $collocationMenu.eq(curCollocationIndex).removeClass('cur');
  $collocationItem.eq(curCollocationIndex).removeClass('cur');
  $collocationMenu.eq(newCollocationIndex).addClass('cur');
  $collocationItem.eq(newCollocationIndex).addClass('cur');
  curCollocationIndex = newCollocationIndex;
});

//鼠标移入配件栏目菜单触发事件
var curPartsIndex = 0;
$partsMenu.mouseenter(function(){
  let newPartsIndex = $(this).index();
  if(curPartsIndex===newPartsIndex) return;
  $partsMenu.eq(curPartsIndex).removeClass('cur');
  $partsItem.eq(curPartsIndex).removeClass('cur');
  $partsMenu.eq(newPartsIndex).addClass('cur');
  $partsItem.eq(newPartsIndex).addClass('cur');
  curPartsIndex = newPartsIndex;
});

//鼠标移入周边栏目菜单触发事件
var curPeripheryIndex = 0;
$peripheryMenu.mouseenter(function(){
  let newPeripheryIndex = $(this).index();
  if(curPeripheryIndex===newPeripheryIndex) return;
  $peripheryMenu.eq(curPeripheryIndex).removeClass('cur');
  $peripheryItem.eq(curPeripheryIndex).removeClass('cur');
  $peripheryMenu.eq(newPeripheryIndex).addClass('cur');
  $peripheryItem.eq(newPeripheryIndex).addClass('cur');
  curPeripheryIndex = newPeripheryIndex;
});

// 封装鼠标移入栏目菜单触发事件
/* function tabMenu(_this, curIndex, $menu, $item){
  let newIndex = $(_this).index();
  console.log(_this.innerHTML);
  if(curIndex===newIndex) return;
  console.log('下标从'+ curIndex +'切换到'+ newIndex);
  $menu.eq(curIndex).removeClass('cur');
  $item.eq(curIndex).removeClass('cur');
  $menu.eq(newIndex).addClass('cur');
  $item.eq(newIndex).addClass('cur');
  curIndex = newIndex;
} */


// 为你推荐栏左右箭头事件代码

var $recommendLeftMenu = $('.page-content .culumn-recommend .culumn-title .menu i.left');
var $recommendRightMenu = $('.page-content .culumn-recommend .culumn-title .menu i.right');
var $recommendMain = $('.page-content .culumn-recommend .culumn-right ul');

//为你推荐栏目点击左右箭头平滑翻页
//到第一页不能再往前翻页，向左箭头变灰
//从第一页翻到第二页，向左箭头恢复正常
//到最后一页不能再向后翻页，向右箭头变灰
//从最后一页翻到倒数第二页，向右箭头恢复正常
var recommendMoving = false;
var curRecommendOffsetX = 0;

$recommendLeftMenu.click(function(){
  if (recommendMoving) return;
  if (this.className.indexOf('abled') === -1) return;
  recommendMoving = true;
  let newRecommendOffsetX = curRecommendOffsetX+1240;
  $recommendMain.css('transform','translateX('+newRecommendOffsetX+'px)');
  $recommendMain.animate({}, 500, function(){
    recommendMoving = false;
    if (newRecommendOffsetX === -2480) {
      $recommendRightMenu.addClass('abled');
    };
    if (newRecommendOffsetX === 0) {
      $recommendLeftMenu.removeClass('abled');
    }
    curRecommendOffsetX = newRecommendOffsetX;
  })
});

$recommendRightMenu.click(function(){
  if (recommendMoving) return;
  if (this.className.indexOf('abled') === -1) return;
  recommendMoving = true;
  let newRecommendOffsetX = curRecommendOffsetX-1240;
  $recommendMain.css('transform','translateX('+newRecommendOffsetX+'px)');
  $recommendMain.animate({}, 500, function(){
    recommendMoving = false;
    if (newRecommendOffsetX === -3720) {
      $recommendRightMenu.removeClass('abled');
    };
    if (newRecommendOffsetX === -1240) {
      $recommendLeftMenu.addClass('abled');
    }
    curRecommendOffsetX = newRecommendOffsetX;
  })
})



// 内容栏
var $pageSymbol = $('.page-content .content .culumn-content>ul .item .page-symbol div');
//书
var $book = $('.page-content .content .culumn-content>ul .culumn-book .book');
var $bookTurnLeft = $('.page-content .content .culumn-content>ul .culumn-book .page-left');
var $bookTurnRight = $('.page-content .content .culumn-content>ul .culumn-book .page-right');
var $bookPageSymbol = $('.page-content .content .culumn-content>ul .culumn-book .page-symbol div');
var curBookPageIndex = 0;

// miui
var $miui = $('.page-content .content .culumn-content>ul .culumn-miui .miui')
var $miuiTurnLeft = $('.page-content .content .culumn-content>ul .culumn-miui .page-left');
var $miuiTurnRight = $('.page-content .content .culumn-content>ul .culumn-miui .page-right');
var $miuiPageSymbol = $('.page-content .content .culumn-content>ul .culumn-miui .page-symbol div');
var curMiuiPageIndex = 0;

// game
var $game = $('.page-content .content .culumn-content>ul .culumn-game .game')
var $gameTurnLeft = $('.page-content .content .culumn-content>ul .culumn-game .page-left');
var $gameTurnRight = $('.page-content .content .culumn-content>ul .culumn-game .page-right');
var $gamePageSymbol = $('.page-content .content .culumn-content>ul .culumn-game .page-symbol div');
var curGamePageIndex = 0;

// app
var $app = $('.page-content .content .culumn-content>ul .culumn-app .app')
var $appTurnLeft = $('.page-content .content .culumn-content>ul .culumn-app .page-left');
var $appTurnRight = $('.page-content .content .culumn-content>ul .culumn-app .page-right');
var $appPageSymbol = $('.page-content .content .culumn-content>ul .culumn-app .page-symbol div');
var curAppPageIndex = 0;

var contentMoving = false;
// 鼠标滑过页码标志事件
$pageSymbol.hover(function(){
  $(this).toggleClass('on');
});

// 鼠标点击页码标志事件
$bookPageSymbol.click(function(){  //book子栏目
  let newBookPageIndex = $(this).index();
  contentPageChange($book,$bookPageSymbol,$bookTurnLeft,$bookTurnRight,curBookPageIndex,newBookPageIndex,2);
  curBookPageIndex = newBookPageIndex;
});
$miuiPageSymbol.click(function(){  //MIUI子栏目
  let newMiuiPageIndex = $(this).index();
  contentPageChange($miui,$miuiPageSymbol,$miuiTurnLeft,$miuiTurnRight,curMiuiPageIndex,newMiuiPageIndex,3);
  curMiuiPageIndex = newMiuiPageIndex;
});
$gamePageSymbol.click(function(){  //游戏子栏目
  let newGamePageIndex = $(this).index();
  contentPageChange($game,$gamePageSymbol,$gameTurnLeft,$gameTurnRight,curGamePageIndex,newGamePageIndex,3);
  curGamePageIndex = newGamePageIndex;
});
$appPageSymbol.click(function(){  //应用子栏目
  let newAppPageIndex = $(this).index();
  contentPageChange($app,$appPageSymbol,$appTurnLeft,$appTurnRight,curAppPageIndex,newAppPageIndex,3);
  curAppPageIndex = newAppPageIndex;
});

// 鼠标点击左右翻页事件
$bookTurnLeft.click(function(){  //点击图书子栏目左翻页
  if(curBookPageIndex==0) return;
  contentPageChange($book,$bookPageSymbol,$bookTurnLeft,$bookTurnRight,curBookPageIndex,curBookPageIndex-1,2);
  curBookPageIndex = curBookPageIndex-1;
});
$bookTurnRight.click(function(){  //点击图书子栏目右翻页
  if(curBookPageIndex==2) return;
  contentPageChange($book,$bookPageSymbol,$bookTurnLeft,$bookTurnRight,curBookPageIndex,curBookPageIndex+1,2);
  curBookPageIndex = curBookPageIndex+1;
});

$miuiTurnLeft.click(function(){  //点击miui子栏目左翻页
  if(curMiuiPageIndex==0) return;
  contentPageChange($miui,$miuiPageSymbol,$miuiTurnLeft,$miuiTurnRight,curMiuiPageIndex,curMiuiPageIndex-1,3);
  curMiuiPageIndex = curMiuiPageIndex-1;
});
$miuiTurnRight.click(function(){  //点击miui子栏目右翻页
  if(curMiuiPageIndex==3) return;
  contentPageChange($miui,$miuiPageSymbol,$miuiTurnLeft,$miuiTurnRight,curMiuiPageIndex,curMiuiPageIndex+1,3);
  curMiuiPageIndex = curMiuiPageIndex+1;
});

$gameTurnLeft.click(function(){  //点击游戏子栏目左翻页
  if(curGamePageIndex==0) return;
  contentPageChange($game,$gamePageSymbol,$gameTurnLeft,$gameTurnRight,curGamePageIndex,curGamePageIndex-1,3);
  curGamePageIndex = curGamePageIndex-1;
});
$gameTurnRight.click(function(){  //点击游戏子栏目右翻页
  if(curGamePageIndex==3) return;
  contentPageChange($game,$gamePageSymbol,$gameTurnLeft,$gameTurnRight,curGamePageIndex,curGamePageIndex+1,3);
  curGamePageIndex = curGamePageIndex+1;
});

$appTurnLeft.click(function(){  //点击app子栏目左翻页
  if(curAppPageIndex==0) return;
  contentPageChange($app,$appPageSymbol,$appTurnLeft,$appTurnRight,curAppPageIndex,curAppPageIndex-1,3);
  curAppPageIndex = curAppPageIndex-1;
});
$appTurnRight.click(function(){  //点击app子栏目右翻页
  if(curAppPageIndex==3) return;
  contentPageChange($app,$appPageSymbol,$appTurnLeft,$appTurnRight,curAppPageIndex,curAppPageIndex+1,3);
  curAppPageIndex = curAppPageIndex+1;
});

// 封装内容栏里面翻页的函数
function contentPageChange($content,$contentSymbol,$turnLeft,$turnRight,curIndex,newIndex,maxIndex){
  if (contentMoving) return;
  if (curIndex == newIndex) return;
  if (newIndex < 0 || newIndex > maxIndex) return;
  if (newIndex == 0){
    $turnLeft.css('cursor','default');
    $turnRight.css('cursor','pointer');
  }else if(newIndex == maxIndex){
    $turnLeft.css('cursor','pointer');
    $turnRight.css('cursor','default');
  }else{
    $turnLeft.css('cursor','pointer');
    $turnRight.css('cursor','pointer');
  }
  
  contentMoving = true;
  $contentSymbol.eq(curIndex).removeClass('cur');
  $contentSymbol.eq(newIndex).addClass('cur');
  $content.css('transform','translateX('+ (-296 * newIndex) +'px)');
  $content.animate({},500,()=>{
    contentMoving = false;
  });
}