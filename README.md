# Proyecto de Recolección de Materiales Reciclables

Este proyecto de recolección de materiales reciclables permite gestionar la recolección de materiales y usuarios. A continuación, se describen los pasos para configurar y ejecutar este proyecto en tu entorno local.

## Descarga del Repositorio

1. Abre tu terminal o línea de comandos.

2. Clona el repositorio desde GitHub ejecutando el siguiente comando:

```bash
    git clone https://github.com/fabianstor/MUTA.git
```

## Requisitos

- Node.js v18.17.1.

## Instalación de Dependencias

1. Navega hacia la carpeta del proyecto

2. Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
    npm i
```

## Configuración de la Base de Datos

1. Abre una conexión a una base de datos de PostgreSQL.

2. Agrega las credenciales de la base de datos al archivo `.env` en la raíz del proyecto:

```bash
    DATABASE=postgres
    PASSWORD=admin
    USER=postgres
```

Asegúrate de configurar correctamente las credenciales.

## Ejecución del Proyecto

1. Una vez que todas las dependencias están instaladas y la configuración de la base de datos está lista, puedes iniciar el proyecto ejecutando:

```bash
    npm run dev
```


Esto pondrá en marcha la aplicación en tu entorno local en el puerto especificado en el archivo `.env` (por defecto, el puerto 3000).

## Pruebas con Postman

1. Una vez que el servicio esté en ejecución, abre la colección de Postman incluida en el proyecto.

2. Utiliza Postman para realizar pruebas y explorar las funcionalidades del proyecto.
