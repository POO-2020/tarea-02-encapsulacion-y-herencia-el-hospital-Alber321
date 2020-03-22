export default class Fecha {
    constructor(fecha)
    {
        this._fecha = fecha
        this._fechaActual = new Date()
        this._años = (this._fechaActual.getFullYear() - this._fecha.getFullYear())
    }
 
    getAños(){return this._años}
    getMeses(){return (this._años*12)}
    getSemanas(){return (this._años*12*4)}
    getDias(){return (this._años*12*4*7)}
    getFecha(){
        return (`${this._fecha.getDate()}/${this._fecha.getMonth()}/${this._fecha.getFullYear()}`)
       }
    getDiaFecha(){
       let dia = this._fecha.getDay()
       let semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
       return semana[dia]
    }
 }