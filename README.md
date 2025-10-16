# React + Vite

# TP Final Integrador: Pokémon Shop (Pokédex Interactiva)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-593d88?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)

---

## Introducción y Objetivos

Este proyecto es el Trabajo Práctico Final Integrador del curso de Programación Web con React. El objetivo principal es demostrar la capacidad de construir una Single Page Application (SPA) modular, con gestión de estado avanzada, consumo de API paginada y diseño responsive. La aplicación simula una tienda interactiva de Pokémon, permitiendo explorar, comprar y gestionar favoritos, todo con una experiencia de usuario moderna y minimalista.

---

## Características Implementadas

- **Tienda/Listado:** Consumo de la PokeAPI con paginación asíncrona (20 Pokémon por página) y botón "Cargar Más" para obtener más resultados dinámicamente.
- **Vista de Detalle:** Cada Pokémon tiene una página de detalle con fetch anidado para obtener la descripción en español y estadísticas completas.
- **Gestión de Estado Global:** Implementación de Redux Toolkit para centralizar el estado de la aplicación (punto extra).
- **Favoritos:** Posibilidad de añadir o quitar Pokémon de la lista de favoritos desde la Card y la página de detalle.
- **Carrito de Compras:** Sistema de carrito que permite agregar Pokémon, modificar la cantidad y calcular el total. El precio se basa en la cantidad de movimientos del Pokémon.
- **Navegación Completa:** Routing entre Home, Tienda, Detalle, Favoritos y Carrito usando React Router DOM.
- **Diseño Responsive:** Interfaz minimalista con toques retro, basada en sprites y fondos claros.

---

## Arquitectura y Fundamentos Técnicos

- **Estructura Modular:** El proyecto está organizado en carpetas `/pages`, `/components` y `/store` para facilitar la escalabilidad y el mantenimiento.
- **Manejo de Estado:** Redux Toolkit centraliza el estado global (Single Source of Truth), utilizando el patrón de reducers y slices para garantizar la inmutabilidad y la gestión eficiente de los datos.
- **Consumo de API:** El fetching de datos se realiza de forma asíncrona, con paginación y fetch anidado para obtener información adicional de cada Pokémon.
- **Routing:** La navegación entre vistas se gestiona con React Router DOM, permitiendo una experiencia fluida y sin recargas.

---

## Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/jeni9696/tp-final-react-jenifer-cruz-
   ```
2. **Instalar dependencias:**
   ```bash
   npm install
   ```
3. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

---

## Entrega y Despliegue

La aplicación puede desplegarse fácilmente en GitHub Pages.

1. **Instalar gh-pages (si no está):**
   ```bash
   npm install gh-pages
   ```
2. **Desplegar:**
   ```bash
   npm run deploy
   ```

El repositorio oficial se encuentra en: [https://github.com/jeni9696/tp-final-react-jenifer-cruz-](https://github.com/jeni9696/tp-final-react-jenifer-cruz-)
para ver una visualizacion rapida -> [https://jeni9696.github.io/tp-final-react--jenifer-cruz-/#/]
---
