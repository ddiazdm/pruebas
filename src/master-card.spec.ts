import { eliminaUltimoDigito, obtenerUltimoDigito, multiplicaPorDosSaltando, sumaDecenasUnidades } from './master-card';


describe('eliminaUltimoDigito', () => {

    it('debería lanzar un error si el parámetro es undefined', () => {
        // Arrange
        const numeroTarjeta: any = undefined;
        // Act
        const resultado = () => eliminaUltimoDigito(numeroTarjeta);
        // Assert
        expect(resultado).toThrowError("El parámetro es undefined");
    });

    it('debería lanzar un error si el parámetro es null', () => {
        // Arrange
        const numeroTarjeta: any = null;
        // Act
        const resultado = () => eliminaUltimoDigito(numeroTarjeta);
        // Assert
        expect(resultado).toThrowError("El parámetro es null");
    });

    it('debería lanzar un error si el parámetro está vacío', () => {
        // Arrange
        const numeroTarjeta: any = "";
        // Act
        const resultado = () => eliminaUltimoDigito(numeroTarjeta);
        // Assert
        expect(resultado).toThrowError("El parámetro está vacío");
    });


});


describe('eliminaUltimoDigito', () => {
    it('debería devolver el string sin el último número', () => {
        // Arrange
        const numeroTarjeta = "123456";
        // Act
        const resultado = eliminaUltimoDigito(numeroTarjeta);
        // Assert
        expect(resultado).toBe("12345");
    });
});

describe('obtenerUltimoDigito', () => {
    it('debería devolver el string sin el último número', () => {
        // Arrange
        const numeroTarjeta = "123456";
        // Act
        const resultado = obtenerUltimoDigito(numeroTarjeta);
        // Assert
        expect(resultado).toBe(6);
    });

    it('debería lanzar un error si el parámetro es undefined', () => {
        // Arrange
        const numeroTarjeta: any = undefined;
        // Act
        const resultado = () => obtenerUltimoDigito(numeroTarjeta);
        // Assert
        expect(resultado).toThrowError("El parámetro es undefined");
    });

    it('debería lanzar un error si el parámetro es null', () => {
        // Arrange
        const numeroTarjeta: any = null;
        // Act
        const resultado = () => obtenerUltimoDigito(numeroTarjeta);
        // Assert
        expect(resultado).toThrowError("El parámetro es null");
    });

    it('debería lanzar un error si el parámetro está vacío', () => {
        // Arrange
        const numeroTarjeta: any = "";
        // Act
        const resultado = () => obtenerUltimoDigito(numeroTarjeta);
        // Assert
        expect(resultado).toThrowError("El parámetro está vacío");
    });
});


describe('multiplicaPorDosSaltando', () => {

    it('debería lanzar un error si el parámetro es undefined', () => {
        // Arrange
        const numeroTarjeta: any = undefined;
        // Act
        const resultado = () => multiplicaPorDosSaltando(numeroTarjeta);
        // Assert
        expect(resultado).toThrowError("El parámetro es undefined");
    });

    it('debería lanzar un error si el parámetro es null', () => {
        // Arrange
        const numeroTarjeta: any = null;
        // Act
        const resultado = () => multiplicaPorDosSaltando(numeroTarjeta);
        // Assert
        expect(resultado).toThrowError("El parámetro es null");
    });

    it('debería lanzar un error si el parámetro está vacío', () => {
        // Arrange
        const numeroTarjeta: any = "";
        // Act
        const resultado = () => multiplicaPorDosSaltando(numeroTarjeta);
        // Assert
        expect(resultado).toThrowError("El parámetro está vacío");
    });

    it('deberia devolver los numeor pero saltando uno', () => {
        //Arrang
        const numeroTarjeta: any = "1234567"
        //Act
        const resultado = multiplicaPorDosSaltando(numeroTarjeta);
        //Assert
        expect(resultado).toEqual([2,2,6,4,10,6,14])
    })


});

describe('sumaDecenasUnidades', () => {
    //Arrange
    const numeros = [2, 2, 6, 4, 10, 6, 14]
    //Act
    const resultado = sumaDecenasUnidades(numeros)
    //Assert
    expect(resultado).toBe([2,2,6,4,1,6,5])
});