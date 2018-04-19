#!/bin/bash

function recorrer_directorio {
	dir=`ls`
	for file in $dir;
	do
		if [ -d $file ];then
			cd $file
			recorrer_directorio ./
		elif [ -f $file ];then
			busqueda=`cat $file | grep "Datos Personales"` 
			if [ ! -z "$busqueda" ];then
				NOMBRE=`cat $file | grep -E 'Nombre:* | nombre:*'`
				DNI=`cat $file | grep -E 'Dni:* | dni:*'`
 				CORREO=`cat $file | grep -E 'Correo:* | correo:* | email:* | Email:*'`							
			fi	 				
		fi
	done			
}


DIR=$1
if [ -d $1 ];then
        cd $DIR
        recorrer_directorio $DIR
fi

