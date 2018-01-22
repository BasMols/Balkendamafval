"use strict";

document.addEventListener("DOMContentLoaded", function (event) {

    function ajax(url) {

        return new Promise(function (resolve, reject) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.addEventListener("load", function () {
                if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                    if (xmlhttp.responseText === '{}') {
                        reject(new Error("Empty object"));
                    } else {
                        resolve(JSON.parse(xmlhttp.responseText));
                    }
                } else if (xmlhttp.readyState === 4 && xmlhttp.status !== 200) {
                    reject(new Error("something went wrong"));
                }
            });

            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        });
    }

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
        var target2 = document.getElementById('target');
        target2.innerHTML = "<img src='img/ajax-loader.gif'>";
        var v = ajax("http://www.dennisvanriet.nl/gemeentebalkendam/index.php?data=afvalkalender&postcode=" + input.value);
        v.then(function (zip) {
            target2.innerHTML = zip.verwerk;
        }, function (err) {
            target2.innerHTML = err;
        });
    });
});
//# sourceMappingURL=scripts.js.map
