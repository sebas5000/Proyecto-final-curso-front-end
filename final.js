//datos basicos automaticos para el CV

fetch('https://randomuser.me/api')
.then(resp => resp.json())
.then((data) => {
    const datos = data.results;
    
    document.getElementById('nombre').innerHTML = '<i class="fa-solid fa-user fa-2x"></i>  '+datos[0].name.last+" "+datos[0].name.first;
    document.getElementById('mail').innerHTML = '<i class="fa-solid fa-envelope fa-2x"></i>  '+datos[0].email+ " ";
    let fecha = datos[0].dob.date.slice(0,10);
    //console.log(fecha); log para probar los datos q vienen en el json
    document.getElementById('cumple').innerHTML = '<i class="fa-solid fa-cake-candles fa-2x"></i>  '+fecha;
    document.getElementById('direccion').innerHTML = '<i class="fa-solid fa-house-user fa-2x"></i>  '+datos[0].location.street.number+" "+datos[0].location.street.name+" street";
    document.getElementById('telefono').innerHTML = '<i class="fa-solid fa-phone fa-2x"></i>  '+datos[0].cell;
    document.getElementById('basicos').innerHTML = '<img src="  '+datos[0].picture.large+'" width="70%"> ';
});

// botones con icono para cambiar los modos de colores de la pagina
document.getElementById('bcolor').addEventListener('click', function (){
    console.log("cambio de colores");
    document.body.style.backgroundColor = '#141415';
    document.body.style.color = 'white';
    document.getElementById('bcolor').style.display='none';
    document.getElementById('bbcolor').style.display='block';
    console.log('Se cambio a modo oscuro');
});

document.getElementById('bbcolor').addEventListener('click', function (){
    console.log("cambio de colores");
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    document.getElementById('bbcolor').style.display='none'
    document.getElementById('bcolor').style.display='block';
    console.log('Se cambio a modo claro');
});

// mensajes de movimiento por el html
document.getElementById('b1').addEventListener('click' , function(){
    console.log('Se movio a la parte de informacion basica en el CV.');
});

document.getElementById('b2').addEventListener('click' , function(){
    console.log('Se movio a la parte de informacion de niveles e idiomas en el CV.');
});

document.getElementById('b3').addEventListener('click' , function(){
    console.log('Se movio a la parte de informacion de conocimientos informaticos en el CV.');
});

document.getElementById('flecha').addEventListener('click' , function(){
    console.log('Se movio al inicio del CV.');
});


