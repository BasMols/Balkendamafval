"use strict";

document.addEventListener("DOMContentLoaded", function (event) {

    var target = document.getElementById('opening');
    target.innerHTML = "<img src='ajax-loader.gif'>";

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.addEventListener("load", function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            target.innerHTML = xmlhttp.responseText;
        } else if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
            console.log(new Error("something went wrong"));
        }
    });
    url = "http://www.dennisvanriet.nl/gemeentebalkendam/index.php?data=openingstijden";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    input = document.getElementById('input');

    document.getElementById("myBtn").addEventListener("click", function () {
        var target = document.getElementById('target');
        target.innerHTML = "<img src='img/ajax-loader.gif'>";

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.addEventListener("load", function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if (xmlhttp.responseText == '{"verwerk":}') {
                    target.innerHTML = 'Not found';
                } else {
                    target.innerHTML = xmlhttp.responseText;
                }
            } else if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
                console.log(new Error("something went wrong"));
            }
        });

        url = "http://www.dennisvanriet.nl/gemeentebalkendam/index.php?data=afvalkalender&postcode=" + input.value;
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    });
});
//# sourceMappingURL=scripts.js.map
