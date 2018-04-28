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
    $("body").mousedown(function(){
            $("#xiaoshouid").slideUp(500);
        })
    $("")

})

// 背景canvas
