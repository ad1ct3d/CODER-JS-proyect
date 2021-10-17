// Empleados
let objEmpleados = [{id: 1234, name: 'Mario'}]

//  selectores
let btnEntrada = document.getElementById('btnEntrada');
let btnSalida = document.getElementById('btnSalida');
let tabla = document.getElementById('dataContainer');


// Funciones


// printer

// agregar un 0 si la hora es menor a 10
function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
};

function timeTeller() {
    let d = new Date ();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());

    let time = h + ':' + m;
    
};

function horarioEntrada() {

    let idEmpleado = document.getElementById('idEmpleado').value;

    let paso1 = JSON.parse(localStorage.getItem('objEmpleados'));

    // al hacer click consologuea la hora si la id coinside

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
                cell.innerHTML = 'Mario';
                cell.className = 'cell';
                container.appendChild(cell)

                // crear HE (vacio)
                let cell2 = document.createElement('div');
                cell2.innerHTML = time;
                cell2.className = 'cell';
                container.appendChild(cell2)

                // crear HS
                let cell3 = document.createElement('div');
                cell3.innerHTML = '';
                cell3.className = 'cell';
                container.appendChild(cell3);
            }
            console.log(objEmpleados[i].name + ' entrada ' + time);
        }
    }

}

function horarioSalida() {

    
    let idEmpleado = document.getElementById('idEmpleado').value;

    let paso1 = JSON.parse(localStorage.getItem('objEmpleados'));

    // al hacer click consologuea la hora si la id coinside

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
                cell.innerHTML = 'Mario';
                cell.className = 'cell';
                container.appendChild(cell)

                // crear HE (vacio)
                let cell2 = document.createElement('div');
                cell2.innerHTML = '';
                cell2.className = 'cell';
                container.appendChild(cell2)

                // crear HS
                let cell3 = document.createElement('div');
                cell3.innerHTML = time;
                cell3.className = 'cell';
                container.appendChild(cell3);
            }


            console.log(objEmpleados[i].name + ' salida ' + time);
        }
    }


}


// ----EVENTOS----

// Entrada
btnEntrada.addEventListener('click', horarioEntrada);

// salida
btnSalida.addEventListener('click', horarioSalida)