
# Niufoods Frontend

Se crea un proyecto de Frontend usando React.js. El objetivo es mostrar, de forma simplificada, el estado actual de los dispositivos presentes en la base de datos de forma dinámica. Es decir, si se encuentra una modificación de estado en alguno de los dispositivos, se mostrará automáticamente en la plataforma.

## Stack utilizado para el Frontend

**React.js:** v.19.0.0

**Dependencias:** 
```json
    "axios": "^1.7.9",
    "bootstrap": "^5.3.3",
    "react": "^18.3.1",
    "react-bootstrap": "^2.10.6",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
```

**CSS Framework:** TailwindCSS v.3.4.13

**Conexión a API:** Axios

## El repositorio

Clonar el proyecto

```bash
  git clone https://github.com/carlangasgg/sushi_frontend.git
```

Ir a la carpeta del proyecto

```bash
  cd [Directorio creado para el proyecto]
```
Instalar dependencias

```bash
  npm install
```

Iniciar servidor
```bash
  npm start
```

El directorio de src debe lucir así:

```
...
  ├── App.css
  ├── App.js
  ├── App.test.js
  ├── components
  │   ├── LocalesList.js
  │   ├── PosList.js
  │   ├── PrintersList.js
  │   └── RedSystemsList.js
  ├── index.css
  ├── index.js
  ├── logo.svg
  ├── reportWebVitals.js
  ├── services
  │   └── apiService.js
  └── setupTests.js

  ...
```

## A considerar

- Se creó un servicio apiService.js que conecta la aplicación con la API.

- Se creó un componente para cada dispositivo.

- Se integró TailwindCSS para el diseño de la aplicación.

- Se integró Axios para la conexión con la API