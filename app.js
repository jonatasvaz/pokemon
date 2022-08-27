let getUrl = id=>  `https://pokeapi.co/api/v2/pokemon/${id}`

 const  fetchUrl=()=>{
  
       
     const pokemonPromisses= []

       for(let i =1;i<=150;i++){
      pokemonPromisses.push(fetch(getUrl(i)).then((res)=> res.json()))
       } 
    Promise.all(pokemonPromisses)
       
    .then((pokemons) =>{ 
        console.log(pokemons)
        

            const listPokemon = pokemons.reduce((acumulator,pokemon)=>{
                console.log(pokemon)
                const types = pokemon.types.map(typeinfo=>typeinfo.type.name)

                acumulator += ` <li class="card ${types[0]}">
                 <img class="card-image "  alt="${pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png"/>
                 <h2 class="card-title">  ${pokemon.id}  ${pokemon.name} </h2>  
                 <p class="card-subtitle"> ${types.join(' | ')} </p>
                 </li>` 
                return acumulator
            },"")
            const li = document.querySelector(`[data-js="pokedex"]`)
           li.innerHTML= listPokemon
           }
          

        
        )
         
        }

   
 
 fetchUrl()