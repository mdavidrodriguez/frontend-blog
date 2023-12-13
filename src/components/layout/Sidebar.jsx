import React from "react";

export const Sidebar = () => {
  return (
    <aside className="lateral">
      <div className="search">
        <h3 className="title">Buscador</h3>
        <form action="">
          <input type="text" />
          <button>Buscar</button>
        </form>
      </div>
      {/* <div className="add">
      <h3 className="title">Añadir Pelicula</h3>
      <form action="">
        <input type="text" placeholder="Titulo" />
        <textarea name="" placeholder="descripcion"></textarea>
        <input type="submit" />
      </form>
    </div> */}
    </aside>
  );
};
