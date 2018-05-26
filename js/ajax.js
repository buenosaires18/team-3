var xmlhttp = new XMLHttpRequest();
xmlhttp.open("POST", "./php/getJsonUsuario.php", true);
xmlhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log(xmlhttp.responseText);
        
        const objeto = JSON.parse(xmlhttp.responseText);
            document.getElementById("nombre").innerHTML+=`Carlos Perez`;
            document.getElementById("intereses").innerHTML=`Gastronomia`;
            document.getElementById("nacimiento").innerHTML+=`24/02/2000`;
            document.getElementById("sexo").innerHTML+=`Hombre`;
            document.getElementById("escuela").innerHTML+=`San Belgrano N10`
            document.getElementById("domicilio").innerHTML+=`Martinez 2100`;
            document.getElementById("ciudad").innerHTML+=`Villa Urquiza`;
            document.getElementById("provincia").innerHTML+=`CABA`;
            document.getElementById("celular").innerHTML+=`CABA`;
            document.getElementById("instagram").innerHTML+=`CarLopez`;
            document.getElementById("twitter").innerHTML+=`CarlosPerez`;
            document.getElementById("linkedin").innerHTML+=`CarlosPerez`;
    }
};