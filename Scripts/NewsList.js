/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function (){
    $("#hrfLoadMore").tap(function (){
       $("#ImgLoadMore").toggle(); 
        setTimeout(LoadMore,1000);
        
    })
})
function LoadMore(){
    
    $("#LoadContent").show();
     $("#ImgLoadMore").toggle(); 
}

