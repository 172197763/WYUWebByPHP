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
}

