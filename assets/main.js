let userLocale = navigator.languages[0];
let lang = '';

var pageUrl = `?lang=${userLocale}`;
window.history.pushState('', '', pageUrl);

if (userLocale == "fr") {
    // French
    jQuery.extend(jQuery.fn.pickadate.defaults, {
        monthsFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthsShort: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
        weekdaysFull: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
        today: 'Aujourd\'hui',
        clear: 'Effacer',
        close: 'Fermer',
        firstDay: 1,
        format: 'dd mmmm yyyy',
        formatSubmit: 'yyyy/mm/dd',
        labelMonthNext: "Mois suivant",
        labelMonthPrev: "Mois précédent",
        labelMonthSelect: "Sélectionner un mois",
        labelYearSelect: "Sélectionner une année"
    });

    jQuery.extend(jQuery.fn.pickatime.defaults, {
        clear: 'Effacer',
        format: 'H:i'
    });

}
if (userLocale == "it") {
    // Italian
    jQuery.extend(jQuery.fn.pickadate.defaults, {
        monthsFull: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
        monthsShort: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
        weekdaysFull: ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'],
        weekdaysShort: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
        today: 'Oggi',
        clear: 'Cancella',
        close: 'Chiudi',
        firstDay: 1,
        format: 'dddd d mmmm yyyy',
        formatSubmit: 'yyyy/mm/dd',
        labelMonthNext: 'Mese successivo',
        labelMonthPrev: 'Mese precedente',
        labelMonthSelect: 'Seleziona un mese',
        labelYearSelect: 'Seleziona un anno'
    });

    jQuery.extend(jQuery.fn.pickatime.defaults, {
        clear: 'Cancella',
        format: 'HH:i',
        formatSubmit: 'HH:i'
    });

}
if (userLocale == "de") {
    // German

    jQuery.extend(jQuery.fn.pickadate.defaults, {
        monthsFull: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        monthsShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
        weekdaysFull: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
        weekdaysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
        today: 'Heute',
        clear: 'Löschen',
        close: 'Schließen',
        firstDay: 1,
        format: 'dddd, dd. mmmm yyyy',
        formatSubmit: 'yyyy/mm/dd'
    });

    jQuery.extend(jQuery.fn.pickatime.defaults, {
        clear: 'Löschen',
        format: 'H:i'
    });

}

$('#termin-time').pickatime({
    format: 'H:i',
    interval: 30,
    min: [8, 0],
    max: [21, 0],
});

$('#termin-datum').pickadate({
    formatSubmit: 'yyyy/mm/dd'
})

//Boxes
let offenBox = document.querySelector(".termindate");
let mjvBox = document.querySelector(".mjv-box");

//checkboxes
let nichtzuhauseCheckBox = document.querySelector("#nichtzuhause");
let stattgefundenCheckBox = document.querySelector("#stattgefunden");
let positivCheckBox = document.querySelector("#positiv");
let abgesagtCheckBox = document.querySelector("#abgesagt");
let wolltekeinterminCheckBox = document.querySelector("#wolltekeintermin");
let behandlungCheckBox = document.querySelector("#behandlung");
let mjvCheckBox = document.querySelector("#mjv");
let offenCheckBox = document.querySelector("#offen");
let negativCheckBox = document.querySelector("#negativ");

//checkboxes groups
const checkboxesGroup = document.querySelectorAll(".checkboxes-group .input-group");
const ratingsGroup = document.querySelectorAll(".ratings-group .input-group");

offenCheckBox.addEventListener("click", () => {
    offenBox.classList.toggle("active");

})
mjvCheckBox.addEventListener("click", () => {
    mjvBox.classList.toggle("active");
})

ratingsGroup.forEach((rating) => {
    rating.addEventListener("click", () => {
        rating.children[1].focus();
    })
})
function disableCheckbox(targetCheckbox) {
    let checkboxesState = false;
    targetCheckbox.addEventListener("change", () => {
        if (!checkboxesState) {
            checkboxesGroup.forEach(checkbox => {
                if (checkbox.children[0] !== targetCheckbox) {
                    checkbox.classList.add("checkbox--disabled");
                    checkbox.children[0].disabled = true;
                }
            })
            checkboxesState = true;
        }
        else {
            checkboxesGroup.forEach(checkbox => {
                checkbox.classList.remove("checkbox--disabled");
                checkbox.children[0].disabled = false;
            })
            checkboxesState = false;
        }
    })
}

function checkDuo(mainCheckbox, targetedCheckbox) {
    let checkboxesState = false;
    mainCheckbox.addEventListener("change", () => {
        if (!checkboxesState) {
            checkboxesGroup.forEach(checkbox => {
                if (checkbox.children[0] !== mainCheckbox) {
                    checkbox.classList.add("checkbox--disabled");
                    checkbox.children[0].disabled = true;
                    targetedCheckbox.checked = true;
                }
            })
            checkboxesState = true;
        }
        else {
            checkboxesGroup.forEach(checkbox => {
                checkbox.classList.remove("checkbox--disabled");
                checkbox.children[0].disabled = false;

            })
            targetedCheckbox.checked = false;
            checkboxesState = false;
        }
    })
}


disableCheckbox(nichtzuhauseCheckBox);
disableCheckbox(positivCheckBox);
disableCheckbox(abgesagt);
disableCheckbox(wolltekeinterminCheckBox);
disableCheckbox(behandlung);
disableCheckbox(mjvCheckBox);
disableCheckbox(negativCheckBox);


checkDuo(offenCheckBox, stattgefundenCheckBox);
checkDuo(positivCheckBox, stattgefundenCheckBox);
checkDuo(behandlungCheckBox, stattgefundenCheckBox);
checkDuo(mjvCheckBox, stattgefundenCheckBox);
checkDuo(negativCheckBox, stattgefundenCheckBox);