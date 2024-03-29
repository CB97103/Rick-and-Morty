import Item from "./Item";
import "../style/Listado.css";

const Listado = ({ characters }) => {
  return (
   
      <div className="tarjeta-p">
        <div className="tarjeta">
          {characters.map(
            (character) => (
              <Item
                key={character.id}
                id={character.id}
                nombre={character.name}
                imagen={character.image}
              />
            ) 
          )}
        </div>
      </div>

  );
};

export default Listado;
