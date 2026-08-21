const ContenedorDeJobs = document.querySelector(".jobs-listings")
ContenedorDeJobs.addEventListener("click",function(event){
    let objetivo = event.target
    if (objetivo.classList.contains("button-apply-job")){
        objetivo.textContent = "jijija"
        objetivo.classList.add("is-applied")
        objetivo.disabled = true
    }
})




