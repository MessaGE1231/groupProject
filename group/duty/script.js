document.getElementById("buttonDrug").addEventListener("click", () => {
    document.location = "../dutyOtherGroups/dutyOtherGroups.html"
})
document.getElementById("buttonOchen").addEventListener("click", () => {
    document.location = "../history/history.html"
})
document.getElementById("buttonTop").addEventListener("click", () => {
    document.location = "../top/top.html"
})
document.getElementById("buttonProf").addEventListener("click", () => {
    document.location = "../prof/prof.html"
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

// let arrayGroups = ['2993', '2994', '2995', '2996', '2998', '1991', '1992']
let arrayGroups = [
    ['2993', {
    student_one: {
        id: '2993_one',
        name: 'Максим',
        fam: "Костив",
        rating: 0,
        coins: 3,
        image: null
    },
    student_two: {
        id: '2993_two',
        name: 'Георгий',
        fam: "Киселев",
        rating: 10,
        coins: 9,
        image: null
    }
}], ['2994', {
    1: {
        id: '2994_one',
        name: 'Максим',
        fam: "Костив",
        rating: 0,
        coins: 10,
        image: null
    },
    2: {
        id: '2994_two',
        name: 'Георгий',
        fam: "Киселев",
        rating: 10,
        coins:3,
        image: null
    },
    3: {
        id: '2994_three',
        name: 'Федор',
        fam: "Бурлаков",
        rating: 10,
        coins:3,
        image: null
    }
}], ['2995', {
    student_one: {
        id: '2994_one',
        name: 'Максим',
        fam: "Костив",
        rating: 0,
        coins: 2,
        image: null
    },
    student_two: {
        id: '2994_two',
        name: 'Георгий',
        fam: "Киселев",
        rating: 10,
        coins: 0,
        image: null
    }
}]]





document.addEventListener('DOMContentLoaded', (event) => {
    let date = new Date()
    let text = document.getElementById('dateDez')
    let currentDay = date.getDay()-3
    let currentDate = date.getDate()
    text.textContent = 
    `Группа №${arrayGroups[currentDay][0]} дежурит ${currentDate}.${date.getMonth()+1}.${date.getFullYear()} - ${currentDate+1}.${date.getMonth()+1}.${date.getFullYear()}`;

    let currentGroupStudents = arrayGroups[currentDay][1]
    let number = Object.keys(currentGroupStudents).length
    for (let i = 1; i <= Object.keys(currentGroupStudents).length; i++) {
        console.log(currentGroupStudents[i].fam , currentGroupStudents[i].name)

        document.getElementById('assessmentScroll').insertAdjacentHTML('beforeend', 
`
<article>
    <section class="assessArtOne">
        <img src="images/student.png" alt="0" height="42" width="42">
    </section>
    <section class="assessArtOne">
        <p id="name1">${currentGroupStudents[i].fam + ' ' + currentGroupStudents[i].name}</p>
    </section>
    <section class="assessArtTwo">
        <input id="send_coin" type="text" placeholder="Введите количество ПТКоинов">
    </section>
    <section class="assessArtTwo">
        <button>Отправить</button>
    </section>
    </article>
`)
    }



})