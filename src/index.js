const images=document.querySelectorAll(".images")
const wrapper=document.querySelector(".wrapper-common")
const wrapperIcon=document.querySelector(".wrapper-icon")
const img=document.querySelector(".img")

images.forEach((image)=>{
    image.addEventListener("click",()=>{
    wrapper.classList.remove("d-none")
    const firstImage=image.getAttribute("src")
    img.setAttribute("src",firstImage)   
    
    
    })
})



wrapperIcon.addEventListener("click",()=>{
    wrapper.classList.add("d-none")
})

