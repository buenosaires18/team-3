function onSubmit(data){

    /*
    //var connectionName = 'Instance_connection_name';
    var user = 'root';
    var userPwd = 'team3db';
    var db = 'pescardb';
    
    var dbUrl = 'jdbc:google:mysql://' + connectionName + '/' + db;
    
    var conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
    
    var stmt = conn.prepareStatement('INSERT INTO entries '
                                     + '(guestName, content) values (?, ?)');
    stmt.setString(1, 'First Guest');
    stmt.setString(2, 'Hello, world');
    stmt.execute();
    */
    
    var itemResponses = data.response.getItemResponses()
    
    itemResponses.forEach(function (item){
    
      switch(item.getItem().getTitle()){
      
        case "Luego de terminar la secundaria piensas perseguir educación superior (Universidad, tecnicatura...)" :
          //Si / No
          Logger.log(item.getResponse())
          break;
          
        case "Intereses" :
          //Tecnologia / Desarrollar mi carrera / Programacion
          Logger.log(item.getResponse())
          break;
        
        case "Tal vez tengas un interés que no te mostramos" :
          // Free entry
          Logger.log(item.getResponse())
          break;
          
        case "Recomendarías la experiencia a otros?" :
          //Si / No / Tal vez
          Logger.log(item.getResponse())
          break;
          
        case "Que puntaje le daría a la experiencia": 
          //1..5
          Logger.log(item.getResponse())
          break;
          
        case "Agradeceríamos todos tus comentarios acerca de la experiencia con Fundación Pesca" :
          // Free entry
          Logger.log(item.getResponse())
          break;
          
        case "Te sentiste incluido en esta empresa?":
          //Si / No
          Logger.log(item.getResponse())
          break;
          
        case "Te gustaría un empleo a largo plazo en la empresa?":
          //Si / No / Tal vez
          Logger.log(item.getResponse())
          break;
          
        case "Como puntearías a la empresa?":
          //1..5
          Logger.log(item.getResponse())
          break;
          
        case "Agradeceríamos todos tus comentarios acerca de la experiencia con EMPRESA":
          // Free entry
          Logger.log(item.getResponse())
          break;
      
      }
    });
    
    
  }