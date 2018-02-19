var $aboutForms = document.querySelectorAll('.about-form');

for(var i = 0; i < $aboutForms.length; i++){
    var $aboutForm = $aboutForms[i],
        $textarea = $aboutForm.querySelector('.form__textarea');

    $textarea.addEventListener('input', function(){
        var textarea_h = $textarea.scrollHeight;
        $textarea.style.height = textarea_h + 'px';
    });
}

