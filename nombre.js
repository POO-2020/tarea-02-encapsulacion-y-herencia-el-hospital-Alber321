export default class Nombre {
    constructor(nombre, paterno, materno){
        this._nombre = nombre
        this._paterno = paterno
        this._materno = materno
    }
    getNombreCompleto(){
            return (`${this._nombre} ${this._paterno} ${this._materno}`)
        }
    getApellidoNombre(){
        return (`${this._paterno}, ${this._materno}, ${this._nombre}`)
    }
    getIniciales(){
        return (`${this._nombre.charAt(0)}, ${this._paterno.charAt(0)}, ${this._materno.charAt(0)}`)
    }
}