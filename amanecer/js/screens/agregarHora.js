// let getEmpleados = localStorage.getItem('empleados');

function showRegistrarHoras(){
    changeDisplay("#containerRegistroHoras", "flex");
    changeDisplay("#containerAgregarEmpleado", "none");
    changeDisplay("#inicio", "none");
    changeDisplay("#containerTabla", "none");
    document.querySelector("#btnRegistrarHorasEmpleado").addEventListener("click", onRegistrarHoras);
    listarEmpleados();
}

function onRegistrarHoras(e){
    e.preventDefault();

    let empleado = document.querySelector("#selectEmpleado").value;
    let fecha = document.querySelector("#inputDia").value;
    let horaEntrada = Number(document.querySelector("#inputHoraEntrada").value);
    let horaSalida = Number(document.querySelector("#inputHoraSalida").value);  
    let msg = document.querySelector("#msg");
    
    try{
        if(empleado == ""){
            throw new Error("Selecciona un empleado");
        }
        else if(fecha == "1111-01-01"){
            throw new Error("Ingresa una fecha");
        }
        else if(horaEntrada == 0){
            throw new Error("Ingresa hora de entrada");
        }
        else if(horaSalida == 0){
            throw new Error("Ingresa hora de salida");
        }
        let empleadoBuscado = GetEmpleadoByCi(empleado);
        let nuevoRegistro = new HoraMes(fecha.substring(5,7), empleado);
        nuevoRegistro.cantidadHorasMes += horaSalida - horaEntrada;
        empleadoBuscado.horasMes.push(nuevoRegistro);
        msg.innerHTML = "Día registrado con éxito";

        //limpio campo
    } catch(Error){
        alert(Error.message);
    }
}

function listarEmpleados(){
    let selectEmpleados = document.querySelector("#selectEmpleado");
    selectEmpleados.innerHTML = `<option value="">Seleccionar Empleado</option>`;
    arrayEmp.forEach(function (empleado){
        selectEmpleados.innerHTML += `<option value="${empleado.ci}">${empleado.nombre} ${empleado.apellido}</option>`
    })
}