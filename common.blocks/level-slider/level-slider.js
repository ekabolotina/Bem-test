var $levelSliders = document.querySelectorAll('.level-slider');

for(var i = 0; i < $levelSliders.length; i++){
    $levelSlider = $levelSliders[i],
    $levelSlider__handle = $levelSlider.querySelector('.level-slider__handle'),
    dragging = false;

    $levelSlider.onmousedown = function(e){
        e.preventDefault();
        dragging = true;
        __levelSlider_moveTo(e.clientX - $levelSlider.getBoundingClientRect().left);
    }

    $levelSlider.onmouseup = function(e){
        e.preventDefault();
        dragging = false;
    }  

    document.onmousemove = function(e){
        if(!dragging) return;
        __levelSlider_moveTo(e.clientX - $levelSlider.getBoundingClientRect().left);
    }

    document.onmouseup = function(e){
        dragging = false;
    }

}

function __levelSlider_moveTo(pos){
    var levelSlider_width = $levelSlider.clientWidth;
    if(pos < 0){
        $levelSlider__handle.style.left = 0;
        return;
    }
    if(pos > levelSlider_width - $levelSlider__handle.clientWidth){
        $levelSlider__handle.style.left = (levelSlider_width - $levelSlider__handle.clientWidth) / levelSlider_width * 100 + '%';
        return;
    }
    $levelSlider__handle.style.left = pos / levelSlider_width * 100 + '%';
}