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

let arrayGroups = [
    ['2993', {
    1: {
        id: '2993_1',
        name: 'Максим',
        fam: "Костив",
        rating: 0,
        coins: 3,
        image: null
    },
    2: {
        id: '2993_2',
        name: 'Георгий',
        fam: "Киселев",
        rating: 10,
        coins: 9,
        image: null
    },
    3: {
        id: '2993_3',
        name: 'Федор',
        fam: "Бурлаков",
        rating: 10,
        coins: 9,
        image: null
    }, 
    4: {
        id: '2993_4',
        name: 'Андрей',
        fam: "Парусов",
        rating: 10,
        coins: 9,
        image: null
    },
    5: {
        id: '2993_5',
        name: 'Захар',
        fam: "Рыжиков",
        rating: 10,
        coins: 9,
        image: null
    },
    6: {
        id: '2993_two',
        name: 'Алексей',
        fam: "Горбач",
        rating: 10,
        coins: 9,
        image: null
    }
}], ['2994', {
    1: {
        id: '2994_1',
        name: 'Максим',
        fam: "Костив",
        rating: 0,
        coins: 10,
        image: null
    },
    2: {
        id: '2994_2',
        name: 'Георгий',
        fam: "Киселев",
        rating: 10,
        coins:3,
        image: null
    },
    3: {
        id: '2994_3',
        name: 'Федор',
        fam: "Бурлаков",
        rating: 10,
        coins:12,
        image: null
    }
}], ['2995', {
    1: {
        id: '2994_1',
        name: 'Максим',
        fam: "Костив",
        rating: 0,
        coins: 2,
        image: null
    },
    2: {
        id: '2994_2',
        name: 'Георгий',
        fam: "Киселев",
        rating: 10,
        coins: 0,
        image: null
    }
}]]






document.addEventListener('DOMContentLoaded', (event) => {
    
    if (!localStorage.getItem('studentsAll')) {

    } else {arrayGroups = JSON.parse(localStorage.getItem("studentsAll"))}
    let date = new Date()
    let text = document.getElementById('dateDez')
    let currentDay = date.getDay()+1
    let currentDate = date.getDate()
    text.textContent = 
    `Группа №${arrayGroups[currentDay][0]} дежурит ${currentDate}.${date.getMonth()+1}.${date.getFullYear()} - ${currentDate+1}.${date.getMonth()+1}.${date.getFullYear()}`;

    let currentGroupStudents = arrayGroups[currentDay][1]
    let number = Object.keys(currentGroupStudents).length
    for (let i = 1; i <= Object.keys(currentGroupStudents).length; i++) {
        document.getElementById('assessmentScroll').insertAdjacentHTML('beforeend', 
`
<article>
    <section class="assessArtOne">
        <img src="images/student.png" alt="0" height="42" width="42">
    </section>
    <section class="assessArtOne">
        <p id="name_${i}">${currentGroupStudents[i].fam + ' ' + currentGroupStudents[i].name}</p>
    </section>
    <section class="assessArtTwo">
        <input id="sendCoin_value_${i}" type="text" placeholder="Введите количество ПТКоинов">
    </section>
    <section class="assessArtTwo">
        <button id="sendCoin_btn_${i}">Отправить</button>
    </section>
    </article>
`)
// document.getElementById(`sendCoin_value_${i}`).addEventListener('click', () => {

// })

document.getElementById(`sendCoin_btn_${i}`).addEventListener('click', (event) => {
let currentCoins = arrayGroups[currentDay][1][i].coins
let valueCoinsAdd = +document.getElementById(`sendCoin_value_${i}`).value



if (!isNaN(valueCoinsAdd)) {
    let res = currentCoins+valueCoinsAdd
arrayGroups[currentDay][1][i].coins = res
localStorage.setItem('studentsAll', JSON.stringify(arrayGroups))
document.getElementById('notificationSendCoins').textContent = `Вы отправили ${document.getElementById(`name_${i}`).textContent} ${valueCoinsAdd} коинов!`
document.getElementById('notificationSendCoins').toggleAttribute("open")

setTimeout(() => {
    document.getElementById('notificationSendCoins').style.animation = "closeDialog .5s"
}, 1700);

setTimeout(() => {document.getElementById('notificationSendCoins').removeAttribute("open"); document.getElementById('notificationSendCoins').style.animation = "openDialog .5s"}, 2000)
} else {
    document.getElementById('notificationSendCoins').textContent = `Неверный ввод данных`
    document.getElementById('notificationSendCoins').style.backgroundColor = "darkred"
    document.getElementById('notificationSendCoins').toggleAttribute("open")

    setTimeout(() => {
        document.getElementById('notificationSendCoins').style.animation = "closeDialog .5s"
    }, 1700);

    setTimeout(() => {
        document.getElementById('notificationSendCoins').removeAttribute("open");
        document.getElementById('notificationSendCoins').style.backgroundColor = "green";
        document.getElementById('notificationSendCoins').style.animation = "openDialog .5s"
    }, 2000)
}



})
    }



})