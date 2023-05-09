
let nombreCliente = "";
let emailCliente = "";

const codigoProducto1 = "315BFV-GN";
const detalleProducto1 = "CALEFON 14 LITROS BLANCO C/SENSOR GN";
let precioProducto1 = 75899;

const codigoProducto2 = "VISU420";
const detalleProducto2 = "EXHIBIDORA VERTICAL 420LTS LUZ LED DOBLE VIDRIO";
let precioProducto2 = 114587;

const codigoProducto3 = "1006254";
const detalleProducto3 = "BIC FLAMINGO 29 ALUMINIO 21V SHIMA NEG/CEL TALLE S";
let precioProducto3 = 128299;

const codigoProducto4 = "BCAT21VW";
const detalleProducto4 = "BALANZA DE COCINA DIGITAL VIDRIO TEMPLADO 3KG";
let precioProducto4 = 3899;

const codigoProducto5 = "CA8133N";
const detalleProducto5 = "CAFETERA BLANCA 1,5LTS FILTRO DESMONTABLE";
let precioProducto5 = 9999;


let opcionProducto = "";
let codigoProductoSeleccionado = "";
let detalleProductoSeleccionado = "";
let precioProductoSeleccionado = "";

let opcionMedioDePago = "";
let medioDePagoSeleccionado = "";
let recargo; 

const efectivo ="efectivo";
const debito = "debito";
const credito = "credito";
let opcionCuotas = "";

const rec3cuotas = 1.21;
const recH3cuotas = 1.13;
const rec6cuotas = 1.39;
const recH6cuotas = 1.26;
const rec12cuotas = 1.83;
const recH12cuotas = 1.57;

function IngresoDatosCliente() {
    nombreCliente = prompt("Ingrese su nombre")
    while (nombreCliente == "")  {
        nombreCliente = prompt("Debe ingresar su nombre")
    }
    emailCliente = prompt("Ingrese su correo")
    while (emailCliente == ""){
        emailCliente = prompt("Debe ingresar su correo")
    }
}

function ValidarSeleccionProducto() {
    switch (opcionProducto) {
        case "1":
            codigoProductoSeleccionado = codigoProducto1;
            detalleProductoSeleccionado = detalleProducto1;
            precioProductoSeleccionado = precioProducto1;
            break;
        case "2":
            codigoProductoSeleccionado = codigoProducto2
            detalleProductoSeleccionado = detalleProducto2
            precioProductoSeleccionado = precioProducto2
            break;
        case "3":
            codigoProductoSeleccionado = codigoProducto3
            detalleProductoSeleccionado = detalleProducto3
            precioProductoSeleccionado = precioProducto3
            break;
        case "4":
            codigoProductoSeleccionado = codigoProducto4
            detalleProductoSeleccionado = detalleProducto4
            precioProductoSeleccionado = precioProducto4
            break;    
        case "5":
            codigoProductoSeleccionado = codigoProducto5
            detalleProductoSeleccionado = detalleProducto5
            precioProductoSeleccionado = precioProducto5
            break;    
        default:
            console.log("Opción incorrecta. Seleccione una opción correcta")    
            break;
    }    
}

function ValidarSeleccionMedioDePago() {
    switch (opcionMedioDePago) {
        case "EFE":
            medioDePagoSeleccionado = efectivo
            break;
        case "DEB":
            medioDePagoSeleccionado = debito
            break;
        case "CRE":
            medioDePagoSeleccionado = credito
            break;
        default:
            console.log("Opción incorrecta. Seleccione un medio de pago correcto")    
            break;
    }    
}

function ValidarSeleccionCuotas() {
    switch (opcionCuotas) {
        case "1":
            medioDePagoSeleccionado = "TARJETA CREDITO 1 CUOTA (0%)"
            break;
        case "3":
            medioDePagoSeleccionado = "TARJETA CREDITO 3 CUOTAS (21%)"
            recargo = rec3cuotas
            break;    
        case "H3":
            medioDePagoSeleccionado = "TARJETA CREDITO AHORA 3 CUOTAS (13%)"
            recargo = recH3cuotas
            break;
        case "6":
            medioDePagoSeleccionado = "TARJETA CREDITO 6 CUOTAS (39%)"
            recargo = rec6cuotas
            break;
        case "H6":
            medioDePagoSeleccionado = "TARJETA CREDITO AHORA 6 CUOTAS (26%)"
            recargo = recH6cuotas
            break;    
        case "12":
            medioDePagoSeleccionado = "TARJETA CREDITO 12 CUOTAS (83%)"
            recargo = rec12cuotas
            break;
        case "H12":
            medioDePagoSeleccionado = "TARJETA CREDITO AHORA 12 CUOTAS (57%)"
            recargo = recH12cuotas
            break;
        default:
            console.log("Opción incorrecta. Seleccione una opción correcta")    
            break;
    }    
}

