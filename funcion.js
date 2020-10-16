exports.calcular = (capital, tasaInteres, plazo) => {
    
    let mes = 0;
    let interes = 0;
    let tasaInteresDecimal = (tasaInteres / 100) / plazo;
    const datosTablaInteres = [];
    let saldoFinal = 0;
  
    // Transformar los años en meses
    plazo = Math.round(plazo * 12);
    saldoFinal = Number(capital);

    for (let index = 1; index <= plazo; index++) {

        interes = Number(saldoFinal) * Number(tasaInteresDecimal);
        interes = interes.toFixed(2);
        saldoFinal += Number(interes);
        mes++;
        datosTablaInteres.push({
            mes,
            capital,
            interes,
            saldoFinal
        });
        
    }
  
    return datosTablaInteres;
  };