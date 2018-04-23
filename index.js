
var shell= require('shelljs');

var path=process.argv[2];
console.log(get_data(readfile(path)));

function readfile(file){
    var user=""
    if (shell.test('-f',file)){
        let busqueda=shell.cat(file).grep('Datos Personales');
        if(busqueda.stdout){    
            var nombre=shell.cat(path).grep('Nombre:* | nombre:*');
            var dni=shell.cat(path).grep('Dni:* | dni:*');
            var email=shell.cat(path).grep('Correo:* | correo:* | email:* | Email:*');
            user=nombre.stdout+dni.stdout+email.stdout;
            return user
        }
    }    
}


function get_data(data){
    var user={
    }
           var datos_json = data.split('\n')
           var name=datos_json[0].split(":");
           user.name=name[1].replace('\n','').replace(' ','').replace('\r','');

           
           var user_dni=datos_json[1].split(":");
           user.dni=user_dni[1].replace('\n','').replace(' ','').replace('\r','');

           var user_email=datos_json[2].split(":");
           user.email=user_email[1].replace('\n','').replace(' ','').replace('\r','');
           return user;
}

function save_database(){

}