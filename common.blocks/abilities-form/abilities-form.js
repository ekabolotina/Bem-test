var $abilitiesForm__labels =  document.querySelectorAll('.abilities-form__label');

for(i = 0; i < $abilitiesForm__labels.length; i++){
    var $label = $abilitiesForm__labels[i],
        $checkbox = $abilitiesForm__labels[i].querySelector('.form__checkbox');

    if($checkbox.className.split(' ').includes('form__checkbox_checked'))
        $checkbox.querySelector('input[type=checkbox]').setAttribute('checked', 'checked');

    $label.onclick = function(e){
        e.preventDefault();
        var $checkbox = this.querySelector('.form__checkbox'),
            $checkboxInput = $checkbox.querySelector('input[type=checkbox]');

        if($checkbox.className.split(' ').includes('form__checkbox_checked')){
            $checkbox.className = $checkbox.className.replace(/\bform__checkbox_checked\b/g, '');
            $checkboxInput.removeAttribute('checked');
        }else{
            $checkbox.className += ' form__checkbox_checked';
            $checkboxInput.setAttribute('checked', 'checked');
        }
    }
}
