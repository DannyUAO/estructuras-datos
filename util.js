let miEquipo = [
    {nombre:'Luis Diaz', nroCamiseta:7, goles:25, estatura:1.78},
    {nombre:'Jhon Arias', nroCamiseta:8, goles:5, estatura:1.65},
    {nombre:'Davinson Sanchez', nroCamiseta:3, goles:2, estatura:1.84},
    {nombre:'Richard Rios', nroCamiseta:5, goles:7, estatura:1.79},
    {nombre:'Luis Suarezs', nroCamiseta:9, goles:16, estatura:1.81}
]

function evaluarDesempeño(dato) {
    let mensaje
    if (dato.goles > 10) {
        mensaje = "Superlativo"
    }else{
        if (dato.goles > 5 && dato.nroCamiseta < 12) {
            mensaje = "Bueno"
        } 
        else {
            mensaje = "Promedio"
        }
    }
    

    return mensaje;
}