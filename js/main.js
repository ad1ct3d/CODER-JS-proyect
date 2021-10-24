// ------------| ENTIDADES |------------

// SWAPI
const URLGET = 'http https://swapi.dev/api/people';

// Empleados
let objEmpleados = [{id: 1234, name: 'Mario'}]

//  selectores
let btnEntrada = document.getElementById('btnEntrada');
let btnSalida = document.getElementById('btnSalida');
let tabla = document.getElementById('dataContainer');


// ------------| FUNCIONES |------------

// agregar un 0 si la hora es menor a 10
function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
};

// ---| HTML PRINTER |---

// ENTRADA

function horarioEntrada() {
    // leer el ID ingresado
    let idEmpleado = document.getElementById('idEmpleado').value;

    // buscar el ID ingresado en el array, si coincide, realizar entrada
    for(i = 0; i < objEmpleados.length; i++) {
        if(idEmpleado == objEmpleados[i].id) {
            let d = new Date ();
            let h = addZero(d.getHours());
            let m = addZero(d.getMinutes());
        
            let time = h + ':' + m;

            // CREAR HTML
            let container = document.getElementById('dataContainer');
            for (let i of objEmpleados) { 

                // crear nombre
                let cell = document.createElement('div');
                cell.innerHTML = i.name;
                cell.className = 'cell';
                cell.id = 'cell';
                container.appendChild(cell)

                // crear HoraioEntrada
                let cell2 = document.createElement('div');
                cell2.innerHTML = time;
                cell2.className = 'cell';
                cell2.id = 'cell'
                container.appendChild(cell2)

                // crear HorarioSalida (vacio)
                let cell3 = document.createElement('div');
                cell3.innerHTML = '';
                cell3.className = 'cell';
                cell3.id = 'cell'
                container.appendChild(cell3);
            }
            console.log(objEmpleados[i].name + ' entrada ' + time);
        }
    }

    // animaciones
    $('.cell').slideDown(200);

}

// SALIDA

function horarioSalida() {
    // leer el ID ingresado
    let idEmpleado = document.getElementById('idEmpleado').value;


    // buscar el ID ingresado en el array, si coincide, realizar salida
    for(i = 0; i < objEmpleados.length; i++) {
        if(idEmpleado == objEmpleados[i].id) {
            let d = new Date ();
            let h = addZero(d.getHours());
            let m = addZero(d.getMinutes());
        
            let time = h + ':' + m;

            // CREAR HTML
            let container = document.getElementById('dataContainer');
            for (let i of objEmpleados) { 

                // crear nombre
                let cell = document.createElement('div');
                cell.innerHTML = i.name;
                cell.className = 'cell';
                cell.id = 'cell';
                container.appendChild(cell)

                // crear HorarioEntrada (vacio)
                let cell2 = document.createElement('div');
                cell2.innerHTML = '';
                cell2.className = 'cell';
                cell2.id = 'cell'
                container.appendChild(cell2)

                // crear HorarioSalida
                let cell3 = document.createElement('div');
                cell3.innerHTML = time;
                cell3.className = 'cell';
                cell3.id = 'cell'
                container.appendChild(cell3);


            }
            console.log(objEmpleados[i].name + ' salida ' + time);
        }
    }

    // animaciones
    $('.cell').slideDown(200);
}


// ------------| EVENTOS |------------

// Entrada
$('#btnEntrada').on('click', horarioEntrada);

// salida
$('#btnSalida').on('click', horarioSalida);