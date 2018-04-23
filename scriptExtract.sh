#!/bin/bash

function recorrer_directorio {
	dir=`ls`
	for file in $dir;
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
fi

