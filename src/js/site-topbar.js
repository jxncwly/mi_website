$('.site-topbar .topbar-cart').hover(
  function () {
    $(this).addClass('hover')
    $('.site-topbar .topbar-cart .cart-menu').slideDown('fast',()=>{
    })
  },
  function () {
    $('.site-topbar .topbar-cart .cart-menu').slideUp('fast',()=>{
      $(this).removeClass('hover')
    })
  }
)

