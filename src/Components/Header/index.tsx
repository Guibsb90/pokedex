import React from "react";
import leoImg from '../../Midias/leo.jpg'

const Header = ()=>{

  return (
    <>
    <h1 className="text-slate-500 text-center text-3xl sm:text-5xl">
  Seja bem vindo à Pokedex <br /> do Leo
</h1>
    <img className="rounded-full w-1/5 h-1/5 mx-auto mt-5" src={leoImg} alt="Leo" />

    <div className="w-[300px] mx-auto mt-[30px] text-center">
        <h2 className="text-slate-400">
          Abaixo, escreva o nome do Pokémon que deseja pesquisar e divirta-se!
        </h2>
      </div>
    </>
  );

};

export default Header