IngresoDatosCliente()

opcionProducto = prompt(`
SELECCIONE UN PRODUCTO:

1: (${codigoProducto1}) -  ${detalleProducto1}
2: (${codigoProducto2}) -  ${detalleProducto2}
3: (${codigoProducto3}) -  ${detalleProducto3}
4: (${codigoProducto4}) -  ${detalleProducto4}
5: (${codigoProducto5}) -  ${detalleProducto5}
`)

while (opcionProducto > 5) {
    ValidarSeleccionProducto()    
    opcionProducto = prompt(`
    SELECCIONE UN PRODUCTO CORRECTO:

    1: (${codigoProducto1}) -  ${detalleProducto1}
    2: (${codigoProducto2}) -  ${detalleProducto2}
    3: (${codigoProducto3}) -  ${detalleProducto3}
    4: (${codigoProducto4}) -  ${detalleProducto4}
    5: (${codigoProducto5}) -  ${detalleProducto5}
    `)
}

ValidarSeleccionProducto()

opcionMedioDePago = prompt(`
SELECCIONE MEDIO DE PAGO:

EFE: ${efectivo}
DEB: ${debito}
CRE: ${credito} a partir de 3 cuotas tiene interes
`)

while (opcionMedioDePago != "EFE" && opcionMedioDePago != "DEB" && opcionMedioDePago != "CRE") {
    ValidarSeleccionMedioDePago()    
    opcionMedioDePago = prompt(`
    SELECCIONE MEDIO DE PAGO CORRECTO:

    EFE: ${efectivo}
    DEB: ${debito}
    CRE: ${credito} (a partir de 3 cuotas tiene interes)
    `)
}

ValidarSeleccionMedioDePago()

if (opcionMedioDePago != "EFE" && opcionMedioDePago != "DEB") {
    opcionCuotas = prompt(`
    SELECCIONE CANTIDAD DE CUOTAS:
    
    1:  TARJETA CREDITO 1 CUOTA (0%)
    3:  TARJETA CREDITO 3 CUOTAS (21%)
    H3: TARJETA CREDITO AHORA 3 CUOTAS (13%)
    6:  TARJETA CREDITO 6 CUOTAS (39%)
    H6: TARJETA CREDITO AHORA 6 CUOTAS (26%)
    12: TARJETA CREDITO 12 CUOTAS (83%)
    H12:TARJETA CREDITO AHORA 12 CUOTAS (57%)
    `)
    
    while (opcionCuotas != "1" && opcionCuotas != "3" && opcionCuotas != "H3" && opcionCuotas != "6" && opcionCuotas != "H6" && opcionCuotas != "12" && opcionCuotas != "H12") {
        ValidarSeleccionCuotas()    
        opcionCuotas = prompt(`
        SELECCIONE CANTIDAD DE CUOTAS CORRECTA:
    
        1:  TARJETA CREDITO 1 CUOTA (0%)
        3:  TARJETA CREDITO 3 CUOTAS (21%)
        H3: TARJETA CREDITO AHORA 3 CUOTAS (13%)
        6:  TARJETA CREDITO 6 CUOTAS (39%)
        H6: TARJETA CREDITO AHORA 6 CUOTAS (26%)
        12: TARJETA CREDITO 12 CUOTAS (83%)
        H12:TARJETA CREDITO AHORA 12 CUOTAS (57%)
        `)  
    }
    ValidarSeleccionCuotas()
} 

if ((opcionMedioDePago == "EFE") || (opcionMedioDePago == "DEB") || (opcionMedioDePago == "CRE" && (opcionCuotas == "1"))) {
    alert(`Sr./Sra. ${nombreCliente} realizó la compra 
    de un (${codigoProductoSeleccionado}) ${detalleProductoSeleccionado}
    en/con ${medioDePagoSeleccionado} por $ ${precioProductoSeleccionado}
    `)
} else {
    precioProductoSeleccionado = precioProductoSeleccionado * recargo
    alert(`Sr./Sra. ${nombreCliente} realizó la compra 
    de un (${codigoProductoSeleccionado}) ${detalleProductoSeleccionado}
    en/con ${medioDePagoSeleccionado} por $ ${precioProductoSeleccionado}
    `)
}

