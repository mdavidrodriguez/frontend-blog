import React from "react";
import imagen from "../../assets/img.png";
import { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";

export const Articulos = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    const { datos, cargando } = await Peticion(Global.url + "articulos", "GET");

    // const peticion = await fetch(url, {
    //   method: "GET",
    // });
    // let datos = await peticion.json();

    if (datos.status === "success") {
      setArticulos(datos.articulos);
    }
  };

  return (
    <>
      {articulos.length >= 1 ? (
        articulos.map((articulo) => {
          return (
            <article key={articulo._id} className="articulo-item">
              <div className="mascara">
                <img src={imagen} alt="" />
              </div>
              <div className="datos">
                <h3 className="title">{articulo.titulo}</h3>
                <p className="descripton">{articulo.contenido}</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
              </div>
            </article>
          );
        })
      ) : (
        <h2>No existen datos</h2>
      )}
    </>
  );
};
