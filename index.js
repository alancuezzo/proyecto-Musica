const music = new Audio('/assets/audio/1.mp3');
// music.play();

const songs  = [
    {
    id: 1 ,
    title: "Dance The Night",
    artist: "Dua Lipa",
    gender: "Pop",
    duration: "2:57" ,
    image: "https://lastfm.freetls.fastly.net/i/u/500x500/c7c9d41e50a621bc5e23b45ec229705a.jpg",
    favorito: false,
},
{
    id: 2 ,
    title: "Cruel Summer",
    artist: "Taylor Swift",
    gender: "Pop",
    duration: "2:58" ,
    image: "https://jenesaispop.com/wp-content/uploads/2019/06/taylor-swift.jpg" ,
    favorito: false,
},
{
    id: 3 ,
    title: "LALA",
    artist: "Myke Towers",
    gender: "Pop",
    duration: "3:18" ,
    image:"https://i1.sndcdn.com/artworks-2h9w1cyESonW-0-t500x500.jpg" ,
    favorito: false,
},
{
    id: 4 ,
    title: "WHERE SHE GOES",
    artist: "Bad Bunny",
    gender: "Pop",
    duration: "2:34" ,
    image:"https://www.lahiguera.net/musicalia/artistas/varios/disco/0/tema/29353/where_she_goes-portada.jpg" ,
    favorito: false,
},
{
    id: 5 ,
    title: "Flowers",
    artist: "Miley Cyrus",
    gender: "Pop",
    duration: "3:20" ,
    image: "https://cdns-images.dzcdn.net/images/cover/98610629a40996b61b3d24bd5ab8c2e1/500x500.jpg",
    favorito: false,
},
{
    id: 6 ,
    title: "S91",
    artist: "Karol G",
    gender: "Latina",
    duration: "2:53" ,
    image: "https://i.scdn.co/image/ab67616d0000b273890cfb712167a0186918644e",
    favorito: false,
},
{
    id: 7 ,
    title: "BABY HELLO",
    artist: "Rauw Alejandro, Bizarrap",
    gender: "Latina",
    duration: "3:42" ,
    image: "https://linkstorage.linkfire.com/medialinks/images/09c3ce38-a6e7-4fdf-a2bd-67e84a384131/artwork-440x440.jpg",
    favorito: false,
},
{
    id: 8 ,
    title: "Ella Baila Sola",
    artist: "Eslabon Armado, Peso Pluma",
    gender: "Latina",
    duration: "2:46" ,
    image: "https://m.media-amazon.com/images/I/51FGq-xYTeL._UXNaN_FMjpg_QL85_.jpg",
    favorito: false,
},
{
    id: 9 ,
    title: "ADIOS",
    artist: "Maria Becerra",
    gender: "Latina",
    duration: "2:41" ,
    image: "https://i.scdn.co/image/ab67616d0000b27377ec4341ebb8a0dbfe2df739",
    favorito: false,
},
{
    id: 10 ,
    title: "COCO LOCO",
    artist: "Maluma",
    gender: "Latina",
    duration: "2:47" ,
    image: "https://linkstorage.linkfire.com/medialinks/images/a3facb3d-ddeb-4371-af41-a3cc5c7f7841/artwork-440x440.jpg",
    favorito: false,
},
{
    id: 11 ,
    title: "Hot In Herre",
    artist: "Nelly",
    gender: "Hip Hop",
    duration: "3:48" ,
    image: "https://i.scdn.co/image/ab67616d0000b273a8b9f97b9ea065b9a857e93f",
    favorito: false,
},
{
    id: 12 ,
    title: "The Real Slim Shady",
    artist: "Eminem",
    gender: "Hip Hop",
    duration: "4:44" ,
    image: "https://f4.bcbits.com/img/a0183287409_65",
    favorito: false,
},
{
    id: 13 ,
    title: "In My Feelings",
    artist: "Drake",
    gender: "Hip Hop",
    duration: "3:37" ,
    image: "https://lastfm.freetls.fastly.net/i/u/ar0/a73396862c4c2326bae95f73b0a4ac64.jpg",
    favorito: false,
},
{
    id: 14 ,
    title: "hARAkiRi",
    artist: "Duki, C.R.O",
    gender: "Hip Hop",
    duration: "2:49" ,
    image: "https://i.scdn.co/image/ab67616d0000b2737eb80f8193b2d744df5058c0",
    favorito: false,
},
{
    id: 15 ,
    title: "FEEL ME??",
    artist: "Trueno",
    gender: "Hip Hop",
    duration: "3:07" ,
    image: "https://i.scdn.co/image/ab67616d0000b27385de3ee7edaa01757845dc6a",
    favorito: false,
},
{
    id: 16 ,
    title: "Prófugos",
    artist: "Soda Stereo",
    gender: "Rock",
    duration: "5:20" ,
    image: "https://i.scdn.co/image/ab67616d0000b273e885d6895a32a612813bf6d3",
    favorito: false,
},
{
    id: 17 ,
    title: "Luna de Miel en la Mano",
    artist: "Virus",
    gender: "Rock",
    duration: "5:16" ,
    image: "https://i.scdn.co/image/ab67616d0000b273292c1ca632a1e120d1208c95",
    favorito: false,
},
{
    id: 18 ,
    title: "La Bifurcada",
    artist: "Memphis La Blusera",
    gender: "Rock",
    duration: "4:36" ,
    image: "https://i.scdn.co/image/ab67616d0000b2738fbd25be9c3efc36f01f6dcb",
    favorito: false,
},
{
    id: 19 ,
    title: "Cuando estés acá",
    artist: "La Renga",
    gender: "Rock",
    duration: "4:55" ,
    image: "https://i.scdn.co/image/ab67616d0000b273a2d9ead62b53a0e9fa01182d",
    favorito: false,
},
{
    id: 20 ,
    title: "Ji Ji Ji",
    artist: "Patricio Rey y sus Redonditos de Ricota",
    gender: "Rock",
    duration: "5:34" ,
    image: "https://i.scdn.co/image/ab67616d0000b273c7c1ffa44473871a6f004786",
    favorito: false,
},
{
    id: 21 ,
    title: "Te Vas a Arrepentir",
    artist: "La Nueva Luna",
    gender: "Cumbia",
    duration: "3:24" ,
    image: "https://i.scdn.co/image/ab67616d00001e0226e4d1680cacd81ac0ebe194",
    favorito: false,
},
{
    id: 22 ,
    title: "Olvídala",
    artist: "Los Palmeras",
    gender: "Cumbia",
    duration: "4:50" ,
    image: "https://i.scdn.co/image/ab67616d0000b2736665b7cb7ed27000d3d9cf1a",
    favorito: false,
},
{
    id: 23 ,
    title: "Yo Me Enamoré",
    artist: "Amar Azul",
    gender: "Cumbia",
    duration: "3:12" ,
    image: "https://i.scdn.co/image/ab67616d0000b273387b7088236062cd0b1a1527",
    favorito: false,
},
{
    id: 24 ,
    title: "Mentirosa",
    artist: "Rafaga",
    gender: "Cumbia",
    duration: "3:15" ,
    image: "https://i.scdn.co/image/ab67616d0000b2733e79988a4e5af63f2a239450",
    favorito: false,
},
{
    id: 25 ,
    title: "Fuiste",
    artist: "Gilda",
    gender: "Cumbia",
    duration: "3:03" ,
    image: "https://i.scdn.co/image/ab67616d0000b2733540dd039ad4a425cf2522f4",
    favorito: false,
},
{
    id: 26 ,
    title: "Lo Que Pasó, Pasó",
    artist: "Daddy Yankee",
    gender: "Reggaeton",
    duration: "3:31" ,
    image: "https://i.scdn.co/image/ab67616d0000b2736bdcdf82ecce36bff808a40c",
    favorito: false,
},
{
    id: 27 ,
    title: "Es un Secreto",
    artist: "Plan B",
    gender: "Reggaeton",
    duration: "3:12" ,
    image: "https://i.scdn.co/image/ab67616d0000b2734787a6dc1c2b9b3bedec9f7d",
    favorito: false,
},
{
    id: 28 ,
    title: "Ella y Yo",
    artist: "Aventura, Don Omar",
    gender: "Reggaeton",
    duration: "4:28" ,
    image: "https://i.scdn.co/image/ab67616d0000b2736bb920cebbe9cd79eccaf0e6",
    favorito: false,
},
{
    id: 29 ,
    title: "Efecto",
    artist: "Bad Bunny",
    gender: "Reggaeton",
    duration: "3:33" ,
    image: "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72",
    favorito: false,
},
{
    id: 30 ,
    title: "Yandel 150",
    artist: "Yandel, Feid",
    gender: "Reggaeton",
    duration: "3:36" ,
    image: "https://i.scdn.co/image/ab67616d0000b273444bab1a00d7bdb978bd8d70",
    favorito: false,
},
];


