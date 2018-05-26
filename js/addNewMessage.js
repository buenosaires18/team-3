//get & replace to default



function addMessage() {

    let textBox = document.getElementById('entryMessage');
    let message = textBox.value

    let nuevoMensaje = document.getElementById('nuevosMensajes').innerHTML+=`
    <hr><div style="padding-left: 30px; padding-right: 30px" >
    <span >${message}</span><span></span>
    </div><div class="clearfix"></div>`;

    textBox.value = "";



}
