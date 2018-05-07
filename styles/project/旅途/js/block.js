
function block(a,b){
    a.mouseover(function(){
        b.css({"display":"block"});
    })
    a.mouseout(function(){
        b.css({"display":"none"});
    })
}
block($(".hotelLi"),$(".hotel"));
block($(".travelLi"),$(".travel"));
block($(".airLi"),$(".air"));
block($(".railwayLi"),$(".railway"));
block($(".carLi"),$(".car"));
block($(".ticketLi"),$(".ticket"));
block($(".groupLi"),$(".group"));
block($(".buyLi"),$(".buy"));
block($(".giftLi"),$(".gift"));
block($(".businessLi"),$(".business"));
block($(".moreLi"),$(".more"));


