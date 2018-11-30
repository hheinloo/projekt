
var lõpp = new Date('12/24/2018 00:00 AM');
            
    var sekund = 1000;
    var minut = sekund * 60;
    var tund = minut * 60;
    var päev = tund * 24;
    var timer;
            
    function aega_jäänud() {
        var praegu = new Date();
        var aeg = lõpp - praegu;

        if (aeg < 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'Jõulud käes!!';
            
            return;
        }

        var päevad = Math.floor(aeg / päev);
        var tunnid = Math.floor((aeg % päev) / tund);
        var minutid = Math.floor((aeg % tund) / minut);
        var sekundid = Math.floor((aeg % minut) / sekund);
            
        document.getElementById('countdown').innerHTML = 'Jõululaupäevani on jäänud ' + päevad + ' päeva ';
        document.getElementById('countdown').innerHTML += tunnid + ' tundi ';
        document.getElementById('countdown').innerHTML += minutid + ' minutit ';
        document.getElementById('countdown').innerHTML += sekundid + ' sekundit';
    }
            
    timer = setInterval(aega_jäänud, 1000);
