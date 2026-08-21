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



const articulos = document.querySelectorAll(".job-listing-card")
const padre_option = document.querySelectorAll(".search-filters")
const Un_Select= document.querySelectorAll("#filter-technology")