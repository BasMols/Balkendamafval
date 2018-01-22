const ajax = function (url){

    return new Promise((resolve, reject)=>{
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.addEventListener("load", function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                if (xmlhttp.responseText === '{}') {
                    reject(new Error("Empty object"));
                }
                else {
                    resolve(JSON.parse(xmlhttp.responseText));
                }
            } else if (xmlhttp.readyState === 4 && xmlhttp.status !== 200) {
                reject(new Error("something went wrong"));
            }

        });

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    });

};