let cancionPopularLeft = document.querySelector("#cancionPopularLeft");
let cancionPopularRight = document.querySelector("#cancionPopularRight");
let popsong = document.querySelector(".popsong");
let menusong = document.querySelector(".menusong")

const listarCancionesPop = ()=>{
    popsong.innerHTML= "";
     songs.forEach((item)=>{
       let liPopulares = document.createElement('li');
       liPopulares.classList- 'cancion';
    
       let cardPopulares = `<div class="imgplay">
       <img src="${item.image}" alt="${item.title}" />
       <i class="fa-solid fa-circle-play bi playListPlay" id="${item.id}"></i>
     </div>
     <h5>
       ${item.title} <br />
       <div class="subtitulo">${item.artist}</div>
     </h5>`;
    
    liPopulares.innerHTML = cardPopulares;
    popsong.appendChild(liPopulares);
  
    });
    };
    listarCancionesPop();
    

    const listarCancionesIzq = ()=>{
        menusong.innerHTML= "";
         songs.forEach((item)=>{
           let liIzquierda = document.createElement('li');
           liIzquierda.classList- 'cancion';
        
           let cardIzquierda = `<div class="imgplay">
           <img src="${item.image}" alt="${item.title}" />
           <i class="fa-solid fa-circle-play bi playListPlay" id="${item.id}"></i>
         </div>
         <h5>
           ${item.title} <br />
           <div class="subtitulo">${item.artist}</div>
         </h5>`;
        
        liIzquierda.innerHTML = cardIzquierda;
        menusong.appendChild(liIzquierda);
        });   
        };
        
        listarCancionesIzq();
       
    

