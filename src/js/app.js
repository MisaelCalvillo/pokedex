
let pokemonesCartas = "";

for(var i = 0; i < pokemones.length; i++) {
  let tipos = "";
  for(var tipo = 0; tipo < pokemones[i].type.length; tipo++) {
    tipos += `<div class="tipo">${pokemones[i].type[tipo]}</div>`
  }

  pokemonesCartas += `
      <div class='pokemon'>
        <img src="${pokemones[i].ThumbnailImage}" />
        <h2>${pokemones[i].name}</h2>
        <div class="details">
          ${tipos}
        </div>
      </div>
  `
}

document.getElementById('resultado').innerHTML = pokemonesCartas;

