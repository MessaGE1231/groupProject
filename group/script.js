
  

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

if(!localStorage.studentsAll) {
    localStorage.setItem("studentsAll", JSON.stringify(arrayGroups))
}
