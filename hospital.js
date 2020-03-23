export default class Hospital{

    constructor({nombre, direccion})
    {
        this._nombre = nombre
        this._direccion = direccion
        this._doctores = new Array()
        this._citas = new Array()
    }

    registrarDoctor(doctor)
    {
        let found = this.buscarDoctor(doctor)
      
        if(found == null){this._doctores.push(doctor);
            return true}
        else
        {return false}
        
    }


    buscarDoctor(doctor)
    {
            let buscar = this._doctores.find(doc => doc._esIgualA(doctor))
            if(buscar == undefined){return null}
            else {return buscar}
    }
    eliminarDoctor(doctor){
        let found =  this.buscarDoctor(doctor)
        if(found == null) return false
        else {
        let i = this._doctores.indexOf(found)
        this._doctores.splice(i,1)
        return true
        }
    }
    modificarDoctor(doctor, nuevoDoctor){
        let found =  this.buscarDoctor(doctor)
        if(found == null) return false
        else {
        let i = this._doctores.indexOf(found)
        this._doctores[i] = nuevoDoctor
        return true
        }
    }


    listarDoctores()
    {
        console.log("~ D O C T O R E S ~")
        this._doctores.forEach( (doct, i) => {
            console.log(`(${i+1}) ${doct.getPerfil()}`)
        })
    }
    registrarCita(cita)
    {
        let found = this.buscarCita(cita)
      
        if(found == null){this._citas.push(cita);
            return true}
        else
        {return false}
        
    }
    buscarCita(cita)
    {
            let buscar = this._citas.find(cit => cit._esIgualA(cita))
            if(buscar == undefined){return null}
            else {return buscar}
        
    }
    eliminarCita(cita){
        let found =  this.buscarCita(cita)
        if(found == null) return false
        else {
        let i = this._citas.indexOf(found)
        this._citas.splice(i,1)
        return true
        }
    }
    modificarCita(cita, nuevaCita){
        let found =  this.buscarCita(cita)
        if(found == null) return false
        else {
        let i = this._citas.indexOf(found)
        this._citas[i] = nuevaCita
        return true
        }
    }
    listarCitas()
    {
        console.log("~ C I T A S ~")
        this._citas.forEach( (cita, i) => {
            console.log(`(${i+1}) ${cita.getCita()}`)
        })
    }
}