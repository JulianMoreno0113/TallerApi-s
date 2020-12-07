console.log("*** consumo de api ***");

// definir la url que vamos a consumir -----

const url = "https://rickandmortyapi.com/api/character/";

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      imprimirDatos(json);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

let TodaData;
const imprimirDatos = (data) => {
  TodaData = data;

  paraPaginar();
 // aca se tre todo el contenido de la data de la api
  // console.log (" lo que trajo fue ", data)
  let html = "";
  data.results.forEach((matachito) => {
    html += `<div class="cards">`;
    html += `<div>`;
    html += `<img class="foto" src="${matachito.image}">`;
    html += `</div>`;
    html += `<div>`;
    html += `<small class="txtSmall">Nombre</small>`;
    html += `<p class="txtP">${matachito.name}</p>`;
    html += `<small class="txtSmall">Especie</small>`;
    html += `<p class="txtP">${matachito.species}</p>`;
    html += `</div>`;
    html += `</div>`;
    // console.log( "LA FOTO [ " + matachito.image + " ] NOMBRE [ " + matachito.name + " ] ESPECIE [ " + matachito.species + " ]");
  });
  document.getElementById("contenedorTodo").innerHTML = html;
};


//vamos a programar la navavegacion por la api  previus next




const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");

btnPrev.addEventListener('click', ()=>{
    
 getData(TodaData.info.prev);

});

btnNext.addEventListener('click', ()=>{
    getData(TodaData.info.next);
    
});


const paraPaginar =() =>{
    
    if (TodaData.info.prev == null) {
        console.log (" Ya no hay mas paginas previas ");
    }else {
        console.log ("  si hay mas paginas previas  ");
    }
    if (TodaData.info.next == null) {
        console.log (" Ya no hay mas paginas siguientes ");
    } else {
        console.log (" si hay mas paginas siguientes ");
    }
}

getData(url);
