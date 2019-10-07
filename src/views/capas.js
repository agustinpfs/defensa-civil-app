var capas = {
    "gas":gas,
    "escuelas": escuelas
}

var mapa = {
    "mymap": mymap
}

L.control.layers(capas, mapa).addTo(map);
