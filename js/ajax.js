var xmlhttp = new XMLHttpRequest();
xmlhttp.open("POST", "./php/getJsonUsuario.php", true);
xmlhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log(xmlhttp.responseText);
        
        const objeto = JSON.parse(xmlhttp.responseText);
            document.getElementById("nombre").innerHTML=`${objeto.nombre} ${objeto.apellido}`;
            document.getElementById("intereses").innerHTML=`Tecnologia - Desarrollar mi carrera - Programacion`;
            document.getElementById("nacimiento").innerHTML=`${objeto.fechaNacimiento}`;
            document.getElementById("sexo").innerHTML=`Hombre`;
            document.getElementById("escuela").innerHTML=`${objeto.escuela}`;
            document.getElementById("domicilio").innerHTML=`${objeto.calle}`;
            document.getElementById("ciudad").innerHTML=`${objeto.ciudad}`;
            document.getElementById("provincia").innerHTML=`${objeto.provincia}`;
            document.getElementById("celular").innerHTML=`${objeto.celular}`;
            document.getElementById("instagram").innerHTML=`${objeto.instagram}`;
            document.getElementById("twitter").innerHTML=`${objeto.twitter}`;
            document.getElementById("linkedin").innerHTML=`${objeto.linkedin}`;
    }
};