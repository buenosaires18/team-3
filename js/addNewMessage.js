//get & replace to default
function addMessage() {

    const message=document.getElementById("entryMessage");
    message.innerHTML+=`Escribi tu mensaje aqui`;

    //Create and add element
    /*var toAddDiv =  document.createElement('div');
    toAdd.setAttribute('class', 'form-group pull-right pb-chat-labels-right' );

    var toAddSpan = document.createElement('span');
    toAddSpan.setAttribute(class, );

    document.getElementById("chatBox").appendChild(toAdd);*/

    document.getElementById('form-group').innerHTML+=`<div class="form-group pull-right pb-chat-labels-right">
    <span class="label label-primary pb-chat-labels pb-chat-labels-primary">${message}</span><span class="fa fa-lg fa-user pb-chat-fa-user"></span>
    </div>`;

}
