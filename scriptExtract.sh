#!/bin/bash

DIR=$1

if [ -d $1 ];then
	cd $DIR
	recorrer_directorio $DIR	
fi

recorrer_directorio(){
	dir=$(dir -l)
	for file in $dir;
	do
		if [ -d file ];then
			echo "DIR: "$file
			cd $file
			recorrer_directorio ./
		elif [ -f file ];then
			busqueda=`cat $file | grep "Datos Personales"`
			if [ ! -z $busqueda ];then
			
			fi	 				
		fi
	done			
}
