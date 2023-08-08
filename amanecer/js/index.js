window.addEventListener("load", onLoad);

function onLoad(){
    document.querySelector("#btnRegistrarEmpleado").addEventListener("click", showAgregarEmpleados);
    document.querySelector("#btnRegistrarHoras").addEventListener("click", showRegistrarHoras);
    document.querySelector("#btnMostrarTotalMes").addEventListener("click", showTotalMes);

    document.querySelector("#btnInicio").addEventListener("click", onInicio);

    changeDisplay("#containerAgregarEmpleado", "none");
    changeDisplay("#containerRegistroHoras", "none");
    changeDisplay("#containerTabla", "none");
}

function onInicio(){
    changeDisplay("#inicio", "block");
    changeDisplay("#containerAgregarEmpleado", "none");
    changeDisplay("#containerRegistroHoras", "none");
    changeDisplay("#containerTabla", "none");
}


function changeDisplay(page, status){
    return document.querySelector(page).style.display=status;
}