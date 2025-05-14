import marge from "../imagenes/marge.png";
import homero from "../imagenes/homero.webp";
import Title from "../elements/titulos.jsx";




const Family= ()=>{
    return(
        <div className="container py-5">
            <div className="row">
                <Title text={"The Family Simpson"} />
                <div className="col-md-12">
                    <ul>
                        <li>
                            Marjorie "Marge" Jaqueline Bouvier Simpson es uno de los personajes principales de la serie animada los simpson, es la esposa de Homero Simpson, y madre de 3 hijos.
                            <img src={ marge } alt="Marge" width={70} height={110}/>
                        </li>
                        <li>
                            Homer J. Simpson (en Hispoamerica Homero J. Simpson) es el personaje principal de la serie animada de television Los Simpson.
                            <img src={ homero } alt="Homero" width={70} height={110} />
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Family;
