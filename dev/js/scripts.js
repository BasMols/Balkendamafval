document.addEventListener("DOMContentLoaded", function (event) {

    const target = document.getElementById('opening');
    target.innerHTML = "<img src='img/ajax-loader.gif'>";
    const p = ajax("http://www.dennisvanriet.nl/gemeentebalkendam/index.php?data=openingstijden");
    p.then((opening)=>{
        let html = 'Maandag: ' + opening.openingstijden.ma + '<br>';
        html += 'Dinsdag: ' + opening.openingstijden.di + '<br>';
        html += 'Woensdag: ' + opening.openingstijden.wo + '<br>';
        html += 'Donderdag: ' + opening.openingstijden.do + '<br>';
        html += 'Vrijdag: ' + opening.openingstijden.vr + '<br>';
        html += 'Zaterdag: ' + opening.openingstijden.za + '<br>';
        html += 'Zondag: ' + opening.openingstijden.zo + '<br>';
        target.innerHTML = html;
    }, (err)=>{
        target.innerHTML = err;
    });

    //FUNCTIE 2
    document.getElementById("myBtn").addEventListener("click",function() {
        const input = document.getElementById('input');

        const target2 = document.getElementById('target');

        target2.innerHTML = "<img src='img/ajax-loader.gif'>";
        const v = ajax("http://www.dennisvanriet.nl/gemeentebalkendam/index.php?data=afvalkalender&postcode=" + input.value.toUpperCase());

        v.then((zip) => {
            target2.innerHTML = zip.verwerk;
        }, (err) => {
            target2.innerHTML = err;
        });
    })


});