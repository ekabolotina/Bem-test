var $form__labels =  document.querySelectorAll('.form .form__label');

for(i = 0; i < $form__labels.length; i++){
    var $label = $form__labels[i],
        $checkbox = $form__labels[i].querySelector('.form__checkbox');
        $radio = $form__labels[i].querySelector('.form__radio');

    if($checkbox){
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

    if($radio){
        if($radio.className.split(' ').includes('form__radio_checked'))
            $radio.querySelector('input[type=radio]').setAttribute('checked', 'checked');

        $label.onclick = function(e){
            e.preventDefault();
            var $radio = this.querySelector('.form__radio'),
                $radioInput = $radio.querySelector('input[type=radio]'),
                $radios = $radioInput.form.querySelectorAll('.form__radio');
            
            for(var i = 0; i < $radios.length; i++){
                var $it = $radios[i];
                $it.className = $it.className.replace(/\bform__radio_checked\b/g, '');
                $it.querySelector('input[type=radio]').removeAttribute('checked');
            }

            $radio.className += ($radio.className ? ' ' : '') + ' form__radio_checked';
            $radioInput.setAttribute('checked', 'checked');
        }  
    }
}
