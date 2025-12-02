# Portfolio App Zero

Un portafolio moderno, minimalista y de alto rendimiento construido con las últimas tecnologías web. Diseñado para mostrar proyectos, habilidades y experiencia profesional con una experiencia de usuario fluida y atractiva.

![Portfolio Preview](/public/og-image.png)

## ✨ Características Principales

- **Diseño Moderno y Responsivo**: Interfaz limpia adaptada a todos los dispositivos.
- **Internacionalización (i18n)**: Soporte completo para Español e Inglés.
- **Modo Oscuro/Claro**: Cambio de tema automático (según sistema) o manual.
- **Animaciones Suaves**: Transiciones fluidas y efectos visuales con Framer Motion y Magic UI.
- **Filtrado de Proyectos**: Organización dinámica de proyectos por categorías.
- **Exportación Estática**: Optimizado para despliegue en GitHub Pages.

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Componentes UI**: [Magic UI](https://magicui.design/) & [Lucide React](https://lucide.dev/)
- **Gestor de Paquetes**: [pnpm](https://pnpm.io/)

## 🚀 Comenzando

Sigue estos pasos para ejecutar el proyecto localmente:

### Prerrequisitos

- Node.js 18+ instalado
- pnpm instalado (`npm install -g pnpm`)

### Instalación

1.  Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/portfolio-app-zero.git
    cd portfolio-app-zero
    ```

2.  Instala las dependencias:

    ```bash
    pnpm install
    ```

3.  Inicia el servidor de desarrollo:

    ```bash
    pnpm run dev
    ```

4.  Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Despliegue

Este proyecto está configurado para desplegarse automáticamente en **GitHub Pages** utilizando GitHub Actions.

### Configuración de GitHub Pages

1.  Asegúrate de que el repositorio se llame `portfolio-app-zero` (o actualiza el `basePath` en `next.config.ts`).
2.  Ve a **Settings > Pages** en tu repositorio de GitHub.
3.  En **Source**, selecciona **GitHub Actions**.
4.  Haz un push a la rama `main` y el despliegue comenzará automáticamente.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo como inspiración para tu propio portafolio.

---

Desarrollado con ❤️ por [Tarik Silva Peña](https://github.com/Veerius)
