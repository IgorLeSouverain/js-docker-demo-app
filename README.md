# How to setup
Installing node_modules
---

1. Assuming you have already installed npm, in the folder where package.json is located, do ```npm install```

Building the app image
---

1. In the folder with Dockerfile do ``` sudo docker build -t my-app:1.0 .```

2. Make sure there were no errors and you have both images(node and my-app), do ```sudo docker images```

Launching containers
---

1. In the folder with docker-compose.yaml do ```sudo docker-compose -f docker-compose.yaml up```

2. Wait for everything to download

3. Try to access both the app and the database - open a browser and type *localhost:8080* and *localhost:3000*

4. Try editing and saving any info at localhost:3000 and then check if MongoDB created new volume and saved edited info

Troubleshooting
---

1. If you don't see MongoDB create a new volume, try sudo docker-compose -f docker-compose.yaml restart

2. **This site can’t be reached** when connecting to localhost:3000, make sure you did ```npm install``` and have *node_modules* folder within *app* folder 


