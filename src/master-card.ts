

export const eliminaUltimoDigito = (numeroTarjeta: string): string => {

    if (numeroTarjeta === undefined) {
        throw new Error("El parámetro es undefined");
    }

    if (numeroTarjeta === null) {
        throw new Error("El parámetro es null");
    }

    if (numeroTarjeta === "") {
        throw new Error("El parámetro está vacío");
    }


    // return numeroTarjeta.slice(0, -1);
    let numeroTarjet = "";
    for (let i = 0; i < numeroTarjeta.length - 1; i++) {
        numeroTarjet += numeroTarjeta[i];
    }
    return numeroTarjet
}

export const obtenerUltimoDigito = (numeroTarjeta: string):number => {
   
    if (numeroTarjeta === undefined) {
        throw new Error("El parámetro es undefined");
    }

    if (numeroTarjeta === null) {
        throw new Error("El parámetro es null");
    }

    if (numeroTarjeta === "") {
        throw new Error("El parámetro está vacío");
    }
    return Number(numeroTarjeta.slice(-1))
}


export const multiplicaPorDosSaltando = (numeroTarjeta: string): number[] =>{

    if (numeroTarjeta === undefined) {
        throw new Error("El parámetro es undefined");
    }

    if (numeroTarjeta === null) {
        throw new Error("El parámetro es null");
    }

    if (numeroTarjeta === "") {
        throw new Error("El parámetro está vacío");
    }
    let numerosConSalto: number[] = []

    let porDos = true;
    for(let i = numeroTarjeta.length -1; i >= 0 ; i --){ 
        let nuevoNumero = porDos ? parseInt(numeroTarjeta[i]) * 2 : parseInt(numeroTarjeta[i])
        numerosConSalto = [ nuevoNumero, ...numerosConSalto];
        porDos = !porDos
    }
    return numerosConSalto
}

export const sumaDecenasUnidades = (numeros: number[]): number => {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++){
        if(numeros[i] > 9){
            for (let j = 0; numeros[i] > 0; j++){
                suma += numeros[j] 
            }
        }
    }
    return suma
};

