# Front end de la prueba

En el front end alcancé a hacer la autenticación, el registro de usuario, y el registro del admin tocaría hacerlo por Postman ya que no me alcanzó el tiempo para hacerlo.

Otra cosa que hice fue darle funcionalidad al administrador. Cuando la página detecta que es un administrador, al hacer clic en donde sale el nombre de usuario te saldrá la opción agregar más empleados.

Tanto el usuario como el admin pueden ve a los empledos y a las solicitudes cuando esten cargados en la db.



## Levantar el Proyecto en Docker

Para levantar el proyecto utilizando Docker, sigue estos pasos:

1. Asegúrate de tener Docker y Docker Compose instalados en tu máquina.
2. Construye la imagen de Docker:

    ```sh
    docker-compose build
    ```

3. Levanta los servicios definidos en `docker-compose.yml`:

    ```sh
    docker-compose up
    ```

4. La aplicación debería estar corriendo en el puerto especificado en tu `Dockerfile` y `docker-compose.yml`. Puedes acceder a ella a través de `http://localhost:<puerto>`.

### Variables de Entorno

Asegúrate de configurar las variables de entorno necesarias en tu `docker-compose.yml` o en un archivo `.env`.

## Comandos Útiles

- **Construir la imagen**: `docker-compose build`
- **Levantar los servicios**: `docker-compose up`
- **Detener los servicios**: `docker-compose down`

Si necesitas ejecutar comandos específicos dentro del contenedor, puedes utilizar:

```sh
docker-compose exec <nombre-del-servicio> <comando>
