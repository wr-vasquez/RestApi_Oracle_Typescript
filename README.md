## Instalacion de dependencias
npm init --y
mpn i express cors morgan
npm install  -g typescript

# Instalacion de archivo de configuracion tsconfig
tsc --init

npm install nodemon -D

configurar en tsconfig autDir agregarle esta direccion  "./build"

tsc --tipear este comando para crear archivo build 

# Instalar dependencia para leer express en typescript
npm i @types/express -D

# Dependencias para reconocer morgan y cors en type
npm i @types/morgan @types/cors -D