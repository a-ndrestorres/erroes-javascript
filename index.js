const logger = require("./logger")

const miFuncion = val =>{
    if(typeof val === "string"){
        return val;
    }
    throw new Error("texto ingresado es incorrecto");
}

const ingresar = 12;

try {
    const text = miFuncion(ingresar)
    console.log("Esta ejecutandose correctamente")
    console.log(`ha ingresado: ${text}`)
} catch(e) {   
    logger.error(`!! ${e}¡¡ usted ingreso un: ${typeof ingresar} `)
}