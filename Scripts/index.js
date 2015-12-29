/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {

    $("#imenu").tap(function () {
        $("#DivDDLMenu").toggle();
        $("#DivDDLMenu").toggleClass("enter-up-bounce");

    })
    $("#DivDDLMenu>ul>li").tap(function () {
        if ($(this).find("ul").css('display') != "none") {
            $(this).find("ul").hide();
        } else {
            $("#DivDDLMenu ul li ul").hide();
            $(this).find("ul").toggle();
        }

    })
    init();
})
function init() {
    $("#DivDDLMenu").hide();
    $(".ulitem").hide();
     initSwiper();
}
function initSwiper(){
    var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay : 4000,
    speed:1000,
    autoplayDisableOnInteraction:true,//触摸后不滑动
    //heigth: 150,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    //nextButton: '.swiper-button-next',
    //prevButton: '.swiper-button-prev',
    
    // 如果需要滚动条
    //scrollbar: '.swiper-scrollbar',
  })        
}

