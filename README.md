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

### Requisitos previos

En un servidor linux instalar lo siguiente:

* Apache: "sudo apt-get install apache2".
* Mysql: "sudo apt-get install mysql-server".
* PHP: "apt-get install php libapache2-mod-php php-mysql".
* ex. Windows 10

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