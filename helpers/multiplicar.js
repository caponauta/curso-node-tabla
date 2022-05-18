const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        
        let salida = '';

        for (let index = 1; index <= hasta; index++) {
            salida += ` ${base} x ${index} = ${base * index}\n`;
        }

        if (listar) {

            console.log('=======================');
            console.log(`     Tabla del: ${base}      `);
            console.log('=======================');

            console.log(colors.rainbow(salida));
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt creado`;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}