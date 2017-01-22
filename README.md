SpeedRunsLive Front End Codebase
==========================

This is the codebase for the SRL front end. There is no framework. If you are going to set up the API as well, it is recommended that you do that first.

Windows Installation
------------

0. Make sure to clone the repo inside of your /Users/ directory. This is required for volume mounting.
0. Install [Docker Toolbox](https://www.docker.com/products/docker-toolbox) for Windows
0. Boot up Docker terminal
0. You will need to add the IP of your docker machine to your /etc/hosts file (use whatever alias you want). You can run `docker-machine ip` to retrieve it.
0. Navigate to the root of the project
0. Create a network by running `docker network create frontend`
0. Run the following command, MAKE SURE YOU FIX THE PATH FOR YOUR MACHINE. This needs to be an absolute path to work on Windows(the two beginning slashes bypass the mysys path conversion). You will probably just need to replace "Jiano" and "srl": `docker run -d -v //c/Users/Jiano/SRL/frontend:/var/www/html --network frontend --name php_frontend php:5.6-fpm`
0. Run the following command, and just like the previous, FIX THE PATH: `docker run -d -p 80:80 -v //c/Users/Jiano/srl/frontend/docker/nginx:/etc/nginx/conf.d --volumes-from php_frontend --network frontend --name nginx_frontend nginx`

Now in a browser just navigate to whatever alias you used in your /etc/hosts. For example, if I used "dev.speedrunslive.com" as the alias, the url would be: http://dev.speedrunslive.com

Almost everything should be working. By default the project points to the live site API. You can modify this in `/scripts/globals.js` if you want to use a local or dev API.

Ubuntu
------

0. Clone the repository
0. Install [Docker](https://docs.docker.com/engine/installation/linux/ubuntu/) and [Docker Compose](https://docs.docker.com/compose/install/)
0. Navigate to the project
0. Run `docker-compose up -d`
0. In your browser you can go to 0.0.0.0 or run `docker network inspect frontend_frontend` to see the IP of the network gateway