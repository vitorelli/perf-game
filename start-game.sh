#! /bin/bash

if [ -z $1 ]
then

	echo "Before start, please install apache2-utils
Please use .\start-game.sh URL"

else
	echo "Warm up"
	ab -n 1000 -c 100 -p payload.json -T application/json -m POST -k http://$1/api/product/createProduct

	echo "Let's start the game :)"
	ab -n 100000 -c 1000 -p payload.json -T application/json -m POST -k http://$1/api/product/createProduct
fi