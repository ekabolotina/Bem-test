var abilitiesList = [
    'БЭМ/OOCSS',
    'Pug (Jade)',
    'Stylus/LESS/SASS',
    'Работаю с SVG',
    'Верстаю семантично',
    'Accessibility (A11Y)',
    'ES2015/ES2016',
    'Gulp/GRUNT',
    'Webpack',
    'Дружу с WebGL',
    'jQuery',
    'Знаю/изучаю Angular',
    'Знаю/изучаю React',
    'Знаю/изучаю Node.js',
    'Использую Git',
    'С глазомером все ок',
    'Я ленивый(-ая)',
    'У меня хороший английский'
];

document.addEventListener('DOMContentLoaded', function(e){
    var _abilitiesList = abilitiesList.map(function(e, i){ return { index: i, value: e.toLowerCase() }; }).sort(function(a, b){
        return +(a.value > b.value) || +(a.value === b.value) - 1;
    });
    abilitiesList_sorted = _abilitiesList.map(function(e){ return abilitiesList[e.index]; })
    
    var $abilitiesForms = document.querySelectorAll('.abilities-form'),
        abilitiesFormColsCount = 3,
        abilitiesFormColsItemsCount = Math.max(7, Math.ceil(abilitiesList_sorted.length / abilitiesFormColsCount));

    for(var i = 0; i < $abilitiesForms.length; i++){
        var $abilitiesForm = $abilitiesForms[i],
            abilitiesListIndex = 0;
        
        $abilitiesForm.innerHTML = '';
        for(var j = 0; j < abilitiesFormColsCount; j++){
            var $col = document.createElement('div');
            $col.className = 'container__col container__col_size_4';

            for(k = abilitiesListIndex; k < abilitiesListIndex+abilitiesFormColsItemsCount && k < abilitiesList_sorted.length; k++){
                var ability = abilitiesList_sorted[k];
                    $label = document.createElement('label');
                $label.className = 'form__label abilities-form__label';
                $label.innerHTML = '<span class="form__checkbox"><input type="checkbox" name="abilities" value="'+ ability +'"></span>'+ ability;
                $col.appendChild($label);
            }

            abilitiesListIndex += abilitiesFormColsItemsCount;
            $abilitiesForm.appendChild($col);
        }
    }
});