const url = 'https://api.openweathermap.org/data/2.5/'
const key = '71167fdb48eebe0e78b93fd342460149';

const setQuery = (e) => {
    if (e.keyCode == '13') {
        getResult(searchBox.value)
    }
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    console.log(query);
}

const searchBox = document.getElementById('searchBox');
searchBox.addEventListener('keypress', setQuery);