"use strict";

document.addEventListener("DOMContentLoaded", function (event) {

    var target = document.getElementById('opening');
    target.innerHTML = "<img src='img/ajax-loader.gif'>";
    var p = ajax("http://www.dennisvanriet.nl/gemeentebalkendam/index.php?data=openingstijden");
    p.then(function (opening) {
        var html = 'Maandag: ' + opening.openingstijden.ma + '<br>';
        html += 'Dinsdag: ' + opening.openingstijden.di + '<br>';
        html += 'Woensdag: ' + opening.openingstijden.wo + '<br>';
        html += 'Donderdag: ' + opening.openingstijden.do + '<br>';
        html += 'Vrijdag: ' + opening.openingstijden.vr + '<br>';
        html += 'Zaterdag: ' + opening.openingstijden.za + '<br>';
        html += 'Zondag: ' + opening.openingstijden.zo + '<br>';
        target.innerHTML = html;
    }, function (err) {
        target.innerHTML = err;
    });

    //FUNCTIE 2
    document.getElementById("myBtn").addEventListener("click", function () {
        var input = document.getElementById('input');
        // const str = input.value;
        // const res = str.toUpperCase();
        var target2 = document.getElementById('target');

        target2.innerHTML = "<img src='img/ajax-loader.gif'>";
        var v = ajax("http://www.dennisvanriet.nl/gemeentebalkendam/index.php?data=afvalkalender&postcode=" + input.value.toUpperCase());

        v.then(function (zip) {
            target2.innerHTML = zip.verwerk;
        }, function (err) {
            target2.innerHTML = err;
        });
    });
});
//# sourceMappingURL=scripts.js.map
