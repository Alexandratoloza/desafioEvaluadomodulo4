class Impuesto {
    constructor(montoBrutoAnual, Deducciones, ){
        this._montoBrutoAnual = montoBrutoAnual;
        this._Deducciones = Deducciones;
        this._Impuesto = this.Impuestototal();
    }
    
    Impuestototal(){
        return (this._montoBrutoAnual- this._Deducciones) * 0.21;
        
    }
    
    get Impuesto(){
        return this._Impuesto;
    }

   setDatos(montoBrutoAnual, Deducciones) {

    this._montoBrutoAnual = montoBrutoAnual;
    this._Deducciones = Deducciones;
    this._Impuesto = this.Impuestototal ();
   }
}

const montoBrutoAnual = 150000;
const Deducciones = 10000;
const Impuestototal = new Impuesto(montoBrutoAnual, Deducciones);
console.log(`El impuesto total a pagar es: ${Impuestototal.Impuesto}`);


const nuevoMontoBruto = 60000;
const nuevasDeducciones = 15000;
Impuestototal.setDatos(nuevoMontoBruto, nuevasDeducciones);



// Obtener el elemento del DOM donde se mostrará el impuesto
const impuestoTotalElement = document.getElementById('impuestoTotal');

// Actualizar el contenido del elemento con el valor del impuesto
impuestoTotalElement.textContent = Impuestototal.Impuesto;