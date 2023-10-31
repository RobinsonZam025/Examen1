var datosPersonales = [];
        function registrarDatos() {
            var nombre = document.getElementById("nombre").value;
            var apellido = document.getElementById("apellido").value;
            var fechan =  new Date(document.getElementById("fechan").value);
            var hoy = new Date();
            var edad = hoy.getFullYear() - fechan.getFullYear()
            var sexo = document.getElementById("sexo").value;

            var nuevoRegistro = {
                nombre: nombre,
                apellido: apellido,
                fechan: fechan.toLocaleDateString(),
                edad: edad,
                sexo: sexo,
            };

            datosPersonales.push(nuevoRegistro);
            mostrarDatosRegistrados();
            limpiarFormulario();
        }

        document.getElementById("fechan").addEventListener("change", calcularEdad);

        function calcularEdad() {
            var fechan = new Date(document.getElementById("fechan").value);
            var hoy = new Date();
            var edad = hoy.getFullYear() - fechan.getFullYear();
            document.getElementById("edad").value = edad;
        }

        function mostrarDatosRegistrados() {
            var tabla = document.getElementById("tablaDatos");
            var tbody = document.getElementById("datosRegistrados");
            tbody.innerHTML = "";

            datosPersonales.forEach(function (registro) {
                var row = document.createElement("tr");
                var nombreCell = document.createElement("td");
                var apellidoCell = document.createElement("td");
                var fechanCell = document.createElement("td");
                var edadCell = document.createElement("td");
                var sexoCell = document.createElement("td");

                nombreCell.textContent = registro.nombre;
                apellidoCell.textContent = registro.apellido;
                fechanCell.textContent = registro.fechan;
                edadCell.textContent = registro.edad;
                sexoCell.textContent = registro.sexo;

                row.appendChild(nombreCell);
                row.appendChild(apellidoCell);
                row.appendChild(fechanCell);
                row.appendChild(edadCell);
                row.appendChild(sexoCell);

                tbody.appendChild(row);
            });
        }

        function buscarPersona() {
            var nombreBusqueda = document.getElementById("Busqueda").value;
            var tablaResultadoBusqueda = document.getElementById("tablaResultadoBusqueda");
            var tbodyResultadoBusqueda = document.getElementById("resultadoBusqueda");
            tbodyResultadoBusqueda.innerHTML = "";

            var personasEncontradas = datosPersonales.filter(function (registro) {
                return registro.nombre.toLowerCase() === nombreBusqueda.toLowerCase();
            });

            if (personasEncontradas.length > 0) {
                personasEncontradas.forEach(function (persona) {
                    var row = document.createElement("tr");
                    var nombreCell = document.createElement("td");
                    var apellidoCell = document.createElement("td");
                    var fechanCell = document.createElement("td");
                    var edadCell = document.createElement("td");
                    var sexoCell = document.createElement("td");

                    nombreCell.textContent = persona.nombre;
                    apellidoCell.textContent = persona.apellido;
                    fechanCell.textContent = persona.fechan;
                    edadCell.textContent = persona.edad;
                    sexoCell.textContent = persona.sexo

                    row.appendChild(nombreCell);
                    row.appendChild(apellidoCell);
                    row.appendChild(fechanCell);
                    row.appendChild(edadCell);
                    row.appendChild(sexoCell);

                    tbodyResultadoBusqueda.appendChild(row);
                });
            } else {
                var row = document.createElement("tr");
                var mensajeCell = document.createElement("td");
                mensajeCell.textContent = "Persona no encontrada";
                mensajeCell.colSpan = 5;
                row.appendChild(mensajeCell);
                tbodyResultadoBusqueda.appendChild(row);
            }
        }

        function limpiarFormulario() {
            document.getElementById("nombre").value = "";
            document.getElementById("apellido").value = "";
            document.getElementById("fechan").value ="";
            document.getElementById("edad").value = "";
            document.getElementById("sexo").value = "";
        }