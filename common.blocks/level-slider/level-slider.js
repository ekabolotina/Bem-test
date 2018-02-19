var $levelSliders = document.querySelectorAll('.level-slider');

for(var i = 0; i < $levelSliders.length; i++){
    $levelSlider = $levelSliders[i],
    $levelSlider__handle = $levelSlider.querySelector('.level-slider__handle'),
    dragging = false,
    levelSlider_posX = $levelSlider.getBoundingClientRect().left,
    levelSlider_width = $levelSlider.clientWidth;

    $levelSlider.onmousedown = function(e){
        e.preventDefault();
        dragging = true;
        __levelSlider_moveTo(e.clientX - levelSlider_posX);
    }

    $levelSlider.onmouseup = function(e){
        e.preventDefault();
        dragging = false;
    }  

    document.onmousemove = function(e){
        if(!dragging) return;
        __levelSlider_moveTo(e.clientX - levelSlider_posX);
    }

    document.onmouseup = function(e){
        dragging = false;
    }

}

function __levelSlider_moveTo(pos){
    if(pos < 0){
        $levelSlider__handle.style.left = 0;
        return;
    }
    if(pos > levelSlider_width - $levelSlider__handle.clientWidth){
        $levelSlider__handle.style.left = (levelSlider_width - $levelSlider__handle.clientWidth) + 'px';
        return;
    }
    $levelSlider__handle.style.left = pos + 'px';
}