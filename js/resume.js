
// 销售主管弹窗开关
var workListShow = function () {
    if ($("#xiaoshouid")[0].style.display == 'none'){
        $("#xiaoshouid").slideDown(500  );
        }
    }
var workListClose = function () {
        $("#xiaoshouid").slideUp(500);
    }
$(document).ready(function(){
    $("body").not("#xiaoshouid").mousedown(function(){
            $("#xiaoshouid").slideUp(500);
        })
    $("")

})

// 更改背景canvas
// var starbutton = $("star");
// var waterbutton = $("water");
// var Star = function () {
//     if ($("canvas-club") == true && $("canvas-star") == false){
//         $("star").onclick = function () {
//             $("#canvas-club").remove();
//             $("body").addClass("aaaa")
//
//         }
//     }
// }
// 项目经验小框
// window.onload = function () {
//     $("#shuYiShuEr").mouseover(function () {

//         $(this).append("<iframe scrolling='no' id='shuYiShuErIf' " +
//             "src=\'./project/Web/qianDuanPage/fenlei.html\' width=\'900\' height=\'500\' " +
//             "style=\'position: absolute; top: -300px; z-index: 10000;\' frameborder=\'0\'></iframe>\n");
//     })
//     $("#shuYiShuErLogin").mouseover(function () {
//         $(this).append("<iframe scrolling='no' id='shuYiShuErLoginIf' " + "src=\'./project/Web/login/login.html\' width=\'900\' height=\'500\' " + "style=\'position: absolute;left: 120px; top: -300px; z-index: 10000;\' frameborder=\'0\'></iframe>\n")
//     })
//     $("#shuYiShuErRegister").mouseover(function () {
//         $(this).append("<iframe scrolling='no' id='shuYiShuErRegisterIf' src='./project/Web/register/register.html' width='900' height='500' style='position: absolute; left: 120px; top: -300px; z-index: 10000; '></iframe>")
//     })
//     $("#snake").mouseover(function () {
//         $(this).append("<iframe scrolling='no' id='snakeIf' src='./games/贪吃蛇2.html' width='900' height='500' style='position: absolute; left: 120px; top: -300px; z-index: 10000; '></iframe>")
//     })
//     $("#eludeGame").mouseover(function () {
//         $(this).append("<iframe scrolling='no' id='eludeGameIf' src='./games/躲避游戏.html' width='900' height='500' style='position: absolute; left: 120px; top: -300px; z-index: 10000; '></iframe>")
//     })
//     $("#moveDiamonds").mouseover(function () {
//         $(this).append("<iframe scrolling='no' id='moveDiamondsIf' src='./games/canvas移动的方块.html' width='900' height='500' style='position: absolute; left: 120px; top: -300px; z-index: 10000; '></iframe>")
//     })

// }
// $(function () {
//     $("#shuYiShuEr").mouseout(function () {
//         // console.log("10");
//         $("#shuYiShuErIf").remove();
//     })
//     $("#shuYiShuErLogin").mouseout(function () {
//         $("#shuYiShuErLoginIf").remove();
//     })
//     $("#shuYiShuErRegister").mouseout(function () {
//         $("#shuYiShuErRegisterIf").remove();
//     })
//     $("#snake").mouseout(function () {
//         $("#snakeIf").remove();
//     })
//     $("#eludeGame").mouseout(function () {
//         $("#eludeGameIf").remove();
//     })
//     $("#moveDiamonds").mouseout(function () {
//         $("#moveDiamondsIf").remove();
//     })
// });


