# How to setup

Building the app image
---

1. In the folder with Dockerfile do ``` sudo docker build -t <any-tag> .```

2. Make sure there were no errors and you have both images(node and <any-tag>), do ```sudo docker images```

Launching containers
---

1. In the folder with docker-compose.yaml do ```sudo docker-compose -f docker-compose.yaml up```

2. Wait for everything to download

3. Try to access both the app and the database - open a browser and type *localhost:8081* and *localhost:3000*

