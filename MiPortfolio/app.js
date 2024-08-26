import React from "react";
import "./styles.css";

function App() {
  return (
    <div>
      <header>
        <h1>Mi Portafolio</h1>
        <nav>
          <ul>
            <li>
              <a href="#sobre-mi">Sobre mí</a>
            </li>
            <li>
              <a href="#proyectos">Proyectos</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="sobre-mi">
        <h2>Sobre mí</h2>
        <p>¡Hola! soy Gabi, soy una estudiante. Me especializo en TIC.</p>
      </section>

      <section id="proyectos">
        <h2>Proyectos</h2>
        <div className="proyecto">
          <h3>Proyecto 1</h3>
          <p>Descripción breve del proyecto.</p>
        </div>
        <div className="proyecto">
          <h3>Proyecto 2</h3>
          <p>Descripción breve del proyecto.</p>
        </div>
      </section>

      <section id="contacto">
        <h2>Contacto</h2>
        <form>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>

      <footer>
        <p>© 2024 Gabi. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
