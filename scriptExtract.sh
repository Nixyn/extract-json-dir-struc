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
		elif [ -f file ];then
			busqueda=`cat $file | grep "Datos Personales"`
			if [ ! -z $busqueda ];then
				echo "obtuve datos "$busqueda			
			fi	 				
		fi
	done			
}


DIR=$1
if [ -d $1 ];then
        cd $DIR
        recorrer_directorio $DIR
fi

