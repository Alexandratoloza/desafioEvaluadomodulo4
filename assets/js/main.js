
import { ImpuestoCliente } from './cliente.js';
import { Impuesto } from './impuesto.js';

// Instanciar un cliente
const cliente = new ImpuestoCliente ("Juan", 150000, 10000);

// Instanciar un impuesto para el cliente
const impuesto = new Impuesto(cliente._montoBrutoAnual, cliente._deducciones);

console.log(`El impuesto total a pagar para ${cliente.nombre} es: ${impuesto.impuesto}`);