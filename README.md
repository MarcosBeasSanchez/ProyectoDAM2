# ProyectoDAM2

En este proyecto porbaremos realizaremos el front y back de una web

IMPORTANTE:

//COMANDOS PARA BACKEND (hasta implementar Vite)
-------------------------------------------------------
    COMANDOS
    -npm i (node,express,mongoose,morgan,bcryptjs) : importa extensiones 
    -npm init -y : Inicializa un proyecto Node.js creando un archivo package.json
    -npm run dev : Comando para correr el BACKEND

//COMANDOS PARA FRONT
----------------------------
    COMANDOS
    -npm i (vite, react-router-dom ,react-hook-form, cors, axios) : importa extensiones 
    -npm run dev : comando para correr el FRONT 

    https://tailwindcss.com/docs/guides/vite para installar tailwindcss
    https://www.tailwindcss-animated.com/ documentacion tecnica de css animacinones

//PUERTOS
----------
    -localhost:8081 : mongo-express
    -localhost:27017 : mongo
    -localhost:Ejemplo (localhost:5000): puerto donde se haya levantantado el puerto
    -localhost:Ejemlo/funcion (localhost:5000/register): puerto para BACK (thunderClient)
    -localhost:5173 : puerto de vite
    -localhost:5173/funcion (localhost:5173/register) : puerto para FRONT 

//EXTENSIONES PARA VSCODE
--------------------------
    -Thunder client
    -Docker
    -Icons
    -MongoDB for VScode
    -Tailwind CSS intelliSense
    -WSL

//COMANDOS DOCKER
------------------
    LINKS
    https://hub.docker.com/ para docker-compose (mongo y mongo express)
    https://expressjs.com/en/4x/api.html#app documentacion de express (res,req etc)

    COMANDOS GENERALES(MUY UTILES)
    -docker-compose up -d : inicializsa el archivo compose , tambien se puede correr desde la extension docker de vscode
    -docker system prune : eliminando contenedores detenidos, redes no utilizadas, imágenes no utilizadas y volúmenes no utilizados.

    VOLUMENES
    -docker volume ls : lista los volumenes activos
    -docker volume rm VOLUME_NAME : elimina un volumen especifico
    -docker volume prune : elimina los volumenes no utilizados
    
    CONTENEDORES(contienen las imagnes)
    -docker ps : muestra los containers en ejecucion
    -docker ps -a: muestra todos incluidos los que no estan en ejecucion
    -docker stop CONTAINER_ID : detiene el container pero el volumen sige existiendo
    -docker start CONTAINER_ID : ejecuta el contenedor
    -docker rm CONTAINER_ID : elimina contenedor

    IMAGENES(imagenes que utilizamos)
    -docker images : muestra todas las imagenes 
    -docker rmi IMAGE_ID/NAME : elimina una imagen por ID o Nombre 
    -docker image prune : elimina todas las imagenes no utilizadas
 
//Comandos GitHub
------------------
     COMANDOS
    -git add . : añade todos los cambios realizados a la cola 
    -git commit -m "Guardando mis cambios locales" : mensaje del commit 
    -git stash : guarda los cambios temporalmente
    -git stash pop: recupera los cambios tempolares con el git stash
    -git status : lista los cambios , en rojo no añadidos y en verde añadidos
    -git reset --soft <commit> : Mueve el puntero de HEAD al commit especificado, pero mantiene los cambios en el índice (staging area). 
    -git reset --hard <commit>: Mueve el puntero de HEAD al commit especificado y borra cualquier cambio en el índice y en el árbol de trabajo.
    -git clean se utiliza para eliminar archivos no rastreados en tu directorio de trabajo.
    -git clean -n: Muestra qué archivos serían eliminados, pero no los borra realmente. Es útil para hacer una comprobación antes de ejecutar el comando.
    -git clean -f: Elimina los archivos no rastreados en tu árbol de trabajo.
    -git fetch: se utiliza para obtener los cambios de un repositorio remoto sin aplicar esos cambios a tu rama de trabajo.
    -git fetch origin: Descarga todos los cambios del repositorio remoto llamado origin (generalmente el remoto por defecto).
    -git merge /git rebase : fusioja los cambios traidos con el git fetch 

//Para reinstalar node_modules(EN CASO DE ERROR)
------------------------------
    COMANDOS(introducir en el mismo orden)
    -rm -rf node_modules
    -rm package-lock.json
    -npm install

//APUNTES 
---------
Para levantar el backend y hacer un POST con mongo, necesitamos levantar el docker-compose y la bbdd y despues podremos hacer el POST de nuestro JSON desde
thunder client.