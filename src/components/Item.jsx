import "../style/Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <>
      <Link to={"/Detail/" + props.nombre}>
        <div className="contenedor-tarjeta">
          <div className="tarjeta-personaje">
            <div className="imagen-personaje">
              <img src={props.imagen} alt={props.nombre} />
            </div>
            <div className="nombre-personaje">
              <h3>{props.nombre}</h3>
              <div>
                <h3>{props.gender}</h3>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Item;
