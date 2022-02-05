const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

//Zenék címei
const songs = ["hey", "summer", "ukulele", "river"];

//Kiinduló zene indexe
let songIndex = 2;

//Zene adatainak betöltése a DOMba
loadSong(songs[songIndex]);


//Frissítjük a zenék adatait
function loadSong(song){

    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

//Zene lejátszása
function playSong(){

    musicContainer.classList.add("play");
    playBtn.querySelector("i.fas").classList.remove("fa-play");
    playBtn.querySelector("i.fas").classList.add("fa-pause");

    audio.play();
}

//Zene megállíátsa
function pauseSong(){

    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fas").classList.add("fa-play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");

    audio.pause();

}

//Zene léptetése előre
function nextSong(){

    songIndex++;

    if(songIndex > songs.length -1){

        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playSong();
}

//Zene léptetése vissza
function prevSong(){

    songIndex--;

    if(songIndex < 0){

        songIndex = songs.length -1;
    }

    loadSong(songs[songIndex]);
    playSong();
}


//Zene lejátszása - eseménykezelés
playBtn.addEventListener("click", function(){

    const isPlaying = musicContainer.classList.contains("play");

   if(isPlaying){
        pauseSong();
   }
   else{
        playSong();
   }
})

//Zene léptetése - eseménykezelés
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

//Ha a zene végetért lépjen a következőre
audio.addEventListener("ended", nextSong);


