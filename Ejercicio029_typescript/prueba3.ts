class CuentaBancaria {
    public numero: number;
    private _saldo: number;
    public cliente: string | undefined;
    constructor(numero: number, saldo: number, cliente?: string) {
        this.numero = numero;
        this._saldo = saldo;
        this.cliente = cliente;
    }
    get.saldo() {
        return this._saldo;
    }
    set saldo(cantidad) {
        this._saldo = cantidad;
    }
}
let cuentaJC = new CuentaBancaria(100, 2_500, "Juan Carlos");
cuentaJC.saldo -= 10;
//encapsulación: proteger datos - private