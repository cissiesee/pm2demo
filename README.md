## 建立docker image
    docker build -t <your username>/node-web-app .
## 运行docker image
    docker run -p 49160:8080 -d <your username>/node-web-app
## 查看docker containerid
    docker ps
## 打印container日志
    docker logs <containerid>
## 关闭容器
    docker kill <containerid>