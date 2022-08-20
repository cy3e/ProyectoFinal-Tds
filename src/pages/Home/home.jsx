//imports the react resources
import React from "react";
import { useNavigate } from "react-router-dom";

//css
import './home.css';

let navigation = useNavigate;



const Home  = () =>
{
    return(
            <div className="App" onLoad={console.log('funcionando')}>
            <div>
              <body>
                  <div id="carouselExampleControls" class="carousel slide carousel-fade" data-ride="carousel">
                      <div class="carousel-inner">
                          <div class="carousel-item active">
                              <img src="https://picsum.photos/id/410/1400/550" />
                              <div class="carousel-caption d-none d-md-block">
                                  <a href= 'About' class="btn btn-lg btn-outline-light rounded-0"> CONOCER MÁS</a>
                              </div>
                          </div>
                          <div class="carousel-item">
                              <img src="https://picsum.photos/1920/1080" class="d-block w-100" alt="..." />
                          </div>
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                      </a>
                  </div>
                  <div class="container mt-5 mb-5">
                      <div class="row align-items-center bg-dark">
                          <div class="col-sm-6">
                              <h1 class="text-center text-warning display-4">BIENVENIDOS</h1>
                              <p class="text-white text-justify pt-3 p-4">Somos el tipo de empresa es operador de servicio, dentro de la compañía ofrecemos servicios de plomería, electricidad, vaciado con wincher, diseño arquitectónico, administración de condominios, etc. Los clientes serán personas físicas o jurídicas que requieran de nuestros servicios a la hora de realizar cualquier tipo de construcción. </p>
                              <p class="text-white text-justify pt-3 p-4">El mundo cambió y con ello el diseño y la construcción, es tiempo de cambios de adaptarnos a las nuevas tendencias en texturas, colores, espacios y un mundo de opciones a la hora de construir.  La empresa venderá nuestros servicios para cualquier trabajo de construcción requerido y también venderemos productos de construcción al por mayor para clientes que necesiten los utensilios necesarios. </p>
                          </div>
                          <div class="col-sm-6">
                              <div class="row">
                                  <div class="col-12 pt-5 pb-5 bg-warning">
                                      <h2 class="h1 pt-5">CONSTRUCCIÓN</h2>
                                      <p class="text-center pb-5">El negocio atenderá los requerimientos de construcción del cliente para ellos, si hay necesidad de construir torres con diferentes departamentos, se hacen convenios para que nuestra empresa constructora pueda empezar a trabajar, oficinas o alguna de las obras que quiera hacer en su casa, nosotros nos encargaremos.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </body>
          </div>
        </div>
    )
}
export default Home;