//     <li class="cancion">
//     <div class="imgplay">
//       <img src="/assets/img/descarga.jpg" alt="" />
//       <i class="fa-solid fa-circle-play bi playListPlay" id="9"></i>
//     </div>
//     <h5>
//       Lose Control <br />
//       <div class="subtitulo">Teddy Swims</div>
//     </h5>
//   </li>

cancionPopularRight.addEventListener('click', () => {
    popsong.scrollLeft += 330;
})

cancionPopularLeft.addEventListener('click', () => {
    popsong.scrollLeft -= 330;
});

let popArtistaLeft = document.querySelector("#popArtistaLeft");
let popArtistaRight = document.querySelector("#popArtistaRight");
let item = document.querySelector(".item");

popArtistaRight.addEventListener('click', () => {
    item.scrollLeft += 330;
})

popArtistaLeft.addEventListener('click', () => {
    item.scrollLeft -= 330;
});


// Array.from(document.getElementsByClassName('cancion')).forEach((e, i )=>{
//     e.getElementsByTagName('img')[0].src = songs[i].image; 
//     e.getElementsByTagName('h5')[0].innerHTML = songs[i].title;
     
// });

//!search data start
let searchResults = document.getElementsByClassName('searchResults')[0];

songs.forEach(element =>{
    
    const {id, title,artist, image} = element;
    let cardSearch = document.createElement('a');
    cardSearch.classList.add('cardSearch');
    cardSearch.href = "#" + id;
    let cardBuscadora = ` 
    <img src="${image}" alt="">
    <div class="content">
    ${title} 
    <div class="subtitulo">${artist}</div>
  </div>
   
`;
    cardSearch.innerHTML = cardBuscadora;
    searchResults.appendChild(cardSearch);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = searchResults.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let contenido = items[index].getElementsByClassName('content')[0];
        let text_value = contenido.textContent || contenido.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = 'flex';
        }else {
            items[index].style.display = 'none';
        }
        
        if (input.value == 0) {
            searchResults.style.display = "none";
        } else{
            searchResults.style.display = "";
        }
    };
});

//---------------------------------------------------------


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () =>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        fa-play
    }else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
    }
});

//---------------------------------------------------------

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('fa-circle-play');
        el.classList.remove('fa-circle-pause');
    })
};

//---------------------------------------------------------

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('cancion')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
};

//---------------------------------------------------------

let index = 0;

