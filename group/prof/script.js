document.getElementById("buttonDez").addEventListener("click", () => {
    document.location = "../duty/duty.html"
})
document.getElementById("buttonOchen").addEventListener("click", () => {
    document.location = "../history/history.html"
})
document.getElementById("buttonTop").addEventListener("click", () => {
    document.location = "../top/top.html"
})

document.getElementById("buttonAcordion").addEventListener("click", () => {
    if(document.getElementById("Accordion")) {
        document.getElementById("Accordion").style.animationName = "accordionRevers"
        document.getElementById("buttonSection").style.animationName = "accordionSectionRevers"
        document.getElementById("buttonAcordion").style.animationName = "accordionSectionRevers"
        setTimeout(() => {document.getElementById("Accordion").remove()},1000)
        
        return 0 ;
    }
    document.getElementById("buttonSection").style.animationName = "accordionSection"
    document.getElementById("buttonAcordion").style.animationName = "accordionSection"
    let section = document.createElement("section")
    let br = document.createElement("br")
    section.className = "Accordion"
    section.id = "Accordion"
    section.style.animationName = "Accordion"
    let a1 = document.createElement("a")
    let a2 = document.createElement("a")
    a1.href = "#"
    a2.href = "#"
    a1.textContent = "Мой рейтинг"
    a2.textContent = "История оценивания"
    document.getElementById("buttonSection").insertAdjacentElement("beforeend",section)
    if( document.getElementById("Accordion")) {
        document.getElementById("Accordion").insertAdjacentElement("beforeend",a1)
        document.getElementById("Accordion").insertAdjacentElement("beforeend",br)
        document.getElementById("Accordion").insertAdjacentElement("beforeend",a2)
    }
})




