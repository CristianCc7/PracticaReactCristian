import imagen from "../imagenes/imagenPrincipal.avif";
import Title from "../elements/titulos.jsx";

const Home= ()=>{
    return(
        <div className="container py-5">
            <div className="row">
                <Title text={"Home"} />
                <div className="col-md-9">
                    <p> Los Simpson -en ingles: The Simpsons- es una serie estadounidense de comedia en formato de animacion, creada por Matt Groening para Fox Broadcasting Company y emitida en varios paises del mundo. La serie es una satira de la sociedad estadounidense que narra la vida y el dia a dia de una familia de clase media en ese pais -cuyos miembros son Homer, Marge, Bart, Lisa y Maggie y Simpson- que vive en un pueblo ficticio llamado springfield. </p>
                </div>
                <div className="col-md-3">
                    <img src={ imagen } alt=" The Family Simpson" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}

export default Home;

