#!/bin/bash

function recorrer_directorio {
	dir=`ls`
	echo "tengo esto: "$dir
	for file in $dir;
	do
		echo "soy : "$file
		if [ -d $file ];then
			echo "DIR: "$file
			cd $file
			recorrer_directorio ./
		elif [ -f $file ];then
			echo "Soy un fichero"
			busqueda=`cat $file | grep "Datos Personales"`
			echo "una busqueda"$busqueda 
			if [ -z "$busqueda" ];then
				datos=`cat $file` 
				echo "obtuve datos "$busqueda
				echo "mis datos son" $datos			
			fi	 				
		fi
	done			
}


DIR=$1
if [ -d $1 ];then
        cd $DIR
        recorrer_directorio $DIR
fi

