"use strickt";

let numberOfFilms;
function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    }
}
start();

let PersonalMovieDB = { // создание объекта 
    count: numberOfFilms, // переменной для ответа
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", '');
    const b = prompt("На сколько вы его оцените?", '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            PersonalMovieDB.movies[a] = b;
            console.log("done");
        } 
        else{
            console.log("error");
            i--;
        }
}
}
rememberMyFilms();
function detectedPersonalLevel(){
    if (PersonalMovieDB.count < 10){
        console.log("Посмотрено довольно мало фильмов");
    }
    else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.count < 20){
        console.log("Вы обычный чел");
    }
    else if (PersonalMovieDB.count >= 20){
        console.log("Ебать ты киноман");
    
    }
    else{
        console.log("Ошибка");
    }
    }
  function showMyDB (hiden){
    if(!hiden){
        console.log(PersonalMovieDB);
    }
  }
  showMyDB(PersonalMovieDB.privat);
  
    detectedPersonalLevel();
    
    function writeYourGenres (){
        for (let i = 1; i <= 3; i++){
            PersonalMovieDB.genres[i-1] =  prompt(`Ваш любимый жанр под номером ${i}`);
        }

    }
    writeYourGenres();