var xmlhttp = new XMLHttpRequest();
xmlhttp.open("POST", "./php/retornarPublicaciones.php", true);
xmlhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        let userPub=xmlhttp.responseText;
        document.getElementById('newsfeed').innerHTML='';
        for(let i=0;i<userPub;i++){
            document.getElementById('newsfeed').innerHTML+=`
            <div class="card" style="width: 100%;">
            <img class="card-img-top" src="${userPub.imagen}" alt="Card image cap">
            <div class="card-body" item-width="auto">
                <h5 class="card-title">${userPub.titulo}</h5>
                <p class="card-text">${userPub.texto}</a>
            </div>
        </div>`;
        }
    }
};