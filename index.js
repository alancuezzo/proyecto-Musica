const music = new Audio('/assets/audio/1.mp3');
// music.play();

const songs = JSON.parse(localStorage.getItem("canciones")) || [];


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
    
//-----------------------------------------------------------
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
       
 //-----------------------------------------------------------   

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

//-----------------------------------------------------------

cancionPopularRight.addEventListener('click', () => {
    popsong.scrollLeft += 330;
})

cancionPopularLeft.addEventListener('click', () => {
    popsong.scrollLeft -= 330;
});

//-----------------------------------------------------------

let popArtistaLeft = document.querySelector("#popArtistaLeft");
let popArtistaRight = document.querySelector("#popArtistaRight");
let item = document.querySelector(".item");

const listarArtistas = ()=>{
    item.innerHTML= "";
     songs.forEach((elemento)=>{
       let liArtista = document.createElement('li');
       liArtista.classList- 'cancion';
    
       let cardArtista = `
       <a href="./pages/detalle.html?id=${elemento.id}"><img src="${elemento.image}" alt="${elemento.title}" /></a>
      `;
    
    liArtista.innerHTML = cardArtista;
    item.appendChild(liArtista);
    });   
    };
    
    listarArtistas();

   
  
popArtistaRight.addEventListener('click', () => {
    item.scrollLeft += 330;
})

popArtistaLeft.addEventListener('click', () => {
    item.scrollLeft -= 330;
});

//-----------------------------------------------------------

// Array.from(document.getElementsByClassName('cancion')).forEach((e, i )=>{
//     e.getElementsByTagName('img')[0].src = songs[i].image; 
//     e.getElementsByTagName('h5')[0].innerHTML = songs[i].title;
     
// });

//-----------------------------------------------------------

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

// ----------------------------
document.getElementById('botonRedireccionar').addEventListener('click', function() {
   
    location.replace('pages/detalle.html');
});
document.getElementById('aboutRedireccion').addEventListener('click', function() {
   
    location.replace('pages/sobreNosotros.html');
});
document.getElementById('adminRedireccion').addEventListener('click', function() {
   
    location.replace('pages/admin.html');
});
document.getElementById('loginRedireccion').addEventListener('click', function() {
   
    location.replace('pages/logIn.html');
});

document.getElementById('generosRedireccion').addEventListener('click', function() {
   
    location.replace('pages/error404.html');
});

document.getElementById('masEscuchadoRedireccion').addEventListener('click', function() {
   
    location.replace('pages/error404.html');
});