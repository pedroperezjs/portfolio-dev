import img from '../public/img-perfil.png';

export const PortfolioApp = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="image-content">
          <div className="card-img">
            <img
              src={img}
              alt="img-profile"
            />
          </div>
        </div>
        <div className="text-content">
          <div className="card-text">
            <h1 className="text-name">👋 ¡Hola! Soy Pedro</h1>
            <p className="text-bio">
              Desarrollador web con experiencia en WordPress y ReactJS. Desde
              2021 construyo sitios en Wordpress, modernos y pensados para
              generar resultados reales.
            </p>
            <p className="text-bio">
              También disfruto programar en JavaScript usando ReactJS, creando
              interfaces dinámicas y experiencias digitales eficientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