let postermasterplay = document.getElementById('postermasterplay');
let titulo = document.getElementById('titulo');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        music.src = `/assets/audio/${index}.mp3`;
        postermasterplay.src = `./assets/img/poster/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');


        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {title} = elss;
            titulo.innerHTML = title;
            
        });
        
        makeAllBackground();
        Array.from(document.getElementsByClassName('cancion'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllPlays();
        el.target.classList.remove('fa-circle-play');
        el.target.classList.add('fa-circle-pause');
        wave.classList.add('active1');
    });
});

//---------------------------------------------------------

let comienzo = document.getElementById('comienzo');
let fin = document.getElementById('fin');
let barra = document.getElementById('barra');
let bar2 = document.getElementById('bar2');
let punto = document.getElementsByClassName('punto')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if(sec1 < 10){
          sec1 = `0${sec1}`;
    }
    fin.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;      
    }
    comienzo.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    barra.value = progressBar;
    let barrabar = barra.value;
    bar2.style.width = `${barrabar}%`;
    punto.style.left = `${barrabar}%`;

});

barra.addEventListener('change', ()=>{
    music.currentTime = barra.value * music.duration / 100;
});

let vol_icon = document.querySelector('#vol_icon');
let vol = document.querySelector('#vol');
let volbar = document.querySelector('.volbar');
let volpunto = document.querySelector('#volpunto');

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.add('fa-volume-xmark');
        
    }else if (vol.value <= 50){
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.add('fa-volume-low');
        vol_icon.classList.remove('fa-volume-xmark');    
    }
    else{
        vol_icon.classList.add('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.remove('fa-volume-xmark');  
      }
      let vol_a = vol.value;
      volbar.style.width = `${vol_a}%`;
      volpunto.style.left = `${vol_a}%`;
      music.volume = vol_a / 100;

});


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('cancion')).length;
         index      
    }
    music.src = `/assets/audio/${index}.mp3`;
    postermasterplay.src = `/assets/img/poster/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

  

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {title} = elss;
        titulo.innerHTML = title;
    });
    
    makeAllBackground();
    Array.from(document.getElementsByClassName('cancion'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove('fa-play');
    el.target.classList.add('fa-pause');
    wave.classList.add('active1');
});

next.addEventListener('click', ()=>{
    index ++;
    if (index > Array.from(document.getElementsByClassName('cancion')).length) {
        
    }
    music.src = `/assets/audio/${index}.mp3`;
    postermasterplay.src = `/assets/img/poster/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

  

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {title} = elss;
        titulo.innerHTML = title;
    });
    
    makeAllBackground();
    Array.from(document.getElementsByClassName('cancion'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove('fa-play');
    el.target.classList.add('fa-pause');
    wave.classList.add('active1');
});

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let uno = shuffle.innerHTML;

    switch (uno) {
        case "next":
            shuffle.classList.add('fa-repeat');
            shuffle.classList.remove('fa-music');
            shuffle.classList.remove('fa-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
        case "repeat":
            shuffle.classList.remove('fa-repeat');
            shuffle.classList.remove('fa-music');
            shuffle.classList.add('fa-shuffle');
            shuffle.innerHTML = 'random';
            break;
        case "random":
            shuffle.classList.remove('fa-repeat');
            shuffle.classList.add('fa-music');
            shuffle.classList.remove('fa-shuffle');
            shuffle.innerHTML = 'next';
            break;
    };
});



const nextmusic = () =>{
    if (index == songs.length) {
        index = 1;
    }else{
        index++;
    }
    music.src = `/assets/audio/${index}.mp3`;
    postermasterplay.src = `/assets/img/poster/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');


    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {title} = elss;
        titulo.innerHTML = title;
        
    });
    
    makeAllBackground();
    Array.from(document.getElementsByClassName('cancion'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove('fa-circle-play');
    el.target.classList.add('fa-circle-pause');
    wave.classList.add('active1');
};

const repeatmusic = () =>{
    index;
    music.src = `/assets/audio/${index}.mp3`;
    postermasterplay.src = `/assets/img/poster/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');


    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {title} = elss;
        titulo.innerHTML = title;
        
    });
    
    makeAllBackground();
    Array.from(document.getElementsByClassName('cancion'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove('fa-circle-play');
    el.target.classList.add('fa-circle-pause');
    wave.classList.add('active1');
};



music.addEventListener('ended', ()=>{
    
    let estadoMusica = shuffle.innerHTML;

    switch (estadoMusica) {
        case 'repeat':
            repeatmusic();
            break;
    case 'next':
            nextmusic();
            break;
   
    }
});

