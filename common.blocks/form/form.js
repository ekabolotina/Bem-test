var $form = '.form',
    $form__labels = document.querySelectorAll($form + ' .form__label'),
    $forms = document.querySelectorAll($form);


for(var i = 0; i < $forms.length; i++){
    var $form = $forms[i];

    $form.onclick = function(e){
        e.preventDefault();
        
        var target = e.target;
        while(target.className && !target.className.split(' ').includes('.form')){
            if(target.tagName === 'LABEL') break;
            target = target.parentNode;
        }

        if(target.tagName !== 'LABEL') return;

        var $form__labels = $form.querySelectorAll(' .form__label'),
            $label = target,
            $checkbox = $label.querySelector('.form__checkbox'),
            $radio = $label.querySelector('.form__radio');

        if($checkbox){
            var $checkboxInput = $checkbox.querySelector('input[type=checkbox]');

            if($checkbox.className.split(' ').includes('form__checkbox_checked')){
                $checkbox.className = $checkbox.className.replace(/\bform__checkbox_checked\b/g, '');
                $checkboxInput.removeAttribute('checked');
            }else{
                $checkbox.className += ' form__checkbox_checked';
                $checkboxInput.setAttribute('checked', 'checked');
            }                
        }

        if($radio){
            var $radioInput = $radio.querySelector('input[type=radio]'),
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
