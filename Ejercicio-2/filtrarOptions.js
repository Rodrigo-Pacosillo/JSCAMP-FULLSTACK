const filtro = document.querySelector("#filter-location")


//COPLETAR CON LOS OTROS 2 FILTROS PARA QUE FUNCIONE CON LOS 3 FILTROS Y EL EVENTO LO CONSIDERE
//ESTILOS COMPLETAR ESTAMOS USANDO ESTILOS PARA SIMULAR MAS SOLAMENTE


filtro.addEventListener("change",function(event){
    const array_jobs = document.querySelectorAll(".job-listing-card")
    const valorOption = filtro.value

    array_jobs.forEach(element => {
        const dataAtributo = element.dataset.modalidad
        const condicion = valorOption === "" || valorOption === dataAtributo
        element.classList.toggle("is-hidden",!condicion)
       
    });


})


const ContenedorDeJobs = document.querySelector(".jobs-listings")

async function recuperarData(){
    const datos = await fetch("./data.json")
    const objetos = await datos.json()

    objetos.forEach((objeto)=>{
        const article = document.createElement('article')
        article.classList.add("job-listing-card")
        
        //article.setAttribute("data-modalidad", objeto.data.modalidad)
        article.dataset.modalidad = objeto.data.modalidad
        
        article.innerHTML=`<div>
        <h3>${objeto.titulo}</h3>
        <small>${objeto.empresa} | ${objeto.ubicacion}</small>
        <p>${objeto.descripcion}</p>
        </div>
        <button type="submit" class="button-apply-job">enviar</button>`
        
        ContenedorDeJobs.appendChild(article)
    })
}

await recuperarData()
console.log("algoooo")
