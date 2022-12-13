import React from 'react'


export const produtos = () => {
  return (
    <>
    <h1 className="title">CURSOS</h1>
    <div className="produtos">
      <div className="produto">
      <a href="produto">
      <div className="produtos_img">
        <img src={Img} alt=""/>
      </div>
      </a>
      <div clasName="produto__footer">
         <h1>Agente de Viagem</h1>
         <p>Curso</p>
         <p className="price">GRATIS</p>
       </div>
       <div className="button">
         <button className="btn">
            DESCRIÇÃO
        </button> 
        <div>
        <a href="#" className="btn">Registro</a>
        </div>
       </div>
       </div>

       <div className="produto">
      <a href="produto">
      <div className="produtos_img">
        <img src={Imge} alt=""/>
      </div>
      </a>
      <div clasName="produto__footer">
         <h1>Fotografia Online</h1>
         <p>Curso</p>
         <p className="price">GRATIS</p>
       </div>
       <div className="button">
         <button className="btn">
             DESCRIÇÃO
        </button> 
        <div>
        <a href="#" className="btn">Registro</a>
        </div>
       </div>
       </div>

       <div className="produto">
      <a href="produto">
      <div className="produtos_img">
        <img src={Ime} alt=""/>
      </div>
      </a>
      <div clasName="produto__footer">
         <h1>Decoração de Festas</h1>
         <p>Curso</p>
         <p className="price">GRATIS</p>
       </div>
       <div className="button">
         <button className="btn">
            DESCRIÇÃO
        </button> 
        <div>
        <a href="#" className="btn">Registro</a>
        </div>
       </div>
       </div>
    </div>
    </>
      );
    };