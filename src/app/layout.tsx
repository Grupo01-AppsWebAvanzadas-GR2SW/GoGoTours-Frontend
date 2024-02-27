import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - GoGoTours",
  description: "Pá",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //TODO: Add title
  //TODO: Add onClick to toggle actions
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles/main.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
        <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
      </head>
      <body>
        <header className="navbar">
          <div className="navbar__main">
            <button className="button navbar__toggle">
              <i style={{ display: true ? 'block' : 'none' }} className="bi bi-x-lg navbar__close"></i>
              <i style={{ display: true ? 'none' : 'block' }} className="bi bi-list navbar__open"></i>
            </button>
            <a href="/home" className="navbar__logo">
              <img className="navbar__logo-image navbar__logo-image--small" src="/assets/logos/gogotours-iso.png" alt="Logo de GoGoTours" />
              <img className="navbar__logo-image navbar__logo-image--large" src="/assets/logos/gogotours-logo.png" alt="Logo de GoGoTours" />
            </a>
            <button className="button navbar__search-toggle">
              <i className="bi bi-search navbar__search-icon"></i>
            </button>
          </div>
          <form action="/package_search" method="GET" className={`navbar__search ${true ? 'navbar__menu--opened' : 'navbar__menu--closed'}`}>
            <label htmlFor="search" className="form__label" style={{ visibility: 'hidden', maxWidth: 0, opacity: 0, overflow: 'hidden' }}>Encuentra tours hacia tu destino</label>
            <input type="text" placeholder="Encuentra tours hacia tu destino (Quito, Bogotá, etc.)" className="form__input navbar__search-input" id="search" name="destination_place" />
            <button type="submit" className="button button--primary">
              <i className="bi bi-search"></i>
            </button>
          </form>
          <nav className={`navbar__menu ${true ? 'navbar__menu--opened' : 'navbar__menu--closed'}`}>
            <a href="/home" className="navbar__item">Inicio</a>
            <a href="/chat" className="navbar__item">Mensajes</a>

            <div className="navbar__item navbar__buttons">
              <a href="/signup" className="navbar__button button button--secondary">Regístrate</a>
              <a href="/login" className="navbar__button button button--primary">Inicia sesión</a>
            </div>

            <div className="navbar__item navbar__dropdown">
              <button className="navbar__dropdown-button">
                <i className="bi bi-person-circle"></i> Perfil
                <i style={{ display: true ? 'none' : 'block' }} className="bi bi-caret-down-fill"></i>
                <i style={{ display: true ? 'block' : 'none' }} className="bi bi-caret-up-fill"></i>
              </button>
              <div style={{ display: true ? 'block' : 'none' }} className="navbar__dropdown-menu">
                <a href="/logout" className="navbar__dropdown-item">
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Cerrar sesión</span>
                </a>
              </div>
            </div>
          </nav>
        </header>
        <main className="main">
          {children}
        </main>
        <footer className="footer">
          &copy; 2024 GoGoTours
        </footer>
      </body>
    </html>
  );
}
