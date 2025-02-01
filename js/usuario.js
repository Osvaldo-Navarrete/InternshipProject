function VerificarUsuario(){
        var usu = $("#txt_usu").val(); 
        var con = $("#txt_con").val(); 

        if(usu.length==0 || con.length==0){
            return Swal.fire({
                icon: 'warning',
                title: 'Datos invalidos',
                closeOnClickOutside: false,
                background: 'rgba(255, 255, 255, 0.938)',
                text: 'Por favor, introduzca usuario y/o contraseña'
            });
        }

        if(usu.length>0 || con.length>0){
            return Swal.fire({
                icon: 'success',
                title: 'Datos correctos',
                closeOnClickOutside: false,
                background: 'rgba(255, 255, 255, 0.938)',
                text: 'Bienvenida/o al sistema' 
            }).then(function() { window.location = "vista/vista_index.html"; });
        }
      alert ("Ok")
      } 
      

//function VerificarUsuario(){
  //  var usu = $("#txt_usu").val(); 
    //var con = $("#txt_con").val(); 

    //if(usu.length==0 || con.length==0){
       // return Swal.fire({
         //   icon: 'warning',
            //title: 'Datos invalidos',
          //  closeOnClickOutside: false,
           // background: 'rgba(255, 255, 255, 0.938)',
         //   text: 'Por favor, introduzca usuario y/o contraseña'
       // })
       //$.ajax({
         //  url:'controller/controller_login.php', 
           //type: 'POST',
          // data:{
            //   user:usu,
              // pass:con
           //}
       //}).done(function(resp)){
           //if(resp==0){
           //  Swal.fire("Mensaje de error", "datos incorrectos","error");
       //    }else{
            //    Swal.fire("Mensaje de confirmación", "Bienvenido al sistema","success");
         //  }
//}