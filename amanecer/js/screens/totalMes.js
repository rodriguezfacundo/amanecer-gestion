function showTotalMes(){
    changeDisplay("#inicio", "none");
    changeDisplay("#containerAgregarEmpleado", "none");
    changeDisplay("#containerRegistroHoras", "none");
    changeDisplay("#containerTabla", "block");
    let tabla = document.querySelector("#table");
    tabla.innerHTML = "";
    
    arrayEmp.forEach(function (empleado){
        tabla.innerHTML+= `
        <td>${empleado.nombre} ${empleado.apellido}</td>
        <td>08</td>
        <td>${GetTotalHoraMesByEmpleado(empleado.ci)}</td>
        `
    })
}