class ImpuestoCliente {
  constructor() {
    this._montoBrutoAnual = 0;
    this._deducciones = 0;
    this._impuesto = 0;
  }

  // Setter para establecer el monto bruto anual
  set montoBrutoAnual(monto) {
    this._montoBrutoAnual = monto;
    this.calcularImpuesto();
  }

  // Setter para establecer las deducciones
  set deducciones(deducciones) {
    this._deducciones = deducciones;
    this.calcularImpuesto();
  }

  // Getter para obtener el impuesto
  get impuesto() {
    return this._impuesto;
  }

  // Método para calcular el impuesto
  calcularImpuesto() {
    this._impuesto = (this._montoBrutoAnual - this._deducciones) * 0.21;
  }
}

// Ejemplo de uso:
const cliente = new ImpuestoCliente();
cliente.montoBrutoAnual = 150000; // Establecer monto bruto anual
cliente.deducciones = 10000; // Establecer deducciones