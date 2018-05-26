//get & replace to default



function addMessage() {

    let message = document.getElementById('entryMessage').value;

    //Create and add element
    /*var toAddDiv =  document.createElement('div');
    toAdd.setAttribute('class', 'form-group pull-right pb-chat-labels-right' );

    var toAddSpan = document.createElement('span');
    toAddSpan.setAttribute(class, );

    document.getElementById("chatBox").appendChild(toAdd);*/

    let nuevoMensaje = document.getElementById('nuevosMensajes').innerHTML+=`
    <hr><div style="padding-left: 30px; padding-right: 30px" class="form-group pull-right pb-chat-labels-right">
    <span class="label label-primary pb-chat-labels pb-chat-labels-primary">${message}</span><span class="fa fa-lg fa-user pb-chat-fa-user"></span>
    </div><div class="clearfix"></div>`;

    message.value = "Escriba su mensaje aqui";

}
