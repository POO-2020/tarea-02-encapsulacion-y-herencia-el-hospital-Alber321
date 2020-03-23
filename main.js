import Nombre from "./nombre.js"
import Doctor from "./doctor.js"
import Paciente from "./paciente.js"
import Fecha from "./fecha.js"
import Cita from "./cita.js"
import Tiempo from "./tiempo.js"
import Hospital from "./hospital.js"
import PacienteAsegurado from "./paciente_asegurado.js"

class Main{

    constructor(){
        this.NombrePa = new Nombre("Luis","sOLIS","Gonzalez")
        this.NombDoc = new Nombre("Armando", "Contreras", "Hernandez")
        this.tiempo = new Tiempo(9,30,"pm")

        let datosPaciente = {
            nombre: this.NomprePa,
            fechaNacimiento: new Fecha(new Date(2000,9,3)),
            telefono: "312-210-0818"
        }
        let datosPacienteA = {
            nombre: new Nombre("Oscar","Solis","Gonzalez"),
            fechaNacimiento: new Fecha(new Date(1998,1,16)),
            telefono: "314-123-4217",
            numeroPoliza: 2039,
            fechaFinVigencia: new Fecha(new Date(2021,4,29)),
            compañia: "IMMS"
        }
        let datosDoc = {
            nombre: this.NombDoc,
            especialidad: "Odontologo",
            telefono: "312-234-1276",
            cedula: "19382018"
        }
        let datosHospital = {
            nombre: "ELIMSS",
            direccion: "Calle Falsa #777"
        }
        this.pruebaHosp = new Hospital(datosHospital)
        this.paciente = new Paciente(datosPaciente)
        this.pruebaDoc = new Doctor(datosDoc)
        this.pacienteAsegurado = new PacienteAsegurado(datosPacienteA)

        let datosCita = {
            fecha: new Fecha(new Date(2002,5,20)),
            hora: this.tiempo,
            doctor: this.pruebaDoc,
            paciente: this.paciente
        }

        this.pruebacita = new Cita(datosCita)
    }

    PurebaNombre(){
        
        console.log(this.NombrePa.getNombreCompleto())
        console.log(this.NombrePa.getApellidoNombre())
        console.log(this.NombrePa.getIniciales())

    }

    pruebaDoctor(){
        console.log(this.pruebaDoc.getPerfil())
    }

    pruebaPacienteA(){
        console.log(this.paciente.getPerfil())
        console.log(this.pacienteAsegurado.getPerfil())
    }
    pruebaCita(){
        console.log(this.pruebacita.getCita())
    }

    pruebaHospital(){
        console.log(this.pruebaHosp.buscarDoctor(this.NombDoc))
        console.log(this.pruebaHosp.buscarCita(this.pruebacita))
        console.log(this.pruebaHosp.eliminarDoctor(this.pruebaDoc))
        console.log(this.pruebaHosp.eliminarCita(this.pruebacita))

        this.testHosp.registrarDoctor(this.pruebaDoc)
        this.testHosp.registrarCita(this.pruebacita)

        console.log(this.pruebaHosp.buscarDoctor(this.pruebaDoc))
        console.log(this.pruebaHosp.buscarCita(this.pruebacita))
        console.log(this.pruebaHosp.eliminarDoctor(this.pruebaDoc))
        console.log(this.pruebaHosp.eliminarCita(this.pruebacita))

        this.pruebaHosp.listarDoctores()
        this.pruebaHosp.listarCitas()

        console.log(this.pruebaHosp.registrarDoctor(this.pruebaDoc))
        console.log(this.pruebaHosp.registrarCita(this.pruebacita))
        console.log(this.pruebaHosp.registrarDoctor(this.pruebaDoc))
        console.log(this.pruebaHosp.registrarCita(this.pruebacita))

        console.log(this.pruebaHosp.modificarDoctor(this.pruebaDoc, this.pruebaDoc))
        console.log(this.pruebaHosp.modificarCita(this.pruebacita, this.pruebacita))
        this.pruebaHosp.listarDoctores()
        this.pruebaHosp.listarCitas()
    }
}

let test = new Main();
test.PurebaNombre();
test.pruebaDoctor();
test.pruebaPacienteA();
test.testCita();
test.pruebaHospital();