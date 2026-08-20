const articulo = document.querySelector(".jobs-listings")
articulo.addEventListener("click",function(event){
    let objetivo = event.target
    if (objetivo.classList.contains("button-apply-job")){
        objetivo.textContent = "jijja"
        objetivo.classList.add("is-applied")
        objetivo.disabled = true
    }
})
console.log("algo")