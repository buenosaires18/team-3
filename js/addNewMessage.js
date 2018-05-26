//get & replace to default



function addMessage() {

    var textBox = document.getElementById('entryMessage');
    let message = textBox.value;

    let nuevoMensaje = document.getElementById('nuevosMensajes').innerHTML+=`
    <hr><div style="padding-left: 30px; padding-right: 30px" >
    <span >${message}</span><span></span>
    </div><div class="clearfix"></div>`;

    textBox.value = "";


    response();
}


function response() {
    setTimeout( ()=>{
        let nuevoMensaje = document.getElementById('nuevosMensajes').innerHTML+=`
        <hr><div style="padding-left: 30px; padding-right: 30px; background-color: rgb(253, 221, 184)" >
        <span >Si, va a ser genial!</span><span></span>
        </div><div class="clearfix"></div>`;
    },3000);
    

}

