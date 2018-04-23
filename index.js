
var shell= require('shelljs');

var path=process.argv[2];
get_data(path);
/* recorrer_directorio(path);
function recorrer_directorio(path){
	shell.ls(path).forEach(function(file){
        console.log(file);
        console.log(shell.test('-d',file));
        if(shell.test('-d',file)){
            console.log("directorio");
            shell.cd(file);
            recorrer_directorio('./');
            shell.cd('..');
        }else if(shell.test('-f',file)){
            console.log("fichero");
            let busqueda=cat(file).grep('Datos Personales');
            if(busqueda){
                let nombre=cat(file).grep('-E','Nombre:* | nombre:*')
                console.log(nombre);
            }
        }
    })
}  */


function get_data(path){
    var user={
    }
    if (shell.test('-f',path)){
       let busqueda=shell.cat(path).grep('Datos Personales');
       if(busqueda.stdout){
           var nombre=shell.cat(path).grep('Nombre:* | nombre:*');
           var name=nombre.stdout.split(":");
           user.name=name[1].replace('\n','').replace(' ','');

           let dni=shell.cat(path).grep('Dni:* | dni:*');
           var user_dni=dni.stdout.split(":");
           user.dni=user_dni[1].replace('\n','').replace(' ','');

           let email=shell.cat(path).grep('Correo:* | correo:* | email:* | Email:*');
           var user_email=email.stdout.split(":");
           user.email=user_email[1].replace('\n','').replace(' ','');
           return user;
       }
    }
}
	/* for file in $dir;
	do
		if [ -d $file ];then
			cd $file
			recorrer_directorio ./
			cd ..
		elif [ -f $file ];then
			busqueda=`cat $file | grep "Datos Personales"` 
			if [ ! -z "$busqueda" ];then
				NOMBRE=`cat $file | grep -E 'Nombre:* | nombre:*' | cut -d ':' -f 2 | cut -f 2-4 -d ' '`
				DNI=`cat $file | grep -E 'Dni:* | dni:*' | cut -d ':' -f 2 | cut -f 2 -d ' '`
 				CORREO=`cat $file | grep -E 'Correo:* | correo:* | email:* | Email:*' | cut -d ':' -f 2 | cut -f 2 -d ' '`
				echo "{ \"name\":\""$NOMBRE"\", \"dni\":"\"$DNI"\", \"email\":"\"$CORREO"\"}" >> ~/Escritorio/users.json							
			fi	 				
		fi
	done			
}


DIR=$1
if [ -d $1 ];then
        cd $DIR
        recorrer_directorio $DIR
	cat ~/Escritorio/users.json
fi */