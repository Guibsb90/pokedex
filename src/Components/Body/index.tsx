import React from "react"

import { useState } from "react";
import { useLazyGetPokemonByNameQuery } from "../API/api/api";

  type Abilities = {
    ability:{
      name: string
    }
  }

  type Tipos = {
    type:{
      name: string
    }

  }

  const PokemonSearch : React.FC = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [showData , setShowData] = useState(false);


  const  [trigger ,{data, isLoading }] = useLazyGetPokemonByNameQuery();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };

  const handleClick = () => {

    setShowData(false);
    if (pokemonName){
      trigger(pokemonName);
    }

    setTimeout(()=>{
      setShowData(true);
          },2000)
  }
  return (
    <>
    <input type="text" onChange={handleChange} placeholder="Digite o nome do Pokemon" className="placeholder:text-slate-200 rounded-[16px] bg-slate-800 border-none focus:outline-none text-center mt-10 w-1/3 block mx-auto text-slate-200" required />

    <button onClick={handleClick} className="mt-4 px-6 py-2 rounded-[16px] hover:bg-slate-500 bg-slate-700 text-slate-200 border-none w-1/3 text-center mx-auto">Pesquisar</button>

    {isLoading && <div className="mx-auto text-3xl text-zinc-200">Carregando...</div>}
    {showData && data && (
      <div className="mt-14 mx-auto bg-amber-400 rounded-lg p-4">
        <div className="bg-slate-700 p-1 shadow-[0_0_22px_black] rounded-lg border border-dashed">
        <h2 className=" text-slate-200 text-5xl mb-4 ">{data.name}</h2>
        <img className="w-[200px] h-[200px]" src={data.sprites.front_default} alt={data.name}/>
        <p className=" text-slate-200">Altura: {data.height}</p>
        <p className=" text-slate-200">Peso: {data.weight}</p>
        <ul className=" text-orange-300">
        <p className=" text-slate-200">Habilidades:</p>
          {data.abilities.map((abilityObj : Abilities )=>(
        <li className="text-center" key={abilityObj.ability.name}>{abilityObj.ability.name}
        </li>)

)}
        </ul>
        <p className=" text-slate-200">Classe(s):</p>
        <ul className="text-slate-200">
          {data.types.map((typeObj : Tipos) =>(
            <li className="text-orange-300 text-center" key={typeObj.type.name}>{typeObj.type.name}</li>
          )

        )}
        </ul>
        </div>
      </div>
    )}
    </>
  )

}

export default PokemonSearch
