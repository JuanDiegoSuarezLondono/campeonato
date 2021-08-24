# campeonato

Sistema web soportado en arquitectura API REST que permite el registro y autenticación de usuarios y el registro de los partidos jugados y por jugar de equipos de futbol (previamente cargados).

## Description

- En el proceso de desarrollo del sistema se debe utilizar un repositorio de código Git y subirlo a GitHub
- El sistema web debe permitir la creación de usuarios indicando su nombre, correo, username y password
- Una vez el usuario a iniciado sesión se debe presentar por medio de una interfaz web las siguientes opciones:
  - Registrar Partido.
  - Ver Partidos
- Al ingresar a la opción de “Registrar Partido” se le debe presentar una página web con un formulario HTML solicitando la información del partido al usuario
- Al agregar un nuevo partido se debe registrar: fecha, equipo local y equipo visitante
  - En el formulario de partido se debe hacer uso del elemento HTML select para la selección de los equipos (local y visitante), en cada opción del select se debe presentar el nombre del equipo
  - Después de crear un partido el sistema debe direccionarse a la opción “Ver Partidos”
  - En la información del partido debe quedar registrado que usuario lo creó
- Al ingresar a la opción de “Ver Partidos”, el sistema debe mostrar en una página HTML el listado de partidos registrados ordenados por fecha del más reciente al más antiguo indicando la fecha, los nombres de los 2 equipos enfrentados y el resultado del partido
  - Queda a decisión del desarrollador la forma en cómo se mostrará esta información
- En caso de que el partido a mostrar no se haya jugado aún (no se han registrado goles), el usuario podrá hacer click sobre el partido y será direccionado a otra página HTML en donde podrá actualizar el marcador del partido
  - Después de actualizar un marcador el sistema debe direccionarse a la opción “Ver Partidos”
- Todas las páginas HTML deben tener aplicado un estilo CSS propio en donde se definan las reglas de ubicación de elementos, tamaño, etc… (no se permite el uso de ningún framework CSS)

## Comencemos

En la siguiente guía se ilustrarán los pasos necesarios para poder implementar el sistema web de campeonato solicitado como test para “formadores y tutores ciclo 3” desarrollado en html, css y javascript (para el front end), y php (para el back end) puros sin frameworks. Todo se realizará mediante un ejemplo implementado en un servidor desplegado en el servicio EC2 de Amazon AWS.

**Nota:** El front end y el back end están en el mismo repositorio con fines de agilizar el proceso de despliegue. El back end esta en el directorio “campeonato_API”.

### Especificaciones del servidor usado

Para el despliegue de la página web se empleo un servidor “**Ubuntu Server 20.04 LTS (HVM), SSD Volume Type (64-bit (x86))**” con una instancia “t2micro” con las características de la siguiente tabla:

![Captura](https://user-images.githubusercontent.com/89165682/130540742-96215d4d-6555-49ee-8d61-362826080b81.PNG)


| TITULO1| TITULO2|
| ----- | ---- |
| CONTENIDO COLUMNA 1 | CONTENIDO COLUMNA 2 |




Además, se habilitaron los puertos para permitir el trafico de todo tipo desde cualquier fuente (aunque sea poco seguro es solo para testear el proyecto).
Se descarga la llave privada y se guarda en el equipo local para posteriormente acceder desde la consola local del ordenador o un programa tercero como “[MobaXterm](https://mobaxterm.mobatek.net/download-home-edition.html)”. Las credenciales para acceder son:

1. Public IPv4 DNS: ec2-54-232-133-136.sa-east-1.compute.amazonaws.com
2. Nombre de usuario: ubuntu
3. La llave privada previamente descargada.

Una vez terminado, la instancia del servidor se autoconfigura con el id público “54.232.133.136” que es la dirección donde va a estar alojada nuestra página.

### Installing

* How/where to download your program
* Any modifications needed to be made to files/folders

### Executing program

* How to run the program
* Step-by-step bullets
```
code blocks for commands
```

## Help

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## Authors

Contributors names and contact info

ex. Dominique Pizzie  
ex. [@DomPizzie](https://twitter.com/dompizzie)

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)
