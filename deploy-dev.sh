echo deploy project

# 拉取最新代码
git pull

# 停止运行的容器，并且会删除已停止的容器以及已创建的所有网络
docker-compose down

# 强制重新创建一次，所有的Dcokerfile文件重新创建
docker-compose up -d --force-recreate --build