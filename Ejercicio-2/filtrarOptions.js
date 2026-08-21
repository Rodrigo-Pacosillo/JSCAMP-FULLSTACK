const filtro = document.querySelector("#filter-location")


//COPLETAR CON LOS OTROS 2 FILTROS PARA QUE FUNCIONE CON LOS 3 FILTROS Y EL EVENTO LO CONSIDERE
//ESTILOS COMPLETAR ESTAMOS USANDO ESTILOS PARA SIMULAR MAS SOLAMENTE


filtro.addEventListener("change",function(event){
    const array_jobs = document.querySelectorAll(".job-listing-card")
    const valorOption = filtro.value

    array_jobs.forEach(element => {
        const dataAtributo = element.dataset.modalidad
        const condicion = valorOption === "" || valorOption === dataAtributo
        element.classList.toggle("ocultar",!condicion)
       
    });


})

