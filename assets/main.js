let userLocale = navigator.languages[0];
let lang = '';

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