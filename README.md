# MapsApp

Esta aplicación consiste en un mapa creado con [Mapbox](https://www.mapbox.com/). Referente a la creación de las variables de entorno, no se debe usar directamente en [Angular CLI](https://github.com/angular/angular-cli), a menos que ya estén creadas. La razón es que esas variables se crean basadas en la configuración del archivo `.env`, el cual es global. Los pasos son los siguientes:

1. Clonar el archivo `.env.template` y renombrarlo a `.env`
2. Llenar las variables de entorno personalizadas
3. Crear Angular Environments con el comando `npm run envs` (opcional)
4. Ejecutar la aplicación en desarrollo (`npm run start`) o en producción (`npm run build`)

En cuanto a la aplicación, hay un menú con 4 opciones para interactuar con el mapa:
- **FullScreen** = Poner el mapa en pantalla completa
- **ZoomRange** = Obtener las coordenadas geográficas reales con un medidor de zoom
- **Marcadores** = Ver los marcadores establecidos en el mapa. Se pueden añadir, mover y borrar
- **Lugares** = Ver la descripción de los diferentes lugares favoritos en las ubicaciones seleccionadas