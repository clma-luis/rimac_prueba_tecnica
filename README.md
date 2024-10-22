# Proyecto de Prueba Técnica para RIMAC Seguros

Este proyecto es una prueba técnica para la empresa de seguros RIMAC de Perú. Ha sido desarrollado utilizando React, TypeScript y Sass. En él se han aplicado buenas prácticas de programación, siguiendo los principios SOLID y Clean Code, así como un manejo adecuado de rutas con React Router DOM y un manejo eficiente del estado global con hooks. Se han creado componentes reutilizables y contenedores, y el proyecto está dividido en módulos para mejorar la organización y la mantenibilidad.


## Introducción
La importancia de implementar buenas prácticas en el desarrollo de software no puede subestimarse. Al aplicar principios como SOLID y Clean Code, garantizamos que nuestro código sea más comprensible, escalable y fácil de mantener. Este enfoque no solo mejora la calidad del código, sino que también facilita la colaboración entre equipos y la integración de nuevas funcionalidades en el futuro.

## Demo
Puedes ver un demo en vivo de la aplicación en el siguiente enlace: [Demo del Proyecto](https://rimac-prueba-tecnica-mci1.vercel.app/)

## Estructura del Proyecto
La estructura de carpetas dentro de la carpeta src es la siguiente:


```plaintext
src/
├── components/
├── modules/
│   ├── components/
│   └── pages/
└── shared/
    ├── hooks/
    ├── providers/
    ├── icons/
    ├── interfaces/
    ├── layouts/
    └── pages/
```



### Descripción de Carpetas

- **components**: Contiene los componentes reutilizables utilizados en toda la aplicación.
- **modules**: Incluye componentes y páginas específicos que forman parte de diferentes módulos de la aplicación.
- **shared**: Agrupa hooks personalizados, proveedores de contexto, íconos, interfaces, layouts y páginas que son compartidos en toda la aplicación.

## Funcionalidades

- **Responsive**: El proyecto es totalmente responsive, asegurando una experiencia de usuario óptima en dispositivos móviles y de escritorio.
- **Estado Global**: Se implementó un manejo eficiente del estado global utilizando hooks, lo que facilita la gestión del estado de la aplicación.
- **Rutas**: Se utilizó React Router DOM para manejar las rutas de manera efectiva.

## Instalación

Para instalar y ejecutar el proyecto en tu máquina local, sigue estos pasos:

1. **Clona el repositorio:**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd [NOMBRE_DEL_REPOSITORIO]

