let arrayEmp = JSON.parse(localStorage.getItem('empleados')) || [];

function showAgregarEmpleados(){
    changeDisplay("#containerAgregarEmpleado", "flex");
    changeDisplay("#inicio", "none");
    changeDisplay("#containerTabla", "none");
    changeDisplay("#containerRegistroHoras", "none");
    document.querySelector("#btnAgregarEmpleado").addEventListener("click", onRegistrarEmpleado);
}

function onRegistrarEmpleado(e){
    e.preventDefault();

    let nombre = document.querySelector("#inputNombre").value;
    let apellido = document.querySelector("#inputApellido").value;
    let fechaIngreso = document.querySelector("#inputFecha").value;
    let ci = document.querySelector("#inputCi").value;

    try{
        if(nombre.length < 3){
            throw new Error("Ingresa un nombre");
        }
        else if(apellido.length < 3){
            throw new Error("Ingresa un nombre");
        }
        else if(ci.length < 3){
            throw new Error("Ingresa un nombre");
        }
        //empleado nuevo
        let empleadoNuevo = new Empleado(nombre, apellido, fechaIngreso, ci);
        //obtengo array
        arrayEmp.push(empleadoNuevo);
        let empleadosArrayJson = JSON.stringify(arrayEmp);
        localStorage.setItem('empleados', empleadosArrayJson);

    } catch(Error){
        alert(Error.message);
    }


}

function GetEmpleadoByCi(ciEmpleado){
    let empleado = null;
    let i = 0;

    while(i < arrayEmp.length && empleado == null){
        if(arrayEmp[i].ci === ciEmpleado){
            empleado = arrayEmp[i];
        }
        i++;
    }
    return empleado;
}

function GetTotalHoraMesByEmpleado(ci){
    let empleado = GetEmpleadoByCi(ci);
    let totalHoraMes = 0;
    if(empleado!=null){
        empleado.horasMes.forEach(function (cantidad){
            totalHoraMes += cantidad.cantidadHorasMes;
        })
    }
    return totalHoraMes;
}