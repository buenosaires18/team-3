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
    
    Logger.log(itemResponses[0].getItem().getTitle())
    
    itemResponses.forEach(function (item){
    
      switch(item.getItem().getTitle()){
      
        case "" :
      
      }
      Logger.log(item.getResponse())
                          
    });
    
    
  }